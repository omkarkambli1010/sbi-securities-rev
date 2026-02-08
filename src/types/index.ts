// ============================================
// COMMON TYPES
// ============================================

export interface BaseComponent {
  children?: React.ReactNode;
  className?: string;
}

export interface PageProps {
  params: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

// ============================================
// THEME TYPES
// ============================================

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// ============================================
// ANIMATION TYPES
// ============================================

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export interface ScrollTriggerConfig {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface CardProps extends BaseComponent {
  variant?: 'default' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

// ============================================
// FEATURE/PRODUCT TYPES
// ============================================

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  features: string[];
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// ============================================
// STATISTIC TYPES
// ============================================

export interface Statistic {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}
