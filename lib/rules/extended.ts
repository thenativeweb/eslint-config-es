import { BetterRulesRecord, usePlugin } from '../betterRules';

const extended: BetterRulesRecord = usePlugin('extended')({
  // eslint-disable-next-line extended/consistent-err-names
  consistentErrNames: [ 'prefix' ]
});

export {
  extended
};
