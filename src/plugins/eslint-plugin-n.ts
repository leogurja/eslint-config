import eslintPluginN from "eslint-plugin-n";
import type { ConfigArray } from "typescript-eslint";

export const nPlugin: ConfigArray = [
  eslintPluginN.configs["flat/recommended-module"],
  {
    name: "gurja/eslint-plugin-n",
    rules: {
      "n/no-path-concat": "warn",
      "n/no-sync": "warn",
      "n/prefer-global/buffer": "warn",
      "n/prefer-global/console": "warn",
      "n/prefer-global/process": "warn",
      "n/prefer-global/text-decoder": "warn",
      "n/prefer-global/text-encoder": "warn",
      "n/prefer-global/url-search-params": "warn",
      "n/prefer-global/url": "warn",
      "n/prefer-node-protocol": "warn",
    },
  },
];
