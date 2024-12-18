import { db } from './config';
import { enableNetwork, disableNetwork } from 'firebase/firestore';
import { logger } from '@/utils/logger';

export const NetworkStatus = {
  ONLINE: 'online',
  OFFLINE: 'offline'
} as const;

export type NetworkStatusType = typeof NetworkStatus[keyof typeof NetworkStatus];

class OfflineManager {
  private static instance: OfflineManager;
  private status: NetworkStatusType = NetworkStatus.ONLINE;
  private listeners: Set<(status: NetworkStatusType) => void> = new Set();

  private constructor() {
    this.initializeNetworkListeners();
  }

  static getInstance(): OfflineManager {
    if (!OfflineManager.instance) {
      OfflineManager.instance = new OfflineManager();
    }
    return OfflineManager.instance;
  }

  private initializeNetworkListeners(): void {
    window.addEventListener('online', () => this.handleNetworkChange(true));
    window.addEventListener('offline', () => this.handleNetworkChange(false));
  }

  private async handleNetworkChange(isOnline: boolean): Promise<void> {
    try {
      if (isOnline) {
        await enableNetwork(db);
        this.status = NetworkStatus.ONLINE;
        logger.info('Network connection restored');
      } else {
        await disableNetwork(db);
        this.status = NetworkStatus.OFFLINE;
        logger.warn('Network connection lost, switching to offline mode');
      }
      
      this.notifyListeners();
    } catch (error) {
      logger.error('Error handling network change:', error);
    }
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.status));
  }

  public addStatusListener(listener: (status: NetworkStatusType) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public getStatus(): NetworkStatusType {
    return this.status;
  }

  public isOnline(): boolean {
    return this.status === NetworkStatus.ONLINE;
  }
}

export const offlineManager = OfflineManager.getInstance();