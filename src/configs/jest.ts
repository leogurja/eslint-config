import globals from "globals";
import { jestPlugin } from "../plugins/eslint-plugin-jest.js";
import { base, type ConfigOptions } from "./base.js";

export function jest({
  tsconfig = "tsconfig.json",
  ...options
}: ConfigOptions) {
  return base({
    languageOptions: {
      globals: globals.jest,
    },
    extends: [jestPlugin(tsconfig), options],
  });
}
