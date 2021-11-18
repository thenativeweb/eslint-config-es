import { usePlugin } from '../betterRules';

// Can not name it 'import' as this is a reserved keyword
const importRules = usePlugin('import', {
  default: [],

  // This rule only makes sense in projects that use webpack
  dynamicImportChunkname: false,
  export: [],
  exportsLast: [],
  extensions: [ 'never' ],
  first: [],
  groupExports: [],

  // Deprecated rule, superseded by 'first'
  importsFirst: false,
  maxDependencies: false,
  named: [],
  namespace: [],
  newlineAfterImport: [{ count: 1 }],
  noAbsolutePath: [],
  noAmd: [],
  noAnonymousDefaultExport: [],

  // Todo [2021-11-18]: Move to sharedImportTypescript
  // Error for TypeScript, Okay for JavaScript
  noCommonjs: [],

  // This rule is computational expensive and might slow down our IDEs, so we keep it off
  noCycle: false,
  noDefaultExport: [],
  noDeprecated: [],
  noDuplicates: [],
  noDynamicRequire: [],
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
  noRelativePackages: [],
  noRelativeParentImports: false,
  noRestrictedPaths: false,
  noSelfImport: [],
  noUnassignedImport: [],
  noUnresolved: [{
    commonjs: true,
    amd: true,
    caseSensitive: true,
    caseSensitiveStrict: true
  }],

  // Currently unusable, as non-found files in `ignoreExports` will actually
  // crash the eslint process - so we have no way of defining some common paths
  // (e.g. index.{js|ts}) that do not exit outside of this repository.
  // Also see: https://github.com/import-js/eslint-plugin-import/issues/2128
  noUnusedModules: false,
  noUselessPathSegments: [],
  noWebpackLoaderSyntax: [],

  // Ordering does not support sorting by single- and multi exports like the core-features does
  // It works by assining groups - which I guess is not what we want
  order: false,
  preferDefaultEport: false,
  unambiguous: []
});

export {
  importRules
};
