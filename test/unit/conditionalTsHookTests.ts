import { assert } from 'assertthat';
import { compile } from '../../lib/betterRules';
import { createOverrideFor } from '../../lib/conditionalTsHook';

suite('conditionalTsHook', (): void => {
  test('when language is javaScript, returns only the config for the core-rule.', async (): Promise<void> => {
    const jsHook = createOverrideFor({ language: 'javaScript' });
    const configFunction = jsHook({
      core: [],
      typeScript: [ 'always' ]
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: []
    });
  });

  test('when language is typeScript, turns off the core rule and adds typeScript-config.', async (): Promise<void> => {
    const tsHook = createOverrideFor({ language: 'typeScript' });
    const configFunction = tsHook({
      core: [],
      typeScript: [ 'always' ]
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: false,
      '@typescript-eslint/testRule': [ 'always' ]
    });
  });

  test('when given language javaScript and a config with "both", uses it as core-config.', async (): Promise<void> => {
    const jsHook = createOverrideFor({ language: 'javaScript' });
    const configFunction = jsHook({
      both: []
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: []
    });
  });

  test('when given language typeScript and a config with "both", uses it to turn of core-rule and to config typeScript.', async (): Promise<void> => {
    const tsHook = createOverrideFor({ language: 'typeScript' });
    const configFunction = tsHook({
      both: []
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: false,
      '@typescript-eslint/testRule': []
    });
  });

  test('when given to compile-function of betteRules, produces correct eslint rule.', async (): Promise<void> => {
    const tsHook = createOverrideFor({ language: 'typeScript' });
    const compileResult = compile({
      testRule: tsHook({
        core: [],
        typeScript: [ 'always' ]
      })
    });

    assert.that(compileResult).is.equalTo({
      'test-rule': 'off',
      '@typescript-eslint/test-rule': [ 'error', 'always' ]
    });
  });
});
