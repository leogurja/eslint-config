import eslintPluginNext from "@next/eslint-plugin-next";
import type { Linter } from "eslint";

export const nextPlugin: Linter.Config[] = [
  {
    name: "gurja/eslint-plugin-next",
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: eslintPluginNext.configs["core-web-vitals"].rules,
  },
];
