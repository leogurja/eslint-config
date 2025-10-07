import eslintPluginReact from "eslint-plugin-react";
import type { Config } from "../types/config.js";

export const reactPlugin: Config[] = [
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
];
