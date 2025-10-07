import js from "@eslint/js";
import { configs } from "typescript-eslint";
import { jsdocPlugin } from "../plugins/eslint-plugin-jsdoc.js";
import { promisePlugin } from "../plugins/eslint-plugin-promise.js";
import { typescriptEslint } from "../plugins/typescript-eslint.js";
import type { CommonOptions } from "../types/common-options.js";
import type { Config } from "../types/config.js";
import { resolveIgnoresFromGitignore } from "../utils/resolveGitIgnore.js";
import withOptionalFiles from "../utils/with-optional-files.js";

export interface BaseOptions extends CommonOptions {
  allowDefaultProject?: string[];
  disableTypeChecked?: boolean;
}

const ignores = await resolveIgnoresFromGitignore();

export default function base({
  files,
  allowDefaultProject,
  disableTypeChecked,
}: BaseOptions = {}): Config[] {
  return withOptionalFiles(
    [
      {
        name: "gurja/global-ignores",
        ignores,
      },
      {
        languageOptions: {
          parserOptions: {
            projectService: allowDefaultProject
              ? {
                  allowDefaultProject,
                }
              : true,
          },
        },
      },
      js.configs.recommended,
      typescriptEslint,
      promisePlugin,
      jsdocPlugin,
      disableTypeChecked ? configs.disableTypeChecked : {},
    ].flat(),
    files,
  );
}
