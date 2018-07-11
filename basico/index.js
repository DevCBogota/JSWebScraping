const puppeteer = require('puppeteer');

const targetURL = 'http://books.toscrape.com/';

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(targetURL);
  await page.waitFor(1000);
  await page.click(
    "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img"
  )
  const result = await page.evaluate(() => {
    const title = document.querySelector('h1').innerText;
    const price = document.querySelector('.price_color').innerText;
    
    return {
      title,
      price
    }
  });

  browser.close();
  return result;
};

scrape().then((value) => {
  console.log(value);
});
