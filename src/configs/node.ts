import globals from "globals";
import { nPlugin } from "../plugins/eslint-plugin-n.js";
import { base, baseTypeCheckedOnly } from "./base.js";

export const node = [
  base,
  nPlugin,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];

export function nodeTypeChecked(tsconfig: string) {
  return [node, baseTypeCheckedOnly(tsconfig)];
}
