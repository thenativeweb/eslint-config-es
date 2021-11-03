interface ConfigFunctionArgs {
  ruleName: string;
}

type ConfigFunction = (args: ConfigFunctionArgs) => BetterRulesRecord;
type BetterRuleConfig = false | any[] | ConfigFunction;
type BetterRulesKey = string;

type BetterRulesRecord = Record<BetterRulesKey, BetterRuleConfig>;

export type {
  BetterRulesRecord
};
