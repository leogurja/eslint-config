import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import type { ConfigWithExtends } from "typescript-eslint";

export const reactHooksPlugin = [
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
] satisfies ConfigWithExtends[];
