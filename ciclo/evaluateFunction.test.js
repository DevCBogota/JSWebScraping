const extractMultiplePricesAndTitles = require('./evaluateFunction');

describe('evaluateFunction ciclo tests', () => {
  test('extractMultiplePricesAndTitles should be truthy', () => {
    expect(extractMultiplePricesAndTitles).toBeTruthy();
  });

  /*
    Something is failing when you execute page.evaluate with the function.
    It seems to be something related with the ExecutionContext:
    Evaluation failed: ReferenceError: cov_xk8nrjpf1 is not defined
  */

  // test('execute evaluateFunction should return objects with price and title', async () => {
  //   const targetURL = 'http://books.toscrape.com/';

  //   const elementsSelector = '.product_pod';

  //   await page.goto(targetURL);
  //   const result = await page.evaluate(extractMultiplePricesAndTitles, elementsSelector);

  //   expect(result.length).toBeGreaterThan(0);
  //   expect(result[0]).toHaveProperty('price');
  //   expect(result[0]).toHaveProperty('title');
  // }, 20000);
});
