import { Linter } from 'eslint';
import { RuleRecord } from './RuleRecord';
import { isBoolean, isFunction, kebabCase } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const compile = (rule: RuleRecord): Linter.RulesRecord => Object.entries(rule).reduce((compiledRules, ruleEntry): Linter.RulesRecord => {
  const [ ruleKey, ruleValue ] = ruleEntry;

  const compiledKey = kebabCase(ruleKey);

  if (isFunction(ruleValue)) {
    return {
      ...compiledRules,
      ...compile(ruleValue())
    };
  }
  const compiledValue = isBoolean(ruleValue) && !ruleValue ? 'off' : [ 'error' ];

  return {
    ...compiledRules,
    [compiledKey]: compiledValue
  };
}, {});

export {
  compile
};
