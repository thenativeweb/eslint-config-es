import { usePlugin } from '../betterRules';

const extended = usePlugin('extended', {
  // eslint-disable-next-line extended/consistent-err-names
  consistentErrNames: [ 'prefix' ]
});

export {
  extended
};
