import js from "@eslint/js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const base = ts.config(js.configs.recommended, ...ts.configs.strict, {
  files: ["**/*.{ts,tsx,cts,mts}"],
  extends: [ts.configs.strictTypeChecked, ts.configs.stylisticTypeChecked],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
  },
});
