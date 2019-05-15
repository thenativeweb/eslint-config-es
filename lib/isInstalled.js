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
  } catch {
    return false;
  }
};

module.exports = isInstalled;
