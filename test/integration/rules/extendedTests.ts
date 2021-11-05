import { assertLint } from '../assertLint';
import { lintJavaScript } from '../esLintTester';

suite('extended/', (): void => {
  test('consistent-err-names: disallows err as postfix.', async (): Promise<void> => {
    const result = await lintJavaScript('const postfixErr = ``;');

    assertLint(result).containsError('extended/consistent-err-names');
  });
});
