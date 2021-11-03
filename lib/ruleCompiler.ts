import { BetterRulesRecord } from './BetterRuleRecord';
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
  Object.entries(rule).reduce((compiledRules, ruleEntry): Linter.RulesRecord => {
    const [ ruleName, ruleConfig ] = ruleEntry;

    if (isFunction(ruleConfig)) {
      return {
        ...compiledRules,
        ...compile(ruleConfig({ name: ruleName }))
      };
    }

    const compiledRuleName = compileRuleName(ruleName);
    const compiledValue = ruleConfig === false ? 'off' : [ 'error', ...ruleConfig ];

    return {
      ...compiledRules,
      [compiledRuleName]: compiledValue
    };
  }, {});

export {
  compile
};
