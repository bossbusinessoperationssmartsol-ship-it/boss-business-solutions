import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface InsightsSubscribeSectionProps {
  onOpenPrivacyNotice: () => void;
}

export const InsightsSubscribeSection: React.FC<
  InsightsSubscribeSectionProps
> = ({ onOpenPrivacyNotice }) => {
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
    <section
      id="insights-subscribe"
      aria-labelledby="insights-subscribe-heading"
      className="py-16 sm:py-20 bg-[#0D2130] text-[#F7F8F5] border-t border-[#D6B36A]/25"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-[#142B3B] border border-[#D6B36A]/30 p-7 sm:p-11 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B36A] mb-3">
              <span className="font-semibold uppercase tracking-wider">
                BOSS. Business Advisory Team
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F8F5]/70">
                Philippine Tax, Accounting &amp; Compliance Guidance
              </span>
            </div>

            <h2
              id="insights-subscribe-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.16] mb-4"
            >
              Need Clarity on How a Regulation Affects Your Business?
            </h2>

            <p className="text-sm sm:text-base text-[#F7F8F5]/80 leading-relaxed max-w-2xl mb-5">
              Every taxpayer profile is different. Whether you are evaluating
              DTI vs. SEC registration, updating invoices for 2026 CWT rules,
              catching up overdue filings, or organizing monthly bookkeeping and
              payroll, our team helps translate regulatory rules into clear next
              steps.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#F7F8F5]/70 leading-relaxed">
              <ShieldCheck
                className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p>
                Confidential &amp; RA 10173 Compliant: Client inquiries are
                handled directly through our official discovery workflow in
                accordance with our{' '}
                <a
                  href={SITE_INTEGRATIONS.privacyNoticeUrl}
                  onClick={handlePrivacyClick}
                  className="text-[#D6B36A] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Privacy Notice
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Direct Advisory Consultation Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0D2130]/90 border border-white/12 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B36A] mb-2">
                Direct Compliance Consultation
              </p>

              <p className="text-xs sm:text-sm text-[#F7F8F5]/80 leading-relaxed mb-6">
                Open our official Client Discovery Form in a new browser tab or
                message the BOSS. Business Advisory Team directly to discuss
                your accounting, tax, or corporate compliance requirements.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Let BOSS. Review Your Compliance Needs</span>
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={`mailto:${SITE_INTEGRATIONS.businessEmail}?subject=BOSS.%20Insights%20%26%20Compliance%20Inquiry`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[42px] text-xs sm:text-sm font-medium text-[#F7F8F5] bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Email Advisory Team Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
