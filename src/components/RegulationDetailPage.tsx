import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckSquare,
  ExternalLink,
  FileSpreadsheet,
  Info,
  Square,
} from 'lucide-react';
import {
  getPublicRegulatoryUpdates,
  RegulatoryUpdateItem,
} from '../data/regulatoryUpdates';
import { findExpandedService } from '../data/expandedServices';
import { findInsightBySlug } from '../data/insightsArticles';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface RegulationDetailPageProps {
  regulation: RegulatoryUpdateItem;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateRegulatoryUpdates: () => void;
  onSelectRegulation: (slug: string) => void;
  onNavigateServices: (serviceSlug?: string) => void;
  onNavigateInsight: (slug: string) => void;
  onNavigateTaxResources: (formNumber?: string) => void;
}

export const RegulationDetailPage: React.FC<RegulationDetailPageProps> = ({
  regulation,
  onNavigateHome,
  onNavigateRegulatoryUpdates,
  onSelectRegulation,
  onNavigateServices,
  onNavigateInsight,
  onNavigateTaxResources,
}) => {
  const [checkedActions, setCheckedActions] = useState<Record<string, boolean>>(
    {}
  );

  const isPlainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;

  const toggleAction = (idx: number) => {
    const key = `${regulation.slug}-${idx}`;
    setCheckedActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSuperseded = regulation.status === 'Superseded';

  const relatedServices = regulation.relatedServiceSlugs
    .map((slug) => findExpandedService(slug))
    .filter((svc): svc is NonNullable<typeof svc> => Boolean(svc));

  const relatedInsight = regulation.relatedInsightSlug
    ? findInsightBySlug(regulation.relatedInsightSlug)
    : undefined;

  const moreUpdates = getPublicRegulatoryUpdates()
    .filter((u) => u.slug !== regulation.slug)
    .slice(0, 4);

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Corporate Header with Standardized Breadcrumb: Home / Updates / [Regulation Title] */}
      <header className="bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/25 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
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
            <a
              href="/regulatory-updates"
              onClick={(e) => {
                if (isPlainClick(e)) {
                  e.preventDefault();
                  onNavigateRegulatoryUpdates();
                }
              }}
              className="hover:text-[#D6B36A] transition-colors"
            >
              Updates
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#D6B36A] font-medium line-clamp-1 max-w-md sm:max-w-xl">
              {regulation.title}
            </span>
          </nav>

          {/* Quiet Unboxed Regulatory Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#F7F8F5]/75 mb-4">
            <span className="font-mono font-semibold text-[#D6B36A]">
              {regulation.issuanceNumber}
            </span>
            <span aria-hidden="true">·</span>
            <span>{regulation.agencyDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{regulation.category}</span>
            <span aria-hidden="true">·</span>
            <span
              className={
                isSuperseded
                  ? 'text-[#F6AD55] font-semibold'
                  : 'text-[#43C6B7] font-semibold'
              }
            >
              {isSuperseded ? 'Superseded / Repealed Rule' : 'Current Issuance'}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5 max-w-4xl">
            {regulation.title}
          </h1>

          <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />

          <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl">
            {regulation.shortSummary}
          </p>
        </div>
      </header>

      {/* Main Two-Column Compliance Analysis Layout */}
      <article className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Primary Regulatory Analysis Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Superseded Notice (if applicable) */}
            {regulation.supersededNote && (
              <div className="rounded-xl bg-[#EFEFE9] border border-[#9A3412]/35 p-5 text-xs sm:text-sm text-[#142B3B] leading-relaxed">
                <p className="font-semibold text-[#9A3412] mb-1">
                  Superseded / Repealed Compliance Notice
                </p>
                <p>{regulation.supersededNote}</p>
              </div>
            )}

            {/* Regional / Local Jurisdiction Notice (if applicable) */}
            {regulation.jurisdictionNote && (
              <div className="rounded-xl bg-white border border-[#D6B36A]/55 p-5 flex items-start gap-3 text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                <Info
                  className="w-4 h-4 text-[#8A6824] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p>{regulation.jurisdictionNote}</p>
              </div>
            )}

            {/* Key Dates & Issuance Summary Grid */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6 text-xs sm:text-sm">
              <div className="pb-3 sm:pb-0 border-b sm:border-b-0 border-[#142B3B]/8">
                <dt className="text-xs text-[#142B3B]/55 mb-1">
                  Publication / Issuance Date
                </dt>
                <dd className="font-semibold text-[#142B3B]">
                  {regulation.publicationDate}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#142B3B]/55 mb-1">
                  Effective Date
                </dt>
                <dd className="font-semibold text-[#087F72]">
                  {regulation.effectiveDate}
                </dd>
              </div>
            </dl>

            {/* 1. Overview */}
            <section className="rounded-2xl bg-white border border-[#142B3B]/10 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight">
                Overview
              </h2>
              {regulation.overview.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-[#142B3B]/85 leading-[1.8]"
                >
                  {para}
                </p>
              ))}
            </section>

            {/* 2. What Changed */}
            <section className="rounded-2xl bg-white border border-[#142B3B]/10 p-6 sm:p-8">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight mb-4">
                What Changed
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-[#142B3B]/85 leading-relaxed">
                {regulation.whatChanged.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="font-mono text-xs font-semibold text-[#087F72] pt-1 shrink-0"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Who Is Affected & 4. Practical Implications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <section className="rounded-2xl bg-white border border-[#142B3B]/10 p-6">
                <h2 className="font-display text-lg font-semibold text-[#142B3B] mb-3">
                  Who Is Affected
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                  {regulation.whoIsAffected.map((who) => (
                    <li key={who} className="flex items-start gap-2.5">
                      <span
                        className="text-[#087F72] font-bold shrink-0"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{who}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl bg-white border border-[#142B3B]/10 p-6">
                <h2 className="font-display text-lg font-semibold text-[#142B3B] mb-3">
                  Practical Business Implications
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                  {regulation.practicalImplications.map((imp) => (
                    <li key={imp} className="flex items-start gap-2.5">
                      <span
                        className="text-[#8A6824] font-bold shrink-0"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* 5. Required Actions Interactive Checklist */}
            <section className="rounded-2xl bg-white border border-[#142B3B]/12 p-6 sm:p-8">
              <div className="mb-4">
                <h2 className="font-display text-xl font-semibold text-[#142B3B] mb-1">
                  Required &amp; Recommended Compliance Actions
                </h2>
                <p className="text-xs text-[#142B3B]/65">
                  Review these practical steps with your finance, payroll, or
                  corporate compliance team (click any item to check off locally):
                </p>
              </div>

              <div className="space-y-2.5">
                {regulation.requiredActions.map((act, idx) => {
                  const isChecked =
                    !!checkedActions[`${regulation.slug}-${idx}`];
                  return (
                    <button
                      key={act}
                      type="button"
                      onClick={() => toggleAction(idx)}
                      className="w-full flex items-start gap-3 text-left p-3 rounded-xl bg-[#F7F8F5]/70 hover:bg-[#F7F8F5] border border-[#142B3B]/8 transition-colors cursor-pointer"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#087F72] shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-[#142B3B]/40 shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isChecked
                            ? 'line-through text-[#142B3B]/55'
                            : 'text-[#142B3B]'
                        }`}
                      >
                        {act}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 6. Compliance Considerations */}
            <section className="rounded-2xl bg-[#EFEFE9] border border-[#142B3B]/12 p-6">
              <h2 className="font-display text-lg font-semibold text-[#142B3B] mb-2.5">
                Compliance Considerations &amp; Scope Reminders
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#142B3B]/80 leading-relaxed">
                {regulation.complianceConsiderations.map((note) => (
                  <li key={note} className="flex items-start gap-2.5">
                    <span
                      className="text-[#8A6824] font-bold shrink-0"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Persuasive Google Form CTA Banner */}
            <div className="rounded-2xl bg-[#142B3B] text-[#F7F8F5] border border-[#D6B36A]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  BOSS. Business Advisory &amp; Compliance Support
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-1.5">
                  Need guidance applying {regulation.issuanceNumber} to your
                  business?
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F8F5]/80 leading-relaxed max-w-xl">
                  Start a conversation with BOSS. using our official Client
                  Discovery Form so we can evaluate your registration,
                  bookkeeping, payroll, or tax compliance needs.
                </p>
              </div>

              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{regulation.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="/regulatory-updates"
                onClick={(e) => {
                  if (isPlainClick(e)) {
                    e.preventDefault();
                    onNavigateRegulatoryUpdates();
                  }
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#142B3B] hover:text-[#087F72] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Regulatory Updates</span>
              </a>
            </div>
          </div>

          {/* Right Reference Rail */}
          <aside className="lg:col-span-4 space-y-5">
            {/* Official Source & Verification Metadata */}
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6 space-y-4">
              <h2 className="text-xs font-semibold text-[#142B3B]/60">
                Verification &amp; Official Source
              </h2>

              <dl className="space-y-3 text-xs">
                <div className="pb-3 border-b border-[#142B3B]/8">
                  <dt className="text-[#142B3B]/55 mb-0.5">Issuance Number</dt>
                  <dd className="font-mono font-semibold text-[#142B3B]">
                    {regulation.issuanceNumber}
                  </dd>
                </div>

                <div className="pb-3 border-b border-[#142B3B]/8">
                  <dt className="text-[#142B3B]/55 mb-0.5">Agency</dt>
                  <dd className="font-medium text-[#142B3B]">
                    {regulation.agencyDisplay}
                  </dd>
                </div>

                <div className="pb-3 border-b border-[#142B3B]/8">
                  <dt className="text-[#142B3B]/55 mb-0.5">
                    Last Verified Date
                  </dt>
                  <dd className="font-mono font-medium text-[#142B3B]">
                    {regulation.lastVerifiedDate}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#142B3B]/55 mb-1">
                    Official Government Source
                  </dt>
                  <dd>
                    <a
                      href={regulation.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#087F72] hover:underline leading-snug"
                    >
                      <span>{regulation.officialSourceLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Related BOSS. Services */}
            {relatedServices.length > 0 && (
              <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#8A6824] mb-3">
                  Related BOSS. Services
                </p>
                <ul className="space-y-3">
                  {relatedServices.map((svc) => (
                    <li
                      key={svc.slug}
                      className="pb-3 last:pb-0 border-b last:border-b-0 border-[#142B3B]/8"
                    >
                      <p className="text-[11px] text-[#142B3B]/55 mb-0.5">
                        {svc.pillarLabel}
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigateServices(svc.slug)}
                        className="inline-flex items-start gap-1.5 text-left text-xs sm:text-sm font-semibold text-[#142B3B] hover:text-[#087F72] transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 mt-1 text-[#087F72]" />
                        <span>{svc.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Companion Insight Briefing */}
            {relatedInsight && (
              <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#087F72] mb-2">
                  Companion BOSS. Insight Guide
                </p>
                <a
                  href={`/insights/${relatedInsight.slug}`}
                  onClick={(e) => {
                    if (isPlainClick(e)) {
                      e.preventDefault();
                      onNavigateInsight(relatedInsight.slug);
                    }
                  }}
                  className="font-display text-base font-semibold text-[#142B3B] hover:text-[#087F72] leading-snug block mb-2 transition-colors"
                >
                  {relatedInsight.title}
                </a>
                <p className="text-xs text-[#142B3B]/70 leading-relaxed">
                  {relatedInsight.readTime} · {relatedInsight.category}
                </p>
              </div>
            )}

            {/* Referenced BIR Forms */}
            {regulation.relatedBirForms &&
              regulation.relatedBirForms.length > 0 && (
                <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
                  <p className="text-xs font-semibold text-[#142B3B]/60 mb-2.5">
                    Referenced BIR Forms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {regulation.relatedBirForms.map((formNo) => (
                      <button
                        key={formNo}
                        type="button"
                        onClick={() => onNavigateTaxResources(formNo)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-[#142B3B] bg-[#F7F8F5] hover:bg-[#087F72] hover:text-white border border-[#142B3B]/15 rounded-md transition-colors cursor-pointer"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
                        <span>Form {formNo}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Other Regulatory Updates */}
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
              <p className="text-xs font-semibold text-[#142B3B]/60 mb-3">
                More Regulatory Updates
              </p>
              <ul className="space-y-3">
                {moreUpdates.map((other) => (
                  <li
                    key={other.slug}
                    className="pb-3 last:pb-0 border-b last:border-b-0 border-[#142B3B]/8"
                  >
                    <p className="font-mono text-[11px] text-[#087F72] mb-0.5">
                      {other.issuanceNumber}
                    </p>
                    <a
                      href={`/regulatory-updates/${other.slug}`}
                      onClick={(e) => {
                        if (isPlainClick(e)) {
                          e.preventDefault();
                          onSelectRegulation(other.slug);
                        }
                      }}
                      className="text-xs font-semibold text-[#142B3B] hover:text-[#087F72] leading-snug block transition-colors"
                    >
                      {other.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};
