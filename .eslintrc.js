module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "react-native/react-native": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint-config-gev/react-native", // https://github.com/SrBrahma/eslint-config-gev
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ['./tsconfig.lint.json'],
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "ignorePatterns": [".eslintrc.js"],
  "rules": {
    /** svgr won't add return type automatically */
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};

