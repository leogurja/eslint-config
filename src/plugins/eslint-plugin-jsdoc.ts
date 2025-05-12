import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import { ConfigArray } from "typescript-eslint";

export const jsdocPlugin: ConfigArray = [
  eslintPluginJsdoc.configs["flat/contents-typescript"],
  eslintPluginJsdoc.configs["flat/logical-typescript"],
  eslintPluginJsdoc.configs["flat/stylistic-typescript"],
];
