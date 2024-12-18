export const ARIA_LABELS = {
  NAVIGATION: {
    MAIN: 'Main navigation',
    MOBILE: 'Mobile navigation',
    SKIP_LINK: 'Skip to main content'
  },
  BUTTONS: {
    MENU_OPEN: 'Open menu',
    MENU_CLOSE: 'Close menu',
    SEARCH: 'Search',
    NOTIFICATIONS: 'Notifications'
  },
  FORMS: {
    REQUIRED: 'Required field',
    ERROR: 'Form error',
    SUCCESS: 'Form submitted successfully'
  }
} as const;

export const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

export const trapFocus = (element: HTMLElement): () => void => {
  const focusableElements = element.querySelectorAll(focusableSelectors);
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstFocusable.focus();

  return () => element.removeEventListener('keydown', handleTabKey);
};