const axios = require('axios');
const config = require('./config.js');

run();

//(async () => {
//})();

async function run() {
  for (let item of config.items) {
    console.info(item);
  }
}

async function req(url, id) {
  try {
    const response = await axios.get('https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' + id + '&RecommendItem=&BestSellerItemList=&IsVATPrice=true');
    console.log(response.data.MainItem.Instock);
  } catch (error) {
    console.log(error.response.body);
  } finally {
    setTimeout(req(url, id), config.interval);
  }
}
