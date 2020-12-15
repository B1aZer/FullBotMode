const axios = require('axios');
const WebSocket = require('ws');
const ws = new WebSocket("ws://192.168.1.18:8081");
const config = require('./config1.js');
const utils = require('./utils.js');
const found = new Map();
const moment = require('moment');
const failedAttempt = 0;

const args = process.argv.slice(2);
let service = 'axios';
let tor;
if (args.length) {
  // tor
  service = args[0];
  tor = require('tor-request');
  tor.TorControlPort.password = config.TOR_PASSWORD;
}

run();

function run() {
  for (let item of config.items) {
    constructReq(item);
  }
}

async function constructReq(item) {
  try {
    let itemJSON = await req(item.id);
    if (!itemJSON) {console.error(itemJSON); return; }
    failedAttempt = 0;
    if (itemJSON.Instock) {
      if (itemJSON.UnitCost <= item.price) {
          console.info('hooray');
	  console.log(moment().format());
        if (!found.get(item.url)) {
          ws.send(JSON.stringify({url: item.url, strategy: 'newegg'}));
          found.set(item.url, true);
        }
      } else {
        console.warn('price does not match for');
        console.info(item.url);
	console.log(moment().format());
      }
    } else {
      found.set(item.url, false);
    }
  } catch (e) {
    if (e.response) {
      if (e.response.status == 503) {
        console.error('Newegg 503 (service unavailable) Error. Interval possibly too low. Consider increasing interval rate.')
      } else if (e.response.status == 403) {
        console.warn(moment().format() + ': ' + e.response.status);
	failedAttempt += 1;
	if (failedAttempt > 5) {
		// change ip
	}
      } else {
        console.warn(moment().format() + ': ' + e.response.status);
      }
    } else if (e.errno) {
      console.warn(moment().format() + ': ' + e.errno);
    } else {
      console.error(e);
    }
  } finally {
    setTimeout(constructReq.bind(null, item), config.interval);
  }
}


async function req(id) {
  let response;
  if (service === 'tor') {
    response = tor.request({ url: 'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' + id + '&RecommendItem=&BestSellerItemList=&IsVATPrice=true', headers: {
        'User-Agent': config.userAgents[Math.floor(Math.random() * config.userAgents.length)],
    }}, function ( err, response, body ) {
      console.info(body);
    });
  } else {
    response = await axios.get('https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' + id + '&RecommendItem=&BestSellerItemList=&IsVATPrice=true', {
      headers: {
        'User-Agent': config.userAgents[Math.floor(Math.random() * config.userAgents.length)],
      },
    });
  }
  return response.data.MainItem;
}
