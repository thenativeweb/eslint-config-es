import { assertLint } from '../assertLint';
import { lintJavaScript, lintTsx, lintTypeScript } from '../esLintTester';

suite('sharedCoreTypeScript', (): void => {
  test('naming-convention: replaces camelcase from core.', async (): Promise<void> => {
    const result = await lintTypeScript('const snake_case = \'true\';');

    assertLint(result).containsError('@typescript-eslint/naming-convention');
    assertLint(result).notContainsError('camelcase');
  });

  test('naming-convention: does not allow dangling underscores.', async (): Promise<void> => {
    const result = await lintTypeScript('const _invalid = true;');

    assertLint(result).containsError('@typescript-eslint/naming-convention');
  });

  test('naming-convention: allows for __html in tsx.', async (): Promise<void> => {
    const result = await lintTsx(`
      <div dangerouslySetInnerHTML={{__html: '<p>Hello World</p>'}} />
    `);

    assertLint(result).notContainsError('@typescript-eslint/naming-convention');
  });

  test('default-param-last: errors both in js and ts.', async (): Promise<void> => {
    const code = `const func = (defaultParam = 'default', nonDefault) => {}`;
    const jsResult = await lintJavaScript(code);
    const tsResult = await lintTypeScript(code);

    assertLint(jsResult).containsError('default-param-last');
    assertLint(tsResult).notContainsError('default-param-last');
    assertLint(tsResult).containsError('@typescript-eslint/default-param-last');
  });
});
