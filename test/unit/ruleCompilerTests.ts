import { assert } from 'assertthat';
import { compile } from '../../lib/ruleCompiler';
import { RuleRecord } from '../../lib/RuleRecord';

suite('rulesCompiler', (): void => {
  test('compiles a rule with a  boolean to a deactivated rule.', async (): Promise<void> => {
    const rule: RuleRecord = {
      eqeqeq: false
    };

    const result = compile(rule);

    assert.that(result.eqeqeq).is.equalTo('off');
  });

  test('converts the given camelCased key to kebab-case.', async (): Promise<void> => {
    const rule: RuleRecord = {
      noBraces: false
    };

    const result = compile(rule);

    assert.that(result['no-braces']).is.not.undefined();
  });

  test('compiles a rule with an empty array to a rule with ["error"].', async (): Promise<void> => {
    const rule: RuleRecord = {
      eqeqeq: []
    };

    const result = compile(rule);
    const actualRule = result.eqeqeq as any[];

    assert.that(actualRule.length).is.equalTo(1);
    assert.that(actualRule[0]).is.equalTo('error');
  });

  test('compiles a rule with a function by using the functions return value.', async (): Promise<void> => {
    const rule: RuleRecord = {
      eqeqeq (): RuleRecord {
        return {
          yoda: false
        };
      }
    };

    const { eqeqeq, yoda } = compile(rule);

    assert.that(yoda).is.equalTo('off');
    assert.that(eqeqeq).is.undefined();
  });

  test('compiles all given rules of the RulesRecord.', async (): Promise<void> => {
    const rule: RuleRecord = {
      eqeqeq: [],
      yoda: false
    };

    const { eqeqeq, yoda } = compile(rule);

    assert.that(eqeqeq).is.not.undefined();
    assert.that(yoda).is.not.undefined();
  });
});
