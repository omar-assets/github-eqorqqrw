import { focusableSelectors } from './selectors';

export const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
  return Array.from(element.querySelectorAll(focusableSelectors));
};

export const moveFocus = (
  elements: HTMLElement[],
  currentIndex: number,
  direction: 'next' | 'prev'
): void => {
  const lastIndex = elements.length - 1;
  let nextIndex = direction === 'next' 
    ? (currentIndex + 1) % elements.length
    : (currentIndex - 1 + elements.length) % elements.length;

  elements[nextIndex].focus();
};

export const handleTabKey = (
  event: KeyboardEvent,
  elements: HTMLElement[]
): void => {
  const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
  if (currentIndex === -1) return;

  if (event.shiftKey) {
    if (currentIndex === 0) {
      event.preventDefault();
      elements[elements.length - 1].focus();
    }
  } else {
    if (currentIndex === elements.length - 1) {
      event.preventDefault();
      elements[0].focus();
    }
  }
};