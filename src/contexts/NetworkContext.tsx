import React, { createContext, useContext, useEffect, useState } from 'react';
import { offlineManager, NetworkStatusType, NetworkStatus } from '@/lib/firebase/offline';
import { Toast } from '@/components/ui/Toast';

interface NetworkContextType {
  isOnline: boolean;
  status: NetworkStatusType;
}

const NetworkContext = createContext<NetworkContextType>({
  isOnline: true,
  status: NetworkStatus.ONLINE
});

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<NetworkStatusType>(offlineManager.getStatus());
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const unsubscribe = offlineManager.addStatusListener((newStatus) => {
      setStatus(newStatus);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });

    return unsubscribe;
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline: status === NetworkStatus.ONLINE, status }}>
      {children}
      {showToast && (
        <Toast
          type={status === NetworkStatus.ONLINE ? 'success' : 'warning'}
          message={status === NetworkStatus.ONLINE 
            ? 'Connection restored' 
            : 'You are offline. Some features may be limited.'}
        />
      )}
    </NetworkContext.Provider>
  );
}

export const useNetwork = () => useContext(NetworkContext);