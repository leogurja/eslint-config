import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import type { ConfigWithExtends } from "typescript-eslint";

export const reactCompilerPlugin = {
  plugins: {
    "react-compiler": eslintPluginReactCompiler,
  },
  rules: {
    "react-compiler/react-compiler": "error",
  },
} satisfies ConfigWithExtends;
