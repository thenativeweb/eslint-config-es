'use strict';

const isInstalled = function (...names) {
  if (names.length === 0) {
    throw new Error('Names are missing.');
  }

  for (const name of names) {
    try {
      /* eslint-disable global-require */
      require(name);
      /* eslint-enable global-require */

      /* eslint-disable no-unused-vars */
      // Theoretically, ex is not needed here, but Atom uses an older Node.js
      // version internally which is not able to deal with optional catch
      // bindings. Hence we disable this rule here instead of removing the
      // non-needed variable.
    } catch (ex) {
      /* eslint-enable no-unused-vars */
      return false;
    }
  }

  return true;
};

module.exports = isInstalled;
