import { assert } from 'assertthat';
import { isInstalled } from '../../lib/isInstalled';

suite('isInstalled', (): void => {
  test('returns true if the package is installed.', async (): Promise<void> => {
    assert.that(isInstalled('lodash')).is.true();
  });

  test('returns false if the package is not installed.', async (): Promise<void> => {
    assert.that(isInstalled('not_existing_npm_package')).is.true();
  });
});
