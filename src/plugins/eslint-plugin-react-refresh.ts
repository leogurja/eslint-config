import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const reactRefreshPlugin = (vite: boolean) =>
  ({
    plugins: {
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: vite },
      ],
    },
  }) satisfies InfiniteDepthConfigWithExtends;
