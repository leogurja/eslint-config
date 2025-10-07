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
import { config, base } from "@gurja/eslint-config";
import react from "@gurja/eslint-config/react";

export default config(
  base(),
  react(),
  // any other ESLint config you'd want to add as well
);
```

## Available Configs

### Base

All others configs inherit from this one.
It includes the ESLint recommended rules and TypeScript ESLint's recommended, strict, stylistic rules and their type checked counterparts.

### Node

Includes nodejs globals and:

- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n?tab=readme-ov-file#eslint-plugin-n)

### React

Includes browser and service worker globals, and:

- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)
- [eslint-plugin-react-compiler](https://react.dev/learn/react-compiler#getting-started)

### Next

Includes all of [React's](#react) plugins, and:

- [@next/eslint-plugin-next](https://nextjs.org/docs/app/api-reference/config/eslint)

### Jest

Includes jest globals, and:

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme)

## Advanced Setup

Here's a kitchen sink example:

```javascript
// eslint.configs.mjs
import { config, globals, base } from "@gurja/eslint-config";
import react from "@gurja/eslint-config/react";
import next from "@gurja/eslint-config/next";
import jest from "@gurja/eslint-config/jest";

// by default it uses the tsconfig.json at the same level as the eslint config file for type linting
export default config(
  base({ allowDefaultProject: ['*.config.js'] }), // allowDefaultProject can't include '**' patterns
  react({ files: ["packages/react-project/**/*.{ts,tsx}"] }),
  next({ files: ["packages/next-project/**/*.{ts,tsx,js,jsx}"] }), // next already includes react's rules
  jest({ disableTypeChecking: true, files: ["**/*.{test,spec}.{ts,tsx}"] }),
  {
    files: ["packages/jquery-app/**/*.js"],
    languageOptions: {
      globals: globals.jquery,
    },
  },
  {
    rules: {
      "react-compiler/react-compiler": "off", // customize your rules if you find it necessary
    }
  }
);
```
