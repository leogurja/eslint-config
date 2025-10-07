import { defineConfig } from "eslint/config";
import type { Config } from "./types/config.js";

export { default as globals } from "globals";
export { default as base } from "./configs/base.js";
export type { Config } from "./types/config.js";

type InfiniteConfigArray = (Config | InfiniteConfigArray)[];

export function config(...args: InfiniteConfigArray): Config[] {
  return defineConfig(args);
}
