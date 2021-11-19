import { kebabCase } from 'lodash';
import { Linter } from 'eslint';
import { BetterRulesEntry, BetterRulesRecord } from './BetterRulesRecord';

const compileRuleName = (ruleName: string): string => {
  if (ruleName.includes('/')) {
    const [ plugin, rawRuleName ] = ruleName.split('/');

    return `${plugin}/${kebabCase(rawRuleName)}`;
  }

  return kebabCase(ruleName);
};

const compileRuleEntry = (ruleEntry: BetterRulesEntry): Linter.RuleEntry => {
  if (ruleEntry === false) {
    return 'off';
  }

  return [ 'error', ...ruleEntry ];
};

const compile = (rule: BetterRulesRecord): Linter.RulesRecord => {
  const compiledRules: Linter.RulesRecord = {};

  for (const [ ruleName, ruleEntry ] of Object.entries(rule)) {
    const compiledRuleName = compileRuleName(ruleName);
    const compiledRuleEntry = compileRuleEntry(ruleEntry);

    compiledRules[compiledRuleName] = compiledRuleEntry;
  }

  return compiledRules;
};

export {
  compile
};
