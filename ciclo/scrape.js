const puppeteer = require('puppeteer');

const scrape = async (targetURL, elementsSelector, evaluateFunction) => {
  // const browser = await puppeteer.launch({headless: false});
  const browser = await puppeteer.launch({ args: ['–no-sandbox', '–disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(targetURL);
  const result = await page.evaluate(evaluateFunction, elementsSelector);

  browser.close();
  return result;
};

module.exports = scrape;
