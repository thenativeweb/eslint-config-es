import { BetterRulesRecord } from './BetterRuleRecord';
import { curry, mapKeys } from 'lodash';

const usePlugin = curry(
  (pluginName: string, rules: BetterRulesRecord): BetterRulesRecord =>
    mapKeys(rules, (value, key): string => `${pluginName}/${key}`)
);

export {
  usePlugin
};
