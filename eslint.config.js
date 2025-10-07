import { base, config } from "@gurja/eslint-config";
import jest from "@gurja/eslint-config/jest";
import node from "@gurja/eslint-config/node";

export default config(
  base(),
  node(),
  jest({ files: ["**/*.{test,spec}.ts"], disableTypeChecked: true }),
);
