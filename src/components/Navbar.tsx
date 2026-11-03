import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BossLogo } from './BossLogo';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface NavbarProps {
  onNavigateSection: (sectionId?: string) => void;
}

const NAV_LINKS = [
  { label: 'Solutions', sectionId: 'services' },
  { label: 'Journey', sectionId: 'journey' },
  { label: 'Find Your Fit', sectionId: 'quiz' },
  { label: 'About', sectionId: 'about' },
  { label: 'Knowledge Hub', sectionId: 'knowledge-hub' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault();
      closeMobile();
      onNavigateSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0D2130]/95 backdrop-blur-md border-b border-[#D6B36A]/20">
      <div className="max-w-7xl mx-auto h-16 px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Official Logo + Single Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e)}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B36A]"
        >
          <BossLogo size="sm" />
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            BOSS<span className="text-[#D6B36A]">.</span>
          </span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F7F8F5]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`/#${link.sectionId}`}
              onClick={(e) => handleLinkClick(e, link.sectionId)}
              className="hover:text-white hover:underline underline-offset-8 decoration-[#D6B36A] decoration-2 transition-colors duration-150 whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B36A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action Opening Official Google Form in New Tab (+ Mobile Hamburger) */}
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
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-[#F7F8F5] hover:bg-white/10 transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-white/10 bg-[#0D2130] px-5 py-5 shadow-2xl"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-1"
          >
            <a
              href="/#sounds-familiar"
              onClick={(e) => handleLinkClick(e, 'sounds-familiar')}
              className="py-3 px-2 text-base font-medium text-[#F7F8F5]/90 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
            >
              Sounds Familiar?
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`/#${link.sectionId}`}
                onClick={(e) => handleLinkClick(e, link.sectionId)}
                className="py-3 px-2 text-base font-medium text-[#F7F8F5]/90 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#faq"
              onClick={(e) => handleLinkClick(e, 'faq')}
              className="py-3 px-2 text-base font-medium text-[#F7F8F5]/90 hover:text-[#D6B36A] border-b border-white/10 transition-colors"
            >
              FAQ
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
