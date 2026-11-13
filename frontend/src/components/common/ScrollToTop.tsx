import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;

    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollFn = () => {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          return true;
        }
        return false;
      };

      if (!scrollFn()) {
        const timer = setTimeout(scrollFn, 80);
        return () => clearTimeout(timer);
      }
      return;
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 0.8 });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, hash]);

  return null;
};

