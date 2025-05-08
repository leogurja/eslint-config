import globals from "globals";
import { jestPlugin } from "../plugins/eslint-plugin-jest.js";
import { base, type ConfigOptions } from "./base.js";

export function jest({ typeLinting, ...options }: ConfigOptions = {}) {
  return base({
    typeLinting,
    languageOptions: {
      globals: globals.jest,
    },
    extends: [jestPlugin(typeLinting), options],
  });
}
