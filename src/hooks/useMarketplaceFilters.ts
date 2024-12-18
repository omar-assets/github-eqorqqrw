import { useState, useCallback, useMemo } from 'react';
import { ComingSoonAsset } from '@/data/market/types';

export interface FilterState {
  type: string | null;
  minValue: number | null;
  maxValue: number | null;
  minReturn: number | null;
  maxReturn: number | null;
  riskLevel: string | null;
  search: string;
}

export function useMarketplaceFilters(assets: ComingSoonAsset[]) {
  const [filters, setFilters] = useState<FilterState>({
    type: null,
    minValue: null,
    maxValue: null,
    minReturn: null,
    maxReturn: null,
    riskLevel: null,
    search: ''
  });

  const filteredAssets = useMemo(() => {
    return assets.filter(asset => {
      // Type filter
      if (filters.type && asset.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }

      // Value filter
      const value = parseInt(asset.totalValue.replace(/[^0-9]/g, ''));
      if (filters.minValue && value < filters.minValue) {
        return false;
      }
      if (filters.maxValue && value > filters.maxValue) {
        return false;
      }

      // Return filter
      const returns = parseFloat(asset.expectedReturns);
      if (filters.minReturn && returns < filters.minReturn) {
        return false;
      }
      if (filters.maxReturn && returns > filters.maxReturn) {
        return false;
      }

      // Risk level filter
      if (filters.riskLevel && asset.riskLevel !== filters.riskLevel) {
        return false;
      }

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return (
          asset.title.toLowerCase().includes(searchLower) ||
          asset.description.toLowerCase().includes(searchLower) ||
          asset.type.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [assets, filters]);

  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      type: null,
      minValue: null,
      maxValue: null,
      minReturn: null,
      maxReturn: null,
      riskLevel: null,
      search: ''
    });
  }, []);

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredAssets
  };
}