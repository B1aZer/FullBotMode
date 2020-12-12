const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('https://www.newegg.com/product/api/ProductRealtime?ItemNumber=14-137-609&RecommendItem=&BestSellerItemList=&IsVATPrice=true')
    console.log(response.data.MainItem.Instock);
  } catch (error) {
    console.log(error.response.body);
  }
})();
