import { ConfigWithExtends } from "typescript-eslint";

type InfiniteDepthConfigWithExtends = ConfigWithExtends | InfiniteDepthConfigWithExtends[];
