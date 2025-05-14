import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import type { ConfigArray } from "typescript-eslint";

export default [
  {
    name: "gurja/eslint-plugin-react-compiler",
    plugins: {
      "react-compiler": eslintPluginReactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },
] satisfies ConfigArray;
