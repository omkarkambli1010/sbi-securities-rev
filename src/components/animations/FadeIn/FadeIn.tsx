'use client';

import React, { useRef, useEffect } from 'react';
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
    if (elementRef.current) {
      const animationProps: any = {
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
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

      fadeIn(elementRef.current, animationProps);
    }
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={cn(styles.fadeIn, className)}>
      {children}
    </div>
  );
}
