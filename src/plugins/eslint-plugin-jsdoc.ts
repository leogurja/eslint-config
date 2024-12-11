import eslintPluginJsdoc from "eslint-plugin-jsdoc";

export const jsdocPlugin = [
  {
    plugins: {
      jsdoc: eslintPluginJsdoc,
    },
  },
  {
    files: ["**/*.{ts,cts,mts}x?"],
    rules: {
      ...eslintPluginJsdoc.configs["flat/contents-typescript"].rules,
      ...eslintPluginJsdoc.configs["flat/logical-typescript"].rules,
      ...eslintPluginJsdoc.configs["flat/stylistic-typescript"].rules,
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}x?"],
    rules: {
      ...eslintPluginJsdoc.configs["flat/contents-typescript-flavor"].rules,
      ...eslintPluginJsdoc.configs["flat/logical-typescript-flavor"].rules,
      ...eslintPluginJsdoc.configs["flat/stylistic-typescript-flavor"].rules,
    },
  },
];
