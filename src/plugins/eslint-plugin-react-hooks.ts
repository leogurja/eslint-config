import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import type { ConfigArray } from "typescript-eslint";

export default [
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
] satisfies ConfigArray;
