import type { Linter } from "eslint";
import eslintPluginPromise from "eslint-plugin-promise";

export const promisePlugin: Linter.Config[] = [
  eslintPluginPromise.configs["flat/recommended"],
  {
    name: "gurja/eslint-plugin-promise",
    rules: {
      "promise/spec-only": "warn",
      "promise/prefer-catch": "warn",
      "promise/no-multiple-resolved": "warn",
    },
  },
];
