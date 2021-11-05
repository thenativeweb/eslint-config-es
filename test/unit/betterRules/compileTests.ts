import { assert } from 'assertthat';
import { BetterRulesRecord } from '../../../lib/betterRules/BetterRulesRecord';
import { compile } from '../../../lib/betterRules/compile';

suite('rulesCompiler', (): void => {
  test('compiles a rule with a boolean to a deactivated rule.', async (): Promise<void> => {
    const rule: BetterRulesRecord = {
      eqeqeq: false
    };

    const result = compile(rule);

    assert.that(result.eqeqeq).is.equalTo('off');
  });

  test('converts the given camelCased key to kebab-case.', async (): Promise<void> => {
    const rule: BetterRulesRecord = {
      noBraces: false
    };

    const result = compile(rule);

    assert.that(result['no-braces']).is.not.undefined();
  });

  test('leaves plugin-names intact when converting.', async (): Promise<void> => {
    const rule: BetterRulesRecord = {
      '@eslint-typescript/noBraces': false
    };

    const result = compile(rule);

    assert.that(result).is.equalTo({
      '@eslint-typescript/no-braces': 'off'
    });
  });

  test('compiles a rule with an empty array to a rule with ["error"].', async (): Promise<void> => {
    const rule: BetterRulesRecord = {
      eqeqeq: []
    };

    const result = compile(rule);
    const actualRule = result.eqeqeq as any[];

    assert.that(actualRule.length).is.equalTo(1);
    assert.that(actualRule[0]).is.equalTo('error');
  });

  test('compiles a rule with an array configuration to a rule with ["error", ...configurations].', async (): Promise<void> => {
    const customConfig = {
      test: 'value'
    };
    const rule: BetterRulesRecord = {
      eqeqeq: [ 'always', customConfig ]
    };

    const result = compile(rule);
    const actualRule = result.eqeqeq as any[];

    assert.that(actualRule.length).is.equalTo(3);
    assert.that(actualRule).is.equalTo([ 'error', 'always', customConfig ]);
  });

  test('compiles multiple given rules of the RulesRecord.', async (): Promise<void> => {
    const rule: BetterRulesRecord = {
      eqeqeq: [],
      indent: false
    };

    const { eqeqeq, indent } = compile(rule);

    assert.that(eqeqeq).is.not.undefined();
    assert.that(indent).is.not.undefined();
  });
});
