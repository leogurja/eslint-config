import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import type { Config } from "../types/config.js";

export const jsdocPlugin: Config[] = [
  eslintPluginJsdoc.configs["flat/contents-typescript"],
  eslintPluginJsdoc.configs["flat/logical-typescript"],
  eslintPluginJsdoc.configs["flat/stylistic-typescript"],
];
