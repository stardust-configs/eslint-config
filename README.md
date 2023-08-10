# @stardust-configs/eslint-config

> Shareable ESLint config

## Install

```sh
npm install eslint @stardust-configs/eslint-config -D
```

or

```sh
yarn add eslint @stardust-configs/eslint-config -D
```

## Usage

Add environments and configs to `.eslintrc.js`.

### Environments

- `@stardust-configs/eslint-config/environments/browser`
- `@stardust-configs/eslint-config/environments/node`
- `@stardust-configs/eslint-config/environments/es5`
- `@stardust-configs/eslint-config/environments/es6`
- `@stardust-configs/eslint-config/environments/es2016`
- `@stardust-configs/eslint-config/environments/es2017`
- `@stardust-configs/eslint-config/environments/es2018`
- `@stardust-configs/eslint-config/environments/es2019`
- `@stardust-configs/eslint-config/environments/es2020`
- `@stardust-configs/eslint-config/environments/es2021`
- `@stardust-configs/eslint-config/environments/es2022`

### Configs

- `@stardust-configs/eslint-config/configs/typescript`
- `@stardust-configs/eslint-config/configs/react`
- `@stardust-configs/eslint-config/configs/tailwindcss`
- `@stardust-configs/eslint-config/configs/next`
- `@stardust-configs/eslint-config/configs/prettier`

## Presets

<details>
<summary>TypeScript + React + Next.js</summary>

```js
module.exports = {
  extends: [
    '@stardust-configs/eslint-config/environments/browser',
    '@stardust-configs/eslint-config/environments/node',
    '@stardust-configs/eslint-config/environments/es2022',
    '@stardust-configs/eslint-config/configs/typescript',
    '@stardust-configs/eslint-config/configs/react',
    '@stardust-configs/eslint-config/configs/next',
    // Always write on the last line
    '@stardust-configs/eslint-config/configs/prettier',
  ],
}
```

</details>

## VSCode integration

Install [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add the following settings to your user settings or workspace settings.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "json", "jsonc"]
}
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
