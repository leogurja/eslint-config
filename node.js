import globals from "globals";
import ts from "typescript-eslint";
import base from "./base";

const node = ts.config({
  ...base,
  languageOptions: {
    globals: globals.node,
  },
});

export default node;
