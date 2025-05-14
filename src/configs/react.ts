import globals from "globals";
import type { ConfigArray } from "typescript-eslint";
import jsxA11yPlugin from "../plugins/eslint-plugin-jsx-a11y.js";
import reactCompilerPlugin from "../plugins/eslint-plugin-react-compiler.js";
import reactHooksPlugin from "../plugins/eslint-plugin-react-hooks.js";
import reactRefreshPlugin, {
  reactRefreshPluginVite,
} from "../plugins/eslint-plugin-react-refresh.js";
import reactPlugin from "../plugins/eslint-plugin-react.js";

export interface ReactConfigOptions {
  vite?: boolean;
}

export default function react({
  vite = false,
}: ReactConfigOptions = {}): ConfigArray {
  return [
    {
      name: "gurja/react",
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
    reactPlugin,
    jsxA11yPlugin,
    reactHooksPlugin,
    reactCompilerPlugin,
    vite ? reactRefreshPluginVite : reactRefreshPlugin,
  ].flat();
}
