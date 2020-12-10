const args = process.argv.slice(2);
if (args.length === 0) throw new Error("No URL provided.");
const url = args[0]
const strategy = getDomainName(url);

require('chromedriver');
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const WebSocket = require('ws');
const ws = new WebSocket("ws://192.168.1.18:8081");
const found = {};

if (strategy === 'bestbuy') {
  watchBB();
} else if (strategy === 'newegg') {
  watchNE();
}

async function watchNE() {
  await driver.get(url)
  try {
    let btn = await driver.findElement(By.className("btn btn-primary btn-wide"))
    let text = await btn.getText();
    if (text.trim() === 'Add to cart') {
      ws.send(JSON.stringify({url: url, strategy: strategy}));
    }
  } catch (e) {
    console.info(e);
  } finally {
    return setTimeout(watchNE, 3000);
  }
}

async function watchBB() {
  await driver.get(url)
  try {
    let btn = await driver.findElement(By.className("btn btn-disabled btn-lg btn-block add-to-cart-button"))
    let text = await btn.getText();
    if (text === 'Coming Soon' || text === 'Sold Out') {
    } else {
      ws.send(JSON.stringify({url: url, strategy: strategy}));
    }
  } catch(e) {
    console.info(e);
  } finally {
    return setTimeout(watchBB, 3000);
  }
}

function getDomainName(url) {
    let hostName = new URL(url).hostname;
    if (hostName === 'localhost') return hostName;
    let host = hostName.split('.');
    return host[1];
}

