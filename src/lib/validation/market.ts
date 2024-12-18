import { z } from 'zod';
import { ASSET_TYPES, LAUNCH_STATUS } from '@/data/market/constants';

export const assetSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  type: z.enum(Object.values(ASSET_TYPES) as [string, ...string[]]),
  description: z.string(),
  totalValue: z.string(),
  fractionPrice: z.string(),
  totalFractions: z.number().positive(),
  expectedReturns: z.string(),
  image: z.string().url(),
  launchStatus: z.enum(Object.values(LAUNCH_STATUS) as [string, ...string[]]),
  riskLevel: z.enum(['Low', 'Medium', 'High']),
  status: z.string(),
  metrics: z.object({
    price: z.number(),
    volume: z.number(),
    marketCap: z.number(),
    percentageChange: z.number(),
    liquidity: z.number()
  })
});

export const filterSchema = z.object({
  type: z.string().nullable(),
  minValue: z.number().nullable(),
  maxValue: z.number().nullable(),
  minReturn: z.number().nullable(),
  maxReturn: z.number().nullable(),
  riskLevel: z.string().nullable(),
  search: z.string()
});

export type AssetSchema = z.infer<typeof assetSchema>;
export type FilterSchema = z.infer<typeof filterSchema>;