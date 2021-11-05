import { lintAssert } from './lintAssert';
import { lintJavaScript } from './esLintTester';

suite('coreRules', (): void => {
  test('camelcase.', async (): Promise<void> => {
    const result = await lintJavaScript('const snake_case = \'true\';');

    lintAssert(result).containsRuleError('camelcase');
  });
});
