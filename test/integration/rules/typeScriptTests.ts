import { assertLint } from '../../shared/assertLint';
import { lintJavascript, lintTypescript } from '../../shared/esLintTester';

suite('@typescript-eslint/', (): void => {
  test('consistentTypeDefinitions: defaults to interfaces.', async (): Promise<void> => {
    const result = await lintTypescript(`
      type test = {
        property: string
      };
    `);

    assertLint(result).containsError('@typescript-eslint/consistent-type-definitions');
  });

  test('unicorn/require-post-message-target-origin: is deactivated for typescript files to avoid false-positives.', async (): Promise<void> => {
    const passing = await lintTypescript(`window.postMessage('myMessage');`);

    assertLint(passing).notContainsError('unicorn/require-post-message-target-origin');

    // Test the occurnce of the error here - in case we remove it from unicorn we can remove it here in typesscript
    const notPassing = await lintJavascript(`window.postMessage('myMessage');`);

    assertLint(notPassing).containsError('unicorn/require-post-message-target-origin');
  });
});
