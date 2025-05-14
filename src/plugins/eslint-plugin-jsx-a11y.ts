import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import type { ConfigArray } from "typescript-eslint";

export const jsxA11yPlugin: ConfigArray = [
  eslintPluginJsxA11y.flatConfigs.strict,
];

export const jsxA11yPluginNext: ConfigArray = [
  {
    name: "gurja/eslint-plugin-jsx-a11y/next",
    rules: {
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
    },
  },
];
