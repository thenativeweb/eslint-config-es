import { usePlugin } from '../betterRules';

// Can not name it 'import' as this is a reserved keyword
const importRules = usePlugin('import', {
  default: [],

  dynamicImportChunkname: false,

  export: [],
  exportsLast: [],

  // Review: Do we want to allow imports with file extensions?
  extensions: [ 'never' ],
  first: [],
  groupExports: [],

  // Deprecated rule, superseded by 'first'
  importsFirst: false,
  maxDependencies: false,

  // This rule is actually not necessary for typescript - lets see if we remove it
  named: [],
  namespace: [],

  // Review: Do we want more than 1 line here?
  newlineAfterImport: [],
  noAbsolutePath: [],

  // Review: What about AMD Imports? Are they allowed?
  noAmd: false,

  // Not needed as we have enabled noDefaultExport anyways
  noAnonymousDefaultExport: false,
  noCommonjs: false,

  // Review: this rule can slow down linting on large projects - do we want it?
  noCycle: [{
    maxDepth: undefined,
    ignoreExternal: false
  }],

  noDefaultExport: [],
  noDeprecated: [],

  // Review: Almost same as core/no-duplicate-imports - but detects if imports point to same file. Do we want it or leave it to core?
  noDuplicates: false,

  // Review: Note sure if tnw uses this?
  noDynamicRequire: false,

  // Review: This rule enabled would prevent importing eslint in this package (as it ise a peer dependency of roboter). This is something Hannes would fix - than we can think about enabling it?
  noExtraneousDependencies: false,
  noImportModuleExports: [],

  // This rule is project specific and does not make sense to enable globally
  noInternalModules: false,
  noMutableExports: [],
  noNamedAsDefaultMember: [],
  noNamedAsDefault: [],
  noNamedDefault: [],
  noNamedExport: false,
  noNamespace: false,
  noNodejsModules: false,

  // Review: Not sure about this one - we use it at a client sometimes
  noRelativePackages: false,

  // Review: Tried this rule - its very strict and fails in this repo. Recommend not to use it (even though it sounds quite nice)
  noRelativeParentImports: false,
  noRestrictedPaths: false,
  noSelfImport: [],

  // Review: Maybe useful with exceptions (like for importing .css in react)?
  noUnassignedImport: false,
  noUnresolved: [{ commonjs: true, amd: true }],

  // Review: Currently unusable, as non-found files in `ignoreExports` will actually crash the eslint process - so we have no way of defining some common paths (e.g. index.{js|ts}) that do not exit outside
  // of this repository.
  // Also see: https://github.com/import-js/eslint-plugin-import/issues/2128
  // Maybe we can use it once that was fixed?
  noUnusedModules: false,

  // Review: This is what the config might look like
  // [{
  //   missingExports: true,
  //   unusedExports: true,
  //   ignoreExports: [
  //     './lib/index.ts',
  //     './test/**'
  //   ]
  // }],
  noUselessPathSegments: [],
  noWebpackLoaderSyntax: false,

  // Review: Ordering does not support sorting by single- and multi exports like the core-features does
  // It works by assining groups - which I guess is not what we want
  order: false,
  preferDefaultEport: false,
  unambiguous: false
});

export {
  importRules
};
