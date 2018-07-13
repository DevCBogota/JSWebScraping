const path = require('path');
const fs = require('fs');

const getPic = require('./getPic');

describe('Screenshots tests', () => {
  test('getPic should be truthy', () => {
    expect(getPic).toBeTruthy();
  });

  test('Pass invalid URL in getPic should fail', async () => {
    const targetURL = 'asdasd';

    let error;
    try {
      await getPic(targetURL);
    } catch (e) {
      error = e;
    }

    const expectedError = new Error('Protocol error (Page.navigate): Cannot navigate to invalid URL');
    expect(error).toEqual(expectedError);
  }, 20000);

  test('Pass a folder that doesnt exist in getPic should fail', async () => {
    const uniqueIdentifier = Date.now();
    const screenshotsPath = path.join(__dirname, `/__screenshots/google_${uniqueIdentifier}.png`);

    if (fs.existsSync(screenshotsPath)) {
      fs.rmdirSync(screenshotsPath);
    }

    const targetURL = 'https://google.com';

    let error;
    try {
      await getPic(targetURL, screenshotsPath);
    } catch (e) {
      error = e;
    }

    const expectedError = new Error(`ENOENT: no such file or directory, open '${screenshotsPath}'`);
    expect(error.toString()).toEqual(expectedError.toString());
  }, 20000);

  test('getPic from valid page with valid path should return true', async () => {
    const uniqueIdentifier = Date.now();
    const screenshotsPath = path.join(__dirname, `/_screenshots/google_${uniqueIdentifier}.png`);

    const targetURL = 'https://google.com';

    const result = await getPic(targetURL, screenshotsPath);

    const expectedResult = true;
    expect(result).toBe(expectedResult);
    fs.unlinkSync(screenshotsPath);
  }, 20000);

  test('getPic from valid page with valid path should save an element with size greater than 0', async () => {
    const uniqueIdentifier = Date.now();
    const screenshotsPath = path.join(__dirname, `/_screenshots/google_${uniqueIdentifier}.png`);

    const targetURL = 'https://google.com';

    await getPic(targetURL, screenshotsPath);

    const stats = fs.statSync(screenshotsPath);
    expect(stats.size).toBeGreaterThan(0);
    fs.unlinkSync(screenshotsPath);
  }, 20000);
});
