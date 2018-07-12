module.exports = {
    "extends": ["eslint-config-infield", "plugin:jest/recommended"],
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
    },
    "parserOptions": {
      "ecmaVersion": 8,
      "sourceType": 'module',
    },
    "rules": {
      "no-console": "off",
    }
};
