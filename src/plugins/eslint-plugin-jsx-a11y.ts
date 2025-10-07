import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import type { Config } from "../types/config.js";

export const jsxA11yPlugin: Config[] = [eslintPluginJsxA11y.flatConfigs.strict];

export const jsxA11yPluginNext: Config[] = [
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
