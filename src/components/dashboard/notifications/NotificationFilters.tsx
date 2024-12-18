import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NotificationFiltersType } from '@/types/notifications';

interface NotificationFiltersProps {
  onClose: () => void;
  onFilterChange: (filters: NotificationFiltersType) => void;
}

export function NotificationFilters({ onClose, onFilterChange }: NotificationFiltersProps) {
  const [filters, setFilters] = useState({
    types: [] as string[],
    dateRange: '7d',
    status: 'all'
  });

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    const newFilters = {
      ...filters,
      types: selectedOptions
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = {
      ...filters,
      [key]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">Filter Notifications</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Notification Types */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            value={filters.types}
            onChange={handleTypeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
            multiple
          >
            {[
              { value: 'price-alert', label: 'Price Alerts' },
              { value: 'trading-activity', label: 'Trading Activity' },
              { value: 'news-update', label: 'News Updates' },
              { value: 'launch-alert', label: 'Launch Alerts' }
            ].map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Period
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="all">All Time</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
    </div>
  );
}