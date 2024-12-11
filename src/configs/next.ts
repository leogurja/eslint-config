import { importPluginNext } from "../plugins/eslint-plugin-import-x.js";
import { jsxA11yPluginNext } from "../plugins/eslint-plugin-jsx-a11y.js";
import { nextPlugin } from "../plugins/eslint-plugin-next.js";
import { baseTypeCheckedOnly } from "./base.js";
import { react } from "./react.js";

export const next = [
  react(false),
  nextPlugin,
  importPluginNext,
  jsxA11yPluginNext,
];

export function nextTypeChecked(tsconfig: string) {
  return [next, baseTypeCheckedOnly(tsconfig)];
}
