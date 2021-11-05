import { withPlugin } from '../betterRules';

const extended = withPlugin('extended', {
  // eslint-disable-next-line extended/consistent-err-names
  consistentErrNames: [ 'prefix' ]
});

export {
  extended
};
