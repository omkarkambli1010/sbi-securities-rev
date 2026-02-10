'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP(
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) {
  const contextRef = useRef<gsap.Context>(null);

  useEffect(() => {
    contextRef.current = gsap.context(() => {
      callback(contextRef.current!);
    });

    return () => {
      contextRef.current?.revert();
    };
  }, dependencies);

  return contextRef;
}

export function useScrollTrigger(
  callback: () => void,
  dependencies: any[] = []
) {
  useEffect(() => {
    callback();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, dependencies);
}
