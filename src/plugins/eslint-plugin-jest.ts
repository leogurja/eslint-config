import eslintPluginJest from "eslint-plugin-jest";
import { dirname } from "node:path";
import type { ConfigWithExtends } from "typescript-eslint";
import getTsConfigFiles from "../utils/getTsconfigFiles.js";

export const defaultRules = [
  eslintPluginJest.configs["flat/style"],
  {
    rules: {
      "jest/consistent-test-it": "warn",
      "jest/no-conditional-in-test": "error",
      "jest/no-duplicate-hooks": "warn",
      "jest/no-test-return-statement": "error",
      "jest/prefer-comparison-matcher": "warn",
      "jest/prefer-called-with": "warn",
      "jest/prefer-each": "warn",
      "jest/prefer-equality-matcher": "warn",
      "jest/prefer-expect-resolves": "warn",
      "jest/prefer-importing-jest-globals": "warn",
      "jest/prefer-jest-mocked": "warn",
      "jest/prefer-lowercase-title": "warn",
      "jest/prefer-mock-promise-shorthand": "warn",
      "jest/prefer-spy-on": "warn",
      "jest/prefer-strict-equal": "warn",
      "jest/prefer-todo": "warn",
      "jest/require-hook": "error",
    },
  },
] satisfies ConfigWithExtends[];

export function jestPlugin(tsconfig: string): ConfigWithExtends[] {
  return [
    ...defaultRules,
    {
      files: getTsConfigFiles(tsconfig),
      rules: {
        "jest/no-untyped-mock-factory": "warn",
        "jest/unbound-method": "error",
      },
      languageOptions: {
        parserOptions: {
          project: tsconfig,
          tsconfigRootDir: dirname(tsconfig),
        },
      },
    },
  ];
}
