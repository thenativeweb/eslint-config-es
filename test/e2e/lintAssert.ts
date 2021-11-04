import { ESLint } from 'eslint';

interface LintAssert {
  containsRuleError: (ruleName: string) => boolean;
}

const lintAssert = (actual: ESLint.LintResult[]): LintAssert => ({
  containsRuleError (ruleName: string): boolean {
    const isContaining = actual.some((lintResult): boolean =>
      lintResult.messages.some((message): boolean =>
        message.ruleId === ruleName));

    if (!isContaining) {
      throw new Error(`Rule ${ruleName} not found in Lint-Result. Actual Lint-Result was: ${JSON.stringify(actual, null, 2)}`);
    }

    return true;
  }
});

export {
  lintAssert
};
