import globals from "globals";
import { importPluginReact } from "../plugins/eslint-plugin-import-x.js";
import { jsxA11yPlugin } from "../plugins/eslint-plugin-jsx-a11y.js";
import { reactCompilerPlugin } from "../plugins/eslint-plugin-react-compiler.js";
import { reactHooksPlugin } from "../plugins/eslint-plugin-react-hooks.js";
import { reactRefreshPlugin } from "../plugins/eslint-plugin-react-refresh.js";
import { reactPlugin } from "../plugins/eslint-plugin-react.js";
import { base, baseTypeCheckedOnly } from "./base.js";

export const react = (vite = false) => [
  base,
  reactPlugin,
  importPluginReact,
  jsxA11yPlugin,
  reactHooksPlugin,
  reactRefreshPlugin(vite),
  reactCompilerPlugin,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export function reactTypeChecked(tsconfig: string, vite = false) {
  return [react(vite), baseTypeCheckedOnly(tsconfig)];
}
