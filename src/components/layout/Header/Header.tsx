'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

// ============================================
// TYPES
// ============================================

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

// ============================================
// NAVIGATION DATA
// ============================================

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    children: [
      { label: 'Equity', href: '/products/equity-investments' },
      { label: 'IPO', href: '/products/ipo-initial-public-offerings' },
      { label: 'Derivative', href: '/products/derivatives-trading' },
      { label: 'Margin Trading Facility', href: '/products/mtf-margin-trading-facility' },
      { label: 'Equity Sip', href: '/products/equity-sip' },
      { label: 'ETF', href: '/products/etf-exchange-traded-funds' },
      {
        label: 'Fixed Income',
        children: [
          { label: 'Corporate FD', href: '/products/corporate-fds' },
          { label: '54EC Bonds', href: '/products/54-ec-capital-gains-bonds' },
        ],
      },
      { label: 'Mutual Fund', href: '/products/mutual-funds' },
      { label: 'NRI Zone', href: '/open-nri-investment-account' },
      { label: 'Home Loan', href: '/products/home-loan' },
      { label: 'Car Loan', href: '/products/car-loan' },
      { label: 'Education Loan', href: '/products/education-loan' },
      { label: 'Insurance', href: '/products/insurance' },
      { label: 'Corporate Demat account', href: '/corporate-demat-account' },
      { label: 'NPS', href: '/products/national-pension-system' },
    ],
  },
  {
    label: 'Research',
    children: [
      { label: 'Fundamental Research', href: '/research/fundamental' },
      { label: 'Technical Derivatives', href: '/research/technical-derivatives' },
    ],
  },
  {
    label: 'Calculators',
    children: [
      { label: 'Mutual Fund Returns Calculator', href: '#mutual-fund-calculator' },
      { label: 'SIP Calculator', href: '#sip-calculator' },
      { label: 'Lumpsum Calculator', href: '#lumpsum-calculator' },
      { label: 'Step-up SIP Calculator', href: '#step-up-sip-calculator' },
      { label: 'SWP Calculator', href: '#swp-calculator' },
      { label: 'FD Calculator', href: '#fd-calculator' },
      { label: 'NPS Calculator', href: '#nps-calculator' },
      { label: 'Home Loan EMI Calculator', href: '#home-loan-calculator' },
      { label: 'Car Loan EMI Calculator', href: '#car-loan-calculator' },
      { label: 'CAGR Calculator', href: '#cagr-calculator' },
      { label: 'Loan EMI Calculator', href: '#loan-emi-calculator' },
      { label: 'RD Calculator', href: '#rd-calculator' },
      { label: 'Retirement Calculator', href: '#retirement-calculator' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Refer & Earn', href: '/refer-earn-program' },
      { label: 'Blog', href: '/blog' },
      { label: 'Trading Platforms', href: '/trading-platform' },
      { label: 'FAQs', href: '/knowledge-center/faq' },
    ],
  },
  { label: 'Support', href: '/contact-us' },
];

// ============================================
// DESKTOP DROPDOWN
// ============================================

function DesktopNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const submenuTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubmenu(null);
    }, 200);
  };

  const handleSubmenuEnter = (label: string) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    setActiveSubmenu(label);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  if (!item.children) {
    return (
      <Link
        href={item.href || '/'}
        className="whitespace-nowrap px-3 py-2 text-[14px] font-medium text-foreground/80 hover:text-primary transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'whitespace-nowrap flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors',
          isOpen
            ? 'text-primary'
            : 'text-foreground/80 hover:text-primary'
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="min-w-[230px] rounded-md border border-border bg-background shadow-lg py-1">
            {item.children.map((child) =>
              child.children ? (
                <div
                  key={child.label}
                  className="relative"
                  onMouseEnter={() => handleSubmenuEnter(child.label)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <button
                    className={cn(
                      'flex items-center justify-between w-full px-4 py-2 text-sm transition-colors',
                      activeSubmenu === child.label
                        ? 'text-primary bg-accent/60'
                        : 'text-foreground/80 hover:text-primary hover:bg-accent/40'
                    )}
                  >
                    {child.label}
                    <ChevronRight className="h-3.5 w-3.5 ml-4 flex-shrink-0" />
                  </button>
                  {activeSubmenu === child.label && (
                    <div className="absolute left-full top-0 pl-0.5 z-50">
                      <div className="min-w-[200px] rounded-md border border-border bg-background shadow-lg py-1">
                        {child.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href || '#'}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/40 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={child.label}
                  href={child.href || '#'}
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/40 transition-colors"
                >
                  {child.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// MOBILE NAVIGATION (full-screen overlay)
// ============================================

function MobileNav({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose: () => void;
}) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="fixed inset-0 top-[64px] z-50 bg-background overflow-y-auto">
      <div className="py-2 px-2">
        {items.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() => toggleSection(item.label)}
                className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-medium text-foreground hover:bg-accent/40 hover:text-primary rounded-lg transition-colors"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    openSections.includes(item.label) && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-out',
                  openSections.includes(item.label)
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                )}
              >
                <div className="ml-4 border-l-2 border-border pl-2">
                  {item.children.map((child) =>
                    child.children ? (
                      <div key={child.label}>
                        <button
                          onClick={() => toggleSection(child.label)}
                          className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/40 rounded-lg transition-colors"
                        >
                          {child.label}
                          <ChevronDown
                            className={cn(
                              'h-3.5 w-3.5 transition-transform duration-200',
                              openSections.includes(child.label) && 'rotate-180'
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            'overflow-hidden transition-all duration-300 ease-out',
                            openSections.includes(child.label)
                              ? 'max-h-[500px] opacity-100'
                              : 'max-h-0 opacity-0'
                          )}
                        >
                          <div className="ml-4 border-l-2 border-border pl-2">
                            {child.children.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href || '#'}
                                onClick={onClose}
                                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-accent/40 rounded-lg transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={child.label}
                        href={child.href || '#'}
                        onClick={onClose}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/40 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href || '/'}
              onClick={onClose}
              className="block px-4 py-3 text-[15px] font-medium text-foreground hover:bg-accent/40 hover:text-primary rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
      <div className="p-4 border-t border-border flex gap-3">
        <a
          href="https://www.sbisecurities.in/login"
          className="flex-1 text-center py-2.5 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
        >
          Login
        </a>
        <a
          href="https://ekyc.sbisecurities.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Open Demat Account
        </a>
      </div>
    </div>
  );
}

// ============================================
// MAIN HEADER
// ============================================

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '6px 16px 0' : '0',
      }}
    >
      <div
        className={cn(
          'mx-auto flex items-center justify-between px-4 transition-all duration-400',
          scrolled
            ? 'max-w-[1300px] h-[56px] bg-background/70 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg shadow-black/[0.08]'
            : 'w-full h-[64px] bg-background border-b border-border'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.sbisecurities.in/assets/images/sbi-securities-logo.png"
            alt="SBI Securities"
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Navigation — hidden on mobile, flex on desktop */}
        <nav className="hidden md:!flex items-center">
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <a
            href="https://www.sbisecurities.in/login"
            className="hidden md:!inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            Login
          </a>
          <a
            href="https://ekyc.sbisecurities.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:!inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Open Demat Account
          </a>

          {/* Mobile hamburger — visible by default, hidden on 768px+ */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex md:!hidden items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-accent/40 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen nav */}
      {isMobileOpen && (
        <MobileNav
          items={NAV_ITEMS}
          onClose={() => setIsMobileOpen(false)}
        />
      )}
    </header>
  );
}
