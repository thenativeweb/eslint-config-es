const isInstalled = function (...names: string[]): boolean {
  if (names.length === 0) {
    throw new Error('Names are missing.');
  }

  for (const name of names) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      import(name);

      // Theoretically, ex is not needed here, but Atom uses an older Node.js
      // version internally which is not able to deal with optional catch
      // bindings. Hence we disable this rule here instead of removing the
      // non-needed variable.
      // eslint-disable-next-line no-unused-vars, unicorn/prefer-optional-catch-binding
    } catch (ex: unknown) {
      return false;
    }
  }

  return true;
};

export {
  isInstalled
};
