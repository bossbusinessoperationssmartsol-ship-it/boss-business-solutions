import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Search,
  X,
} from 'lucide-react';
import {
  COMPLIANCE_CATEGORIES,
  ComplianceCategory,
  getPublicRegulatoryUpdates,
  REGULATORY_AGENCIES,
  RegulatoryAgencyCode,
  RegulatoryUpdateItem,
} from '../data/regulatoryUpdates';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface RegulatoryUpdatesPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onSelectRegulation: (slug: string) => void;
  onNavigateInsight: (slug: string) => void;
  onNavigateServices: (serviceSlug?: string) => void;
  onNavigateTaxResources: (formNumber?: string) => void;
}

export const RegulatoryUpdatesPage: React.FC<RegulatoryUpdatesPageProps> = ({
  onNavigateHome,
  onSelectRegulation,
  onNavigateInsight,
  onNavigateServices,
  onNavigateTaxResources,
}) => {
  const [selectedAgency, setSelectedAgency] = useState<
    'All' | RegulatoryAgencyCode
  >('All');
  const [selectedYear, setSelectedYear] = useState<
    'All' | '2026' | '2025' | '2024' | '2023'
  >('All');
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | ComplianceCategory
  >('All');
  const [statusFilter, setStatusFilter] = useState<
    'All' | 'Published' | 'Superseded'
  >('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const publicUpdates = useMemo(() => getPublicRegulatoryUpdates(), []);

  const filteredUpdates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const filtered = publicUpdates.filter((item) => {
      if (
        selectedAgency !== 'All' &&
        !item.agencies.includes(selectedAgency)
      ) {
        return false;
      }
      if (selectedYear !== 'All' && item.year !== selectedYear) {
        return false;
      }
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (statusFilter !== 'All' && item.status !== statusFilter) {
        return false;
      }
      if (!q) return true;

      const haystack = [
        item.issuanceNumber,
        item.title,
        item.agencyDisplay,
        item.category,
        item.year,
        item.shortSummary,
        ...item.overview,
        ...item.whoIsAffected,
        ...item.requiredActions,
        ...(item.relatedBirForms || []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });

    return [...filtered].sort((a, b) =>
      sortOrder === 'newest'
        ? b.publishedIso.localeCompare(a.publishedIso)
        : a.publishedIso.localeCompare(b.publishedIso)
    );
  }, [
    publicUpdates,
    selectedAgency,
    selectedYear,
    selectedCategory,
    statusFilter,
    sortOrder,
    searchQuery,
  ]);

  const hasActiveFilters =
    selectedAgency !== 'All' ||
    selectedYear !== 'All' ||
    selectedCategory !== 'All' ||
    statusFilter !== 'All' ||
    searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedAgency('All');
    setSelectedYear('All');
    setSelectedCategory('All');
    setStatusFilter('All');
    setSortOrder('newest');
    setSearchQuery('');
  };

  const isPlainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Full-Width Balanced Corporate Hero */}
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
            <span className="text-[#D6B36A] font-medium">
              Regulatory Updates
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
                Philippine Regulatory &amp; Business Compliance Updates
              </h1>

              <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />

              <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl mb-4">
                Stay informed on important tax regulations, corporate
                requirements, statutory contributions, labor advisories, and
                government compliance developments affecting businesses in the
                Philippines.
              </p>

              <p className="font-display text-sm sm:text-base italic text-[#D6B36A]">
                Clear insights. Practical guidance. Smarter business decisions.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end w-full">
              <div className="rounded-2xl bg-[#142B3B] border border-white/12 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#D6B36A] mb-1.5">
                  Need Tailored Compliance Guidance?
                </p>
                <p className="text-xs sm:text-sm text-[#F7F8F5]/80 leading-relaxed mb-4">
                  Unsure how a new BIR, SEC, DOLE, LGU, or statutory rule
                  affects your operations? Request a review with the BOSS.
                  Business Advisory Team.
                </p>
                <a
                  href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Let BOSS. Review Your Compliance Needs</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Quiet Multi-Agency Coverage Overview Strip */}
          <div className="mt-10 pt-6 border-t border-white/12 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F7F8F5]/70">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-semibold text-white">
                15 Government Agencies Covered
              </span>
              <span aria-hidden="true">·</span>
              <span>
                BIR, SEC, SSS, PhilHealth, Pag-IBIG, DOLE, DTI, LGUs, DILG,
                DOF, CDA, FIRB, PEZA, BOI &amp; NPC
              </span>
            </div>
            <span className="font-mono text-[#D6B36A]">
              {publicUpdates.length} Verified Compliance Briefings
            </span>
          </div>
        </div>
      </section>

      {/* Search & Multi-Dimensional Directory Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#142B3B]/10 py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-3">
          {/* Row 1: Search Input + Year, Category, Status & Sort Selectors */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="relative lg:col-span-5">
              <Search
                className="w-4 h-4 text-[#142B3B]/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search regulation title, issuance (e.g., RR 6-2026, MC 9-2026, NCR-28, HARBOR)..."
                aria-label="Search regulatory updates"
                className="w-full pl-10 pr-9 py-2 min-h-[40px] text-xs sm:text-sm rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] placeholder:text-[#142B3B]/45 focus:outline-none focus:border-[#087F72]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#142B3B]/50 hover:text-[#142B3B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value as 'All' | ComplianceCategory
                  )
                }
                aria-label="Filter by compliance category"
                className="px-3 py-2 min-h-[40px] text-xs font-medium rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] focus:outline-none focus:border-[#087F72] cursor-pointer"
              >
                <option value="All">All Categories</option>
                {COMPLIANCE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) =>
                  setSelectedYear(
                    e.target.value as 'All' | '2026' | '2025' | '2024' | '2023'
                  )
                }
                aria-label="Filter by issuance year"
                className="px-3 py-2 min-h-[40px] text-xs font-medium rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] focus:outline-none focus:border-[#087F72] cursor-pointer"
              >
                <option value="All">All Years (2026–2023)</option>
                <option value="2026">2026 Issuances</option>
                <option value="2025">2025 Issuances</option>
                <option value="2024">2024 Reforms</option>
                <option value="2023">2023 Reforms</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value as 'All' | 'Published' | 'Superseded'
                  )
                }
                aria-label="Filter by current or superseded status"
                className="px-3 py-2 min-h-[40px] text-xs font-medium rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] focus:outline-none focus:border-[#087F72] cursor-pointer"
              >
                <option value="All">Current &amp; Superseded</option>
                <option value="Published">Current Only</option>
                <option value="Superseded">Superseded / Repealed</option>
              </select>

              <select
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(e.target.value as 'newest' | 'oldest')
                }
                aria-label="Sort by publication date"
                className="px-3 py-2 min-h-[40px] text-xs font-medium rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] focus:outline-none focus:border-[#087F72] cursor-pointer"
              >
                <option value="newest">Date: Newest First</option>
                <option value="oldest">Date: Oldest First</option>
              </select>
            </div>
          </div>

          {/* Row 2: All 15 Government Agencies Interactive Filter Bar */}
          <div className="flex items-center justify-between gap-3">
            <div
              role="group"
              aria-label="Filter updates by Philippine government agency"
              className="flex items-center gap-1.5 overflow-x-auto pb-1"
            >
              <button
                type="button"
                onClick={() => setSelectedAgency('All')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedAgency === 'All'
                    ? 'bg-[#142B3B] text-white'
                    : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                }`}
              >
                All Agencies
              </button>
              {REGULATORY_AGENCIES.map((agency) => {
                const active = selectedAgency === agency.code;
                return (
                  <button
                    key={agency.code}
                    type="button"
                    title={agency.fullName}
                    onClick={() => setSelectedAgency(agency.code)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#087F72] text-white'
                        : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                    }`}
                  >
                    {agency.shortName}
                  </button>
                );
              })}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs font-semibold text-[#8A6824] hover:text-[#142B3B] underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Regulatory Directory Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-xs text-[#142B3B]/65">
            <p className="font-mono tabular-nums">
              Showing {filteredUpdates.length} of {publicUpdates.length}{' '}
              regulatory updates
              {selectedAgency !== 'All' ? ` · Agency: ${selectedAgency}` : ''}
              {selectedYear !== 'All' ? ` · Year: ${selectedYear}` : ''}
            </p>
            <p>Sorted by publication date ({sortOrder} first)</p>
          </div>

          {filteredUpdates.length === 0 ? (
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-10 text-center">
              <p className="font-display text-xl font-semibold text-[#142B3B] mb-2">
                No regulatory updates matched your selected filters
              </p>
              <p className="text-sm text-[#142B3B]/70 mb-5">
                Clear one or more filters to browse verified Philippine tax,
                corporate, payroll, and business compliance updates.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors cursor-pointer"
              >
                Show All Regulatory Updates
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredUpdates.map((item: RegulatoryUpdateItem) => {
                const isSuperseded = item.status === 'Superseded';
                return (
                  <article
                    key={item.id}
                    className="group rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72] p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Quiet Unboxed Metadata Line (No Static Pills) */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#142B3B]/65 mb-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono font-bold text-[#142B3B]">
                            {item.issuanceNumber}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-[#087F72]">
                            {item.primaryAgency}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={
                              isSuperseded
                                ? 'font-semibold text-[#9A3412]'
                                : 'text-[#142B3B]/65'
                            }
                          >
                            {isSuperseded ? 'Superseded' : item.year}
                          </span>
                        </div>
                        <span className="text-[#8A6824] font-medium">
                          {item.category}
                        </span>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] group-hover:text-[#087F72] tracking-tight leading-snug mb-3 transition-colors">
                        <a
                          href={`/regulatory-updates/${item.slug}`}
                          onClick={(e) => {
                            if (isPlainClick(e)) {
                              e.preventDefault();
                              onSelectRegulation(item.slug);
                            }
                          }}
                        >
                          {item.title}
                        </a>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#142B3B]/80 leading-relaxed mb-4">
                        {item.shortSummary}
                      </p>

                      {item.supersededNote && (
                        <p className="text-xs text-[#9A3412] bg-[#EFEFE9] rounded-lg px-3.5 py-2.5 mb-4 leading-relaxed">
                          {item.supersededNote}
                        </p>
                      )}

                      <div className="pt-3 border-t border-[#142B3B]/8 text-xs text-[#142B3B]/65 space-y-1 mb-5">
                        <p>
                          <span className="font-semibold text-[#142B3B]/85">
                            Agency:
                          </span>{' '}
                          {item.agencyDisplay}
                        </p>
                        <p>
                          <span className="font-semibold text-[#142B3B]/85">
                            Date:
                          </span>{' '}
                          {item.publicationDate} ·{' '}
                          <span className="font-semibold text-[#142B3B]/85">
                            Effective:
                          </span>{' '}
                          {item.effectiveDate}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Read Update + Secondary Cross-Links */}
                    <div className="pt-4 border-t border-[#142B3B]/10 flex flex-wrap items-center justify-between gap-3">
                      <a
                        href={`/regulatory-updates/${item.slug}`}
                        onClick={(e) => {
                          if (isPlainClick(e)) {
                            e.preventDefault();
                            onSelectRegulation(item.slug);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[38px] text-xs font-semibold text-white bg-[#142B3B] group-hover:bg-[#087F72] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>Read Update</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        {item.relatedBirForms &&
                          item.relatedBirForms.length > 0 && (
                            <button
                              type="button"
                              onClick={() =>
                                onNavigateTaxResources(item.relatedBirForms![0])
                              }
                              className="font-mono text-[#8A6824] hover:underline cursor-pointer"
                            >
                              Forms: {item.relatedBirForms.slice(0, 2).join(', ')}
                            </button>
                          )}

                        {item.relatedInsightSlug && (
                          <button
                            type="button"
                            onClick={() =>
                              onNavigateInsight(item.relatedInsightSlug!)
                            }
                            className="font-semibold text-[#087F72] hover:underline cursor-pointer"
                          >
                            Related Guide
                          </button>
                        )}

                        {item.relatedServiceSlugs.length > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              onNavigateServices(item.relatedServiceSlugs[0])
                            }
                            className="font-medium text-[#142B3B]/75 hover:text-[#142B3B] hover:underline cursor-pointer"
                          >
                            BOSS. Service
                          </button>
                        )}

                        <a
                          href={item.officialSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Official source for ${item.issuanceNumber}`}
                          className="inline-flex items-center gap-1 text-[#142B3B]/60 hover:text-[#087F72]"
                        >
                          <span>Source</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Bottom Persuasive Compliance Review Banner */}
          <div className="mt-14 rounded-2xl bg-[#0D2130] text-[#F7F8F5] border border-[#D6B36A]/30 p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#D6B36A] mb-2">
                Proactive Philippine Business Compliance
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                Turn Regulatory Changes Into Organized Action.
              </h2>
              <p className="text-xs sm:text-sm text-[#F7F8F5]/80 leading-relaxed">
                Whether you need help configuring CWT lines on your invoices,
                catching up on SEC eFAST filings, updating payroll for new wage
                orders, or reviewing BIR open cases, BOSS. is ready to assist.
              </p>
            </div>

            <a
              href={SITE_INTEGRATIONS.officialGoogleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Let BOSS. Review Your Compliance Needs</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 text-xs text-[#142B3B]/60 leading-relaxed max-w-4xl">
            Regulatory information notice: Summaries on this page are prepared
            for general business guidance based on verified Philippine
            government issuances and do not constitute formal legal advice or
            statutory audit opinions. Because local LGU ordinances, regional
            wage orders, and agency circulars evolve, verify specific
            applicability to your taxpayer profile or consult BOSS. for a
            tailored compliance review.
          </p>
        </div>
      </section>
    </div>
  );
};
