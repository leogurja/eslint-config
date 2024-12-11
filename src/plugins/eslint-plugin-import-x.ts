import eslintPluginImport from "eslint-plugin-import-x";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const importPlugin = [
  {
    plugins: {
      "import-x": eslintPluginImport,
    },
    rules: {
      ...eslintPluginImport.flatConfigs.recommended.rules,
      "import-x/no-self-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-unresolved": "off",
    },
  },
  {
    files: ["**/*.{ts,mts,cts}x?"],
    ...eslintPluginImport.flatConfigs.typescript,
  },
] satisfies InfiniteDepthConfigWithExtends;

export const importPluginReact = {
  settings: eslintPluginImport.flatConfigs.react.settings,
};

export const importPluginNext = {
  rules: {
    "import-x/no-default-export": "off",
  },
} satisfies InfiniteDepthConfigWithExtends;
