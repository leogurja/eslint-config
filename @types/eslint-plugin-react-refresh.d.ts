declare module "eslint-plugin-react-refresh" {
  import type { Linter, Rule } from "eslint";

  type Config = {
    plugins: { "react-refresh": { rules: Record<string, Rule.RuleModule> } };
    rules: Record<string, Linter.RulesRecord>;
  };

  const rules: Record<string, Rule.RuleModule>;

  const configs: {
    recommended: Config;
    vite: Config;
  };
}
