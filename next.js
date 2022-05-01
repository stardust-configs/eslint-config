/**
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['./.next/**/*'],
}
