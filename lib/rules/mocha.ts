import { usePlugin } from '../betterRules/usePlugin';

const mochaRules = usePlugin('mocha', {
  handleDoneCallback: [{ ignoreSkipped: false }],
  maxTopLevelSuites: [{ limit: 1 }],
  noAsyncDescribe: [],
  noExclusiveTests: [],
  noExports: [],
  noGlobalTests: [],
  noHooks: false,
  noHooksForSingleCase: false,
  noIdenticalTitle: [],
  noMochaArrows: false,
  noNestedTests: [],
  noPendingTests: [],
  noReturnAndCallback: [],
  noReturnFromAsync: [],
  noSetupInDescribe: false,
  noSiblingHooks: [],
  noSkippedTests: [],
  noSynchronousTests: [],
  noTopLevelHooks: [],
  preferArrowCallback: false,
  validSuiteDescription: [ '[^\\.]$' ],
  validTestDescription: [ '\\.$' ]
});

export {
  mochaRules
};
