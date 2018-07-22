const extractPriceAndTitle = require('./evaluateFunction');

describe('evaluateFunction basico tests', () => {
  test('extractPriceAndTitle should be truthy', () => {
    expect(extractPriceAndTitle).toBeTruthy();
  });

  /*
    Something is failing when you execute page.evaluate with the function.
    It seems to be something related with the ExecutionContext:
    Evaluation failed: ReferenceError: cov_xk8nrjpf1 is not defined
  */

  // test('execute extractPriceAndTitle should return an object with price and title', async () => {
  //   const targetURL = 'http://books.toscrape.com/';
  //   const elementToClick = `#default >
  //    div >
  //     div >
  //       div >
  //         div >
  //           section >
  //             div:nth-child(2) >
  //               ol > li:nth-child(1) >
  //                 article >
  //                   div.image_container >
  //                     a >
  //                       img`;

  //   await page.goto(targetURL);
  //   await page.waitFor(1000);
  //   await page.click(elementToClick);
  //   const result = await page.evaluate(extractPriceAndTitle);

  //   expect(result).toHaveProperty('price');
  //   expect(result).toHaveProperty('title');
  // }, 20000);
});
