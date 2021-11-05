import { assert } from 'assertthat';
import { PickRuleRecord, pickRulesFor } from '../../lib/pickRulesFor';

suite('pickRuleFor', (): void => {
  test('for language javascript, picks the core rule and converts it to a BetterRuleRecord.', async (): Promise<void> => {
    const rules: PickRuleRecord = {
      testRule: {
        core: [],
        typeScript: false
      }
    };

    const pickedRules = pickRulesFor({ language: 'javaScript' }, rules);

    assert.that(pickedRules).is.equalTo({
      testRule: []
    });
  });

  test('for language typescript, deactivates the core rule, picks typeScript and prefixes ruleName with "@typescript-eslint".', async (): Promise<void> => {
    const rules: PickRuleRecord = {
      testRule: {
        core: [],
        typeScript: [ 'always' ]
      }
    };

    const pickedRules = pickRulesFor({ language: 'typeScript' }, rules);

    assert.that(pickedRules).is.equalTo({
      testRule: false,
      '@typescript-eslint/testRule': [ 'always' ]
    });
  });

  test('when given a shared entry, picks it for javaScript.', async (): Promise<void> => {
    const rules: PickRuleRecord = {
      testRule: {
        shared: []
      }
    };

    const pickedRules = pickRulesFor({ language: 'javaScript' }, rules);

    assert.that(pickedRules).is.equalTo({
      testRule: [ ]
    });
  });

  test('when given a shared entry, picks it for typeScript and deactivates it for core.', async (): Promise<void> => {
    const rules: PickRuleRecord = {
      testRule: {
        shared: []
      }
    };

    const pickedRules = pickRulesFor({ language: 'typeScript' }, rules);

    assert.that(pickedRules).is.equalTo({
      testRule: false,
      '@typescript-eslint/testRule': []
    });
  });

  test('picks all given rules.', async (): Promise<void> => {
    const rules: PickRuleRecord = {
      testRule1: { shared: []},
      testRule2: { shared: []}
    };

    const pickedRules = pickRulesFor({ language: 'javaScript' }, rules);

    assert.that(pickedRules).is.equalTo({
      testRule1: [],
      testRule2: []
    });
  });
});
