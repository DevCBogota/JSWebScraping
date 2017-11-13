const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');
  await page.waitFor(1000);
  const result = await page.evaluate(() => {
    await page.click(
      "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img"
    )
    let title = document.querySelector('h1').innerText;
    let price = document.querySelector('.price_color').innerText;
    return {
      title,
      price
    }
  });

  browser.close();
  return result;
};

scrape().then((value) => {
  console.log(value); // Success!
});
