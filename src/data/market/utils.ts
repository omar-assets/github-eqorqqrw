import { MARKET_RANGES } from './constants';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

export function generateRandomMetrics(): MarketMetrics {
  const marketCap = Math.random() * 
    (MARKET_RANGES.MARKET_CAP.MAX - MARKET_RANGES.MARKET_CAP.MIN) + 
    MARKET_RANGES.MARKET_CAP.MIN;

  const volume = Math.random() * 
    (MARKET_RANGES.VOLUME.MAX - MARKET_RANGES.VOLUME.MIN) + 
    MARKET_RANGES.VOLUME.MIN;

  const percentageChange = Math.random() * 
    (MARKET_RANGES.PERCENTAGE_CHANGE.MAX - MARKET_RANGES.PERCENTAGE_CHANGE.MIN) + 
    MARKET_RANGES.PERCENTAGE_CHANGE.MIN;

  return {
    price: Math.random() * 
      (MARKET_RANGES.PRICE.MAX - MARKET_RANGES.PRICE.MIN) + 
      MARKET_RANGES.PRICE.MIN,
    volume,
    marketCap,
    percentageChange,
    liquidity: volume / marketCap
  };
}