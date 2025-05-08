import js from "@eslint/js";
import { config, type ConfigWithExtends } from "typescript-eslint";
import { jsdocPlugin } from "../plugins/eslint-plugin-jsdoc.js";
import { promisePlugin } from "../plugins/eslint-plugin-promise.js";
import { typescriptEslint } from "../plugins/typescript-eslint.js";
import resolveIgnoresFromGitignore from "../utils/resolveGitIgnore.js";

const ignores = await resolveIgnoresFromGitignore();

export interface ConfigOptions extends ConfigWithExtends {
  typeLinting?: boolean;
}

export function base({ typeLinting, ...options }: ConfigOptions = {}) {
  return config(
    { ignores },
    js.configs.recommended,
    typescriptEslint(typeLinting),
    // importPlugin,
    promisePlugin,
    jsdocPlugin,
    options,
  );
}
