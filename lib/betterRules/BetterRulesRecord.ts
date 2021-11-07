type BetterRulesEntry = false | any[];
type BetterRulesKey = string;

// This is named "BetterRulesRecord" because we replace the ESLint built-in type "Linter.RulesRecord".
type BetterRulesRecord = Record<BetterRulesKey, BetterRulesEntry>;

export type {
  BetterRulesRecord,
  BetterRulesEntry
};
