import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import type { InfiniteDepthConfigWithExtends } from "../types/infinite-depth-config-with-extends.js";

export const reactCompilerPlugin = {
  plugins: {
    "react-compiler": eslintPluginReactCompiler,
  },
  rules: {
    "react-compiler/react-compiler": "error",
  },
} satisfies InfiniteDepthConfigWithExtends;
