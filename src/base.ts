/// <reference path="../@types/eslint-plugin-jsdoc.d.ts" />
/// <reference path="../@types/eslint-plugin-import.d.ts" />

import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface BaseOptions {
  globals?: Record<string, boolean | "readable" | "writable" | "off">;
}

export function base({ globals }: BaseOptions = {}) {
  return ts.config(
    js.configs.recommended,
    ts.configs.strictTypeChecked,
    ts.configs.stylisticTypeChecked,
    importPlugin.flatConfigs.recommended,
    // ignore files on .gitignore by default
    neostandard({
      ignores: resolveIgnoresFromGitignore(),
    }),
    // good rules to enable
    {
      languageOptions: {
        globals,
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-import-type-side-effects": "error",
        "import/no-default-export": "warn",
        "import/no-self-import": "error",
        "import/no-absolute-path": "error",
      },
    },
    // for ts only files
    {
      ...importPlugin.flatConfigs.typescript,
      ignores: ["**/*.{js,cjs,mjs}x?"],
      plugins: {
        jsdoc: jsdocPlugin,
      },
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: __dirname,
        },
      },
      rules: {
        ...importPlugin.flatConfigs.typescript.rules,
        ...jsdocPlugin.configs["flat/contents-typescript"].rules,
        ...jsdocPlugin.configs["flat/logical-typescript"].rules,
        ...jsdocPlugin.configs["flat/stylistic-typescript"].rules,
      },
    },
    // for non ts files
    {
      files: ["**/*.{js,cjs,mjs}x?"],
      plugins: {
        jsdoc: jsdocPlugin,
      },
      rules: {
        ...jsdocPlugin.configs["flat/contents-typescript-flavor"].rules,
        ...jsdocPlugin.configs["flat/logical-typescript-flavor"].rules,
        ...jsdocPlugin.configs["flat/stylistic-typescript-flavor"].rules,
      },
    },
  );
}
