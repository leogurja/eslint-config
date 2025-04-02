declare module "eslint-plugin-react-compiler" {
  import type { Rule } from "eslint";

  export const rules: Record<string, Rule.RuleModule>;
}
