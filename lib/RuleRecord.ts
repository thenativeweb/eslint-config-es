// DefaultCase: [],
// eqeqeq: [ 'always' ],
// noProcessExit: {
//   core: false,
//   unicorn: [ '...' ]
// },
// braceStyle: {
//   core: [ ... ],
//   typescript: [ ... ]
// },
type ConfigFunction = () => RuleRecord;
type RuleConfig = boolean | any[] | ConfigFunction;
type RuleRecord = Record<string, RuleConfig>;

export type {
  RuleRecord
};
