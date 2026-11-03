import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  X,
} from 'lucide-react';
import {
  BIR_FORM_SECTIONS,
  BIR_FORMS_LIBRARY,
  BirFormEntry,
  BirFormRegulatoryStatus,
  BirFormSection,
} from '../data/birFormsLibrary';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface TaxResourceCenterPageProps {
  initialFormQuery?: string | null;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateServices: (serviceSlug?: string) => void;
  onNavigateInsight: (slug: string) => void;
}

export const TaxResourceCenterPage: React.FC<TaxResourceCenterPageProps> = ({
  initialFormQuery,
  onNavigateHome,
  onNavigateServices,
  onNavigateInsight,
}) => {
  const [selectedSection, setSelectedSection] = useState<'All' | BirFormSection>(
    'All'
  );
  const [statusFilter, setStatusFilter] = useState<
    'All' | BirFormRegulatoryStatus
  >('All');
  const [searchQuery, setSearchQuery] = useState(initialFormQuery || '');
  const [expandedForms, setExpandedForms] = useState<Record<string, boolean>>(
    () => ({
      '2550Q': true,
      '2550M': true,
      '0605': true,
    })
  );

  useEffect(() => {
    if (initialFormQuery) {
      setSelectedSection('All');
      setStatusFilter('All');
      setSearchQuery(initialFormQuery);
      const matched = BIR_FORMS_LIBRARY.find((f) =>
        f.formNumber.toLowerCase().includes(initialFormQuery.toLowerCase())
      );
      if (matched) {
        setExpandedForms((prev) => ({ ...prev, [matched.formNumber]: true }));
      }
    }
  }, [initialFormQuery]);

  const filteredForms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BIR_FORMS_LIBRARY.filter((entry) => {
      const sectionMatch =
        selectedSection === 'All' || entry.section === selectedSection;
      const statusMatch =
        statusFilter === 'All' || entry.status === statusFilter;
      if (!sectionMatch || !statusMatch) return false;
      if (!q) return true;

      const haystack = [
        entry.formNumber,
        entry.officialName,
        entry.section,
        entry.status,
        entry.regulatoryAlert || '',
        entry.usedFor,
        entry.whoGenerallyNeedsIt,
        entry.filingFrequency,
        entry.deadlineSummary,
        ...entry.requiredAttachments,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [selectedSection, statusFilter, searchQuery]);

  const toggleForm = (formNumber: string) => {
    setExpandedForms((prev) => ({ ...prev, [formNumber]: !prev[formNumber] }));
  };

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Institutional Hero */}
      <section className="bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/25 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#F7F8F5]/65 mb-6"
          >
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
              className="hover:text-[#D6B36A] transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#D6B36A] font-medium">Tax Forms</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B36A] mb-3">
              <span className="font-semibold uppercase tracking-widest">
                Philippine BIR Form Reference Library
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F8F5]/70">
                11 Statutory Categories · Reform &amp; Discontinuation Flags
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
              Philippine Tax Resource Center &amp; BIR Forms Guide.
            </h1>
            <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />
            <p className="text-base sm:text-lg text-[#F7F8F5]/80 leading-relaxed">
              An organized, plain-English reference covering active, EOPT-updated,
              and discontinued BIR tax returns, certificates, alphalists, and
              registration forms—complete with verified statutory filing rules,
              required attachments, and common compliance pitfalls.
            </p>
          </div>

          {/* Mandatory Key Statutory Reform Notices (2550M & 0605 ARF) */}
          <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#142B3B] border border-[#D6B36A]/35 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D6B36A] mb-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>
                  2024 Reform Flag · Annual Registration Fee Repealed (Form 0605)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F7F8F5]/85 leading-relaxed mb-2.5">
                Effective <strong className="text-white">January 22, 2024</strong>{' '}
                under Republic Act No. 11976 (Ease of Paying Taxes Act) and{' '}
                <strong className="text-white">BIR RMC No. 14-2024</strong>, the
                BIR ceased collecting the PHP 500.00 Annual Registration Fee
                formerly paid via Form 0605 every January 31.
              </p>
              <button
                type="button"
                onClick={() =>
                  onNavigateInsight('annual-registration-fee-repeal-rmc-14-2024')
                }
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#D6B36A] hover:text-white transition-colors cursor-pointer"
              >
                <span>Read RMC No. 14-2024 Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="rounded-xl bg-[#142B3B] border border-[#D6B36A]/35 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D6B36A] mb-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>
                  2023 Reform Flag · Monthly VAT Declaration (Form 2550M)
                  Discontinued as Mandatory
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F7F8F5]/85 leading-relaxed mb-2.5">
                Beginning <strong className="text-white">January 1, 2023</strong>{' '}
                under RA No. 10963 (TRAIN Law) and{' '}
                <strong className="text-white">BIR RMC No. 5-2023</strong>, VAT
                taxpayers are no longer required to file Monthly Form 2550M
                (mandatory filing shifted to Quarterly Form 2550Q; optional
                monthly remittance allowed per RMC No. 52-2023).
              </p>
              <button
                type="button"
                onClick={() =>
                  onNavigateInsight(
                    'quarterly-vat-2550q-and-discontinuation-of-2550m'
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#D6B36A] hover:text-white transition-colors cursor-pointer"
              >
                <span>Read Form 2550Q / 2550M Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Search, Status & 11-Section Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#142B3B]/10 py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-xl">
              <Search
                className="w-4 h-4 text-[#142B3B]/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search BIR form number or keyword (e.g., 2550Q, 0605, 1601-EQ, 2307, 1701A, 1905, SAWT)..."
                aria-label="Search Philippine BIR forms"
                className="w-full pl-10 pr-9 py-2.5 min-h-[42px] text-xs sm:text-sm rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] placeholder:text-[#142B3B]/45 focus:outline-none focus:border-[#087F72]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear form search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#142B3B]/50 hover:text-[#142B3B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Status Filter Buttons */}
            <div
              role="group"
              aria-label="Filter forms by regulatory status"
              className="flex items-center gap-1.5 overflow-x-auto"
            >
              {(
                [
                  'All',
                  'Active',
                  'Amended / EOPT Updated',
                  'Discontinued Mandatory Filing',
                ] as const
              ).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    statusFilter === st
                      ? 'bg-[#087F72] text-white'
                      : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                  }`}
                >
                  {st === 'All' ? 'All Statuses' : st}
                </button>
              ))}
            </div>
          </div>

          {/* All 11 Required BIR Form Sections */}
          <div
            role="group"
            aria-label="Filter forms by BIR section"
            className="flex items-center gap-1.5 overflow-x-auto pb-1"
          >
            <button
              type="button"
              onClick={() => setSelectedSection('All')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedSection === 'All'
                  ? 'bg-[#142B3B] text-white'
                  : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
              }`}
            >
              All 11 Sections ({BIR_FORMS_LIBRARY.length})
            </button>
            {BIR_FORM_SECTIONS.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSection(sec)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSection === sec
                    ? 'bg-[#142B3B] text-white'
                    : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Directory Grouped or Filtered */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {filteredForms.length === 0 ? (
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-10 text-center">
              <p className="font-display text-xl font-semibold text-[#142B3B] mb-2">
                No BIR form matched your filter
              </p>
              <p className="text-sm text-[#142B3B]/70 mb-5">
                Reset filters to view all 11 Philippine BIR form sections.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSection('All');
                  setStatusFilter('All');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors cursor-pointer"
              >
                Reset Form Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {BIR_FORM_SECTIONS.map((sectionName) => {
                const sectionItems = filteredForms.filter(
                  (f) => f.section === sectionName
                );
                if (sectionItems.length === 0) return null;

                return (
                  <div key={sectionName} className="space-y-4">
                    <div className="pb-3 border-b border-[#142B3B]/12 flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-2xl font-semibold text-[#142B3B] tracking-tight">
                        {sectionName}
                      </h2>
                      <span className="font-mono text-xs text-[#142B3B]/55">
                        {sectionItems.length}{' '}
                        {sectionItems.length === 1 ? 'entry' : 'entries'}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {sectionItems.map((entry: BirFormEntry) => {
                        const isOpen = !!expandedForms[entry.formNumber];
                        const statusColor =
                          entry.status === 'Discontinued Mandatory Filing'
                            ? 'text-[#9A3412]'
                            : entry.status === 'Amended / EOPT Updated'
                              ? 'text-[#8A6824]'
                              : 'text-[#087F72]';

                        return (
                          <article
                            key={entry.formNumber}
                            className="rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72]/50 transition-colors p-6 sm:p-7"
                          >
                            {/* Header Row */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                              <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2 text-xs">
                                  <span className="font-mono font-bold text-sm text-[#142B3B]">
                                    BIR Form {entry.formNumber}
                                  </span>
                                  <span
                                    className="text-[#142B3B]/40"
                                    aria-hidden="true"
                                  >
                                    ·
                                  </span>
                                  <span
                                    className={`font-semibold ${statusColor}`}
                                  >
                                    {entry.status}
                                  </span>
                                  <span
                                    className="text-[#142B3B]/40"
                                    aria-hidden="true"
                                  >
                                    ·
                                  </span>
                                  <span className="text-[#142B3B]/65">
                                    {entry.filingFrequency}
                                  </span>
                                </div>

                                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B] leading-snug">
                                  {entry.officialName}
                                </h3>
                              </div>

                              <button
                                type="button"
                                onClick={() => toggleForm(entry.formNumber)}
                                aria-expanded={isOpen}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F72] hover:text-[#142B3B] transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start"
                              >
                                <span>
                                  {isOpen
                                    ? 'Hide Compliance Guide'
                                    : 'View Deadlines & Pitfalls'}
                                </span>
                                {isOpen ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            </div>

                            {/* Regulatory Reform Alert (if amended/discontinued) */}
                            {entry.regulatoryAlert && (
                              <div className="mt-4 p-4 rounded-xl bg-[#EFEFE9] border border-[#D6B36A]/55 text-xs sm:text-sm text-[#142B3B] leading-relaxed">
                                <span className="font-semibold text-[#8A6824] block mb-0.5">
                                  Regulatory Update &amp; Applicability Note
                                </span>
                                {entry.regulatoryAlert}
                              </div>
                            )}

                            {/* Core Purpose & Who Needs It */}
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/8">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#142B3B]/55 block mb-1">
                                  What It Is Used For
                                </span>
                                <p className="text-[#142B3B]/85 leading-relaxed">
                                  {entry.usedFor}
                                </p>
                              </div>

                              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/8">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#142B3B]/55 block mb-1">
                                  Who Generally Needs It
                                </span>
                                <p className="text-[#142B3B]/85 leading-relaxed">
                                  {entry.whoGenerallyNeedsIt}
                                </p>
                              </div>
                            </div>

                            {/* Expanded Deadlines, Attachments & Mistakes */}
                            {isOpen && (
                              <div className="mt-5 pt-5 border-t border-[#142B3B]/10 space-y-5">
                                <div className="p-4 rounded-xl bg-white border border-[#142B3B]/12">
                                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#087F72] block mb-1">
                                    Statutory Deadline &amp; Verification Rule
                                  </span>
                                  <p className="text-xs sm:text-sm font-medium text-[#142B3B] leading-relaxed">
                                    {entry.deadlineSummary}
                                  </p>
                                  {entry.deadlineVerificationNote && (
                                    <p className="mt-2 text-xs text-[#142B3B]/65 leading-relaxed">
                                      Note: {entry.deadlineVerificationNote}
                                    </p>
                                  )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                                  <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#142B3B]/60 mb-2">
                                      Required Attachments (Where Applicable)
                                    </h4>
                                    <ul className="space-y-2 text-[#142B3B]/85 leading-relaxed">
                                      {entry.requiredAttachments.map((att) => (
                                        <li
                                          key={att}
                                          className="flex items-start gap-2"
                                        >
                                          <span
                                            className="text-[#087F72] font-bold"
                                            aria-hidden="true"
                                          >
                                            •
                                          </span>
                                          <span>{att}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A3412] mb-2">
                                      Common Compliance Mistakes to Avoid
                                    </h4>
                                    <ul className="space-y-2 text-[#142B3B]/85 leading-relaxed">
                                      {entry.commonMistakes.map((mistake) => (
                                        <li
                                          key={mistake}
                                          className="flex items-start gap-2"
                                        >
                                          <span
                                            className="text-[#9A3412] font-bold"
                                            aria-hidden="true"
                                          >
                                            •
                                          </span>
                                          <span>{mistake}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {/* Metadata Footer */}
                                <div className="pt-4 border-t border-[#142B3B]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#142B3B]/65">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span>
                                      Last Verified: {entry.lastVerifiedDate}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <a
                                      href={entry.officialBirReferenceUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 font-semibold text-[#087F72] hover:underline"
                                    >
                                      <span>Official BIR Forms Portal</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                    <span aria-hidden="true">·</span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onNavigateServices(
                                          entry.relatedServiceSlug
                                        )
                                      }
                                      className="font-semibold text-[#142B3B] hover:text-[#087F72] hover:underline cursor-pointer"
                                    >
                                      BOSS. Service: {entry.relatedServiceTitle}
                                    </button>
                                  </div>

                                  <a
                                    href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[38px] text-xs font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                                  >
                                    <span>{entry.ctaLabel}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                                  </a>
                                </div>
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Resource Center Verification Notice */}
          <div className="mt-12 rounded-2xl bg-white border border-[#142B3B]/12 p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#142B3B] mb-2">
              Important Taxpayer Verification Notice
            </h2>
            <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed">
              Always cross-check your registered tax obligations against your
              official BIR Certificate of Registration (BIR Form 2303), current
              eBIRForms / eFPS / ORUS software releases on{' '}
              <a
                href="https://www.bir.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#087F72] font-medium hover:underline"
              >
                bir.gov.ph
              </a>
              , and any Revenue Memorandum Circulars extending deadlines due to
              public holidays or natural calamities. Staggered eFPS group filing
              windows and fiscal-year corporate calendars differ from standard
              calendar-year manual/eBIRForms due dates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
