//TODO
require('dotenv').config()

module.exports = {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    TOR_PASSWORD: process.env.TOR_PASSWORD,
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
        url: "https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453?Item=N82E16814126453&Description=rtx%203080&cm_re=rtx_3080-_-14-126-453-_-Product&quicklink=true",
        id: "14-126-453",
        price: "729",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-10gd/p/N82E16814932367?Item=N82E16814932367&Description=rtx%203080&cm_re=rtx_3080-_-14-932-367-_-Product&quicklink=true",
        id: "14-932-367",
        price: "729",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600?Item=N82E16814137600&Description=rtx%203080&cm_re=rtx_3080-_-14-137-600-_-Product&quicklink=true",
        id: "14-137-600",
        price: "729",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522?Item=N82E16814487522&Description=rtx%203080&cm_re=rtx_3080-_-14-487-522-_-Product&quicklink=true",
        id: "14-487-522",
        price: "759",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502?Item=N82E16814500502&Description=rtx%203080&cm_re=rtx_3080-_-14-500-502-_-Product",
        id: "14-500-502",
        price: "759",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330?Item=N82E16814932330&Description=rtx%203080&cm_re=rtx_3080-_-14-932-330-_-Product",
        id: "14-932-330",
        price: "759",
      },
      {
        url: "https://www.newegg.com/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504?Item=N82E16814500504&Description=rtx%203080&cm_re=rtx_3080-_-14-500-504-_-Product",
        id: "14-500-504",
        price: "770",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521?Item=N82E16814487521&Description=rtx%203080&cm_re=rtx_3080-_-14-487-521-_-Product",
        id: "14-487-521",
        price: "770",
      },
      {
        url: "https://www.newegg.com/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809?Item=N82E16814133809&Description=rtx%203080&cm_re=rtx_3080-_-14-133-809-_-Product",
        id: "14-133-809",
        price: "770",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452?Item=N82E16814126452&Description=rtx%203080&cm_re=rtx_3080-_-14-126-452-_-Product",
        id: "14-126-452",
        price: "780",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598?Item=N82E16814137598&Description=rtx%203080&cm_re=rtx_3080-_-14-137-598-_-Product",
        id: "14-137-598",
        price: "780",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329?Item=N82E16814932329&Description=rtx%203080&cm_re=rtx_3080-_-14-932-329-_-Product",
        id: "14-932-329",
        price: "780",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520?Item=N82E16814487520&Description=rtx%203080&cm_re=rtx_3080-_-14-487-520-_-Product",
        id: "14-487-520",
        price: "800",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519?Item=N82E16814487519&Description=rtx%203080&cm_re=rtx_3080-_-14-487-519-_-Product",
        id: "14-487-519",
        price: "800",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597?Item=N82E16814137597&Description=rtx%203080&cm_re=rtx_3080-_-14-137-597-_-Product",
        id: "14-137-597",
        price: "820",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337?Item=N82E16814932337&Description=rtx%203080&cm_re=rtx_3080-_-14-932-337-_-Product",
        id: "14-932-337",
        price: "820",
      },
      {
        url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518?Item=N82E16814487518&Description=rtx%203080&cm_re=rtx_3080-_-14-487-518-_-Product",
        id: "14-487-518",
        price: "840",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-x-10gd/p/N82E16814932345?Item=N82E16814932345&Description=rtx%203080&cm_re=rtx_3080-_-14-932-345-_-Product",
        id: "14-932-345",
        price: "920",
      },
      {
        url: "https://www.newegg.com/msi-geforce-rtx-3080-rtx3080-suprim-x-10g/p/N82E16814137609?Item=N82E16814137609&Description=rtx%203080&cm_re=rtx_3080-_-14-137-609-_-Product",
        id: "14-137-609",
        price: "920",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorusx-wb-10gd/p/N82E16814932371?Item=N82E16814932371&Description=rtx%203080&cm_re=rtx_3080-_-14-932-371-_-Product",
        id: "14-932-371",
        price: "1000",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorusx-w-10gd/p/N82E16814932372?Item=N82E16814932372&Description=rtx%203080&cm_re=rtx_3080-_-14-932-372-_-Product",
        id: "14-932-372",
        price: "1000",
      },
      {
        url: "https://www.newegg.com/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457?Item=N82E16814126457&Description=rtx%203080&cm_re=rtx_3080-_-14-126-457-_-Product&quicklink=true",
        id: "14-126-457",
        price: "880",
      },
      {
        url: "https://www.newegg.com/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336?Item=N82E16814932336&Description=rtx%203080&cm_re=rtx_3080-_-14-932-336-_-Product&quicklink=true",
        id: "14-932-336",
        price: "880",
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
