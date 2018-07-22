const scrape = require('./scrape');
const extractMultiplePricesAndTitles = require('./evaluateFunction');

const targetURL = 'http://books.toscrape.com/';

const elementsSelector = '.product_pod';

scrape(targetURL, elementsSelector, extractMultiplePricesAndTitles).then((value) => {
  console.log(value);
});
