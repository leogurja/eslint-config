import ts from "typescript-eslint";
import type { Config } from "../types/config.js";

const defaultConfig: Config = {
  name: "gurja/typescript-eslint",
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: true,
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
  },
};

export const typescriptEslint: Config[] = [
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  defaultConfig,
];
