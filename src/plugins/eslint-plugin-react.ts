import type { Linter } from "eslint";
import eslintPluginReact from "eslint-plugin-react";

export const reactPlugin: Linter.Config[] = [
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
];
