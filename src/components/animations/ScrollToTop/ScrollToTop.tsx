'use client';

import { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      setVisible(scroll > 300);
    });

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  const scrollToTop = useCallback(() => {
    lenisInstance?.scrollTo(0, { duration: 1.2 });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full',
        'bg-primary text-primary-foreground shadow-lg',
        'hover:bg-primary/90 hover:shadow-xl hover:scale-105',
        'transition-all duration-300',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
}
