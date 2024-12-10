import jestPlugin from "eslint-plugin-jest";
import ts from "typescript-eslint";
import { base, type BaseOptions } from "./base.js";

export interface JestOptions extends BaseOptions {
  env: "node" | "browser";
}

export function jest(options: BaseOptions = {}) {
  return ts.config(
    base(options),
    {
      ...jestPlugin.configs["flat/style"],
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
    {
      files: ["**/*.{ts,mts,cts}"],
      rules: {
        "jest/no-untyped-mock-factory": "warn",
        "jest/unbound-method": "error",
      },
    },
  );
}
