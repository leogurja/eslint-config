import { type ConfigArray, configs } from "typescript-eslint";

export default [
  configs.disableTypeChecked,
  {
    name: "gurja/eslint-plugin-jest/disable-type-checking",
    rules: {
      "jest/no-untyped-mock-factory": "off",
      "jest/unbound-method": "off",
    },
  },
] satisfies ConfigArray;
