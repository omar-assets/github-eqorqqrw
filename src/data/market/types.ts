export interface MarketMetrics {
  price: number;
  volume: number;
  marketCap: number;
  percentageChange: number;
  liquidity: number;
}

export interface AssetBase {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  status: string;
}

export interface ComingSoonAsset extends AssetBase {
  totalValue: string;
  fractionPrice: string;
  totalFractions: number;
  expectedReturns: string;
  launchStatus: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  metrics: MarketMetrics;
}