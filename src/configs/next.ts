import { ConfigArray } from "typescript-eslint";
import { importPluginNext } from "../plugins/eslint-plugin-import-x.js";
import { jsxA11yPluginNext } from "../plugins/eslint-plugin-jsx-a11y.js";
import { nextPlugin } from "../plugins/eslint-plugin-next.js";
import { reactRefreshPluginNext } from "../plugins/eslint-plugin-react-refresh.js";
import { react } from "./react.js";

export const next: ConfigArray = [
  react({ vite: true }),
  nextPlugin,
  importPluginNext,
  jsxA11yPluginNext,
  reactRefreshPluginNext,
].flat();
