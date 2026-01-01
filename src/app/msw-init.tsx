'use client';

import { useEffect } from 'react';
import { ENV } from '@/src/shared/config/environment';

export function MSWInit() {
  useEffect(() => {
    const initMSW = async () => {
      if (
        ENV.NEXT_PUBLIC_API_MOCKING !== 'enabled'
        || typeof window === 'undefined'
      ) {
        return;
      }

      const { worker } = await import('@/src/shared/lib/mocks/browser');
      worker.start({ onUnhandledRequest: 'bypass' });
    };

    initMSW();
  }, []);

  return null;
}
