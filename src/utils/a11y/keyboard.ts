export const KEYS = {
  TAB: 'Tab',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End'
} as const;

export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  handlers: Partial<Record<keyof typeof KEYS, (event: KeyboardEvent) => void>>
): void => {
  const handler = handlers[event.key as keyof typeof KEYS];
  if (handler) {
    handler(event);
  }
};

export const isKeyboardEvent = (event: KeyboardEvent, key: keyof typeof KEYS): boolean => {
  return event.key === KEYS[key];
};