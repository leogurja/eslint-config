import eslintPluginNext from "@next/eslint-plugin-next";
import type { ConfigArray } from "typescript-eslint";

export default [
  {
    name: "gurja/eslint-plugin-next",
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: eslintPluginNext.configs["core-web-vitals"].rules,
  },
] satisfies ConfigArray;
