import { useState, useEffect } from 'react';

export const useCounter = (target, duration = 2000, hasStarted) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart easing
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, hasStarted]);

  return count;
};
