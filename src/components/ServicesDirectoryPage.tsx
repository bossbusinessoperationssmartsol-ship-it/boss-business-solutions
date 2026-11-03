import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  Search,
  ShieldAlert,
  X,
} from 'lucide-react';
import {
  EXPANDED_SERVICES,
  ExpandedServiceItem,
  SERVICE_PILLARS,
  ServicePillarId,
} from '../data/expandedServices';
import { findInsightBySlug } from '../data/insightsArticles';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface ServicesDirectoryPageProps {
  focusedServiceSlug?: string | null;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateInsight: (slug: string) => void;
  onNavigateTaxResources: (formNumber?: string) => void;
}

export const ServicesDirectoryPage: React.FC<ServicesDirectoryPageProps> = ({
  focusedServiceSlug,
  onNavigateHome,
  onNavigateInsight,
  onNavigateTaxResources,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<ServicePillarId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      if (focusedServiceSlug) {
        initial[focusedServiceSlug] = true;
      } else {
        initial[EXPANDED_SERVICES[0].slug] = true;
      }
      return initial;
    }
  );

  useEffect(() => {
    if (!focusedServiceSlug) return;
    setSelectedPillar('all');
    setSearchQuery('');
    setExpandedSlugs((prev) => ({ ...prev, [focusedServiceSlug]: true }));
    const timer = window.setTimeout(() => {
      const el = document.getElementById(`service-${focusedServiceSlug}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 90);
    return () => window.clearTimeout(timer);
  }, [focusedServiceSlug]);

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return EXPANDED_SERVICES.filter((svc) => {
      const matchesPillar =
        selectedPillar === 'all' || svc.pillarId === selectedPillar;
      if (!matchesPillar) return false;
      if (!q) return true;

      const haystack = [
        svc.index,
        svc.title,
        svc.pillarLabel,
        svc.whatItIs,
        svc.whyItMatters,
        svc.whoNeedsIt,
        svc.howBossAssists,
        ...svc.typicalDeliverables,
        ...svc.relatedBirForms,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedPillar, searchQuery]);

  const activePillarMeta = useMemo(
    () => SERVICE_PILLARS.find((p) => p.id === selectedPillar),
    [selectedPillar]
  );

  const toggleExpand = (slug: string) => {
    setExpandedSlugs((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const expandAllVisible = () => {
    const next: Record<string, boolean> = { ...expandedSlugs };
    filteredServices.forEach((s) => {
      next[s.slug] = true;
    });
    setExpandedSlugs(next);
  };

  const collapseAllVisible = () => {
    setExpandedSlugs({});
  };

  const isPlainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Institutional Hero Header with Standardized Home / Services Breadcrumb */}
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
            <span className="text-[#D6B36A] font-medium">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs sm:text-sm font-semibold text-[#D6B36A] mb-3">
                6 Core Practice Areas · {EXPANDED_SERVICES.length} Specialized
                Engagements
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
                Philippine Accounting, Registration, Reconciliation, Payroll,
                Tax &amp; Advisory Services
              </h1>
              <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />
              <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl">
                Structured professional support built for Philippine business
                owners, startups, professionals, SMEs, and corporations—covering
                every stage from DTI/SEC/BIR registration through monthly
                bookkeeping, account reconciliations, payroll, tax filings,
                management reporting, and business retirement.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end w-full max-w-md">
              <div className="rounded-2xl bg-[#142B3B] border border-white/12 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#D6B36A] mb-1.5">
                  Tailored Engagement Scope
                </p>
                <p className="text-xs sm:text-sm text-[#F7F8F5]/80 leading-relaxed mb-4">
                  Share your entity structure, transaction volume, and immediate
                  priorities so BOSS. can prepare a clear service recommendation.
                </p>
                <a
                  href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Let&rsquo;s Talk Business</span>
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & 6-Category Practice Filter Controls */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#142B3B]/10 py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-xl">
              <Search
                className="w-4 h-4 text-[#142B3B]/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g., bank reconciliation, SEC eFAST, backlog cleanup, payroll, 2550Q, closure)..."
                aria-label="Search BOSS. professional services"
                className="w-full pl-10 pr-9 py-2.5 min-h-[42px] text-xs sm:text-sm rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] placeholder:text-[#142B3B]/45 focus:outline-none focus:border-[#087F72]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#142B3B]/50 hover:text-[#142B3B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-[#142B3B]/65">
              <span className="font-mono tabular-nums">
                Showing {filteredServices.length} of {EXPANDED_SERVICES.length}{' '}
                services
              </span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={expandAllVisible}
                className="font-semibold text-[#087F72] hover:underline cursor-pointer whitespace-nowrap"
              >
                Expand all
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                onClick={collapseAllVisible}
                className="font-medium text-[#142B3B]/70 hover:text-[#142B3B] hover:underline cursor-pointer whitespace-nowrap"
              >
                Collapse
              </button>
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter services by practice category"
            className="flex items-center gap-1.5 overflow-x-auto pb-1"
          >
            {SERVICE_PILLARS.map((pillar) => {
              const active = selectedPillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#142B3B] text-white'
                      : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                  }`}
                >
                  {pillar.shortLabel}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Directory List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Practice Category Scope Summary */}
          {activePillarMeta && selectedPillar !== 'all' && (
            <div className="mb-8 pb-6 border-b border-[#142B3B]/12">
              <h2 className="font-display text-2xl font-semibold text-[#142B3B] mb-2">
                {activePillarMeta.label}
              </h2>
              <p className="text-sm text-[#142B3B]/80 max-w-3xl mb-3">
                {activePillarMeta.description}
              </p>
              {activePillarMeta.engagementTags.length > 0 && (
                <p className="text-xs text-[#8A6824]">
                  <span className="font-semibold text-[#142B3B]">
                    Covered Areas:
                  </span>{' '}
                  {activePillarMeta.engagementTags.join(' · ')}
                </p>
              )}
            </div>
          )}

          {filteredServices.length === 0 ? (
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-10 text-center">
              <p className="font-display text-xl font-semibold text-[#142B3B] mb-2">
                No matching service found for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-[#142B3B]/70 mb-5">
                Try clearing your filter or tell us your exact requirement via
                our Client Discovery Form.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedPillar('all');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors cursor-pointer"
              >
                Show All {EXPANDED_SERVICES.length} Services
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service: ExpandedServiceItem) => {
                const isExpanded = !!expandedSlugs[service.slug];
                return (
                  <article
                    key={service.id}
                    id={`service-${service.slug}`}
                    className="scroll-mt-36 rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72]/50 transition-colors overflow-hidden"
                  >
                    <div className="p-6 sm:p-8">
                      {/* Quiet Editorial Kicker */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#142B3B]/65">
                          <span className="font-mono tabular-nums font-semibold text-[#8A6824]">
                            {service.index}.
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-[#087F72]">
                            {service.pillarLabel}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleExpand(service.slug)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F72] hover:text-[#142B3B] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>
                            {isExpanded
                              ? 'Hide Deliverables & Details'
                              : 'View Full Details & Deliverables'}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight mb-5">
                        {service.title}
                      </h2>

                      {/* Core Triad: What It Is, Why It Matters & How BOSS. Assists */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/8">
                          <span className="text-xs font-semibold text-[#142B3B] block mb-1.5">
                            What the Service Is
                          </span>
                          <p className="text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                            {service.whatItIs}
                          </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/8">
                          <span className="text-xs font-semibold text-[#8A6824] block mb-1.5">
                            Why It Matters
                          </span>
                          <p className="text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                            {service.whyItMatters}
                          </p>
                        </div>

                        <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-[#087F72]/25">
                          <span className="text-xs font-semibold text-[#087F72] block mb-1.5">
                            How BOSS. Can Assist
                          </span>
                          <p className="text-xs sm:text-sm text-[#142B3B] font-medium leading-relaxed">
                            {service.howBossAssists}
                          </p>
                        </div>
                      </div>

                      {/* Expandable: Typical Deliverables, Who Needs It & Related Resources */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-[#142B3B]/10 space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Typical Deliverables */}
                            <div className="lg:col-span-7">
                              <h3 className="text-xs font-semibold text-[#8A6824] mb-3">
                                Typical Deliverables
                              </h3>
                              <ul className="space-y-2.5">
                                {service.typicalDeliverables.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-sm text-[#142B3B]/85 leading-relaxed"
                                  >
                                    <Check
                                      className="w-4 h-4 text-[#087F72] shrink-0 mt-1"
                                      aria-hidden="true"
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Who Needs It + Related Forms & Insights */}
                            <div className="lg:col-span-5 space-y-4">
                              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/10">
                                <h3 className="text-xs font-semibold text-[#142B3B] mb-1.5">
                                  Who Needs This Service
                                </h3>
                                <p className="text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                                  {service.whoNeedsIt}
                                </p>
                              </div>

                              {service.relatedBirForms.length > 0 && (
                                <div className="p-4 rounded-xl bg-white border border-[#142B3B]/10">
                                  <h3 className="text-xs font-semibold text-[#142B3B]/65 mb-2">
                                    Related Philippine BIR Forms
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-2">
                                    {service.relatedBirForms.map((formNo) => (
                                      <button
                                        key={formNo}
                                        type="button"
                                        onClick={() =>
                                          onNavigateTaxResources(formNo)
                                        }
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-[#142B3B] bg-[#F7F8F5] hover:bg-[#087F72] hover:text-white border border-[#142B3B]/15 rounded-md transition-colors cursor-pointer"
                                      >
                                        <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
                                        <span>Form {formNo}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {service.relatedInsightSlugs.length > 0 && (
                                <div className="p-4 rounded-xl bg-white border border-[#142B3B]/10">
                                  <h3 className="text-xs font-semibold text-[#142B3B]/65 mb-2">
                                    Related BOSS. Insights
                                  </h3>
                                  <ul className="space-y-2">
                                    {service.relatedInsightSlugs.map((slug) => {
                                      const art = findInsightBySlug(slug);
                                      if (!art) return null;
                                      return (
                                        <li key={slug}>
                                          <a
                                            href={`/insights/${art.slug}`}
                                            onClick={(e) => {
                                              if (isPlainClick(e)) {
                                                e.preventDefault();
                                                onNavigateInsight(art.slug);
                                              }
                                            }}
                                            className="inline-flex items-start gap-1.5 text-xs sm:text-sm font-medium text-[#087F72] hover:text-[#142B3B] hover:underline leading-snug"
                                          >
                                            <ArrowRight className="w-3.5 h-3.5 shrink-0 mt-1" />
                                            <span>{art.title}</span>
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>

                          {service.scopeBoundaryNote && (
                            <div className="p-4 rounded-xl bg-[#EFEFE9] border border-[#142B3B]/12 flex items-start gap-2.5 text-xs text-[#142B3B]/75 leading-relaxed">
                              <ShieldAlert
                                className="w-4 h-4 text-[#8A6824] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <p>{service.scopeBoundaryNote}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Card Footer Action Bar */}
                      <div className="mt-6 pt-4 border-t border-[#142B3B]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => toggleExpand(service.slug)}
                          className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-semibold text-[#142B3B] hover:text-[#087F72] py-1.5 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>
                            {isExpanded
                              ? 'Collapse Deliverables'
                              : `View ${service.typicalDeliverables.length} Typical Deliverables`}
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                        >
                          <span>{service.ctaLabel}</span>
                          <ArrowUpRight
                            className="w-4 h-4 shrink-0"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Practice-Wide Professional Scope & Ethics Notice */}
          <div className="mt-12 rounded-2xl bg-white border border-[#142B3B]/12 p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#142B3B] mb-2">
              Professional Engagement &amp; Regulatory Scope Notice
            </h2>
            <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed">
              BOSS. — Business Operations &amp; Smart Solutions provides
              accounting, bookkeeping, account reconciliations, payroll
              computation, documentary registration support, tax return
              preparation assistance, management reporting, and internal control
              advisory. Deliverables are confirmed in writing per client
              engagement. Final filing approvals, clearances, and statutory
              assessments rest with the respective government agencies (BIR,
              SEC, DTI, LGUs, SSS, PhilHealth, Pag-IBIG, DOLE, and CDA). Where
              statutory independent CPA financial statement audits or formal
              legal representation are required by Philippine law, BOSS.
              prepares organized accounting schedules and coordinates
              transparently with independent licensed practitioners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
