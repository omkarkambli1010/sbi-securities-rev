'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/constants';
import { Navigation } from '../Navigation/Navigation';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>{APP_NAME}</span>
        </Link>

        <div className={styles.actions}>
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
