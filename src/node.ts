import globals from "globals";
import ts from "typescript-eslint";
import { base } from "./base.js";

export const node = ts.config(...base, {
  languageOptions: {
    globals: globals.node,
  },
});
