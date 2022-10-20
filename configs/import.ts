export default {
  plugins: ['import'],
  rules: {
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
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
