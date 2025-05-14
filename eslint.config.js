import config from "@gurja/eslint-config";
import jest from "@gurja/eslint-config/jest";
import node from "@gurja/eslint-config/node";

export default config(node, {
  files: ["test/**/*.{test,spec}.ts"],
  extends: jest,
});
