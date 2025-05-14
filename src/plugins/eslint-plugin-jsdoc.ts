import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import type { ConfigArray } from "typescript-eslint";

export default [
  eslintPluginJsdoc.configs["flat/contents-typescript"],
  eslintPluginJsdoc.configs["flat/logical-typescript"],
  eslintPluginJsdoc.configs["flat/stylistic-typescript"],
] satisfies ConfigArray;
