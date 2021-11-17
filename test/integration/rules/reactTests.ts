import { assertLint } from '../../shared/assertLint';
import { lintJavascript, lintJsx, lintTsx } from '../../shared/esLintTester';

suite('react/', (): void => {
  test('jsx-fragments: Short <></> form is not allowed.', async (): Promise<void> => {
    const result = await lintJsx(`<><MyComponent /></>`);

    assertLint(result).containsError('react/jsx-fragments');
  });

  test('linting also works in tsx files.', async (): Promise<void> => {
    const result = await lintTsx(`<><MyComponent /></>`);

    assertLint(result).containsError('react/jsx-fragments');

  // Testing TSX can take a while on CI, so we raise the timeout here
  }).timeout(5_000);

  test('jsx-filename-extension: Do not allow jsx in js files.', async (): Promise<void> => {
    const result = await lintJavascript(`<MyComponent />`);

    assertLint(result).containsError('react/jsx-filename-extension');
  });
});
