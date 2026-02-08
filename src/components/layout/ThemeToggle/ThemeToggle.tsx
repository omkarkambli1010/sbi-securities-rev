'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(styles.toggle, className)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconWrapper}>
        <Sun
          className={cn(styles.icon, styles.sun, theme === 'dark' && styles.hidden)}
          size={20}
        />
        <Moon
          className={cn(styles.icon, styles.moon, theme === 'light' && styles.hidden)}
          size={20}
        />
      </div>
    </button>
  );
}
