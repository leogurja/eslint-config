import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

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
] satisfies InfiniteDepthConfigWithExtends;
