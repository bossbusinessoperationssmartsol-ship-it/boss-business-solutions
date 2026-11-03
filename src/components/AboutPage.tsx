import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AboutSection } from './AboutSection';
import { BusinessJourneySection } from './BusinessJourneySection';
import { ConsultationAndInquirySection } from './ConsultationAndInquirySection';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface AboutPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateServices: () => void;
  onNavigateInsights: () => void;
  onOpenPrivacyNotice: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateInsights,
  onOpenPrivacyNotice,
}) => {
  const isPlainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Corporate Header with Standardized Home / About Breadcrumb */}
      <section className="bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/25 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#F7F8F5]/70 mb-6"
          >
            <a
              href="/"
              onClick={(e) => {
                if (isPlainClick(e)) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="hover:text-[#D6B36A] transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#D6B36A] font-medium">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs sm:text-sm font-semibold text-[#D6B36A] mb-3">
                BOSS. — Business Operations &amp; Smart Solutions
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
                Practical Accounting, Compliance Clarity &amp; Smarter Business
                Operations.
              </h1>
              <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />
              <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl mb-4">
                Built for Philippine business owners, startups, professionals,
                SMEs, and corporations seeking organized accounting records,
                dependable regulatory compliance, and plain-language financial
                guidance.
              </p>
              <p className="font-display text-sm sm:text-base italic text-[#D6B36A]">
                Be Smart. Be Compliant. Be the BOSS.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Let&rsquo;s Talk Business</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="/services"
                  onClick={(e) => {
                    if (isPlainClick(e)) {
                      e.preventDefault();
                      onNavigateServices();
                    }
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#F7F8F5] bg-[#142B3B] hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B36A]" />
                </a>
                <a
                  href="/insights"
                  onClick={(e) => {
                    if (isPlainClick(e)) {
                      e.preventDefault();
                      onNavigateInsights();
                    }
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#F7F8F5] bg-[#142B3B] hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Read Insights</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B36A]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <BusinessJourneySection />

      <ConsultationAndInquirySection
        onOpenPrivacyNotice={onOpenPrivacyNotice}
      />
    </div>
  );
};
