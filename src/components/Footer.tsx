import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { BRAND_CONTACT } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';
import { BossLogo } from './BossLogo';

interface FooterProps {
  onOpenOwnerSetupGuide: () => void;
  onNavigateSection: (sectionId?: string) => void;
  onOpenPrivacyNotice: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOwnerSetupGuide,
  onNavigateSection,
  onOpenPrivacyNotice,
}) => {
  const [fbCopied, setFbCopied] = useState(false);

  const handleCopyFacebookName = async () => {
    try {
      await navigator.clipboard.writeText(SITE_INTEGRATIONS.facebookPageName);
      setFbCopied(true);
      setTimeout(() => setFbCopied(false), 2500);
    } catch {
      setFbCopied(false);
    }
  };

  const handleSectionClick = (
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
      onNavigateSection(sectionId);
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault();
      onOpenPrivacyNotice();
    }
  };

  return (
    <footer className="bg-[#0D2130] text-[#F7F8F5] border-t border-[#D6B36A]/25 tracking-[0.01em]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Official Brand Lockup Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <BossLogo size="lg" />
              <div>
                <a
                  href="/"
                  onClick={(e) => handleSectionClick(e)}
                  className="font-sans text-2xl font-bold tracking-tight text-white inline-block"
                >
                  BOSS<span className="text-[#D6B36A]">.</span>
                </a>
                <p className="text-xs sm:text-sm font-medium text-[#F7F8F5]/85">
                  {BRAND_CONTACT.fullMeaning}
                </p>
              </div>
            </div>

            <p className="font-display text-sm italic text-[#D6B36A] mb-3">
              {BRAND_CONTACT.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#F7F8F5]/65 leading-relaxed max-w-md mb-5">
              Philippine business registration support, BIR tax compliance,
              organized bookkeeping, financial reporting, and smart digital
              accounting solutions.
            </p>

            <a
              href={SITE_INTEGRATIONS.officialGoogleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] text-xs font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap"
            >
              <span>Start Your Business Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Navigation Mirror */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-[#D6B36A] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F7F8F5]/75">
              <li>
                <a
                  href="/#sounds-familiar"
                  onClick={(e) => handleSectionClick(e, 'sounds-familiar')}
                  className="hover:text-white transition-colors"
                >
                  Sounds Familiar?
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleSectionClick(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/#journey"
                  onClick={(e) => handleSectionClick(e, 'journey')}
                  className="hover:text-white transition-colors"
                >
                  Your Business Journey
                </a>
              </li>
              <li>
                <a
                  href="/#quiz"
                  onClick={(e) => handleSectionClick(e, 'quiz')}
                  className="hover:text-white transition-colors"
                >
                  What Does Your Business Need?
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleSectionClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About BOSS.
                </a>
              </li>
              <li>
                <a
                  href="/#knowledge-hub"
                  onClick={(e) => handleSectionClick(e, 'knowledge-hub')}
                  className="hover:text-white transition-colors"
                >
                  Business Smarts Hub
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => handleSectionClick(e, 'faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_INTEGRATIONS.privacyNoticePath}
                  onClick={handlePrivacyClick}
                  className="text-[#D6B36A] hover:text-white font-medium transition-colors"
                >
                  Privacy Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Channels */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-[#D6B36A] mb-4">
              Official Contact Channels
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F8F5]/80">
              <li>
                <span className="text-[#F7F8F5]/50 block text-xs">Email</span>
                <a
                  href={`mailto:${SITE_INTEGRATIONS.businessEmail}`}
                  className="hover:text-[#D6B36A] transition-colors break-all"
                >
                  {SITE_INTEGRATIONS.businessEmail}
                </a>
              </li>
              <li>
                <span className="text-[#F7F8F5]/50 block text-xs">
                  Mobile / Viber / WhatsApp
                </span>
                <a
                  href={SITE_INTEGRATIONS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono tabular-nums hover:text-[#D6B36A] transition-colors"
                >
                  {SITE_INTEGRATIONS.mobileDisplay}
                </a>
              </li>
              <li>
                <span className="text-[#F7F8F5]/50 block text-xs">
                  Instagram
                </span>
                <a
                  href={SITE_INTEGRATIONS.instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D6B36A] transition-colors"
                >
                  {SITE_INTEGRATIONS.instagramHandle}
                </a>
              </li>
              <li>
                <span className="text-[#F7F8F5]/50 block text-xs">
                  Facebook
                </span>
                {SITE_INTEGRATIONS.facebookPageUrl ? (
                  <a
                    href={SITE_INTEGRATIONS.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D6B36A] transition-colors"
                  >
                    {SITE_INTEGRATIONS.facebookPageName}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={handleCopyFacebookName}
                    className="inline-flex items-center gap-1.5 text-left hover:text-[#D6B36A] transition-colors cursor-pointer"
                  >
                    <span>{SITE_INTEGRATIONS.facebookPageName}</span>
                    {fbCopied ? (
                      <Check className="w-3.5 h-3.5 text-[#D6B36A] shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-70 shrink-0" />
                    )}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F8F5]/55">
          <p>
            &copy; {new Date().getFullYear()} BOSS. — Business Operations &amp;
            Smart Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE_INTEGRATIONS.privacyNoticePath}
              onClick={handlePrivacyClick}
              className="text-[#F7F8F5]/85 hover:text-white underline underline-offset-4 transition-colors"
            >
              Privacy Notice
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenOwnerSetupGuide}
              className="hover:text-[#D6B36A] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Owner Setup &amp; Hosting Guide
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
