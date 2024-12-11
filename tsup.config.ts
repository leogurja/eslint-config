import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  cjsInterop: true,
  dts: { resolve: true },
  target: "node23",
  format: "esm",
  treeshake: true,
});

export default config;
