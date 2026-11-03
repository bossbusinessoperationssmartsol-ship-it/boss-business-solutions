import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

export interface ConsultationAndInquirySectionProps {
  onOpenPrivacyNotice: () => void;
}

export const ConsultationAndInquirySection: React.FC<
  ConsultationAndInquirySectionProps
> = ({ onOpenPrivacyNotice }) => {
  const [fbCopied, setFbCopied] = useState(false);

  const handlePrivacyLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  const handleCopyFacebookName = async () => {
    try {
      await navigator.clipboard.writeText(SITE_INTEGRATIONS.facebookPageName);
      setFbCopied(true);
      window.setTimeout(() => setFbCopied(false), 2400);
    } catch {
      setFbCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="lets-talk-about-business-heading"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#F7F8F5]"
    >
      <div id="consultation" className="scroll-mt-24" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Compact, Elegant Consultation Call-to-Action Card */}
        <div className="rounded-2xl bg-[#142B3B] text-[#F7F8F5] border border-[#D6B36A]/30 px-7 py-10 sm:px-12 sm:py-14 shadow-xl tracking-[0.01em]">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#D6B36A] mb-3">
              Client Discovery &amp; Business Consultation
            </p>

            <h2
              id="lets-talk-about-business-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-white leading-[1.12] mb-4"
            >
              LET&rsquo;S TALK ABOUT YOUR BUSINESS.
            </h2>

            <div className="w-14 h-0.5 bg-[#D6B36A] mb-5" />

            <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed mb-8">
              Every business has a story. Tell us where yours stands, what
              challenges you&rsquo;re facing, and what you want to achieve.
              Let&rsquo;s start a conversation about your next steps.
            </p>

            {/* Primary External Google Form CTA */}
            <div className="mb-5">
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B36A]"
              >
                <span>START YOUR BUSINESS CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Required Disclosure & Subtle Privacy Notice Link */}
            <p className="text-xs sm:text-[13px] text-[#F7F8F5]/75 leading-relaxed">
              Your inquiry will open in our secure Google Forms interface.
              Submission of an inquiry does not constitute a confirmed
              consultation or professional engagement.{' '}
              <a
                href={SITE_INTEGRATIONS.privacyNoticeUrl}
                onClick={handlePrivacyLinkClick}
                className="font-medium text-[#D6B36A] hover:text-white underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                Privacy Notice
              </a>
            </p>
          </div>
        </div>

        {/* Clean, Balanced Contact Channels Row */}
        <div className="mt-10 pt-8 border-t border-[#142B3B]/12">
          <p className="text-xs font-semibold text-[#142B3B]/60 mb-5">
            Other Ways to Connect
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-8 text-sm">
            {/* Email */}
            <div className="min-w-0">
              <span className="text-xs text-[#142B3B]/55 block mb-1">
                Email
              </span>
              <a
                href={`mailto:${SITE_INTEGRATIONS.businessEmail}`}
                className="font-medium text-[#142B3B] hover:text-[#087F72] transition-colors break-all text-xs sm:text-sm"
              >
                {SITE_INTEGRATIONS.businessEmail}
              </a>
            </div>

            {/* WhatsApp / Viber */}
            <div className="min-w-0">
              <span className="text-xs text-[#142B3B]/55 block mb-1">
                WhatsApp / Viber
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <a
                  href={SITE_INTEGRATIONS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono tabular-nums font-medium text-[#142B3B] hover:text-[#087F72] transition-colors whitespace-nowrap"
                >
                  {SITE_INTEGRATIONS.mobileDisplay}
                </a>
                <span aria-hidden="true" className="text-[#142B3B]/35">
                  ·
                </span>
                <a
                  href={SITE_INTEGRATIONS.viberUrl}
                  className="text-xs font-medium text-[#087F72] hover:underline whitespace-nowrap"
                >
                  Viber
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="min-w-0">
              <span className="text-xs text-[#142B3B]/55 block mb-1">
                Instagram
              </span>
              <a
                href={SITE_INTEGRATIONS.instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#142B3B] hover:text-[#087F72] transition-colors text-xs sm:text-sm"
              >
                <span>{SITE_INTEGRATIONS.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#142B3B]/45 shrink-0" />
              </a>
            </div>

            {/* Facebook */}
            <div className="min-w-0">
              <span className="text-xs text-[#142B3B]/55 block mb-1">
                Facebook
              </span>
              {SITE_INTEGRATIONS.facebookPageUrl ? (
                <a
                  href={SITE_INTEGRATIONS.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#142B3B] hover:text-[#087F72] transition-colors text-xs sm:text-sm"
                >
                  <span>{SITE_INTEGRATIONS.facebookPageName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#142B3B]/45 shrink-0" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleCopyFacebookName}
                  title="Copy official Facebook page name"
                  className="inline-flex items-start gap-1.5 text-left font-medium text-[#142B3B] hover:text-[#087F72] transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  <span>
                    {fbCopied
                      ? 'Copied Page Name'
                      : SITE_INTEGRATIONS.facebookPageName}
                  </span>
                  {fbCopied ? (
                    <Check className="w-3.5 h-3.5 text-[#087F72] shrink-0 mt-0.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#142B3B]/45 shrink-0 mt-0.5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
