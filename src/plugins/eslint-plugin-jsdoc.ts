import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import type { ConfigWithExtends } from "typescript-eslint";

export const jsdocPlugin = {
  plugins: {
    jsdoc: eslintPluginJsdoc,
  },
  rules: {
    ...eslintPluginJsdoc.configs["flat/contents-typescript"].rules,
    ...eslintPluginJsdoc.configs["flat/logical-typescript"].rules,
    ...eslintPluginJsdoc.configs["flat/stylistic-typescript"].rules,
  },
} satisfies ConfigWithExtends;
