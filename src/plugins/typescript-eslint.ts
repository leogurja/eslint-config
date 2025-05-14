import ts, { type ConfigArray } from "typescript-eslint";

// had to add this type annotation (?)
const defaultConfig: ConfigArray[number] = {
  name: "gurja/typescript-eslint",
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: true,
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: true,
      },
    ],
  },
};

export const typescriptEslint: ConfigArray = [
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  defaultConfig,
].flat();
