export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export const useMediaQuery = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const query = `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
    const mediaQuery = window.matchMedia(query);
    
    const updateMatches = () => setMatches(mediaQuery.matches);
    updateMatches();
    
    mediaQuery.addListener(updateMatches);
    return () => mediaQuery.removeListener(updateMatches);
  }, [breakpoint]);

  return matches;
};

export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};