import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const jsxA11yPlugin = eslintPluginJsxA11y.flatConfigs.strict;

export const jsxA11yPluginNext = {
  rules: {
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
  },
} satisfies InfiniteDepthConfigWithExtends;
