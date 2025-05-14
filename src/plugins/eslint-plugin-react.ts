import eslintPluginReact from "eslint-plugin-react";
import type { ConfigArray } from "typescript-eslint";

export default [
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
] satisfies ConfigArray;
