import { LAUNCH_STATUS, ASSET_TYPES } from './constants';
import { ComingSoonAsset } from './types';
import { generateRandomMetrics } from './utils';

export const comingSoonAssets: ComingSoonAsset[] = [
  {
    id: 'luxury-penthouse-1',
    title: 'Luxury Manhattan Penthouse',
    type: ASSET_TYPES.REAL_ESTATE,
    description: 'Premium penthouse in prime Manhattan location',
    totalValue: '$2,500,000',
    fractionPrice: '$1,000',
    totalFractions: 2500,
    expectedReturns: '+8.5% annually',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'Low',
    status: 'Opening Soon: 2,500 fractions',
    metrics: generateRandomMetrics()
  },
  // Add Classic Car Collection
  {
    id: 'classic-cars-1',
    title: 'Vintage European Sports Cars',
    type: ASSET_TYPES.VEHICLES,
    description: 'Curated collection of rare European sports cars from the 1960s',
    totalValue: '$4,800,000',
    fractionPrice: '$2,000',
    totalFractions: 2400,
    expectedReturns: '+12.5% annually',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'Medium',
    status: 'Opening Soon: 2,400 fractions',
    metrics: generateRandomMetrics()
  },
  // Add Luxury Supercar Portfolio
  {
    id: 'supercars-1',
    title: 'Modern Supercar Portfolio',
    type: ASSET_TYPES.VEHICLES,
    description: 'Investment-grade collection of limited edition supercars',
    totalValue: '$7,500,000',
    fractionPrice: '$5,000',
    totalFractions: 1500,
    expectedReturns: '+15.5% annually',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'High',
    status: 'Opening Soon: 1,500 fractions',
    metrics: generateRandomMetrics()
  },
  // Add Digital Real Estate
  {
    id: 'metaverse-estate-1',
    title: 'Premium Metaverse Real Estate',
    type: ASSET_TYPES.DIGITAL_ASSETS,
    description: 'Portfolio of prime locations in leading metaverse platforms',
    totalValue: '$1,500,000',
    fractionPrice: '$500',
    totalFractions: 3000,
    expectedReturns: '+25.5% annually',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'High',
    status: 'Opening Soon: 3,000 fractions',
    metrics: generateRandomMetrics()
  },
  // Add Digital Art Collection
  {
    id: 'digital-art-1',
    title: 'Blue-Chip NFT Collection',
    type: ASSET_TYPES.DIGITAL_ASSETS,
    description: 'Curated portfolio of prestigious NFT artworks and collectibles',
    totalValue: '$2,800,000',
    fractionPrice: '$1,000',
    totalFractions: 2800,
    expectedReturns: '+20.5% annually',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'High',
    status: 'Opening Soon: 2,800 fractions',
    metrics: generateRandomMetrics()
  },
  // Existing assets...
  {
    id: 'tech-startup-1',
    title: 'AI Technology Startup',
    type: ASSET_TYPES.BUSINESS_EQUITY,
    description: 'Early-stage AI technology company with breakthrough innovations',
    totalValue: '$5,000,000',
    fractionPrice: '$2,500',
    totalFractions: 2000,
    expectedReturns: '+15% annually',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.TBA,
    riskLevel: 'High',
    status: 'Opening Soon: 2,000 fractions',
    metrics: generateRandomMetrics()
  },
  {
    id: 'art-collection-1',
    title: 'Contemporary Art Collection',
    type: ASSET_TYPES.ART,
    description: 'Curated collection of contemporary masterpieces',
    totalValue: '$1,000,000',
    fractionPrice: '$500',
    totalFractions: 2000,
    expectedReturns: '+10% annually',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'Medium',
    status: 'Opening Soon: 2,000 fractions',
    metrics: generateRandomMetrics()
  },
  {
    id: 'luxury-villa-1',
    title: 'Mediterranean Villa Portfolio',
    type: ASSET_TYPES.REAL_ESTATE,
    description: 'Collection of luxury villas in prime Mediterranean locations',
    totalValue: '$8,500,000',
    fractionPrice: '$5,000',
    totalFractions: 1700,
    expectedReturns: '+7.8% annually',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'Low',
    status: 'Opening Soon: 1,700 fractions',
    metrics: generateRandomMetrics()
  },
  {
    id: 'jewelry-collection-1',
    title: 'Rare Diamond Collection',
    type: ASSET_TYPES.JEWELRY,
    description: 'Curated collection of investment-grade diamonds',
    totalValue: '$3,000,000',
    fractionPrice: '$2,000',
    totalFractions: 1500,
    expectedReturns: '+6.5% annually',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
    launchStatus: LAUNCH_STATUS.COMING_SOON,
    riskLevel: 'Low',
    status: 'Opening Soon: 1,500 fractions',
    metrics: generateRandomMetrics()
  }
];