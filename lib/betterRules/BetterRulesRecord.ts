interface EntryFunctionArgs {
  ruleName: string;
}

type BetterRulesEntryFunction = (args: EntryFunctionArgs) => BetterRulesRecord;
type BetterRulesEntry = false | any[] | BetterRulesEntryFunction;
type BetterRulesKey = string;

// This is named "BetterRulesRecord" because we replace the ESLint Type Linter.RulesRecord
type BetterRulesRecord = Record<BetterRulesKey, BetterRulesEntry>;

export type {
  BetterRulesRecord,
  BetterRulesEntry,
  BetterRulesEntryFunction
};
