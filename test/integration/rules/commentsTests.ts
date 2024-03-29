import { assertLint } from '../../shared/assertLint';
import { lintJavascript } from '../../shared/esLintTester';

suite('eslint-comments/', (): void => {
  test('no-unused-disable.', async (): Promise<void> => {
    const result = await lintJavascript(`
      // eslint-disable-next-line no-console
      const notAConsoleStatement = '';
    `);

    assertLint(result).containsError('eslint-comments/no-unused-disable');
  });
});
