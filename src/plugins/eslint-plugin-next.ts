import eslintPluginNext from "@next/eslint-plugin-next";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const nextPlugin = {
  plugins: {
    "@next/next": eslintPluginNext,
  },
  rules: {
    ...eslintPluginNext.configs["core-web-vitals"].rules,
    "import-x/no-default-export": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
  },
} satisfies InfiniteDepthConfigWithExtends;
