const puppeteer = require('puppeteer');


async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const uniqueIdentifier = Date.now();
  await page.goto('https://google.com');
  // await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: `./screenshots/google_${uniqueIdentifier}.png`});

  await browser.close();
}

getPic();
