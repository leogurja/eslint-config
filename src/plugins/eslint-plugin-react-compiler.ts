import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import type { ConfigArray } from "typescript-eslint";

export const reactCompilerPlugin: ConfigArray = [
  {
    name: "gurja/eslint-plugin-react-compiler",
    plugins: {
      "react-compiler": eslintPluginReactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },
];
