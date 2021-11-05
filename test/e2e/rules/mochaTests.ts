import { assertLint } from '../assertLint';
import { lintJavaScript } from '../esLintTester';

suite('mocha/', (): void => {
  test('valid-suite-description: must not end with a dot.', async (): Promise<void> => {
    const result = await lintJavaScript(`suite('invalid.', () => {});`);

    assertLint(result).containsError('mocha/valid-suite-description');
  });

  test('valid-test-description: must end with a dot.', async (): Promise<void> => {
    const result = await lintJavaScript(`test('invalid', () => {});`);

    assertLint(result).containsError('mocha/valid-test-description');
  });
});
