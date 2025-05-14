import globals from "globals";
import type { ConfigArray } from "typescript-eslint";
import nPlugin from "../plugins/eslint-plugin-n.js";

export default [
  {
    name: "gurja/node",
    languageOptions: {
      globals: globals.node,
    },
  },
  nPlugin,
].flat() satisfies ConfigArray;
