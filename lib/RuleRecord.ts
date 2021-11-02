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
type ConfigFunction = () => RulesRecord;
type RuleConfig = false | any[] | ConfigFunction;
type RulesKey = string;

type RulesRecord = Record<RulesKey, RuleConfig>;

export type {
  RulesRecord
};
