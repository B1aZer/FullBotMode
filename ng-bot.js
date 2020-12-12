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
  await driver.get("https://www.newegg.com/")
  await driver.findElement(By.xpath('//*[@id="app"]/header/div[1]/div[4]/div[1]/div[1]/a')).click()
  await driver.findElement(By.xpath('//*[@id="labeled-input-signEmail"]')).sendKeys("blaze.imba@gmail.com");
  //await driver.findElement(By.xpath('//*[@id="fld-p1"]')).sendKeys("qwe123asd123");
  await driver.findElement(By.xpath('//*[@id="signInSubmit"]')).click();
  await driver.wait(until.elementLocated(By.xpath('//*[@id="labeled-input-password"]')), 5 * 1000).then(el => {
    driver.findElement(By.xpath('//*[@id="labeled-input-password"]')).sendKeys("qwe123ASD!@#");
    driver.findElement(By.xpath('//*[@id="signInSubmit"]')).click();
  });
  ws.on('message', async function incoming(data) {
    if (found) return;
    let message = JSON.parse(data);
    if (message.strategy !== 'newegg') return;
    console.info('received message: ' + data);
    await driver.get(message.url);
    await driver.findElement(By.xpath('//*[@id="ProductBuy"]/div/div[2]/button')).click();
    await driver.get("https://secure.newegg.com/shop/cart");
    await driver.findElement(By.xpath('//*[@id="app"]/div[1]/section[1]/div/div/form/div[2]/div[3]/div/div/div[3]/div/button')).click();
    found = true;
  });
}
