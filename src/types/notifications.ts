export interface NotificationThresholds {
  min?: number;
  max?: number;
}

export interface AssetNotification {
  id: string;
  userId: string;
  assetId: string;
  type: 'price-alert' | 'trading-activity' | 'news-update' | 'launch-alert';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  thresholds?: NotificationThresholds;
}

export interface NotificationFiltersType {
  types: string[];
  dateRange: '24h' | '7d' | '30d' | 'all';
  status: 'all' | 'read' | 'unread';
}