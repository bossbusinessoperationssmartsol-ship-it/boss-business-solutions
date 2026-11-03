import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  FileSpreadsheet,
  FolderCheck,
  TrendingUp,
} from 'lucide-react';
import { HERO_ROTATING_MESSAGES } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';
import { BossLogo } from './BossLogo';

interface HeroSectionProps {
  onExploreSolutionsClick: () => void;
}

type DashboardTab = 'profit' | 'compliance' | 'workflow';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutionsClick,
}) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>('profit');

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % HERO_ROTATING_MESSAGES.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0D2130] text-[#F7F8F5] pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#D6B36A]/25 tracking-[0.01em]"
    >
      {/* Subtle Ambient Background Motion (Compositor-Only transform & opacity) */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-28 -right-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,_rgba(8,127,114,0.28)_0%,_transparent_70%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,_rgba(214,179,106,0.18)_0%,_transparent_70%)]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Executive Proposition Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed Brand Identity Line */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#D6B36A] mb-5">
              <span>Business Operations &amp; Smart Solutions</span>
              <span aria-hidden="true" className="text-white/35">
                ·
              </span>
              <span className="text-[#F7F8F5]/75">
                Accounting, Tax &amp; Digital Advisory in the Philippines
              </span>
            </div>

            {/* Bold Unforgettable Main Headline */}
            <h1 className="font-display text-[clamp(2.3rem,4.3vw,3.85rem)] font-semibold leading-[1.08] tracking-tight text-white mb-5">
              You Run the Business.{' '}
              <span className="text-[#D6B36A] italic font-medium">
                We Make It Make Sense.
              </span>
            </h1>

            {/* Gold Accent Line Echoing Official Logo */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#D6B36A] to-[#087F72] mb-6" />

            {/* Tasteful Rotating Supporting Headline */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="mb-6"
            >
              <div className="min-h-[36px] sm:min-h-[40px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={HERO_ROTATING_MESSAGES[messageIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-xl sm:text-2xl font-medium text-[#43C6B7]"
                  >
                    {HERO_ROTATING_MESSAGES[messageIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Subtle Interactive Message Selector Bars */}
              <div
                role="tablist"
                aria-label="Supporting value propositions"
                className="flex items-center gap-2 mt-2.5"
              >
                {HERO_ROTATING_MESSAGES.map((msg, idx) => (
                  <button
                    key={msg}
                    type="button"
                    role="tab"
                    aria-selected={idx === messageIndex}
                    aria-label={msg}
                    onClick={() => setMessageIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-150 cursor-pointer ${
                      idx === messageIndex
                        ? 'w-8 bg-[#D6B36A]'
                        : 'w-3 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#F7F8F5]/80 max-w-2xl mb-8">
              From business registration and BIR tax compliance to organized
              bookkeeping and smart digital accounting systems,{' '}
              <strong className="font-semibold text-white">BOSS.</strong> helps
              Filipino business owners move forward with clarity and control.
            </p>

            {/* Two Highly Visible Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg shadow-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B36A]"
              >
                <span>Let&rsquo;s Talk Business</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onExploreSolutionsClick}
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[48px] text-sm font-semibold text-[#F7F8F5] bg-white/8 hover:bg-white/15 border border-[#D6B36A]/45 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B36A]"
              >
                Explore Our Solutions
              </button>
            </div>

            {/* Official Tagline + Unboxed Capabilities */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#F7F8F5]/65">
              <span className="font-display text-sm text-[#D6B36A]">
                Be Smart. Be Compliant. Be the BOSS.
              </span>
              <span>Registration · Bookkeeping · Tax · Advisory</span>
            </div>
          </motion.div>

          {/* Right Animated Financial Clarity Console Featuring Official Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-2xl bg-[#142B3B]/90 backdrop-blur-sm border border-[#D6B36A]/30 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
              <div>
                {/* Official Brand Crest Header */}
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
                  <BossLogo size="lg" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#D6B36A]">
                      Interactive Financial Clarity View
                    </p>
                    <h2 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      How Clear Numbers Empower Decisions
                    </h2>
                    <p className="text-xs text-[#F7F8F5]/65">
                      Toggle a business lens below
                    </p>
                  </div>
                </div>

                {/* Segmented Dashboard Tabs */}
                <div
                  role="tablist"
                  aria-label="Preview BOSS. financial clarity views"
                  className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-[#0A1924] mb-6"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'profit'}
                    onClick={() => setActiveTab('profit')}
                    className={`py-2 px-2.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap truncate cursor-pointer ${
                      activeTab === 'profit'
                        ? 'bg-[#087F72] text-white'
                        : 'text-[#F7F8F5]/70 hover:text-white'
                    }`}
                  >
                    Profit Picture
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'compliance'}
                    onClick={() => setActiveTab('compliance')}
                    className={`py-2 px-2.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap truncate cursor-pointer ${
                      activeTab === 'compliance'
                        ? 'bg-[#087F72] text-white'
                        : 'text-[#F7F8F5]/70 hover:text-white'
                    }`}
                  >
                    Compliance
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'workflow'}
                    onClick={() => setActiveTab('workflow')}
                    className={`py-2 px-2.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap truncate cursor-pointer ${
                      activeTab === 'workflow'
                        ? 'bg-[#087F72] text-white'
                        : 'text-[#F7F8F5]/70 hover:text-white'
                    }`}
                  >
                    Smart Books
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === 'profit' && (
                    <motion.div
                      key="profit"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-4"
                    >
                      <div className="flex items-baseline justify-between pb-3 border-b border-white/10">
                        <div>
                          <span className="text-xs text-[#F7F8F5]/65 block">
                            Sample Monthly Sales
                          </span>
                          <span className="font-mono tabular-nums text-xl sm:text-2xl font-semibold text-white">
                            ₱320,000
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#D6B36A] block">
                            Clear Net Margin
                          </span>
                          <span className="font-mono tabular-nums text-xl sm:text-2xl font-semibold text-[#D6B36A]">
                            ₱78,400
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-1">
                        {[
                          {
                            label: 'Direct Cost of Goods & Supplies',
                            amount: '− ₱144,000',
                            scale: 0.45,
                            barClass: 'bg-white/35',
                          },
                          {
                            label: 'Operating Overhead & Platform Fees',
                            amount: '− ₱72,000',
                            scale: 0.23,
                            barClass: 'bg-white/35',
                          },
                          {
                            label: 'Planned Tax & Compliance Buffer',
                            amount: '− ₱25,600',
                            scale: 0.11,
                            barClass: 'bg-[#087F72]',
                          },
                          {
                            label: 'True Business Profit Retained',
                            amount: '₱78,400',
                            scale: 0.25,
                            barClass: 'bg-[#D6B36A]',
                          },
                        ].map((row) => (
                          <div key={row.label} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[#F7F8F5]/80">
                                {row.label}
                              </span>
                              <span className="font-mono tabular-nums font-medium text-white">
                                {row.amount}
                              </span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: row.scale }}
                                transition={{
                                  duration: 0.45,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`h-full w-full origin-left rounded-full ${row.barClass}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-[#F7F8F5]/75 pt-1">
                        <TrendingUp className="w-3.5 h-3.5 inline mr-1.5 text-[#D6B36A]" />
                        Separating gross inflows from true profit stops cash
                        surprises.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'compliance' && (
                    <motion.div
                      key="compliance"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3"
                    >
                      {[
                        {
                          step: '01.',
                          title: 'DTI or SEC Primary Registration',
                          note: 'Aligned with your chosen legal structure',
                        },
                        {
                          step: '02.',
                          title: 'Local Government Permits',
                          note: 'Applicable Barangay & Mayor’s / LGU clearances',
                        },
                        {
                          step: '03.',
                          title: 'BIR COR, Books & Invoicing',
                          note: 'Proper books of accounts & official invoicing habits',
                        },
                        {
                          step: '04.',
                          title: 'Proactive Tax Filing Schedule',
                          note: 'Prepared ahead of deadlines—never last-minute',
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex items-start gap-3 py-2 border-b border-white/10 last:border-b-0"
                        >
                          <span className="font-mono tabular-nums text-xs font-semibold text-[#D6B36A] pt-0.5">
                            {item.step}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="text-xs text-[#F7F8F5]/70">
                              {item.note}
                            </p>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-[#43C6B7] shrink-0 mt-0.5" />
                        </div>
                      ))}

                      <p className="text-xs text-[#F7F8F5]/75 pt-1">
                        <FolderCheck className="w-3.5 h-3.5 inline mr-1.5 text-[#D6B36A]" />
                        Every requirement organized into one clear roadmap.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'workflow' && (
                    <motion.div
                      key="workflow"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3.5"
                    >
                      <div className="p-3.5 rounded-xl bg-[#0A1924] border border-white/10">
                        <p className="text-xs text-[#F7F8F5]/60 mb-1">
                          From Scattered Records
                        </p>
                        <p className="text-xs sm:text-sm text-[#F7F8F5]/85">
                          Shoebox receipts, unverified e-wallet transfers, and
                          conflicting spreadsheet tabs.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#087F72]/20 border border-[#43C6B7]/40">
                        <p className="text-xs text-[#D6B36A] font-medium mb-1.5">
                          To Smart BOSS. Workflows
                        </p>
                        <ul className="space-y-1.5 text-xs text-white/90">
                          <li>1. Structured digital document &amp; voucher capture</li>
                          <li>2. Reconciled bank, cash, and e-wallet ledgers</li>
                          <li>3. Decision-ready management reports in plain English</li>
                        </ul>
                      </div>

                      <p className="text-xs text-[#F7F8F5]/75 pt-1">
                        <FileSpreadsheet className="w-3.5 h-3.5 inline mr-1.5 text-[#D6B36A]" />
                        Technology paired with sound accounting discipline.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F7F8F5]/55">
                <span>Illustrative model for demonstration</span>
                <span>BOSS. Smart Financial View</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
