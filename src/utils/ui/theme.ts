export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export const THEME_COLORS: Record<string, ThemeColors> = {
  light: {
    primary: 'var(--color-primary-800)',
    secondary: 'var(--color-primary-600)',
    accent: 'var(--color-primary-300)',
    background: 'var(--color-gray-50)',
    text: 'var(--color-gray-900)'
  },
  dark: {
    primary: 'var(--color-primary-300)',
    secondary: 'var(--color-primary-400)',
    accent: 'var(--color-primary-600)',
    background: 'var(--color-gray-900)',
    text: 'var(--color-gray-50)'
  }
};

export const getThemeColor = (
  theme: keyof typeof THEME_COLORS,
  color: keyof ThemeColors
): string => {
  return THEME_COLORS[theme][color];
};

export const isDarkMode = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};