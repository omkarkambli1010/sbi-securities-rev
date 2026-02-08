import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_DURATION, EASING } from '../constants';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.EASE_OUT,
    ...options,
  });
};

export const fadeInUp = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    ...options,
  });
};

export const fadeInDown = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: -60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    ...options,
  });
};

export const fadeInLeft = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    x: -60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    ...options,
  });
};

export const fadeInRight = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    x: 60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    ...options,
  });
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.8,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.BACK,
    ...options,
  });
};

export const scaleInBounce = (element: gsap.TweenTarget, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    scale: 0,
    duration: ANIMATION_DURATION.SLOW,
    ease: EASING.ELASTIC,
    ...options,
  });
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerFadeInUp = (elements: gsap.TweenTarget, options = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    stagger: 0.15,
    ...options,
  });
};

export const staggerScaleIn = (elements: gsap.TweenTarget, options = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    scale: 0.8,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.BACK,
    stagger: 0.1,
    ...options,
  });
};

// ============================================
// TEXT ANIMATIONS
// ============================================

export const splitTextReveal = (element: HTMLElement, options = {}) => {
  const text = element.textContent || '';
  const chars = text.split('');

  element.innerHTML = chars
    .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  return gsap.from(element.querySelectorAll('.char'), {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: EASING.SMOOTH,
    stagger: 0.03,
    ...options,
  });
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

export const scrollFadeIn = (element: gsap.TweenTarget, triggerOptions = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
    },
  });
};

export const scrollStaggerFadeIn = (elements: gsap.TweenTarget, triggerElement?: gsap.DOMTarget, options = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: ANIMATION_DURATION.NORMAL,
    ease: EASING.SMOOTH,
    stagger: 0.15,
    scrollTrigger: {
      trigger: triggerElement || elements,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// ============================================
// PARALLAX
// ============================================

export const parallax = (element: gsap.TweenTarget, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// ============================================
// COUNTER ANIMATION
// ============================================

export const animateCounter = (
  element: HTMLElement,
  endValue: number,
  options = {}
) => {
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration: ANIMATION_DURATION.SLOWER,
    ease: EASING.EASE_OUT,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

export const createTimeline = (options = {}) => {
  return gsap.timeline(options);
};
