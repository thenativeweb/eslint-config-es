const isInstalled = function (...names: string[]): boolean {
  if (names.length === 0) {
    throw new Error('Names are missing.');
  }

  for (const name of names) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
      require(name);
    } catch {
      return false;
    }
  }

  return true;
};

export {
  isInstalled
};
