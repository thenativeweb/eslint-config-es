import { assert } from 'assertthat';
import { usePlugin } from '../../../lib/betterRules/usePlugin';

suite('usePlugin', (): void => {
  test('attaches the given plugin name to all given rules.', async (): Promise<void> => {
    const rules = usePlugin('@eslint-typescript', {
      firstRule: false,
      secondRule: []
    });

    assert.that(rules).is.equalTo({
      '@eslint-typescript/firstRule': false,
      '@eslint-typescript/secondRule': []
    });
  });

  test('uses currying to allow predefined hooks.', async (): Promise<void> => {
    const useTypescript = usePlugin('@eslint-typescript');

    const rules = useTypescript({
      myRule: false
    });

    assert.that(rules).is.equalTo({
      '@eslint-typescript/myRule': false
    });
  });
});
