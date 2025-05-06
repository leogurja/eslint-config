import { dirname } from "node:path";
import ts, { type ConfigWithExtends } from "typescript-eslint";
import getTsConfigFiles from "../utils/getTsconfigFiles.js";

const defaultRules = [
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  {
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
    },
  },
] satisfies ConfigWithExtends[];

export function typescriptEslint(tsconfig: string): ConfigWithExtends[] {
  return [
    ...defaultRules,
    {
      files: getTsConfigFiles(tsconfig),
      extends: [
        ...ts.configs.strictTypeCheckedOnly,
        ...ts.configs.stylisticTypeCheckedOnly,
      ],
      languageOptions: {
        parserOptions: {
          project: tsconfig,
          tsconfigRootDir: dirname(tsconfig),
        },
      },
    },
  ];
}
