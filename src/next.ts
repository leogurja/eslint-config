/// <reference path="../@types/next__eslint-plugin-next.d.ts" />

import { fixupPluginRules } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import ts from "typescript-eslint";
import { react } from "./react.js";

export const next = ts.config(react, {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.serviceworker,
    },
  },
  plugins: {
    next: fixupPluginRules(nextPlugin),
  },
  rules: nextPlugin.configs["core-web-vitals"].rules,
});
