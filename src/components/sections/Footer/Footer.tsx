import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { NAV_LINKS } from '@/lib/constants';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { useScreenSize } from '@/components/hooks/use-screen-size';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const screenSize = useScreenSize();

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/sbisecurities',
      icon: <Twitter size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/sbisecurities',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sbisecurities',
      icon: <Github size={20} />,
    },
    {
      name: 'Email',
      href: 'mailto:contact@sbisecurities.in',
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container} style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <PixelTrail
            pixelSize={screenSize.lessThan(`md`) ? 28 : 44}
            fadeDuration={180}
            delay={500}
            pixelClassName="rounded-full bg-slate-400/20"
          />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <h3 className={styles.brandName}>{APP_NAME}</h3>
            <p className={styles.brandDescription}>
              Modern investment platform with cutting-edge trading tools and analytics.
            </p>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Legal</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={styles.link}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with <span className={styles.heart}>❤️</span> using Next.js, GSAP & SCSS
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
