interface ConfigFunctionArgs {
  ruleName: string;
}

type BetterRulesConfigFunction = (args: ConfigFunctionArgs) => BetterRulesRecord;
type BetterRulesConfig = false | any[] | BetterRulesConfigFunction;
type BetterRulesKey = string;

type BetterRulesRecord = Record<BetterRulesKey, BetterRulesConfig>;

export type {
  BetterRulesRecord,
  BetterRulesConfig,
  BetterRulesConfigFunction
};
