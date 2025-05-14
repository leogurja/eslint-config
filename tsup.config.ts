import { defineConfig } from "tsup";

const config = defineConfig({
  entry: {
    index: "src/index.ts",
    next: "src/configs/next.ts",
    node: "src/configs/node.ts",
    jest: "src/configs/jest.ts",
    react: "src/configs/react.ts",
    disableTypeChecking: "src/configs/disableTypeChecking.ts",
  },
  clean: true,
  cjsInterop: true,
  dts: { resolve: true },
  target: "node23",
  format: "esm",
  treeshake: true,
});

export default config;
