import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import type { ConfigArray } from "typescript-eslint";

export default [eslintPluginJsxA11y.flatConfigs.strict] satisfies ConfigArray;

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
