import globals from "globals";
import { jsxA11yPlugin } from "../plugins/eslint-plugin-jsx-a11y.js";
import { reactCompilerPlugin } from "../plugins/eslint-plugin-react-compiler.js";
import { reactHooksPlugin } from "../plugins/eslint-plugin-react-hooks.js";
import { reactPlugin } from "../plugins/eslint-plugin-react.js";
import type { CommonOptions } from "../types/common-options.js";
import withOptionalFiles from "../utils/with-optional-files.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ReactOptions extends CommonOptions {}

export default function react({ files }: ReactOptions = {}) {
  return withOptionalFiles(
    [
      {
        name: "gurja/react",
        languageOptions: {
          globals: {
            ...globals.browser,
            ...globals.serviceworker,
          },
        },
        settings: {
          react: {
            version: "detect",
          },
        },
      },
      reactPlugin,
      jsxA11yPlugin,
      reactHooksPlugin,
      reactCompilerPlugin,
    ].flat(),
    files,
  );
}
