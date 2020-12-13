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
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460?Item=N82E16814126460&Description=rtx%203070&cm_re=rtx_3070-_-14-126-460-_-Product",
        id: "14-126-460",
        price: "520",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-ventus-2x/p/N82E16814137605?Item=N82E16814137605&Description=rtx%203070&cm_re=rtx_3070-_-14-137-605-_-Product",
        id: "14-137-605",
        price: "520",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459?Item=N82E16814126459&Description=rtx%203070&cm_re=rtx_3070-_-14-126-459-_-Product",
        id: "14-126-459",
        price: "550",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501?Item=N82E16814500501&Description=rtx%203070&cm_re=rtx_3070-_-14-500-501-_-Product",
        id: "14-500-501",
        price: "550",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528?Item=N82E16814487528&Description=rtx%203070&cm_re=rtx_3070-_-14-487-528-_-Product",
        id: "14-487-528",
        price: "550",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343?Item=N82E16814932343&Description=rtx%203070&cm_re=rtx_3070-_-14-932-343-_-Product",
        id: "14-932-343",
        price: "550",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529?Item=N82E16814487529&Description=rtx%203070&cm_re=rtx_3070-_-14-487-529-_-Product",
        id: "14-487-529",
        price: "550",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602?Item=N82E16814137602&Description=rtx%203070&cm_re=rtx_3070-_-14-137-602-_-Product",
        id: "14-137-602",
        price: "580",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461?Item=N82E16814126461&Description=rtx%203070&cm_re=rtx_3070-_-14-126-461-_-Product",
        id: "14-126-461",
        price: "580",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505?Item=N82E16814500505&Description=rtx%203070&cm_re=rtx_3070-_-14-500-505-_-Product",
        id: "14-500-505",
        price: "580",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530?Item=N82E16814487530&Description=rtx%203070&cm_re=rtx_3070-_-14-487-530-_-Product",
        id: "14-487-530",
        price: "580",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342?Item=N82E16814932342&Description=rtx%203070&cm_re=rtx_3070-_-14-932-342-_-Product",
        id: "14-932-342",
        price: "580",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3070-ko-rtx3070-o8g-gamin/p/N82E16814126466?Item=N82E16814126466&Description=rtx%203070&cm_re=rtx_3070-_-14-126-466-_-Product",
        id: "14-126-466",
        price: "580",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601?Item=N82E16814137601&Description=rtx%203070&cm_re=rtx_3070-_-14-137-601-_-Product",
        id: "14-137-601",
        price: "600",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360?Item=N82E16814932360&Description=rtx%203070&cm_re=rtx_3070-_-14-932-360-_-Product",
        id: "14-932-360",
        price: "600",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531?Item=N82E16814487531&Description=rtx%203070&cm_re=rtx_3070-_-14-487-531-_-Product",
        id: "14-487-531",
        price: "600",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603?Item=N82E16814137603&Description=rtx%203070&cm_re=rtx_3070-_-14-137-603-_-Product",
        id: "14-137-603",
        price: "620",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359?Item=N82E16814932359&Description=rtx%203070&cm_re=rtx_3070-_-14-932-359-_-Product",
        id: "14-932-359",
        price: "620",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344?Item=N82E16814932344&Description=rtx%203070&cm_re=rtx_3070-_-14-932-344-_-Product",
        id: "14-932-344",
        price: "620",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532?Item=N82E16814487532&Description=rtx%203070&cm_re=rtx_3070-_-14-487-532-_-Product",
        id: "14-487-532",
        price: "640",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458?Item=N82E16814126458&Description=rtx%203070&cm_re=rtx_3070-_-14-126-458-_-Product",
        id: "14-126-458",
        price: "650",
      },
      {
        url: "https://www.newegg.com/amd-ryzen-7-5800x/p/N82E16819113665?Item=N82E16819113665&Description=ryzen%205000&cm_re=ryzen_5000-_-19-113-665-_-Product",
        id: "19-113-665",
        price: "450",
      },
      {
        url: "https://www.newegg.com/amd-ryzen-9-5900x/p/N82E16819113664?Item=N82E16819113664&Description=ryzen%205000&cm_re=ryzen_5000-_-19-113-664-_-Product",
        id: "19-113-664",
        price: "550",
      },
      {
        url: "https://www.newegg.com/amd-ryzen-9-5950x/p/N82E16819113663?Item=N82E16819113663&Description=ryzen%205000&cm_re=ryzen_5000-_-19-113-663-_-Product",
        id: "19-113-663",
        price: "800",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
      {
        url: "",
        id: "",
        price: "",
      },
    ],
    interval: 1000,
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
