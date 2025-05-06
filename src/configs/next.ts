import { importPluginNext } from "../plugins/eslint-plugin-import-x.js";
import { jsxA11yPluginNext } from "../plugins/eslint-plugin-jsx-a11y.js";
import { nextPlugin } from "../plugins/eslint-plugin-next.js";
import type { ConfigOptions } from "./base.js";
import { react } from "./react.js";

export function next({ typeLinting, ...options }: ConfigOptions) {
  return react({
    typeLinting,
    vite: true,
    extends: [nextPlugin, importPluginNext, jsxA11yPluginNext, options],
  });
}
