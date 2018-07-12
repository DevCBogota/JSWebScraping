const scrape = require('./scrape');
const extractMultiplePricesAndTitles = require('./evaluateFunction');

const targetURL = 'http://books.toscrape.com/';

scrape(targetURL, '.product_pod', extractMultiplePricesAndTitles).then((value) => {
  console.log(value);
});
