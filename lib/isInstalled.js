'use strict';

const isInstalled = function ({ name }) {
  if (!name) {
    throw new Error('Name is missing.');
  }

  try {
    /* eslint-disable global-require */
    require(name);
    /* eslint-enable global-require */

    return true;
    /* eslint-disable no-unused-vars */
    // Theoretically, ex is not needed here, but Atom uses an older Node.js
    // version internally which is not able to deal with optional catch
    // bindings. Hence we disable this rule here instead of removing the
    // non-needed variable.
  } catch (ex) {
    /* eslint-disable no-unused-vars */
    return false;
  }
};

module.exports = isInstalled;
