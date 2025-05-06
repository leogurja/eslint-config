import type { Linter } from "eslint";
import eslintPluginReact from "eslint-plugin-react";
import type { ConfigWithExtends } from "typescript-eslint";

export const reactPlugin = [
  eslintPluginReact.configs.flat.recommended as Linter.Config,
  eslintPluginReact.configs.flat["jsx-runtime"] as Linter.Config,
] satisfies ConfigWithExtends[];
