/// <reference path="../@types/eslint-plugin-jsx-a11y.d.ts" />
/// <reference path="../@types/eslint-plugin-react-hooks.d.ts" />
/// <reference path="../@types/eslint-plugin-react-refresh.d.ts" />
/// <reference path="../@types/eslint-plugin-react-compiler.d.ts" />

import { fixupPluginRules } from "@eslint/compat";
import { ESLint } from "eslint";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import legacyReactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import _globals from "globals";
import ts from "typescript-eslint";
import { base, type BaseOptions } from "./base.js";

const reactHooksPlugin = fixupPluginRules(legacyReactHooksPlugin);

export interface ReactOptions extends BaseOptions {
  vite?: boolean;
  jsxRuntime?: boolean;
}

export function react({
  vite,
  jsxRuntime = true,
  globals,
  ...options
}: ReactOptions = {}) {
  return ts.config(
    base({
      ...options,
      globals: {
        ..._globals.browser,
        ..._globals.serviceworker,
        ...globals,
      },
    }),
    // eslint-plugin-import
    {
      settings: importPlugin.flatConfigs.react.settings,
    },
    // eslint-plugin-jsx-a11y
    jsxA11yPlugin.flatConfigs.strict,
    // eslint-plugin-react
    {
      plugins: {
        react: reactPlugin as ESLint.Plugin,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...reactPlugin.configs.flat!.recommended.rules,
        ...(jsxRuntime ? reactPlugin.configs.flat!["jsx-runtime"].rules : {}),
      },
    },
    // eslint-plugin-react-hooks
    {
      plugins: {
        "react-hooks": reactHooksPlugin,
      },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
    // eslint-plugin-react-refresh
    {
      plugins: {
        "react-refresh": reactRefreshPlugin,
        "jsx-a11y": jsxA11yPlugin,
      },
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: vite },
        ],
      },
    },
    // eslint-plugin-react-compiler
    {
      plugins: {
        "react-compiler": reactCompilerPlugin,
      },
      rules: {
        "react-compiler/react-compiler": "error",
      },
    },
  );
}
