import globals from "globals";
import { importPluginReact } from "../plugins/eslint-plugin-import-x.js";
import { jsxA11yPlugin } from "../plugins/eslint-plugin-jsx-a11y.js";
import { reactCompilerPlugin } from "../plugins/eslint-plugin-react-compiler.js";
import { reactHooksPlugin } from "../plugins/eslint-plugin-react-hooks.js";
import { reactRefreshPlugin } from "../plugins/eslint-plugin-react-refresh.js";
import { reactPlugin } from "../plugins/eslint-plugin-react.js";
import { base, type ConfigOptions } from "./base.js";

export interface ReactConfigOptions extends ConfigOptions {
  vite?: boolean;
}

export function react({ vite = false, ...options }: ReactConfigOptions) {
  return base({
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
    extends: [
      ...reactPlugin,
      importPluginReact,
      jsxA11yPlugin,
      ...reactHooksPlugin,
      reactCompilerPlugin,
      reactRefreshPlugin(vite),
      options,
    ],
  });
}
