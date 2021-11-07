import { assertLint } from '../../shared/assertLint';
import { lintJavaScript, lintTypeScript } from '../../shared/esLintTester';

suite('import/', (): void => {
  test('no-unresolved: works with require.', async (): Promise<void> => {
    const result = await lintJavaScript(`const notExist = require('doesNotExist');`);

    assertLint(result).containsError('import/no-unresolved');
  });

  test('no-unresolved: works with import.', async (): Promise<void> => {
    const result = await lintTypeScript(`import notExist from 'doesNotExist';`);

    assertLint(result).containsError('import/no-unresolved');
  });

  test('exports-last: Exports have to happen on the bottom.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      export const foo = 'bar';
      const anotherStatement = false;
    `);

    assertLint(result).containsError('import/exports-last');
  });

  test('first: Imports have to be on top.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      const aStatement = false;
      import notExist from 'doesNotExist';
    `);

    assertLint(result).containsError('import/first');
  });

  test('group-exports: All exports have to be grouped together.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      export const aStatement = false;
      export const anotherStatement = false;
    `);

    assertLint(result).containsError('import/group-exports');
  });

  test('newline-after-import.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      import eslint from 'eslint';
      import React from 'react';
      const aStatement = false;
    `);

    assertLint(result).containsError('import/newline-after-import');
  });

  test('no-absolute-path.', async (): Promise<void> => {
    const result = await lintTypeScript(`import notExist from '/absolute/path';`);

    assertLint(result).containsError('import/no-absolute-path');
  });

  test('no-default-export.', async (): Promise<void> => {
    const result = await lintTypeScript(`export default 'test';`);

    assertLint(result).containsError('import/no-default-export');
  });

  test('no-import-module-exports.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      import { bundle } from './something';
      module.exports = bundle;
    `);

    assertLint(result).containsError('import/no-import-module-exports');
  });

  test('no-mutable-exports.', async (): Promise<void> => {
    const result = await lintTypeScript(`
      let count = 4;
      export { count };
    `);

    assertLint(result).containsError('import/no-mutable-exports');
  });
});
