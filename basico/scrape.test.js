const scrape = require('./scrape');

describe('Scrape basico tests', () => {
  test('Scrape should be truthy', () => {
    expect(scrape).toBeTruthy();
  });

  test('Mock evaluateFunction should return correct properties', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img';

    const evaluateFunction = () => ({
      title: 'Mocked function',
      price: 0,
    });

    const expectedResult = {
      title: 'Mocked function',
      price: 0,
    };

    const result = await scrape(targetURL, elementToClick, evaluateFunction);

    expect(result).toEqual(expectedResult);
  }, 20000);

  test('Pass invalid URL in scrap should fail', async () => {
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

  test('Pass invalid elementToClick in scrap should fail', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#asdasdasd';

    let error;
    try {
      await scrape(targetURL, elementToClick);
    } catch (e) {
      error = e;
    }

    const expectedError = new Error(`No node found for selector: ${elementToClick}`);
    expect(error).toEqual(expectedError);
  }, 20000);

  test('Scrape a valid page should execute a function', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img';

    const result = await scrape(targetURL, elementToClick, '1 + 1');

    const expectedResult = 2;

    expect(result).toBe(expectedResult);
  }, 20000);
});
