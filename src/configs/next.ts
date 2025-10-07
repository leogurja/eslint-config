import { jsxA11yPluginNext } from "../plugins/eslint-plugin-jsx-a11y.js";
import { nextPlugin } from "../plugins/eslint-plugin-next.js";
import withOptionalFiles from "../utils/with-optional-files.js";
import react, { type ReactOptions } from "./react.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NextOptions extends ReactOptions {}

export default function next({ files, ...reactOptions }: NextOptions = {}) {
  return withOptionalFiles(
    [react(reactOptions), nextPlugin, jsxA11yPluginNext].flat(),
    files,
  );
}
