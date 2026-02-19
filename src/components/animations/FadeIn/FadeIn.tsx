'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { fadeIn } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import styles from './FadeIn.module.scss';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const animationProps: Record<string, unknown> = {
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    };

    switch (direction) {
      case 'up':
        animationProps.y = 60;
        break;
      case 'down':
        animationProps.y = -60;
        break;
      case 'left':
        animationProps.x = -60;
        break;
      case 'right':
        animationProps.x = 60;
        break;
    }

    const tween = fadeIn(element, animationProps);

    // Cleanup: kill tweens and reset element so Strict Mode re-mounts cleanly
    return () => {
      if (tween) {
        // Kill associated ScrollTrigger first
        const st = (tween as gsap.core.Tween & { scrollTrigger?: { kill: () => void } }).scrollTrigger;
        if (st) st.kill();
        tween.kill();
      }
      // Reset all GSAP-applied inline styles so element starts fresh on remount
      gsap.set(element, { clearProps: 'all' });
    };
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={cn(styles.fadeIn, className)}>
      {children}
    </div>
  );
}
