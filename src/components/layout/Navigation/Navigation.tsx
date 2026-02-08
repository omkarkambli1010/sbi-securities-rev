'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import styles from './Navigation.module.scss';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={cn(styles.navList, isOpen && styles.open)}
        role="menubar"
      >
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className={styles.navItem} role="none">
              <Link
                href={link.href}
                className={cn(styles.navLink, isActive && styles.active)}
                onClick={closeMenu}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
