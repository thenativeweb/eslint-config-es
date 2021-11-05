import { BetterRulesRecord, withPlugin } from '../betterRules';

const reactHooks: BetterRulesRecord = withPlugin('react-hooks', {
  rulesOfHooks: [],
  exhaustiveDeps: []
});

export {
  reactHooks
};
