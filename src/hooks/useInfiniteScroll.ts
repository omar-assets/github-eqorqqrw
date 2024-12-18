import { useEffect, useCallback, RefObject } from 'react';

export function useInfiniteScroll(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options = { threshold: 0.8 }
) {
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, handleObserver, options]);
}