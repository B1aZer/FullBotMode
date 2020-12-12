const axios = require('axios');
const config = require('./config.js');
const Discord = require("discord.js");

const DISCORD_BOT_TOKEN = config.DISCORD_BOT_TOKEN;
const bot = new Discord.Client();

bot.login(DISCORD_BOT_TOKEN);
run();

function run() {
  for (let item of config.items) {
    constructReq(item);
  }
}

function constructReq(item) {
  try {
    let inStock = req(item.id);
    if (inStock) {
      bot.channels.cache.get("765951948162859022").send(item.url);
    }
  } catch (e) {
    console.warn(e);
  } finally {
    setTimeout(constructReq.bind(null, item), config.interval);
  }
}


async function req(id) {
  const response = await axios.get('https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' + id + '&RecommendItem=&BestSellerItemList=&IsVATPrice=true');
  return response.data.MainItem.Instock;
}
