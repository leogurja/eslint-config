import globals from "globals";
import { jestPlugin } from "../plugins/eslint-plugin-jest.js";
import type { CommonOptions } from "../types/common-options.js";
import type { Config } from "../types/config.js";
import withOptionalFiles from "../utils/with-optional-files.js";

export interface JestOptions extends CommonOptions {
  disableTypeChecked?: boolean;
}

const disableTypeCheckedConfig: Config = {
  name: "gurja/eslint-plugin-jest/disable-type-checked",
  rules: {
    "jest/no-untyped-mock-factory": "off",
    "jest/unbound-method": "off",
  },
};

export default function jest({ files, disableTypeChecked }: JestOptions = {}) {
  return withOptionalFiles(
    [
      {
        name: "gurja/jest",
        languageOptions: {
          globals: globals.jest,
        },
      },
      jestPlugin,
      disableTypeChecked ? disableTypeCheckedConfig : {},
    ].flat(),
    files,
  );
}
