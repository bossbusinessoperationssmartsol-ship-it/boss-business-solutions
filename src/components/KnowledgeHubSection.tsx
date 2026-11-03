import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, CheckSquare, Square, X } from 'lucide-react';
import { KNOWLEDGE_ARTICLES, KnowledgeArticle } from '../data/bossContent';
import { ResilientImage } from './ResilientImage';
import flatlayImg from '../assets/images/financial_clarity_flatlay_1793711729238.jpg';

interface KnowledgeHubSectionProps {
  onExploreRelatedService: (serviceId: string) => void;
  onOpenInsights?: () => void;
  onOpenTaxResources?: () => void;
  onOpenRegulatoryUpdates?: () => void;
}

export const KnowledgeHubSection: React.FC<KnowledgeHubSectionProps> = ({
  onExploreRelatedService,
  onOpenInsights,
  onOpenTaxResources,
  onOpenRegulatoryUpdates,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(
    null
  );
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    ...Array.from(new Set(KNOWLEDGE_ARTICLES.map((a) => a.category))),
  ];

  const displayedArticles =
    selectedCategory === 'All'
      ? KNOWLEDGE_ARTICLES
      : KNOWLEDGE_ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle =
    selectedCategory === 'All' ? KNOWLEDGE_ARTICLES[0] : null;
  const gridArticles =
    selectedCategory === 'All'
      ? KNOWLEDGE_ARTICLES.slice(1)
      : displayedArticles;

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="knowledge-hub"
      className="py-20 sm:py-28 bg-[#EFEFE9]/75 border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Platform Header + Topic Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
              The BOSS. Knowledge Hub
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#142B3B] leading-[1.14] mb-4">
              Business Smarts, The BOSS. Way.
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B36A] mb-4" />
            <p className="text-base text-[#142B3B]/75 leading-relaxed">
              Practical, plain-language learning guides built to help Filipino
              entrepreneurs understand registration, bookkeeping, tax habits,
              and financial statements.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter learning guides by topic"
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-white border border-[#142B3B]/10 self-start lg:self-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#142B3B] text-white'
                    : 'text-[#142B3B]/70 hover:text-[#142B3B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Guide Card (when viewing All) */}
        {featuredArticle && (
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72]/50 overflow-hidden mb-6 grid grid-cols-1 lg:grid-cols-12 items-stretch transition-colors"
          >
            <div className="lg:col-span-5 min-h-[240px]">
              <ResilientImage
                src={flatlayImg}
                alt="Organized business receipts alongside a digital financial chart tablet on travertine stone"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                fallbackLabel="Business Smarts, The BOSS. Way."
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#142B3B]/60 mb-4">
                  <span className="font-semibold text-[#8A6824]">
                    Featured Learning Guide
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B] tracking-tight leading-snug mb-3">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm sm:text-base text-[#142B3B]/80 leading-relaxed mb-5">
                  {featuredArticle.subtitle}
                </p>

                <p className="text-xs sm:text-sm italic text-[#142B3B]/70 pb-5 border-b border-[#142B3B]/8">
                  &ldquo;{featuredArticle.leadQuote}&rdquo;
                </p>
              </div>

              <div className="pt-5 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Practical Guide</span>
                </button>
                <span className="text-xs text-[#142B3B]/55 hidden sm:inline">
                  Includes actionable takeaways
                </span>
              </div>
            </div>
          </motion.article>
        )}

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.32,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActiveArticle(article)}
              className="group rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72] p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#142B3B]/60 mb-3">
                  <span className="font-mono tabular-nums font-semibold text-[#8A6824]">
                    Guide 0{featuredArticle ? idx + 2 : idx + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#142B3B] group-hover:text-[#087F72] tracking-tight leading-snug mb-2.5 transition-colors duration-150">
                  {article.title}
                </h3>

                <p className="text-sm text-[#142B3B]/75 leading-relaxed mb-5">
                  {article.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#142B3B]/8 flex items-center justify-between text-xs font-semibold text-[#142B3B] group-hover:text-[#087F72]">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Expanded BOSS. Knowledge & Regulatory Platform Gateway */}
        <div className="mt-10 rounded-2xl bg-[#142B3B] text-[#F7F8F5] p-6 sm:p-8 border border-[#D6B36A]/30">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-white/12 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D6B36A] mb-1.5">
                Expanded Advisory &amp; Compliance Library
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Explore BOSS. Insights, BIR Tax Forms &amp; Regulatory Updates.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F8F5]/75 max-w-md">
              Go deeper with regulatory briefings across 8 topics, our
              11-section Philippine BIR Form Reference Center, and curated
              compliance updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/insights"
              onClick={(e) => {
                if (
                  onOpenInsights &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey &&
                  e.button === 0
                ) {
                  e.preventDefault();
                  onOpenInsights();
                }
              }}
              className="group rounded-xl bg-[#0D2130]/90 hover:bg-[#0D2130] border border-white/12 hover:border-[#D6B36A]/60 p-5 flex flex-col justify-between transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  01 · Editorial Hub
                </p>
                <h4 className="font-display text-lg font-semibold text-white mb-2">
                  BOSS. Insights
                </h4>
                <p className="text-xs text-[#F7F8F5]/75 leading-relaxed mb-4">
                  In-depth briefings on the EOPT Act, Invoice rules, Form 2550Q,
                  EWT/Form 2307, payroll, OPC vs. sole prop, and business
                  closure.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6B36A] group-hover:text-white">
                <span>Browse All Insights</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <a
              href="/tax-resources"
              onClick={(e) => {
                if (
                  onOpenTaxResources &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey &&
                  e.button === 0
                ) {
                  e.preventDefault();
                  onOpenTaxResources();
                }
              }}
              className="group rounded-xl bg-[#0D2130]/90 hover:bg-[#0D2130] border border-white/12 hover:border-[#D6B36A]/60 p-5 flex flex-col justify-between transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  02 · 11-Section BIR Guide
                </p>
                <h4 className="font-display text-lg font-semibold text-white mb-2">
                  Tax Resource Center
                </h4>
                <p className="text-xs text-[#F7F8F5]/75 leading-relaxed mb-4">
                  Searchable Philippine BIR forms library—including reform flags
                  for discontinued Monthly VAT 2550M and repealed Form 0605 ARF.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6B36A] group-hover:text-white">
                <span>Search BIR Forms</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <a
              href="/regulatory-updates"
              onClick={(e) => {
                if (
                  onOpenRegulatoryUpdates &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.shiftKey &&
                  !e.altKey &&
                  e.button === 0
                ) {
                  e.preventDefault();
                  onOpenRegulatoryUpdates();
                }
              }}
              className="group rounded-xl bg-[#0D2130]/90 hover:bg-[#0D2130] border border-white/12 hover:border-[#D6B36A]/60 p-5 flex flex-col justify-between transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  03 · 15-Agency Directory
                </p>
                <h4 className="font-display text-lg font-semibold text-white mb-2">
                  Regulatory Updates
                </h4>
                <p className="text-xs text-[#F7F8F5]/75 leading-relaxed mb-4">
                  Plain-English summaries of BIR, SEC, SSS, PhilHealth,
                  Pag-IBIG, DOLE, DTI, LGU, CDA, PEZA, BOI, and NPC compliance
                  issuances.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6B36A] group-hover:text-white">
                <span>Explore Compliance Updates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-[#142B3B]/60 leading-relaxed max-w-3xl">
          Educational notice: Guides in Business Smarts, The BOSS. Way provide
          general financial literacy and operational best practices. Because
          Philippine tax and registration regulations depend on official agency
          issuances and your exact business profile, verify current rules for
          your specific situation before filing.
        </p>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D2130]/75 backdrop-blur-xs"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/15 p-6 sm:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#142B3B]/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#142B3B]/65 mb-2">
                  <span className="font-semibold text-[#087F72]">
                    Business Smarts, The BOSS. Way.
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3
                  id="article-reader-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B] leading-snug"
                >
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close article reader"
                className="w-10 h-10 rounded-lg border border-[#142B3B]/15 flex items-center justify-center text-[#142B3B] hover:bg-[#142B3B]/5 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <p className="font-display text-lg text-[#142B3B] italic leading-relaxed bg-white p-5 rounded-xl border border-[#142B3B]/10">
                &ldquo;{activeArticle.leadQuote}&rdquo;
              </p>

              {activeArticle.sections.map((sec) => (
                <div key={sec.heading} className="space-y-2">
                  <h4 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B]">
                    {sec.heading}
                  </h4>
                  <p className="text-sm sm:text-base text-[#142B3B]/85 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}

              {/* Actionable Takeaways Checklist */}
              <div className="mt-6 p-5 sm:p-6 rounded-xl bg-white border border-[#142B3B]/10">
                <h4 className="text-xs font-semibold text-[#8A6824] mb-1">
                  Key Takeaways &amp; Action Checklist
                </h4>
                <p className="text-xs text-[#142B3B]/65 mb-4">
                  Click any item below to check off habits your business already
                  practices:
                </p>
                <div className="space-y-2.5">
                  {activeArticle.takeaways.map((item, i) => {
                    const key = `${activeArticle.id}-${i}`;
                    const isChecked = !!checkedItems[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleCheck(key)}
                        className="w-full flex items-start gap-3 text-left text-xs sm:text-sm text-[#142B3B] hover:text-[#087F72] py-1 cursor-pointer"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-[#087F72] shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-[#142B3B]/40 shrink-0 mt-0.5" />
                        )}
                        <span className={isChecked ? 'line-through opacity-70' : ''}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs text-[#142B3B]/60 leading-relaxed">
                Educational overview only: Always verify current BIR, SEC, DTI,
                and local government guidelines applicable to your specific
                taxpayer profile.
              </p>
            </div>

            <div className="pt-5 border-t border-[#142B3B]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2.5 min-h-[42px] text-sm font-medium text-[#142B3B] bg-white border border-[#142B3B]/20 rounded-lg hover:bg-[#EFEFE9] transition-colors cursor-pointer"
              >
                Back to Guides
              </button>
              <button
                type="button"
                onClick={() => {
                  const targetService = activeArticle.relatedServiceId;
                  setActiveArticle(null);
                  onExploreRelatedService(targetService);
                }}
                className="px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors cursor-pointer"
              >
                Explore Related BOSS. Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
