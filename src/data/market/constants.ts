// Asset type constants to ensure consistency
export const ASSET_TYPES = {
  REAL_ESTATE: 'Real Estate',
  VEHICLES: 'Vehicles',
  JEWELRY: 'Jewelry',
  DIGITAL_ASSETS: 'Digital Assets',
  BUSINESS_EQUITY: 'Business Equity',
  ART: 'Art'
} as const;

// Market data constants and ranges
export const MARKET_RANGES = {
  PRICE: {
    MIN: 10,
    MAX: 100_000
  },
  VOLUME: {
    MIN: 10_000,
    MAX: 1_000_000_000 // $1B
  },
  MARKET_CAP: {
    MIN: 1_000_000, // $1M
    MAX: 500_000_000_000 // $500B
  },
  PERCENTAGE_CHANGE: {
    MIN: -15,
    MAX: 15
  }
} as const;

export const LAUNCH_STATUS = {
  COMING_SOON: 'Coming Soon',
  TBA: 'TBA',
  LAUNCHING_SOON: 'Launching Soon',
  OPENING_SOON: 'Opening Soon'
} as const;