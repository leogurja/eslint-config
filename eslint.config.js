import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
// @ts-check
import { config, configs } from "@gurja/eslint-config";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default config(
  configs.node,
  {
    files: ["src/**/*", "@types/**/*"],
    extends: [configs.typeChecked.node(join(__dirname, "tsconfig.json"))],
  },
  {
    files: ["test/**/*"],
    extends: [configs.typeChecked.jest(join(__dirname, "tsconfig.json"))],
  },
);
