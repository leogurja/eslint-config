import type { Linter } from "eslint";
import eslintPluginJsdoc from "eslint-plugin-jsdoc";

export const jsdocPlugin: Linter.Config[] = [
  eslintPluginJsdoc.configs["flat/contents-typescript"],
  eslintPluginJsdoc.configs["flat/logical-typescript"],
  eslintPluginJsdoc.configs["flat/stylistic-typescript"],
];
