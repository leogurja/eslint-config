import type { Rule } from 'eslint'

declare module 'eslint-plugin-react-compiler' {
  export const rules: Record<string, Rule.RuleModule>
}
