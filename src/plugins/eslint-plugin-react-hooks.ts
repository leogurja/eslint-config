import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import type { Config } from "../types/config.js";

export const reactHooksPlugin: Config[] = [
  {
    name: "gurja/eslint-plugin-react-hooks",
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
