import { useEffect, useState, useRef } from 'react';

const useFadeInAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollY.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
            }
          },
          { threshold }
        );

        if (elementRef.current) {
          observer.observe(elementRef.current);
        }

        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      } else {
        // Reset isVisible state when the component scrolls out of view
        setIsVisible(false);
      }
      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, isVisible]);

  return { isVisible, elementRef };
};

export default useFadeInAnimation;
