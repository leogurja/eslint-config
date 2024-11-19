
declare module "eslint-plugin-react-hooks" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    recommended: {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  };

  export const rules: Record<string, Rule.RuleModule>;
}
