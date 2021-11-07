import { assertLint } from '../../shared/assertLint';
import { lintJavaScript } from '../../shared/esLintTester';

suite('unicorn/', (): void => {
  test('expiring-todo-comments.', async (): Promise<void> => {
    const result = await lintJavaScript(`
      // TODO[1970-01-01] This is a todo in the past that should throw
    `);

    assertLint(result).containsError('unicorn/expiring-todo-comments');
  });
});
