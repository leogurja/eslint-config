import globals from "globals";
import {
  jestPlugin,
  jestPluginTypeChecked,
} from "../plugins/eslint-plugin-jest.js";
import { base, baseTypeCheckedOnly } from "./base.js";

export const jest = [
  base,
  jestPlugin,
  {
    languageOptions: {
      globals: globals.jest,
    },
  },
];

export function jestTypeChecked(tsconfig: string) {
  return [jest, baseTypeCheckedOnly(tsconfig), jestPluginTypeChecked(tsconfig)];
}

export function jestTypeCheckedOnly(tsconfig: string) {
  return jestPluginTypeChecked(tsconfig);
}
