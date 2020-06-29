module.exports = {
  "env": {
      "node": true,
      "es6": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
  }
};
