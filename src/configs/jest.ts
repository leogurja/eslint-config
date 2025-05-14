import globals from "globals";
import type { ConfigArray } from "typescript-eslint";
import { jestPlugin } from "../plugins/eslint-plugin-jest.js";

export const jest: ConfigArray = [
  {
    name: "gurja/jest",
    languageOptions: {
      globals: globals.jest,
    },
  },
  jestPlugin,
].flat();
