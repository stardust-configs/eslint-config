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

Edit `.eslintrc.js`.

<details>

<summary>Next.js</summary>

```js
module.exports = {
  extends: ['@stardust-configs/eslint-config/presets/next', '@stardust-configs/eslint-config/configs/prettier'],
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
