import React from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import {
  OWNER_VERIFICATION_CHECKLIST,
  PRIVACY_NOTICE_SECTIONS,
} from '../data/privacyNoticeContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';
import { BRAND_CONTACT } from '../data/bossContent';

interface PrivacyNoticePageProps {
  onNavigateHome: (sectionId?: string) => void;
}

export const PrivacyNoticePage: React.FC<PrivacyNoticePageProps> = ({
  onNavigateHome,
}) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        SITE_INTEGRATIONS.privacyContactEmail
      );
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div id="privacy-top" className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Corporate Institutional Header */}
      <section className="bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/30 pt-10 pb-14 sm:pt-14 sm:pb-20 tracking-[0.01em]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb & Return Control */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <a
              href="/"
              onClick={(e) => {
                if (
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey &&
                  e.button === 0
                ) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D6B36A] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Back to BOSS. Main Website</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#F7F8F5]/65">
              <span>Legal &amp; Data Privacy Governance</span>
              <span aria-hidden="true">·</span>
              <span>Republic Act No. 10173</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm font-semibold text-[#43C6B7] mb-3">
              BOSS. — Business Operations &amp; Smart Solutions
            </p>

            <h1 className="font-display text-[clamp(2.15rem,4vw,3.4rem)] font-semibold tracking-tight text-white leading-[1.1] mb-5">
              Privacy Notice
            </h1>

            <div className="w-20 h-0.5 bg-gradient-to-r from-[#D6B36A] to-[#087F72] mb-6" />

            <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl mb-8">
              How BOSS. — Business Operations &amp; Smart Solutions collects,
              uses, stores, discloses, and protects personal information
              submitted by website visitors and prospective clients in
              accordance with the Philippine Data Privacy Act of 2012 (Republic
              Act No. 10173), its Implementing Rules and Regulations, and
              applicable issuances of the National Privacy Commission.
            </p>

            {/* Institutional Metadata Strip (Unboxed / Hairline Grid) */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/12 text-xs sm:text-sm">
              <div>
                <dt className="text-[#F7F8F5]/55 mb-1">Organization</dt>
                <dd className="font-semibold text-white">
                  BOSS. — Business Operations &amp; Smart Solutions
                </dd>
              </div>

              <div>
                <dt className="text-[#F7F8F5]/55 mb-1">
                  Privacy Inquiry Contact
                </dt>
                <dd className="font-mono text-xs sm:text-sm text-[#D6B36A] break-all">
                  <a
                    href={`mailto:${SITE_INTEGRATIONS.privacyContactEmail}`}
                    className="hover:underline"
                  >
                    {SITE_INTEGRATIONS.privacyContactEmail}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[#F7F8F5]/55 mb-1">Effective Date</dt>
                <dd className="text-[#F7F8F5]/90">
                  {SITE_INTEGRATIONS.privacyEffectiveDate ? (
                    <span className="font-semibold text-white">
                      {SITE_INTEGRATIONS.privacyEffectiveDate}
                    </span>
                  ) : (
                    <span className="text-[#F7F8F5]/75">
                      To be displayed upon owner confirmation prior to final
                      publication
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Main Two-Column Corporate Legal Layout */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sticky Left Table of Contents & Quick Actions */}
            <aside
              aria-label="Privacy Notice sections"
              className="lg:col-span-4 lg:sticky lg:top-24 space-y-6"
            >
              <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-6">
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#142B3B]/10">
                  <h2 className="font-display text-base font-semibold text-[#142B3B]">
                    Contents
                  </h2>
                  <span className="font-mono tabular-nums text-xs text-[#8A6824]">
                    01 – 12
                  </span>
                </div>

                <nav aria-label="Section index">
                  <ol className="space-y-1.5 text-xs sm:text-[13px]">
                    {PRIVACY_NOTICE_SECTIONS.map((sec) => (
                      <li key={sec.id}>
                        <a
                          href={`#${sec.id}`}
                          className="group flex items-baseline gap-2.5 py-1.5 px-2 rounded-lg text-[#142B3B]/80 hover:text-[#087F72] hover:bg-[#F7F8F5] transition-colors duration-150"
                        >
                          <span className="font-mono tabular-nums text-[11px] font-semibold text-[#8A6824] shrink-0">
                            {sec.number}
                          </span>
                          <span className="leading-snug">{sec.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              {/* Official Inquiry & Contact Card */}
              <div className="rounded-2xl bg-[#142B3B] text-[#F7F8F5] p-6 border border-[#142B3B]">
                <p className="text-xs font-semibold text-[#D6B36A] mb-1.5">
                  Ready to Proceed?
                </p>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Submit Your Business Inquiry
                </h3>
                <p className="text-xs text-[#F7F8F5]/75 leading-relaxed mb-5">
                  Once you have reviewed how we handle personal information, you
                  may proceed to our official Client Discovery and Engagement
                  Inquiry Form.
                </p>

                <a
                  href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Start Your Business Conversation</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="font-display text-xs italic text-[#D6B36A]">
                    {BRAND_CONTACT.tagline}
                  </p>
                </div>
              </div>
            </aside>

            {/* Primary Corporate Legal Document Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-6 sm:p-10 lg:p-12">
                {/* Opening Statutory Reference Note */}
                <div className="pb-8 mb-8 border-b border-[#142B3B]/10 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#087F72] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed max-w-prose">
                    This Privacy Notice governs client inquiry, consultation
                    request, and website communication activities of{' '}
                    <strong className="font-semibold text-[#142B3B]">
                      BOSS. — Business Operations &amp; Smart Solutions
                    </strong>{' '}
                    pursuant to{' '}
                    <strong className="font-semibold text-[#142B3B]">
                      Republic Act No. 10173 (Data Privacy Act of 2012)
                    </strong>
                    , its Implementing Rules and Regulations, and relevant
                    issuances of the National Privacy Commission.
                  </p>
                </div>

                {/* Numbered Sections 01 through 12 */}
                <div className="divide-y divide-[#142B3B]/10">
                  {PRIVACY_NOTICE_SECTIONS.map((section, index) => (
                    <article
                      key={section.id}
                      id={section.id}
                      className={`scroll-mt-24 ${
                        index === 0 ? 'pb-10' : 'py-10'
                      } ${
                        index === PRIVACY_NOTICE_SECTIONS.length - 1
                          ? 'pb-2'
                          : ''
                      }`}
                    >
                      {/* Numbered Corporate Section Heading: 01 | Title */}
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight leading-snug mb-4 flex flex-wrap items-baseline gap-2.5">
                        <span className="font-mono tabular-nums text-base sm:text-lg font-semibold text-[#087F72]">
                          {section.number}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-[#D6B36A] font-normal"
                        >
                          |
                        </span>
                        <span>{section.title}</span>
                      </h2>

                      <div className="space-y-4 text-sm sm:text-base text-[#142B3B]/85 leading-relaxed max-w-prose">
                        {section.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}

                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="space-y-3 pt-1">
                            {section.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed"
                              >
                                <span
                                  aria-hidden="true"
                                  className="font-mono tabular-nums text-xs font-semibold text-[#8A6824] pt-1 shrink-0"
                                >
                                  {String(bIdx + 1).padStart(2, '0')}.
                                </span>
                                <div>
                                  {bullet.label ? (
                                    <>
                                      <strong className="font-semibold text-[#142B3B]">
                                        {bullet.label}:
                                      </strong>{' '}
                                      <span>{bullet.text}</span>
                                    </>
                                  ) : (
                                    <span>{bullet.text}</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.subSections &&
                          section.subSections.map((sub) => (
                            <div
                              key={sub.heading}
                              className="pt-4 mt-4 border-t border-[#142B3B]/8 space-y-3"
                            >
                              <h3 className="font-sans text-sm sm:text-base font-semibold text-[#142B3B]">
                                {sub.heading}
                              </h3>

                              {sub.paragraphs &&
                                sub.paragraphs.map((sp, spIdx) => (
                                  <p
                                    key={spIdx}
                                    className="text-sm sm:text-[15px] text-[#142B3B]/85 leading-relaxed"
                                  >
                                    {sp}
                                  </p>
                                ))}

                              {sub.bullets && (
                                <ul className="space-y-2.5">
                                  {sub.bullets.map((sb, sbIdx) => (
                                    <li
                                      key={sbIdx}
                                      className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="font-mono tabular-nums text-xs font-semibold text-[#087F72] pt-1 shrink-0"
                                      >
                                        &bull;
                                      </span>
                                      <div>
                                        {sb.label ? (
                                          <>
                                            <strong className="font-semibold text-[#142B3B]">
                                              {sb.label}:
                                            </strong>{' '}
                                            <span>{sb.text}</span>
                                          </>
                                        ) : (
                                          <span>{sb.text}</span>
                                        )}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}

                        {/* Dedicated Contact Card inside Section 11 */}
                        {section.number === '11' && (
                          <div className="mt-4 p-5 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/12 space-y-3">
                            <div>
                              <span className="text-xs font-semibold text-[#087F72] block mb-0.5">
                                Organization
                              </span>
                              <p className="text-sm sm:text-base font-semibold text-[#142B3B]">
                                BOSS. — Business Operations &amp; Smart
                                Solutions
                              </p>
                            </div>

                            <div>
                              <span className="text-xs font-semibold text-[#8A6824] block mb-1">
                                Official Privacy Inquiries &amp; Data Subject
                                Requests Email
                              </span>
                              <div className="flex flex-wrap items-center gap-3">
                                <a
                                  href={`mailto:${SITE_INTEGRATIONS.privacyContactEmail}?subject=Privacy%20Inquiry%20-%20BOSS.`}
                                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#142B3B] hover:text-[#087F72] underline underline-offset-4 break-all"
                                >
                                  <Mail className="w-4 h-4 text-[#087F72] shrink-0" />
                                  <span>
                                    {SITE_INTEGRATIONS.privacyContactEmail}
                                  </span>
                                </a>

                                <button
                                  type="button"
                                  onClick={handleCopyEmail}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#EFEFE9] border border-[#142B3B]/15 text-xs font-medium text-[#142B3B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                                >
                                  {copiedEmail ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-[#087F72]" />
                                      <span>Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Copy Email</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>

                            <p className="text-xs text-[#142B3B]/70 pt-2 border-t border-[#142B3B]/10">
                              Suggested subject line:{' '}
                              <span className="font-mono text-[#142B3B]">
                                Privacy Inquiry / Data Subject Request — [Your
                                Name]
                              </span>
                            </p>
                          </div>
                        )}

                        {/* Effective Date Status inside Section 12 */}
                        {section.number === '12' && (
                          <div className="mt-4 p-4 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/10 text-xs sm:text-sm text-[#142B3B]/80">
                            <strong className="font-semibold text-[#142B3B]">
                              Effective Date Status:
                            </strong>{' '}
                            {SITE_INTEGRATIONS.privacyEffectiveDate
                              ? `Confirmed Effective Date: ${SITE_INTEGRATIONS.privacyEffectiveDate}.`
                              : 'Pending confirmation by the website owner prior to final public launch (intentionally left unpopulated until confirmed so no unverified date is stated as fact).'}
                          </div>
                        )}

                        {section.calloutNote && (
                          <div className="mt-4 p-4 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/10 text-xs sm:text-sm text-[#142B3B]/80 leading-relaxed">
                            {section.calloutNote}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Transparent Owner Pre-Launch Verification Summary */}
              <div className="rounded-2xl bg-white border border-[#D6B36A]/55 p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-5 h-5 text-[#8A6824] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#8A6824] mb-1">
                      Transparency &amp; Pre-Launch Governance Note
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B]">
                      Items Requiring Website Owner Verification Before Final
                      Public Launch
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed mb-5 max-w-prose">
                  In strict adherence to accuracy standards, this Privacy Notice
                  does not invent business registration numbers, unverified
                  security certifications, a designated Data Protection Officer,
                  or a fixed numerical retention period. Before final public
                  release, the website owner should review and confirm the
                  following operational details:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#142B3B]/85">
                  {OWNER_VERIFICATION_CHECKLIST.map((row, idx) => (
                    <li
                      key={row.item}
                      className="pb-3 border-b border-[#142B3B]/8 last:border-b-0 last:pb-0 flex items-start gap-3"
                    >
                      <span className="font-mono tabular-nums text-xs font-semibold text-[#8A6824] pt-0.5 shrink-0">
                        0{idx + 1}.
                      </span>
                      <div>
                        <strong className="font-semibold text-[#142B3B]">
                          {row.item}:
                        </strong>{' '}
                        <span>{row.explanation}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Return & Inquiry Action Bar */}
              <div className="rounded-2xl bg-[#0D2130] text-[#F7F8F5] border border-[#D6B36A]/35 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <p className="font-display text-xl font-semibold text-white mb-1">
                    Ready to Start Your Business Conversation?
                  </p>
                  <p className="text-xs sm:text-sm text-[#F7F8F5]/75">
                    Return to BOSS. or open our official Client Discovery and
                    Engagement Inquiry Form.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => onNavigateHome()}
                    className="px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-[#F7F8F5] bg-white/10 hover:bg-white/18 border border-white/15 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Back to Home
                  </button>

                  <a
                    href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Start Your Business Conversation</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
