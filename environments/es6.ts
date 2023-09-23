export = {
  env: {
    es6: true,
  },
  extends: ['./es5'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
  },
}
