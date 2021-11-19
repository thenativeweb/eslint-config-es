import { usePlugin } from '../betterRules';

const comments = usePlugin('eslint-comments', {
  disableEnablePair: [],
  noAggregatingEnable: [],
  noDuplicateDisable: [],
  noUnlimitedDisable: [],
  noUnusedDisable: [],
  noUnusedEnable: [],
  noRestrictedDisable: false,
  noUse: false,

  // TODO [eslint-plugin-eslint-comments@>3.2.0]: This should be turned on,
  // once https://github.com/mysticatea/eslint-plugin-pull/56
  // has been merged.
  requireDescription: false
});

export {
  comments
};
