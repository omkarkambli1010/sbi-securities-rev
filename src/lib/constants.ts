// ============================================
// APP CONSTANTS
// ============================================

export const APP_NAME = 'SBI Securities';
export const APP_DESCRIPTION =
  'Modern investment platform with cutting-edge trading tools and analytics';

// ============================================
// ANIMATION CONSTANTS
// ============================================

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1,
  SLOWER: 1.5,
} as const;

export const EASING = {
  EASE_IN: 'power2.in',
  EASE_OUT: 'power2.out',
  EASE_IN_OUT: 'power2.inOut',
  SMOOTH: 'power4.out',
  ELASTIC: 'elastic.out(1, 0.5)',
  BACK: 'back.out(1.7)',
} as const;

// ============================================
// BREAKPOINTS (matching SCSS)
// ============================================

export const BREAKPOINTS = {
  XS: 475,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// ============================================
// THEME
// ============================================

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const THEME_STORAGE_KEY = 'sbi-theme-preference';

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products',
    href: '/products',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'About',
    href: '/about',
  },
] as const;

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/sbisecurities',
  FACEBOOK: 'https://facebook.com/sbisecurities',
  LINKEDIN: 'https://linkedin.com/company/sbisecurities',
  YOUTUBE: 'https://youtube.com/sbisecurities',
  INSTAGRAM: 'https://instagram.com/sbisecurities',
} as const;

// ============================================
// SCROLL
// ============================================

export const SCROLL_CONFIG = {
  SMOOTH_DURATION: 1.2,
  SMOOTH_MULTIPLIER: 1,
  LERP_EASE: 0.1,
} as const;

// ============================================
// COLORS (SBI Palette)
// ============================================

export const COLORS = {
  PRIMARY: '#0d6efd',
  PRIMARY_DARK: '#0b5ed7',
  SECONDARY: '#3b82f6',
  SUCCESS: '#198754',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#0dcaf0',
} as const;
