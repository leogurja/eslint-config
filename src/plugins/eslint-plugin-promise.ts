import eslintPluginPromise from "eslint-plugin-promise";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const promisePlugin = [
  eslintPluginPromise.configs["flat/recommended"],
  {
    rules: {
      "promise/spec-only": "warn",
      "promise/prefer-catch": "warn",
      "promise/no-multiple-resolved": "warn",
    },
  },
] satisfies InfiniteDepthConfigWithExtends;
