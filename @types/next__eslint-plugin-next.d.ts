declare module "@next/eslint-plugin-next" {
  import type { Linter, Rule } from "eslint";

  export const rules: Record<string, Rule.RuleModule>;
  export const configs: {
    recommended: {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
    "core-web-vitals": {
      plugins: string[];
      extends: string[];
      rules: Linter.RulesRecord;
    };
  };
}
