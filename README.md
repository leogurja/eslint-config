# @gurja/eslint-config

Configuring ESLint is always annoying and can even be a nightmare sometimes.
This package includes a few opinionated configs

## Setup

You can install it with npm, Yarn or pnpm

```sh
# npm
npm i -D @gurja/eslint-config eslint

# Yarn
yarn add -D @gurja/eslint-config eslint

# pnpm
pnpm add -D @gurja/eslint-config eslint
```

Inside `eslint.config.js` (or `eslint.config.mjs` if you don't have `"type": "module"` on your `package.json`):

```javascript
import { react } from "@gurja/eslint-config";

export default react({
  vite: true
  // any other ESLint config you'd want to add as well
}),
```

## Available Configs

### Base

All others configs inherit from this one.
It includes the ESLint recommended rules and TypeScript ESLint's recommended, strict, stylistic rules and their type checked counterparts.

### Node

Just like Base, but also includes the Node globals

### React

Includes [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme), [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) and [eslint-plugin-react-compiler](https://react.dev/learn/react-compiler#getting-started)

### Next

Includes all of [React's](#react) plugins, and [@next/eslint-plugin-next](https://nextjs.org/docs/app/api-reference/config/eslint)

### Jest

Includes all of Base, and [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme)

## Advanced Setup

Here's a kitchen sink example:

```javascript
// eslint.configs.mjs
import { base, next, globals } from "@gurja/eslint-config";

export default [
  // by default it uses the tsconfig.json at the same level as the eslint config file
  ...base({
    typeLinting: false, // typeLinting only works for files included by a tsconfig.json
    files: ["packages/jquery-app/**/*.js"],
    languageOptions: {
      globals: globals.jest,
    },
  }),
  ...next({
    files: ["packages/next-project/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "react-compiler/react-compiler": "off", // customize your rules if you find it necessary
    },
  }),
];
```
