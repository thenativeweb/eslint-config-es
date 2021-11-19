import { assertLint } from '../../shared/assertLint';
import { lintJavascript, lintTypescript } from '../../shared/esLintTester';

suite('import/', (): void => {
  test('export: reports duplicate export identifiers.', async (): Promise<void> => {
    const result = await lintTypescript(`
      const first = false;
      const second = false;
      
      export {
        first,
        second as first
      };
    `);

    assertLint(result).containsError('import/export');
  }).timeout(5_000);

  test('no-unresolved: works with require.', async (): Promise<void> => {
    const result = await lintJavascript(`const notExist = require('doesNotExist');`);

    assertLint(result).containsError('import/no-unresolved');
  });

  test('no-unresolved: works with import.', async (): Promise<void> => {
    const result = await lintTypescript(`import notExist from 'doesNotExist';`);

    assertLint(result).containsError('import/no-unresolved');
  });

  test('exports-last: Exports have to happen on the bottom.', async (): Promise<void> => {
    const result = await lintTypescript(`
      export const foo = 'bar';
      const anotherStatement = false;
    `);

    assertLint(result).containsError('import/exports-last');
  });

  test('first: Imports have to be on top.', async (): Promise<void> => {
    const result = await lintTypescript(`
      const aStatement = false;
      import notExist from 'doesNotExist';
    `);

    assertLint(result).containsError('import/first');
  });

  test('group-exports: All exports have to be grouped together.', async (): Promise<void> => {
    const result = await lintTypescript(`
      export const aStatement = false;
      export const anotherStatement = false;
    `);

    assertLint(result).containsError('import/group-exports');
  });

  test('newline-after-import.', async (): Promise<void> => {
    const result = await lintTypescript(`
      import eslint from 'eslint';
      import React from 'react';
      const aStatement = false;
    `);

    assertLint(result).containsError('import/newline-after-import');
  });

  test('no-absolute-path.', async (): Promise<void> => {
    const result = await lintTypescript(`import notExist from '/absolute/path';`);

    assertLint(result).containsError('import/no-absolute-path');
  });

  test('no-default-export.', async (): Promise<void> => {
    const result = await lintTypescript(`export default 'test';`);

    assertLint(result).containsError('import/no-default-export');
  });

  test('no-import-module-exports.', async (): Promise<void> => {
    const result = await lintTypescript(`
      import { bundle } from './something';
      module.exports = bundle;
    `);

    assertLint(result).containsError('import/no-import-module-exports');
  });

  test('no-mutable-exports.', async (): Promise<void> => {
    const result = await lintTypescript(`
      let count = 4;
      export { count };
    `);

    assertLint(result).containsError('import/no-mutable-exports');
  });
});
