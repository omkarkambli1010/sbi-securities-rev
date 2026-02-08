import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// SCROLL TRIGGER CONFIGURATIONS
// ============================================

export const defaultScrollConfig = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

export const pinScrollConfig = {
  pin: true,
  scrub: true,
  start: 'top top',
  end: '+=100%',
};

export const scrubScrollConfig = {
  scrub: 1,
  start: 'top bottom',
  end: 'bottom top',
};

// ============================================
// SCROLL UTILITIES
// ============================================

export const createScrollTrigger = (config: ScrollTrigger.Vars) => {
  return ScrollTrigger.create(config);
};

export const scrollToSection = (target: string | HTMLElement, offset = 0) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    ease: 'power2.inOut',
  });
};

export const getScrollProgress = () => {
  return ScrollTrigger.maxScroll(window);
};
