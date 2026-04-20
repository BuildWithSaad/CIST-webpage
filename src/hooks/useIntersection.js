import { useState, useEffect, useRef } from 'react';

export const useIntersection = (options = { threshold: 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options.threshold, options.rootMargin, hasBeenVisible]);

  return { ref, isVisible, hasBeenVisible };
};
