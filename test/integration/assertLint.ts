import { ESLint } from 'eslint';

interface AssertLint {
  containsError: (ruleName: string) => void;
  notContainsError: (ruleName: string) => void;
}

const ruleErrorInResult = (allLintedFilesResult: ESLint.LintResult[], ruleName: string): boolean => allLintedFilesResult.some((fileResult): boolean =>
  fileResult.messages.some((message): boolean =>
    message.ruleId === ruleName));

const assertLint = (allLintedFilesResult: ESLint.LintResult[]): AssertLint => ({
  notContainsError (ruleName: string): void {
    const errorFound = ruleErrorInResult(allLintedFilesResult, ruleName);

    if (errorFound) {
      throw new Error(`Expected Rule ${ruleName} not to be in the result, but found it. Actual Lint-Result: \n${JSON.stringify(allLintedFilesResult, null, 2)}`);
    }
  },
  containsError (ruleName: string): void {
    const errorFound = ruleErrorInResult(allLintedFilesResult, ruleName);

    if (!errorFound) {
      throw new Error(`Expected Rule ${ruleName} to be in the Lint-Result, but it wasn't. Actual Lint-Result: \n${JSON.stringify(allLintedFilesResult, null, 2)}`);
    }
  }
});

assertLint.debug = (result: ESLint.LintResult[]): void => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, 2));
};

export {
  assertLint
};
