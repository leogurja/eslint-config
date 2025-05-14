import eslintPluginReact from "eslint-plugin-react";
import type { ConfigArray } from "typescript-eslint";

export const reactPlugin: ConfigArray = [
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
];
