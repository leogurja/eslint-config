import type { Linter } from "eslint";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

export const jsxA11yPlugin: Linter.Config[] = [
  eslintPluginJsxA11y.flatConfigs.strict,
];

export const jsxA11yPluginNext: Linter.Config[] = [
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
