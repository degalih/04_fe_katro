module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
    jasmine: true,
    'codeceptjs/codeceptjs': true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:codeceptjs/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'off',
  },
  plugins: ['prettier', 'jasmine', 'codeceptjs'],
};
