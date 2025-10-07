import type { Linter } from "eslint";
import eslintPluginReactCompiler from "eslint-plugin-react-compiler";

export const reactCompilerPlugin: Linter.Config[] = [
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
