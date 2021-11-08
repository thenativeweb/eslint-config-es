import { assertLint } from '../../shared/assertLint';
import { lintJavaScript, lintJsx, lintTsx } from '../../shared/esLintTester';

suite('react/', function (): void {
  test('jsx-fragments: Short <></> form is not allowed.', async (): Promise<void> => {
    const result = await lintJsx(`<><MyComponent /></>`);

    assertLint(result).containsError('react/jsx-fragments');
  });

  test('linting also works in tsx files.', async (): Promise<void> => {
    // Testing TSX can take a while on CI
    this.timeout(5_000);

    const result = await lintTsx(`<><MyComponent /></>`);

    assertLint(result).containsError('react/jsx-fragments');
  });

  test('jsx-filename-extension: Do not allow jsx in js files.', async (): Promise<void> => {
    const result = await lintJavaScript(`<MyComponent />`);

    assertLint(result).containsError('react/jsx-filename-extension');
  });
});
