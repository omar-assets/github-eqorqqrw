export const INVESTOR_TYPES = {
  INDIVIDUAL: 'individual',
  INSTITUTIONAL: 'institutional'
} as const;

export const RISK_TOLERANCE = {
  CONSERVATIVE: 'conservative',
  MODERATE: 'moderate',
  AGGRESSIVE: 'aggressive'
} as const;

export type InvestorType = typeof INVESTOR_TYPES[keyof typeof INVESTOR_TYPES];
export type RiskTolerance = typeof RISK_TOLERANCE[keyof typeof RISK_TOLERANCE];