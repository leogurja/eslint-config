import eslintPluginPromise from "eslint-plugin-promise";
import type { ConfigArray } from "typescript-eslint";

export default [
  eslintPluginPromise.configs["flat/recommended"],
  {
    name: "gurja/eslint-plugin-promise",
    rules: {
      "promise/spec-only": "warn",
      "promise/prefer-catch": "warn",
      "promise/no-multiple-resolved": "warn",
    },
  },
] satisfies ConfigArray;
