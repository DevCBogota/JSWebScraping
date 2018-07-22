const scrape = require('./scrape');
const extractPriceAndTitle = require('./evaluateFunction');

const targetURL = 'http://books.toscrape.com/';

const elementToClick = '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img';

scrape(targetURL, elementToClick, extractPriceAndTitle).then((value) => {
  console.log(value);
});
