import ts from "typescript-eslint";

import type { InfiniteDepthConfigWithExtends } from "../@types/infinite-depth-config-with-extends.js";
import { base } from "./base.js";
import { next } from "./next.js";
import { node } from "./node.js";
import { react } from "./react.js";

export function config(...configs: InfiniteDepthConfigWithExtends[]) {
  return ts.config(configs);
}

export { base, next, node, react };
