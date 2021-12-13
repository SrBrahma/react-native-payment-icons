module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
    "eslint-config-gev", // https://github.com/SrBrahma/eslint-config-gev
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ['./tsconfig.lint.json'],
  },
  "ignorePatterns": [".eslintrc.js"],
  "rules": {
    /** svgr won't add return type automatically */
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};

