'use client';

import React, { useEffect, useState } from 'react';
import { ThemeContext } from '@/hooks/useTheme';
import { Theme } from '@/types';
import { THEME, THEME_STORAGE_KEY } from '@/lib/constants';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    if (stored && (stored === THEME.LIGHT || stored === THEME.DARK)) {
      setThemeState(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME.DARK
        : THEME.LIGHT;
      setThemeState(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    }

    // Remove no-transition class after initial render
    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 100);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
