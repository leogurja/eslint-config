import eslintPluginImport from "eslint-plugin-import-x";
import type { ConfigWithExtends } from "typescript-eslint";

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
  eslintPluginImport.flatConfigs.typescript,
] satisfies ConfigWithExtends[];

export const importPluginReact = {
  settings: eslintPluginImport.flatConfigs.react.settings,
} satisfies ConfigWithExtends;

export const importPluginNext = {
  rules: {
    "import-x/no-default-export": "off",
  },
} satisfies ConfigWithExtends;
