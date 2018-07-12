const scrape = require('./scrape');

describe('Basico tests', () => {
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
  });

  test('Mock pass invalid URl should fail', async () => {
    const targetURL = 'asdasd';

    let error;
    try {
      await scrape(targetURL);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(new Error('Protocol error (Page.navigate): Cannot navigate to invalid URL undefined'));
  });

  test('Mock pass invalid elementToClick should fail', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#asdasdasd';

    let error;
    try {
      await scrape(targetURL, elementToClick);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(new Error(`No node found for selector: ${elementToClick}`));
  });

  test('Scrape a valid page, should execute evaluateFunction', async () => {
    const targetURL = 'http://books.toscrape.com/';

    const elementToClick = '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img';

    const result = await scrape(targetURL, elementToClick, '1 + 1');

    const expectedResult = 2;

    expect(result).toBe(expectedResult);
  });
});
