import React from 'react';
import { ARIA_LABELS } from '@/utils/accessibility';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 
                 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:shadow-lg 
                 focus:rounded-lg focus:text-primary"
    >
      {ARIA_LABELS.NAVIGATION.SKIP_LINK}
    </a>
  );
}