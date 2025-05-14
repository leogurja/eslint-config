import type { ConfigArray } from "typescript-eslint";
import { jsxA11yPluginNext } from "../plugins/eslint-plugin-jsx-a11y.js";
import nextPlugin from "../plugins/eslint-plugin-next.js";
import { reactRefreshPluginNext } from "../plugins/eslint-plugin-react-refresh.js";
import react from "./react.js";

export default [
  react({ vite: true }),
  nextPlugin,
  jsxA11yPluginNext,
  reactRefreshPluginNext,
].flat() satisfies ConfigArray;
