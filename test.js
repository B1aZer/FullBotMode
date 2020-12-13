const axios = require('axios');
//const WebSocket = require('ws');
//const ws = new WebSocket("ws://192.168.1.18:8081");
const config = require('./config.js');
const utils = require('./utils.js');
const found = new Map();

run();

function run() {
  for (let item of config.items) {
    constructReq(item);
  }
}

function constructReq(item) {
  try {
    let itemJSON = req(item.id);
    if (itemJSON.Instock) {
      if (itemJSON.UnitCost <= item.price) {
          console.info('hooray');
        if (!found.get(item.url)) {
          //ws.send(JSON.stringify({url: item.url, strategy: 'newegg'}));
          found.set(item.url, true);
        }
      } else {
        console.warn('price does not match for');
        console.info(item.url);
      }
    } else {
      console.info('not in stock');
      found.set(item.url, false);
    }
  } catch (e) {
    if (error.response.status == 503) {
      console.error('Newegg 503 (service unavailable) Error. Interval possibly too low. Consider increasing interval rate.')
    } else {
      console.warn(e);
    }
  } finally {
    setTimeout(constructReq.bind(null, item), Math.random() * config.interval + config.interval);
  }
}


async function req(id) {
  const response = await axios.get('https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' + id + '&RecommendItem=&BestSellerItemList=&IsVATPrice=true', {
    headers: {
      'User-Agent': config.userAgents[Math.floor(Math.random() * config.userAgents.length)],
    },
  });
  return response.data.MainItem;
}
