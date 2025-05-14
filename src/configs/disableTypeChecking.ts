import { type ConfigArray, configs } from "typescript-eslint";

export const disableTypeChecking: ConfigArray = [
  configs.disableTypeChecked,
  {
    name: "gurja/eslint-plugin-jest/disable-type-checking",
    rules: {
      "jest/no-untyped-mock-factory": "off",
      "jest/unbound-method": "off",
    },
  },
];
