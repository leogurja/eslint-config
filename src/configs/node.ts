import globals from "globals";
import { nodePlugin } from "../plugins/eslint-plugin-n.js";
import type { CommonOptions } from "../types/common-options.js";
import withOptionalFiles from "../utils/with-optional-files.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NodeOptions extends CommonOptions {}

export default function node({ files }: NodeOptions = {}) {
  return withOptionalFiles(
    [
      {
        name: "gurja/node",
        languageOptions: {
          globals: globals.node,
        },
      },
      nodePlugin,
    ].flat(),
    files,
  );
}
