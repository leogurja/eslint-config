import globals from "globals";
import { nPlugin } from "../plugins/eslint-plugin-n.js";
import { base, type ConfigOptions } from "./base.js";

export function node(options: ConfigOptions = {}) {
  return base({
    languageOptions: {
      globals: globals.node,
    },
    extends: [...nPlugin, options],
  });
}
