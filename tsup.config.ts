import { defineConfig } from "tsup";

const config = defineConfig({
  entry: {
    index: "src/index.ts",
    jest: "src/configs/jest.ts",
    next: "src/configs/next.ts",
    node: "src/configs/node.ts",
    react: "src/configs/react.ts",
  },
  clean: true,
  cjsInterop: true,
  dts: { resolve: true },
  target: "node23",
  format: "esm",
  treeshake: true,
});

export default config;
