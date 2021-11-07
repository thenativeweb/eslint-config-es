import { assertLint } from '../../shared/assertLint';
import { lintJavaScript } from '../../shared/esLintTester';

suite('extended/', (): void => {
  test('consistent-err-names: disallows err as postfix.', async (): Promise<void> => {
    const result = await lintJavaScript('const postfixErr = ``;');

    assertLint(result).containsError('extended/consistent-err-names');
  });
});
