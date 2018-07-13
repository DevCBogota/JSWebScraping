const getPic = require('./getPic');
const path = require('path');

const targetURL = 'https://google.com';

const uniqueIdentifier = Date.now();
const screenshotsPath = path.join(__dirname, `/_screenshots/google_${uniqueIdentifier}.png`);

getPic(targetURL, screenshotsPath);
