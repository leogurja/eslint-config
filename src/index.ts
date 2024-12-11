import globals from "globals";
import { config } from "typescript-eslint";

import { base, baseTypeChecked } from "./configs/base.js";
import { jest, jestTypeChecked } from "./configs/jest.js";
import { next, nextTypeChecked } from "./configs/next.js";
import { node, nodeTypeChecked } from "./configs/node.js";
import { react, reactTypeChecked } from "./configs/react.js";

const typeChecked = {
  base: baseTypeChecked,
  jest: jestTypeChecked,
  next: nextTypeChecked,
  node: nodeTypeChecked,
  react: reactTypeChecked,
};

const configs = { base, jest, next, node, react, typeChecked };

export { config, configs, globals };
