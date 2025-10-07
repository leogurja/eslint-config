import eslintPluginNext from "@next/eslint-plugin-next";
import type { Config } from "../types/config.js";

export const nextPlugin: Config[] = [
  {
    name: "gurja/eslint-plugin-next",
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: eslintPluginNext.configs["core-web-vitals"].rules,
  },
];
