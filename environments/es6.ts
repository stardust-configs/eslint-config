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
    /**
     * import/order does not sort members, use sort-imports to sort members
     *
     * @see https://github.com/import-js/eslint-plugin-import/issues/1670#issuecomment-1018833148
     */
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    'import/first': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/newline-after-import': ['error'],
  },
}
