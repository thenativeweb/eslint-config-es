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

  test('explicitFunctionReturnType: allows for explicitly typed functions.', async (): Promise<void> => {
    let result = await lintTypescript(`
      type ExplicitType = () => number;
      
      const test: ExplicitType = () => 3; 
    `);

    assertLint(result).notContainsError('@typescript-eslint/explicit-function-return-type');

    result = await lintTypescript(`
      const numberer = function (fn: (first: number, second: number) => number): number {
        return fn(2, 2);
      };
      
      const foobar = numberer((first, second) => first * second);
    `);

    assertLint(result).notContainsError('@typescript-eslint/explicit-function-return-type');
  });

  test('explicitFunctionReturnType: still requires explicit return types on function declarations.', async (): Promise<void> => {
    const result = await lintTypescript(`    
      const test = () => 3; 
    `);

    assertLint(result).containsError('@typescript-eslint/explicit-function-return-type');
  });

  test('unicorn/require-post-message-target-origin: is deactivated for typescript files to avoid false-positives.', async (): Promise<void> => {
    const passing = await lintTypescript(`window.postMessage('myMessage');`);

    assertLint(passing).notContainsError('unicorn/require-post-message-target-origin');

    // Test the occurnce of the error here - in case we remove it from unicorn we can remove it here in typesscript
    const notPassing = await lintJavascript(`window.postMessage('myMessage');`);

    assertLint(notPassing).containsError('unicorn/require-post-message-target-origin');
  });
});
