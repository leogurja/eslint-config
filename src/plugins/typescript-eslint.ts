import { basename, dirname } from "node:path";
import ts from "typescript-eslint";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const typescriptEslint = [
  ts.configs.strict,
  ts.configs.stylistic,
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
] satisfies InfiniteDepthConfigWithExtends;

export const typescriptEslintTypeChecked = (tsconfig: string) => [
  ts.configs.strictTypeCheckedOnly,
  ts.configs.stylisticTypeCheckedOnly,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          defaultProject: basename(tsconfig),
        },
        tsconfigRootDir: dirname(tsconfig),
      },
    },
  },
];
