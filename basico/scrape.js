const puppeteer = require('puppeteer');

const scrape = async (targetURL, elementToClick, evaluateFunction) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(targetURL);
  await page.waitFor(1000);
  await page.click(elementToClick);
  const result = await page.evaluate(evaluateFunction);

  browser.close();
  return result;
};

module.exports = scrape;
