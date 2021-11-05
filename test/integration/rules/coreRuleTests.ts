import { assertLint } from '../assertLint';
import { lintJavaScript, lintJsx } from '../esLintTester';

suite('coreRules', (): void => {
  test('camelcase.', async (): Promise<void> => {
    const result = await lintJavaScript('const snake_case = \'true\';');

    assertLint(result).containsError('camelcase');
  });

  test('no-nested-ternary: is overwritten by unicorn/no-nested-ternary.', async (): Promise<void> => {
    const result = await lintJavaScript(`'outer' === 'result' ? 'true' : 'inner' === 'innerResult' ? 'true' : 'false'`);

    assertLint(result).notContainsError('no-nested-ternary');
    assertLint(result).containsError('unicorn/no-nested-ternary');
  });

  test('no-process-exit: is overwritten by unicorn/no-process-exit.', async (): Promise<void> => {
    const result = await lintJavaScript('process.exit();');

    assertLint(result).notContainsError('no-process-exit');
    assertLint(result).containsError('unicorn/no-process-exit');
  });

  test('prefer-destructuring: for arrays, is overwritten by unicorn/no-unreadable-array-destructuring.', async (): Promise<void> => {
    const passing = await lintJavaScript('const result = array[0];');

    assertLint(passing).notContainsError('prefer-destructuring');
    assertLint(passing).notContainsError('unicorn/no-unreadable-array-destructuring');

    const notPassing = await lintJavaScript('const [,,result] = array;');

    assertLint(notPassing).notContainsError('prefer-destructuring');
    assertLint(notPassing).containsError('unicorn/no-unreadable-array-destructuring');
  });

  test('no-underscore-dangle.', async (): Promise<void> => {
    const result = await lintJavaScript('const _notAllowed = true');

    assertLint(result).containsError('no-underscore-dangle');
  });

  test('no-underscore-dangle: allows for __html in jsx.', async (): Promise<void> => {
    const result = await lintJsx(`
      <div dangerouslySetInnerHTML={{__html: '<p>Hello World</p>'}} />
    `);

    assertLint(result).notContainsError('no-underscore-dangle');
  });
});
