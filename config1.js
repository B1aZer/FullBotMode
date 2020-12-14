//TODO
require('dotenv').config()

module.exports = {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    items: [
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-oc/p/N82E16814137612?Item=N82E16814137612&Description=rtx%203060%20ti&cm_re=rtx_3060%20ti-_-14-137-612-_-Product",
        id: "14-137-612",
        price: "450",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535?Item=N82E16814487535&Description=r",
        id: "14-487-535",
        price: "450",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610e-10m/p/N82E16814500506?Item=N82E16814500506&Description",
        id: "14-500-506",
        price: "420",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-8gd/p/N82E16814932379?Item=N82E16814932379&Descri",
        id: "14-932-379",
        price: "420",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932378?Item=N82E16814932378&Des",
        id: "14-932-378",
        price: "420",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-8g/p/N82E16814126480?Item=N82E16814126480&Descriptio",
        id: "14-126-480",
        price: "450",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-gaming/p/N82E16814126474?Item=N82E16814126474&Description=3060%20ti&cm_re=3060_ti-_-14-126-474-_-Product",
        id: "14-126-474",
        price: "480",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3060-ti-zt-a30610h-10m/p/N82E16814500507?Item=N82E16814500507&Description=3060%20ti&cm_re=3060_ti-_-14-500-507-_-Product",
        id: "14-500-507",
        price: "480",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3060-ti-dual-rtx3060ti-o8g/p/N82E16814126468?Item=N82E16814126468&Description=3060%20ti&cm_re=3060_ti-_-14-126-468-_-Product",
        id: "14-126-468",
        price: "480",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-gaming/p/N82E16814126470?Item=N82E16814126470&Description=3060%20ti&cm_re=3060_ti-_-14-126-470-_-Product",
        id: "14-126-470",
        price: "520",
      },
    ],
    interval: Math.random() * 1000 + Math.random() * 1000 + 1000,
    userAgents: [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
      'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
      'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
      'Mozilla/5.0 (CrKey armv7l 1.5.16041) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.0 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; AFTS Build/LMY47O) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/41.99900.2250.0242 Safari/537.36',
      'Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.12 NintendoBrowser/4.3.1.11264.US',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; XBOX_ONE_ED) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
      'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586',
      'Mozilla/5.0 (PlayStation 4 3.11) AppleWebKit/537.73 (KHTML, like Gecko)',
    ]
}
