import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling with momentum effect
    let ticking = false;
    let lastScrollTop = 0;
    let scrollVelocity = 0;
    const momentumDecay = 0.95;
    const minVelocity = 0.1;

    const applyMomentum = () => {
      if (Math.abs(scrollVelocity) > minVelocity) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const momentum = scrollVelocity * 0.3; // Reduced momentum for smoother feel

        window.scrollBy({
          top: momentum,
          behavior: 'smooth',
        });

        scrollVelocity *= momentumDecay;
        requestAnimationFrame(applyMomentum);
      } else {
        ticking = false;
        scrollVelocity = 0;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          scrollVelocity = currentScrollTop - lastScrollTop;
          lastScrollTop = currentScrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Optimize scroll event with passive listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enhanced wheel event for smoother mouse wheel scrolling
    const handleWheel = (e: WheelEvent) => {
      // Let native smooth scroll handle it, but optimize the event
      if (Math.abs(e.deltaY) > 0) {
        // Small optimization for wheel events
        e.stopPropagation();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

