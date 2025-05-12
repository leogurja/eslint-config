import globals from "globals";
import { ConfigArray } from "typescript-eslint";
import { nPlugin } from "../plugins/eslint-plugin-n.js";

export const node: ConfigArray = [
  {
    name: "gurja/node",
    languageOptions: {
      globals: globals.node,
    },
  },
  nPlugin,
].flat();
