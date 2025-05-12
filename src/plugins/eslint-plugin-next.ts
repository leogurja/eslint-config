import eslintPluginNext from "@next/eslint-plugin-next";
import { ConfigArray } from "typescript-eslint";

export const nextPlugin: ConfigArray = [
  {
    name: "gurja/eslint-plugin-next",
    plugins: {
      "@next/next": eslintPluginNext,
    },
    rules: eslintPluginNext.configs["core-web-vitals"].rules,
  },
];
