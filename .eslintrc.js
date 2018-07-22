module.exports = {
    "extends": ["eslint-config-infield"],
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true,
    },
    "parserOptions": {
      "ecmaVersion": 8,
      "sourceType": 'module',
    },
    "rules": {
      "no-console": "off",
    },
    "plugins": ["jest"],
    "globals": {
      "page": true,
      "browser": true,
      "jestPuppeteer": true,
    },
};
