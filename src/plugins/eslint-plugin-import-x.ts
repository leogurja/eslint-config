import eslintPluginImport from "eslint-plugin-import-x";
import { ConfigArray } from "typescript-eslint";

export const importPlugin: ConfigArray = [
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  eslintPluginImport.flatConfigs["stage-0"],
  eslintPluginImport.flatConfigs.warnings,
  {
    rules: {
      "import-x/no-self-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-unresolved": "off",
    },
  },
];

export const importPluginReact: ConfigArray = [
  eslintPluginImport.flatConfigs.react,
];

export const importPluginNext: ConfigArray = [
  {
    name: "gurja/eslint-plugin-import-x/next",
    rules: {
      "import-x/no-default-export": "off",
    },
  },
];
