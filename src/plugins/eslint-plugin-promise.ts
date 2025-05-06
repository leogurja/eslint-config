import eslintPluginPromise from "eslint-plugin-promise";
import type { ConfigWithExtends } from "typescript-eslint";

export const promisePlugin = [
  eslintPluginPromise.configs["flat/recommended"],
  {
    rules: {
      "promise/spec-only": "warn",
      "promise/prefer-catch": "warn",
      "promise/no-multiple-resolved": "warn",
    },
  },
] satisfies ConfigWithExtends[];
