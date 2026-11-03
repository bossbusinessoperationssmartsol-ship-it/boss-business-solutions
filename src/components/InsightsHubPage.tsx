import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileSpreadsheet,
  Scale,
  Search,
  X,
} from 'lucide-react';
import {
  INSIGHT_CATEGORIES,
  INSIGHTS_ARTICLES,
  InsightArticle,
  InsightCategory,
} from '../data/insightsArticles';
import { ResilientImage } from './ResilientImage';
import { InsightsSubscribeSection } from './InsightsSubscribeSection';
import handbookImg from '../assets/images/boss_handbook_desk_1793711726748.jpg';

interface InsightsHubPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onSelectArticle: (slug: string) => void;
  onNavigateServices: (serviceSlug?: string) => void;
  onNavigateTaxResources: (formNumber?: string) => void;
  onNavigateRegulatoryUpdates: () => void;
  onOpenPrivacyNotice: () => void;
}

export const InsightsHubPage: React.FC<InsightsHubPageProps> = ({
  onNavigateHome,
  onSelectArticle,
  onNavigateServices,
  onNavigateTaxResources,
  onNavigateRegulatoryUpdates,
  onOpenPrivacyNotice,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | InsightCategory
  >('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return INSIGHTS_ARTICLES.filter((art) => {
      const catMatch =
        selectedCategory === 'All' || art.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;

      const haystack = [
        art.title,
        art.summary,
        art.category,
        art.regulatoryIssuance,
        art.relatedServiceTitle,
        ...art.relatedBirForms,
        ...art.plainEnglishSections.map((s) => s.heading),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  const showFeaturedLayout =
    selectedCategory === 'All' &&
    searchQuery.trim() === '' &&
    filteredArticles.length > 0;
  const leadArticle: InsightArticle | null = showFeaturedLayout
    ? filteredArticles[0]
    : null;
  const secondaryArticles = showFeaturedLayout
    ? filteredArticles.slice(1)
    : filteredArticles;

  const handleArticleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault();
      onSelectArticle(slug);
    }
  };

  return (
    <div className="bg-[#F7F8F5] text-[#142B3B]">
      {/* Editorial Publication Header */}
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
            <span className="text-[#D6B36A] font-medium">Insights</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B36A] mb-3">
                <span className="font-semibold uppercase tracking-widest">
                  BOSS. Insights
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F7F8F5]/70">
                  Philippine Tax, Accounting &amp; Business Advisory Briefings
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
                Clear Regulatory &amp; Financial Guidance for Philippine
                Businesses.
              </h1>
              <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />
              <p className="text-base sm:text-lg text-[#F7F8F5]/80 leading-relaxed max-w-3xl">
                Plain-English analysis of verified BIR issuances, business
                registration pathways, bookkeeping discipline, statutory
                payroll, financial reporting, and internal controls—helping
                entrepreneurs act with clarity rather than guesswork.
              </p>
            </div>

            {/* Companion Portals Strip */}
            <div className="lg:col-span-4 space-y-2.5">
              <button
                type="button"
                onClick={() => onNavigateTaxResources()}
                className="w-full p-4 rounded-xl bg-[#142B3B] hover:bg-[#19364A] border border-white/12 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileSpreadsheet className="w-5 h-5 text-[#D6B36A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white">
                      Philippine Tax Resource Center
                    </p>
                    <p className="text-[11px] text-[#F7F8F5]/65 truncate">
                      Searchable BIR Form Directory &amp; Reform Flags
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D6B36A] shrink-0" />
              </button>

              <button
                type="button"
                onClick={onNavigateRegulatoryUpdates}
                className="w-full p-4 rounded-xl bg-[#142B3B] hover:bg-[#19364A] border border-white/12 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Scale className="w-5 h-5 text-[#D6B36A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white">
                      Regulatory &amp; Compliance Updates
                    </p>
                    <p className="text-[11px] text-[#F7F8F5]/65 truncate">
                      15-Agency Philippine Compliance Directory
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D6B36A] shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & 8-Category Editorial Filter Bar */}
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
                placeholder="Search briefings by topic, BIR form, or issuance (e.g., EOPT, RMC 14-2024, 2550Q, OPC, closure)..."
                aria-label="Search BOSS. Insights articles"
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
                {filteredArticles.length}{' '}
                {filteredArticles.length === 1 ? 'article' : 'articles'}
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="#insights-subscribe"
                className="font-semibold text-[#087F72] hover:underline whitespace-nowrap"
              >
                Direct Compliance Inquiry
              </a>
            </div>
          </div>

          {/* All 8 Required Categories Filter */}
          <div
            role="group"
            aria-label="Filter Insights by category"
            className="flex items-center gap-1.5 overflow-x-auto pb-1"
          >
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#142B3B] text-white'
                  : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
              }`}
            >
              All Topics
            </button>
            {INSIGHT_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#142B3B] text-white'
                      : 'bg-[#F7F8F5] text-[#142B3B]/75 hover:text-[#142B3B] border border-[#142B3B]/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Content Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Tier 1: Lead Story (when viewing All without active search) */}
          {leadArticle && (
            <article className="rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72]/50 overflow-hidden mb-10 grid grid-cols-1 lg:grid-cols-12 items-stretch transition-colors">
              <div className="lg:col-span-5 min-h-[260px]">
                <ResilientImage
                  src={handbookImg}
                  alt="BOSS. editorial advisory briefing desk in Manila"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  fallbackLabel="BOSS. Lead Regulatory Briefing"
                />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#142B3B]/65 mb-3">
                    <span className="font-semibold text-[#8A6824] uppercase tracking-wider">
                      Lead Briefing
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#087F72]">
                      {leadArticle.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Reviewed {leadArticle.lastReviewedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B] tracking-tight leading-snug mb-3">
                    <a
                      href={`/insights/${leadArticle.slug}`}
                      onClick={(e) => handleArticleLinkClick(e, leadArticle.slug)}
                      className="hover:text-[#087F72] transition-colors"
                    >
                      {leadArticle.title}
                    </a>
                  </h2>

                  <p className="text-sm sm:text-base text-[#142B3B]/80 leading-relaxed mb-5">
                    {leadArticle.summary}
                  </p>

                  <p className="text-xs text-[#142B3B]/65 pb-5 border-b border-[#142B3B]/10">
                    <span className="font-semibold text-[#142B3B]">
                      Regulatory Reference:
                    </span>{' '}
                    {leadArticle.regulatoryIssuance}
                  </p>
                </div>

                <div className="pt-5 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`/insights/${leadArticle.slug}`}
                    onClick={(e) => handleArticleLinkClick(e, leadArticle.slug)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Briefing</span>
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigateServices(leadArticle.relatedServiceSlug)
                    }
                    className="text-xs font-semibold text-[#087F72] hover:underline cursor-pointer"
                  >
                    Related: {leadArticle.relatedServiceTitle}
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Tier 2: Editorial Article Cards */}
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl bg-white border border-[#142B3B]/10 p-10 text-center">
              <p className="font-display text-xl font-semibold text-[#142B3B] mb-2">
                No Insights articles matched your filter
              </p>
              <p className="text-sm text-[#142B3B]/70 mb-5">
                Clear the search keyword or select All Topics to browse all
                advisory briefings.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72] p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#142B3B]/60 mb-3">
                      <span className="font-semibold text-[#087F72]">
                        {article.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B] group-hover:text-[#087F72] tracking-tight leading-snug mb-3 transition-colors">
                      <a
                        href={`/insights/${article.slug}`}
                        onClick={(e) => handleArticleLinkClick(e, article.slug)}
                      >
                        {article.title}
                      </a>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed mb-4">
                      {article.summary}
                    </p>

                    <div className="pt-3 border-t border-[#142B3B]/8 text-[11px] text-[#142B3B]/60 space-y-1 mb-5">
                      <p className="line-clamp-2">
                        <span className="font-semibold text-[#142B3B]/80">
                          Issuance:
                        </span>{' '}
                        {article.regulatoryIssuance}
                      </p>
                      <p>
                        Published {article.publishedDate} · Reviewed{' '}
                        {article.lastReviewedDate}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#142B3B]/10 flex items-center justify-between gap-2">
                    <a
                      href={`/insights/${article.slug}`}
                      onClick={(e) => handleArticleLinkClick(e, article.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B3B] group-hover:text-[#087F72] transition-colors"
                    >
                      <span>Read Briefing</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {article.relatedBirForms.length > 0 && (
                      <span className="font-mono text-[11px] text-[#8A6824]">
                        Forms: {article.relatedBirForms.slice(0, 3).join(', ')}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Editorial Accuracy & General Information Disclaimer */}
          <p className="mt-10 text-xs text-[#142B3B]/60 leading-relaxed max-w-4xl">
            Editorial &amp; regulatory disclaimer: Articles published in BOSS.
            Insights are prepared for general educational and business literacy
            purposes in the Philippines. They do not constitute formal legal
            counsel, statutory audit opinions, or binding BIR rulings. Because
            regulatory circulars, RDO practices, and taxpayer-specific facts
            evolve, always verify current agency issuances or request a
            tailored review before acting.
          </p>
        </div>
      </section>

      {/* Dedicated Newsletter & Advisory Briefing Section (#insights-subscribe) */}
      <InsightsSubscribeSection onOpenPrivacyNotice={onOpenPrivacyNotice} />
    </div>
  );
};
