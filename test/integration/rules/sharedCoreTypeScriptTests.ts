import { assertLint } from '../assertLint';
import { lintTypeScript } from '../esLintTester';

suite('sharedCoreTypeScript', (): void => {
  test('naming-convention: replaces camelcase from core.', async (): Promise<void> => {
    const result = await lintTypeScript('const snake_case = \'true\';');

    assertLint(result).containsError('@typescript-eslint/naming-convention');
    assertLint(result).notContainsError('camelcase');
  });
});
