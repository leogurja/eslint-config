// @ts-check
import globals from "globals";
import { base, config, jest } from "./dist/index.js";

export default config(base({ globals: globals.node }), {
  files: ["test/**/*.ts"],
  ...jest(),
});
