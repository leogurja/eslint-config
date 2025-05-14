import eslintPluginJest from "eslint-plugin-jest";
import type { ConfigArray } from "typescript-eslint";

export const jestPlugin: ConfigArray = [
  eslintPluginJest.configs["flat/style"],
  {
    name: "gurja/eslint-plugin-jest",
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
      // typeLinting required rules
      "jest/no-untyped-mock-factory": "warn",
      "jest/unbound-method": "error",
    },
  },
];
