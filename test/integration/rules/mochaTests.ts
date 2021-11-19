import { assertLint } from '../../shared/assertLint';
import { lintJavascript } from '../../shared/esLintTester';

suite('mocha/', (): void => {
  test('valid-suite-description: must not end with a dot.', async (): Promise<void> => {
    const result = await lintJavascript(`suite('invalid.', () => {});`);

    assertLint(result).containsError('mocha/valid-suite-description');
  });

  test('valid-test-description: must end with a dot.', async (): Promise<void> => {
    const result = await lintJavascript(`test('invalid', () => {});`);

    assertLint(result).containsError('mocha/valid-test-description');
  });
});
