import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import type { ConfigWithExtends } from "typescript-eslint";

export function reactRefreshPlugin(vite: boolean): ConfigWithExtends {
  return {
    plugins: {
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: vite },
      ],
    },
  };
}
