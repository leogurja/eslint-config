import js from "@eslint/js";
import {
  type InfiniteDepthConfigWithExtends,
  config as typescriptEslintConfig,
} from "typescript-eslint";
import { jsdocPlugin } from "./plugins/eslint-plugin-jsdoc.js";
import { promisePlugin } from "./plugins/eslint-plugin-promise.js";
import { typescriptEslint } from "./plugins/typescript-eslint.js";
import resolveIgnoresFromGitignore from "./utils/resolveGitIgnore.js";

const ignores = await resolveIgnoresFromGitignore();

export function config(...configs: InfiniteDepthConfigWithExtends[]) {
  return typescriptEslintConfig(
    {
      name: "gurja/global-ignores",
      ignores,
    },
    {
      name: "gurja/base",
      languageOptions: {
        parserOptions: {
          projectService: {
            allowDefaultProject: ["*.{js,cjs,mjs,ts,cts,mts}"],
          },
        },
      },
    },
    js.configs.recommended,
    typescriptEslint,
    promisePlugin,
    jsdocPlugin,
    configs,
  );
}
