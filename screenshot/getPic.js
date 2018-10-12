const puppeteer = require('puppeteer');

const getPic = async (targetURL, filePath) => {
  const browser = await puppeteer.launch({ args: ['–no-sandbox', '–disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(targetURL);
  await page.waitFor(1000);
  await page.screenshot({ path: filePath });

  await browser.close();
  return true;
};

module.exports = getPic;
