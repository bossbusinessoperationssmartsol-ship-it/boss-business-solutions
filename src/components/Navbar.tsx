import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BossLogo } from './BossLogo';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

export type NavPageTarget =
  | 'services'
  | 'insights'
  | 'tax-resources'
  | 'regulatory-updates'
  | 'about'
  | 'privacy-notice';

export type NavDestination =
  | { type: 'section'; sectionId?: string }
  | { type: 'page'; page: NavPageTarget };

interface NavbarProps {
  activePage: string;
  onNavigateSection: (sectionId?: string) => void;
  onNavigatePage: (page: NavPageTarget) => void;
}

const PRIMARY_NAV_ITEMS: {
  label: string;
  href: string;
  matchPages?: string[];
  dest: NavDestination;
}[] = [
  {
    label: 'Home',
    href: '/',
    matchPages: ['home'],
    dest: { type: 'section' },
  },
  {
    label: 'Services',
    href: '/services',
    matchPages: ['services'],
    dest: { type: 'page', page: 'services' },
  },
  {
    label: 'Insights',
    href: '/insights',
    matchPages: ['insights', 'insight-article'],
    dest: { type: 'page', page: 'insights' },
  },
  {
    label: 'Tax Forms',
    href: '/tax-resources',
    matchPages: ['tax-resources'],
    dest: { type: 'page', page: 'tax-resources' },
  },
  {
    label: 'Updates',
    href: '/regulatory-updates',
    matchPages: ['regulatory-updates', 'regulation-detail'],
    dest: { type: 'page', page: 'regulatory-updates' },
  },
  {
    label: 'About',
    href: '/about',
    matchPages: ['about'],
    dest: { type: 'page', page: 'about' },
  },
  {
    label: 'Contact',
    href: '/#contact',
    dest: { type: 'section', sectionId: 'contact' },
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigateSection,
  onNavigatePage,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const isPlainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;

  const handleDestClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    dest: NavDestination
  ) => {
    if (isPlainClick(e)) {
      e.preventDefault();
      closeMobile();
      if (dest.type === 'page') {
        onNavigatePage(dest.page);
      } else {
        onNavigateSection(dest.sectionId);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0D2130]/95 backdrop-blur-md border-b border-[#D6B36A]/20">
      <div className="max-w-7xl mx-auto h-16 px-5 sm:px-8 flex items-center justify-between gap-4 lg:gap-6">
        {/* Zone 1: Official BOSS. Logo + Wordmark (Always returns to Home /) */}
        <a
          href="/"
          onClick={(e) => handleDestClick(e, { type: 'section' })}
          aria-label="BOSS. Home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B36A]"
        >
          <BossLogo size="sm" />
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            BOSS<span className="text-[#D6B36A]">.</span>
          </span>
        </a>

        {/* Zone 2: Standardized Single-Line Navigation Across All Pages */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#F7F8F5]/80"
        >
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isActive = Boolean(item.matchPages?.includes(activePage));
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleDestClick(e, item.dest)}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors duration-150 whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B36A] ${
                  isActive
                    ? 'text-white underline underline-offset-8 decoration-[#D6B36A] decoration-2 font-semibold'
                    : 'hover:text-white hover:underline underline-offset-8 decoration-[#D6B36A] decoration-2'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Inquiry Action (New Tab) + Mobile/Tablet Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_INTEGRATIONS.officialGoogleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B36A]"
          >
            <span>Let&rsquo;s Talk Business</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={
              mobileOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-[#F7F8F5] hover:bg-white/10 transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-white/10 bg-[#0D2130] px-5 py-5 shadow-2xl max-h-[84vh] overflow-y-auto"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-1"
          >
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = Boolean(item.matchPages?.includes(activePage));
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleDestClick(e, item.dest)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-2.5 px-2 text-sm border-b border-white/10 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'font-semibold text-[#D6B36A]'
                      : 'font-medium text-[#F7F8F5]/90 hover:text-[#D6B36A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6B36A]">
                      Current
                    </span>
                  )}
                </a>
              );
            })}

            <a
              href="/#journey"
              onClick={(e) =>
                handleDestClick(e, { type: 'section', sectionId: 'journey' })
              }
              className="py-2.5 px-2 text-xs font-medium text-[#F7F8F5]/70 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
            >
              Your Business Journey
            </a>
            <a
              href="/#quiz"
              onClick={(e) =>
                handleDestClick(e, { type: 'section', sectionId: 'quiz' })
              }
              className="py-2.5 px-2 text-xs font-medium text-[#F7F8F5]/70 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
            >
              Find Your Fit Guide
            </a>
            <a
              href="/#faq"
              onClick={(e) =>
                handleDestClick(e, { type: 'section', sectionId: 'faq' })
              }
              className="py-2.5 px-2 text-xs font-medium text-[#F7F8F5]/70 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
            >
              FAQ
            </a>
            <a
              href="/privacy-notice"
              onClick={(e) =>
                handleDestClick(e, { type: 'page', page: 'privacy-notice' })
              }
              className={`py-2.5 px-2 text-xs font-medium border-b border-white/10 transition-colors ${
                activePage === 'privacy-notice'
                  ? 'text-[#D6B36A] font-semibold'
                  : 'text-[#F7F8F5]/75 hover:text-[#D6B36A]'
              }`}
            >
              Privacy Notice
            </a>

            <div className="pt-4">
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 min-h-[46px] text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors"
              >
                <span>Let&rsquo;s Talk Business</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
