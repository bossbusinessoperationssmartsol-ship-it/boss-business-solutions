import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckSquare,
  ExternalLink,
  FileSpreadsheet,
  Info,
  Square,
} from 'lucide-react';
import {
  INSIGHTS_ARTICLES,
  InsightArticle,
} from '../data/insightsArticles';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';
import { InsightsSubscribeSection } from './InsightsSubscribeSection';

interface InsightArticlePageProps {
  article: InsightArticle;
  onNavigateHome: () => void;
  onNavigateInsightsHub: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectRegulation?: (slug: string) => void;
  onNavigateServices: (serviceSlug?: string) => void;
  onNavigateTaxResources: (formNumber?: string) => void;
  onOpenPrivacyNotice: () => void;
}

export const InsightArticlePage: React.FC<InsightArticlePageProps> = ({
  article,
  onNavigateHome,
  onNavigateInsightsHub,
  onSelectArticle,
  onSelectRegulation,
  onNavigateServices,
  onNavigateTaxResources,
  onOpenPrivacyNotice,
}) => {
  const [checkedActions, setCheckedActions] = useState<Record<string, boolean>>(
    {}
  );

  const toggleAction = (idx: number) => {
    const key = `${article.slug}-${idx}`;
    setCheckedActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const relatedArticles = INSIGHTS_ARTICLES.filter(
    (a) => a.slug !== article.slug
  ).slice(0, 3);

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Editorial Article Header */}
      <header className="bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/25 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
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
            <a
              href="/insights"
              onClick={(e) => {
                if (
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey &&
                  e.button === 0
                ) {
                  e.preventDefault();
                  onNavigateInsightsHub();
                }
              }}
              className="hover:text-[#D6B36A] transition-colors"
            >
              Insights
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#D6B36A] font-medium line-clamp-1 max-w-md">
              {article.title}
            </span>
          </nav>

          {/* Quiet Unboxed Editorial Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#F7F8F5]/75 mb-4">
            <span className="font-semibold text-[#D6B36A] uppercase tracking-wider">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>Published {article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>Last Reviewed {article.lastReviewedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#F7F8F5]/85 leading-relaxed max-w-3xl">
            {article.summary}
          </p>
        </div>
      </header>

      {/* Asymmetric Two-Column Reading Canvas (70% Prose / 30% Reference Rail) */}
      <article className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Prose Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Relevant Regulatory Issuance Box */}
            <div className="rounded-xl bg-white border border-[#142B3B]/12 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6824] mb-1.5">
                Relevant Regulatory Issuance &amp; Statutory Basis
              </p>
              <p className="text-sm font-medium text-[#142B3B] leading-relaxed">
                {article.regulatoryIssuance}
              </p>
            </div>

            {/* Plain-English Explanation Sections */}
            <div className="space-y-7 max-w-prose">
              {article.plainEnglishSections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-[#142B3B]/85 leading-[1.8]"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Who Is Affected + Practical Business Implications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <section className="rounded-xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#087F72] mb-3">
                  Who Is Affected
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                  {article.whoIsAffected.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="text-[#087F72] font-bold shrink-0"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl bg-white border border-[#142B3B]/10 p-5 sm:p-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8A6824] mb-3">
                  Practical Business Implications
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#142B3B]/85 leading-relaxed">
                  {article.businessImplications.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="text-[#8A6824] font-bold shrink-0"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Recommended Compliance Actions Interactive Checklist */}
            <section className="rounded-2xl bg-white border border-[#142B3B]/12 p-6 sm:p-7">
              <div className="mb-4">
                <h2 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B] mb-1">
                  Recommended Compliance Actions
                </h2>
                <p className="text-xs text-[#142B3B]/65">
                  Use this practical checklist to review your internal workflow
                  (click items to check off locally in your browser):
                </p>
              </div>

              <div className="space-y-2.5">
                {article.recommendedActions.map((action, idx) => {
                  const isChecked = !!checkedActions[`${article.slug}-${idx}`];
                  return (
                    <button
                      key={action}
                      type="button"
                      onClick={() => toggleAction(idx)}
                      className="w-full flex items-start gap-3 text-left p-2.5 rounded-lg hover:bg-[#F7F8F5] transition-colors cursor-pointer"
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
                        {action}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Verification & Scope Note */}
            <div className="rounded-xl bg-[#EFEFE9] border border-[#142B3B]/12 p-5 flex items-start gap-3 text-xs text-[#142B3B]/80 leading-relaxed">
              <Info
                className="w-4 h-4 text-[#8A6824] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-[#142B3B] mb-1">
                  Verification &amp; Taxpayer-Specific Application Note
                </p>
                <p>{article.verificationNote}</p>
              </div>
            </div>

            {/* Bottom Contextual Conversion Banner */}
            <div className="rounded-2xl bg-[#142B3B] text-[#F7F8F5] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  Tailored Compliance &amp; Accounting Support
                </p>
                <h3 className="font-display text-xl font-semibold text-white mb-1.5">
                  Want BOSS. to review how this applies to your business?
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F8F5]/75">
                  Open our official Client Discovery Form in a new tab and share
                  your registration or compliance concern.
                </p>
              </div>

              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{article.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Reference Sidebar (30% Margin Rail) */}
          <aside className="lg:col-span-4 space-y-5">
            {/* Accession-Style Editorial Metadata */}
            <div className="rounded-xl bg-white border border-[#142B3B]/10 p-5 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#142B3B]/60">
                Briefing Metadata &amp; Sources
              </h2>

              <dl className="space-y-3 text-xs">
                <div className="pb-2.5 border-b border-[#142B3B]/8">
                  <dt className="text-[#142B3B]/55 mb-0.5">Published Date</dt>
                  <dd className="font-medium text-[#142B3B]">
                    {article.publishedDate}
                  </dd>
                </div>
                <div className="pb-2.5 border-b border-[#142B3B]/8">
                  <dt className="text-[#142B3B]/55 mb-0.5">
                    Last Editorial Review
                  </dt>
                  <dd className="font-medium text-[#142B3B]">
                    {article.lastReviewedDate}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#142B3B]/55 mb-1">
                    Official Government Reference
                  </dt>
                  <dd>
                    <a
                      href={article.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#087F72] hover:underline leading-snug"
                    >
                      <span>{article.officialSourceLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Related BOSS. Service Card */}
            <div className="rounded-xl bg-white border border-[#142B3B]/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A6824] mb-2">
                Related BOSS. Practice Service
              </p>
              <h3 className="font-display text-base font-semibold text-[#142B3B] mb-2 leading-snug">
                {article.relatedServiceTitle}
              </h3>
              <p className="text-xs text-[#142B3B]/70 leading-relaxed mb-4">
                Explore illustrative deliverables, ideal client profiles, and
                engagement scope in our 24-service directory.
              </p>
              <button
                type="button"
                onClick={() => onNavigateServices(article.relatedServiceSlug)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[40px] text-xs font-semibold text-[#142B3B] bg-[#F7F8F5] hover:bg-[#142B3B] hover:text-white border border-[#142B3B]/15 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>View Service Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {article.relatedRegulationSlug && onSelectRegulation && (
              <div className="rounded-xl bg-[#0D2130] text-[#F7F8F5] border border-[#D6B36A]/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B36A] mb-1.5">
                  Regulatory Directory Entry
                </p>
                <p className="text-xs text-[#F7F8F5]/80 leading-relaxed mb-4">
                  Review the structured regulatory summary, effective date, and
                  statutory checklist for this issuance.
                </p>
                <a
                  href={`/regulatory-updates/${article.relatedRegulationSlug}`}
                  onClick={(e) => {
                    if (
                      !e.metaKey &&
                      !e.ctrlKey &&
                      !e.shiftKey &&
                      !e.altKey &&
                      e.button === 0
                    ) {
                      e.preventDefault();
                      onSelectRegulation(article.relatedRegulationSlug!);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[40px] text-xs font-semibold text-[#0D2130] bg-[#D6B36A] hover:bg-[#e2c481] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Read Regulatory Update</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Related BIR Forms Card */}
            {article.relatedBirForms.length > 0 && (
              <div className="rounded-xl bg-white border border-[#142B3B]/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#142B3B]/60 mb-2.5">
                  Referenced BIR Forms
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.relatedBirForms.map((formNo) => (
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

            {/* More Briefings */}
            <div className="rounded-xl bg-white border border-[#142B3B]/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#142B3B]/60 mb-3">
                More BOSS. Insights
              </p>
              <ul className="space-y-3">
                {relatedArticles.map((other) => (
                  <li
                    key={other.slug}
                    className="pb-3 last:pb-0 border-b last:border-b-0 border-[#142B3B]/8"
                  >
                    <p className="text-[11px] text-[#087F72] font-medium mb-0.5">
                      {other.category}
                    </p>
                    <a
                      href={`/insights/${other.slug}`}
                      onClick={(e) => {
                        if (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !e.shiftKey &&
                          !e.altKey &&
                          e.button === 0
                        ) {
                          e.preventDefault();
                          onSelectArticle(other.slug);
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

      <InsightsSubscribeSection onOpenPrivacyNotice={onOpenPrivacyNotice} />
    </div>
  );
};
