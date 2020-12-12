require('chromedriver');
const WebSocket = require('ws');
const ws = new WebSocket("ws://192.168.1.18:8081");
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const found = false;

login();

async function login() {
  await driver.get("https://www.bestbuy.com/identity/global/signin")
  await driver.findElement(By.xpath('//*[@id="fld-e"]')).sendKeys("kwerkee12@gmail.com");
  await driver.findElement(By.xpath('//*[@id="fld-p1"]')).sendKeys("qwe123asd123");
  await driver.findElement(By.className("cia-form__controls__submit")).click();
  //await driver.findElement(By.xpath("/html/body/div[1]/div/section/main/div[1]/div/div/div/div/form/div[3]/div/label/div/i")).click();
  //await driver.findElement(By.xpath("/html/body/div[1]/div/section/main/div[1]/div/div/div/div/form/div[4]/button")).click();
  //await driver.get('https://bestbuy.com');
  // TODO: create chrome dir and login, see rtx bot
  ws.on('message', async function incoming(data) {
    if (found) return;
    let message = JSON.parse(data);
    if (message.strategy !== 'bestbuy') return;
    console.info('received message: ' + data);
    await driver.get(message.url);
    await driver.findElement(By.className("add-to-cart-button")).click();
    await driver.get("https://www.bestbuy.com/checkout/c/r/fast-track");
    await driver.findElement(By.className("button__fast-track")).click();
    found = true;
  });
}
