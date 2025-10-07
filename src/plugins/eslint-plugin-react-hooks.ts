import type { Linter } from "eslint";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export const reactHooksPlugin: Linter.Config[] = [
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
