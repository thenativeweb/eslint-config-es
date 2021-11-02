import { assert } from 'assertthat';
import { compile } from '../../lib/ruleCompiler';
import { RulesRecord } from '../../lib/RuleRecord';

suite('rulesCompiler', (): void => {
  test('compiles a rule with a  boolean to a deactivated rule.', async (): Promise<void> => {
    const rule: RulesRecord = {
      eqeqeq: false
    };

    const result = compile(rule);

    assert.that(result.eqeqeq).is.equalTo('off');
  });

  test('converts the given camelCased key to kebab-case.', async (): Promise<void> => {
    const rule: RulesRecord = {
      noBraces: false
    };

    const result = compile(rule);

    assert.that(result['no-braces']).is.not.undefined();
  });

  test('leaves plugin-names in tact when converting.', async (): Promise<void> => {
    const rule: RulesRecord = {
      'unicorn/noBraces': false
    };

    const result = compile(rule);

    assert.that(result).is.equalTo({
      'unicorn/noBraces': 'off'
    });
  });

  test('compiles a rule with an empty array to a rule with ["error"].', async (): Promise<void> => {
    const rule: RulesRecord = {
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
    const rule: RulesRecord = {
      eqeqeq: [ 'always', customConfig ]
    };

    const result = compile(rule);
    const actualRule = result.eqeqeq as any[];

    assert.that(actualRule.length).is.equalTo(3);
    assert.that(actualRule).is.equalTo([ 'error', 'always', customConfig ]);
  });

  test('compiles a rule with a function to a rule compiling the functions return value.', async (): Promise<void> => {
    const rule: RulesRecord = {
      eqeqeq (): RulesRecord {
        return {
          indent: false
        };
      }
    };

    const { eqeqeq, indent } = compile(rule);

    assert.that(indent).is.equalTo('off');
    assert.that(eqeqeq).is.undefined();
  });

  test('compiles all given rules of the RulesRecord.', async (): Promise<void> => {
    const rule: RulesRecord = {
      eqeqeq: [],
      indent: false
    };

    const { eqeqeq, indent } = compile(rule);

    assert.that(eqeqeq).is.not.undefined();
    assert.that(indent).is.not.undefined();
  });
});
