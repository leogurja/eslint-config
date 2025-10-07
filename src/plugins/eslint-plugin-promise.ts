import eslintPluginPromise from "eslint-plugin-promise";
import type { Config } from "../types/config.js";

export const promisePlugin: Config[] = [
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
