const puppeteer = require('puppeteer');
const path = require('path');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const uniqueIdentifier = Date.now();
  
  await page.goto('https://google.com');
  await page.screenshot({path: path.join(__dirname, `/_screenshots/google_${uniqueIdentifier}.png`)});

  await browser.close();
}

getPic();
