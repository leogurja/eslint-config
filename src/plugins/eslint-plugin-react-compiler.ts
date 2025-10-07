import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import type { Config } from "../types/config.js";

export const reactCompilerPlugin: Config[] = [
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
