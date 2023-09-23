export = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 5,
  },
  rules: {
    'no-console': process.env.CI ? 'error' : 'warn',
  },
}
