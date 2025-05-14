import globals from "globals";
import type { ConfigArray } from "typescript-eslint";
import jestPlugin from "../plugins/eslint-plugin-jest.js";

export default [
  {
    name: "gurja/jest",
    languageOptions: {
      globals: globals.jest,
    },
  },
  jestPlugin,
].flat() satisfies ConfigArray;
