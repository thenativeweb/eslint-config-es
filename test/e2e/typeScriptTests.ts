import { lintAssert } from './lintAssert';
import { lintTypeScript } from './esLintTester';

suite('coreRuleTests', (): void => {
  test('camelcase is replaced by nameconvention.', async (): Promise<void> => {
    const result = await lintTypeScript('const snake_case = \'true\';');

    lintAssert(result).containsRuleError('@typescript-eslint/naming-convention');
  });
});
