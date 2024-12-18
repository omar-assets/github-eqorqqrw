export const ANIMATION_CLASSES = {
  fadeIn: 'animate-fadeIn',
  fadeOut: 'animate-fadeOut',
  slideIn: 'animate-slideIn',
  slideOut: 'animate-slideOut',
  scaleIn: 'animate-scaleIn',
  scaleOut: 'animate-scaleOut'
} as const;

export const TRANSITION_CLASSES = {
  default: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out'
} as const;

export const getAnimationClass = (
  type: keyof typeof ANIMATION_CLASSES,
  isEntering: boolean
): string => {
  return isEntering ? ANIMATION_CLASSES[type] : '';
};

export const combineTransitionClasses = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};