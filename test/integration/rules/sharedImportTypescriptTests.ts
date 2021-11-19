import { assertLint } from '../../shared/assertLint';
import { lintJavascript, lintTypescript } from '../../shared/esLintTester';

suite('sharedImportTypescript', (): void => {
  test('import/no-commonjs: not activated for javascript files.', async (): Promise<void> => {
    const result = await lintJavascript(`const fs = require('fs');`);

    assertLint(result).notContainsError('import/no-commonjs');
  });

  test('no-common-js: errors for typescript.', async (): Promise<void> => {
    const result = await lintTypescript(`const fs = require('fs');`);

    assertLint(result).containsError('import/no-commonjs');
  });
});
