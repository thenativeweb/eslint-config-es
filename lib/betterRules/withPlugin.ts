import { BetterRulesRecord } from './BetterRulesRecord';
import { curry, mapKeys } from 'lodash';

const withPlugin = curry(
  (pluginName: string, rules: BetterRulesRecord): BetterRulesRecord =>
    mapKeys(rules, (value, key): string => `${pluginName}/${key}`)
);

export {
  withPlugin
};
