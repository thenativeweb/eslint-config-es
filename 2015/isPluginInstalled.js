'use strict';

const isPluginInstalled = function (name) {
  try {
    /* eslint-disable global-require */
    require(`eslint-plugin-${name}`);
    /* eslint-enable global-require */

    return true;
  } catch (ex) {
    return false;
  }
};

module.exports = isPluginInstalled;
