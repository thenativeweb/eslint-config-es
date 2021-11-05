import { lintAssert } from './lintAssert';
import { lintTypeScript } from './esLintTester';

suite('@typescript-eslint', (): void => {
  test('camelcase is replaced by naming-convention.', async (): Promise<void> => {
    const result = await lintTypeScript('const snake_case = \'true\';');

    lintAssert(result).containsRuleError('@typescript-eslint/naming-convention');
  });
});
