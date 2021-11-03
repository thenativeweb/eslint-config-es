import { assert } from 'assertthat';
import { compile } from '../../lib/betterRules';
import { createConditionalTsHook } from '../../lib/conditionalTsHook';

suite('conditionalTsHook', (): void => {
  test('when language is javascript, returns only the config for the core-rule.', async (): Promise<void> => {
    const jsHook = createConditionalTsHook({ language: 'javascript' });
    const configFunction = jsHook({
      core: [],
      typescript: [ 'always' ]
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: []
    });
  });

  test('when language is typescript, turns off the core rule and adds typescript-config.', async (): Promise<void> => {
    const tsHook = createConditionalTsHook({ language: 'typescript' });
    const configFunction = tsHook({
      core: [],
      typescript: [ 'always' ]
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: false,
      '@eslint-typescript/testRule': [ 'always' ]
    });
  });

  test('when given language javascript and a config with "both", uses it as core-config.', async (): Promise<void> => {
    const jsHook = createConditionalTsHook({ language: 'javascript' });
    const configFunction = jsHook({
      both: []
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: []
    });
  });

  test('when given language typescript and a config with "both", uses it to turn of core-rule and to config typescript.', async (): Promise<void> => {
    const tsHook = createConditionalTsHook({ language: 'typescript' });
    const configFunction = tsHook({
      both: []
    });

    const result = configFunction({ ruleName: 'testRule' });

    assert.that(result).is.equalTo({
      testRule: false,
      '@eslint-typescript/testRule': []
    });
  });

  test('when given to compile-function of betteRules, produces correct eslint rule.', async (): Promise<void> => {
    const tsHook = createConditionalTsHook({ language: 'typescript' });
    const compileResult = compile({
      testRule: tsHook({
        core: [],
        typescript: [ 'always' ]
      })
    });

    assert.that(compileResult).is.equalTo({
      'test-rule': 'off',
      '@eslint-typescript/test-rule': [ 'error', 'always' ]
    });
  });
});
