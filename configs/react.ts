export = {
  extends: ['plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/hook-use-state': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/prefer-stateless-function': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
}
