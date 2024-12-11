import type { ConfigWithExtends } from "typescript-eslint";

export type InfiniteDepthConfigWithExtends =
  | InfiniteDepthConfigWithExtends[]
  | ConfigWithExtends;
