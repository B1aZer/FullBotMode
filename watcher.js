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
  try {
    await driver.get(url)
    let btn = await driver.findElement(By.className("btn btn-primary btn-wide"))
    let text = await btn.getText();
    let title = await driver.getTitle();
    let priceEl = await driver.findElement(By.className('price-current'))
    let priceText = await priceEl.getText();
    let price = parseInt(priceText.replace(',','').replace('$',''));
    if (text.trim() === 'Add to cart') {
      console.info('available');
      if (checkPrice(title, price)) {
        ws.send(JSON.stringify({url: url, strategy: strategy}));
      } else {
        console.info('price does not match');
        console.info(title);
        console.info(price);
      }
    }
  } catch (e) {
  } finally {
    return setTimeout(watchNE, 3000);
  }
}

async function watchBB() {
  try {
    await driver.get(url)
    let btn = await driver.findElement(By.className("btn btn-disabled btn-lg btn-block add-to-cart-button"))
    let text = await btn.getText();
    let title = await driver.getTitle();
    let priceEl = await driver.findElement(By.className("priceView-hero-price"))
    let priceText = await priceEl.getText();
    let price = parseInt(priceText.replace(',','').replace('$',''));
    if (text === 'Coming Soon' || text === 'Sold Out') {
    } else {
      console.info('available');
      if (checkPrice(title, price)) {
        ws.send(JSON.stringify({url: url, strategy: strategy}));
      } else {
        console.info('price mismatch');
        console.info(title);
        console.info(price);
      }
    }
  } catch(e) {
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

function checkPrice(title, price) {
  if (title.includes(3080)) {
    if (price <= 800) {
      return true;
    }
  }
  else if (title.includes(3070)) {
    if (price <= 550) {
      return true;
    }
  }
  else if (title.includes(3060)) {
    if (price <= 450) {
      return true;
    }
  }
  else if (title.includes(5950)) {
    if (price <= 850) {
      return true;
    }
  }
  else if (title.includes(5900)) {
    if (price <= 600) {
      return true;
    }
  }
  else if (title.includes(5800)) {
    if (price <= 500) {
      return true;
    }
  }
  else if (title.includes(5600)) {
    if (price <= 400) {
      return true;
    }
  }
  else if (title.includes('PlayStation')) {
    if (price <= 600) {
      return true;
    }
  }
  return false;
}

