import js from "@eslint/js";
import { jsdocPlugin } from "../plugins/eslint-plugin-jsdoc.js";
import { promisePlugin } from "../plugins/eslint-plugin-promise.js";
import {
  typescriptEslint,
  typescriptEslintTypeChecked,
} from "../plugins/typescript-eslint.js";
import resolveIgnoresFromGitignore from "../utils/resolveGitIgnore.js";

const ignores = await resolveIgnoresFromGitignore();

export const base = [
  { ignores },
  js.configs.recommended,
  typescriptEslint,
  // importPlugin,
  promisePlugin,
  jsdocPlugin,
];

export function baseTypeChecked(tsconfig: string) {
  return [base, typescriptEslintTypeChecked(tsconfig)];
}

export function baseTypeCheckedOnly(tsconfig: string) {
  return typescriptEslintTypeChecked(tsconfig);
}
