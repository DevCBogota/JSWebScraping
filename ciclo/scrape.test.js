const scrape = require('./scrape');

describe('Scrape ciclo tests', () => {
  test('Scrape should be truthy', () => {
    expect(scrape).toBeTruthy();
  });

  test('Mock evaluateFunction should return correct properties', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img';

    const evaluateFunction = () => ([
      {
        title: 'A Light in the ...',
        price: '£51.77',
      }, {
        title: 'Tipping the Velvet',
        price: '£53.74',
      },
    ]);

    const expectedResult = [
      {
        title: 'A Light in the ...',
        price: '£51.77',
      }, {
        title: 'Tipping the Velvet',
        price: '£53.74',
      },
    ];

    const result = await scrape(targetURL, elementToClick, evaluateFunction);

    expect(result).toEqual(expectedResult);
  }, 20000);

  test('Pass invalid URL in scrape should fail', async () => {
    const targetURL = 'asdasd';

    let error;
    try {
      await scrape(targetURL);
    } catch (e) {
      error = e;
    }

    const expectedError = new Error('Protocol error (Page.navigate): Cannot navigate to invalid URL');
    expect(error).toEqual(expectedError);
  }, 20000);

  test('Pass invalid elementsSelector in scrape should fail', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementsSelector = '.asdasdasd';

    let error;
    try {
      await scrape(targetURL, elementsSelector);
    } catch (e) {
      error = e;
    }

    const expectedError = new Error('The following is not a function: undefined');
    expect(error).toEqual(expectedError);
  }, 20000);

  test('Scrape a valid page should execute a function', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementsSelector = '.product_pod';

    const result = await scrape(targetURL, elementsSelector, '1 + 1');

    const expectedResult = 2;

    expect(result).toBe(expectedResult);
  }, 20000);
});
