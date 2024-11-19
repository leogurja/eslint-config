// @ts-check

import ts from "typescript-eslint";
import config from "./dist/index.js";

export default ts.config(config.base);
