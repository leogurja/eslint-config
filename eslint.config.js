import { config, jest, node } from "@gurja/eslint-config";

export default config(node(), jest({ files: ["test/**/*.{test,spec}.ts"] }));
