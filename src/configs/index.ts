import { base, baseTypeChecked } from "./base.js";
import { jest, jestTypeChecked } from "./jest.js";
import { next, nextTypeChecked } from "./next.js";
import { node, nodeTypeChecked } from "./node.js";
import { react, reactTypeChecked } from "./react.js";

const typeChecked = {
  base: baseTypeChecked,
  jest: jestTypeChecked,
  next: nextTypeChecked,
  node: nodeTypeChecked,
  react: reactTypeChecked,
};

export { base, jest, next, node, react, typeChecked };
