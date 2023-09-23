export = {
  plugins: ['import'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      // force boolean variables to have a prefix
      {
        format: ['PascalCase'],
        prefix: ['is', 'has', 'can', 'should'],
        selector: ['variable'],
        types: ['boolean'],
      },
    ],
  },
}
