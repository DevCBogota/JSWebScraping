const puppeteer = require('puppeteer');

const scrape = async (targetURL, elementsSelector, evaluateFunction) => {
  // const browser = await puppeteer.launch({headless: false});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(targetURL);

  await page.exposeFunction('evaluateFunction', evaluateFunction);

  const result = await page.evaluate(evaluateFunction, elementsSelector);

  browser.close();
  return result;
};

module.exports = scrape;
