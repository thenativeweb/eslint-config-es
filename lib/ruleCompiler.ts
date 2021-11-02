import { Linter } from 'eslint';
import { RulesRecord } from './RuleRecord';
import { isFunction, kebabCase } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const compile = (rule: RulesRecord): Linter.RulesRecord => Object.entries(rule).reduce((compiledRules, ruleEntry): Linter.RulesRecord => {
  const [ ruleKey, ruleValue ] = ruleEntry;

  if (isFunction(ruleValue)) {
    return {
      ...compiledRules,
      ...compile(ruleValue())
    };
  }

  ruleKey.split('/');
  const compiledKey = kebabCase(ruleKey);
  const compiledValue = ruleValue === false ? 'off' : [ 'error', ...ruleValue ];

  return {
    ...compiledRules,
    [compiledKey]: compiledValue
  };
}, {});

export {
  compile
};
