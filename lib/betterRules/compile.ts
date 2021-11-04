import { BetterRulesRecord } from './BetterRulesRecord';
import { Linter } from 'eslint';
import { isFunction, kebabCase } from 'lodash';

const compileRuleName = (ruleName: string): string => {
  if (ruleName.includes('/')) {
    const [ plugin, rawRuleName ] = ruleName.split('/');

    return `${plugin}/${kebabCase(rawRuleName)}`;
  }

  return kebabCase(ruleName);
};

const compile = (rule: BetterRulesRecord): Linter.RulesRecord =>
  Object.entries(rule).reduce((compiledRules, ruleRecord): Linter.RulesRecord => {
    const [ ruleName, ruleEntry ] = ruleRecord;

    if (isFunction(ruleEntry)) {
      return {
        ...compiledRules,
        ...compile(ruleEntry({ ruleName }))
      };
    }

    const compiledRuleName = compileRuleName(ruleName);
    const compiledRuleEntry = ruleEntry === false ? 'off' : [ 'error', ...ruleEntry ];

    return {
      ...compiledRules,
      [compiledRuleName]: compiledRuleEntry
    };
  }, {});

export {
  compile
};
