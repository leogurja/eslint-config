/// <reference path="../@types/eslint-plugin-jsx-a11y.d.ts" />
/// <reference path="../@types/eslint-plugin-react-hooks.d.ts" />
/// <reference path="../@types/eslint-plugin-react-compiler.d.ts" />

import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import ts from "typescript-eslint";
import { base } from "./base.js";

export const react = ts.config(...base, jsxA11yPlugin.flatConfigs.recommended, {
  ...reactPlugin.configs.flat?.recommended,
  ...reactPlugin.configs.flat?.["jsx-runtime"],
  plugins: {
    "react-compiler": reactCompilerPlugin,
    "react-hooks": reactHooksPlugin,
  },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
    "react-compiler/react-compiler": "warn",
  },
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
});
