import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ClipboardCheck,
  Compass,
  Handshake,
  LineChart,
  MessageSquare,
} from 'lucide-react';
import { BUSINESS_JOURNEY_STEPS } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

const STEP_ICONS = [
  MessageSquare,
  Compass,
  ClipboardCheck,
  Handshake,
  LineChart,
];

export const BusinessJourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = BUSINESS_JOURNEY_STEPS[activeIndex];
  const progressRatio = (activeIndex + 1) / BUSINESS_JOURNEY_STEPS.length;

  return (
    <section
      id="journey"
      className="py-20 sm:py-28 bg-[#0D2130] text-[#F7F8F5] border-b border-[#D6B36A]/25 tracking-[0.01em]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#D6B36A] mb-3">
              How We Work With You
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.14] mb-4">
              Your Business Journey With BOSS.
            </h2>
            <div className="w-16 h-0.5 bg-[#087F72] mb-4" />
            <p className="text-base text-[#F7F8F5]/75 leading-relaxed">
              Clear expectations from our very first conversation—so you always
              know what is happening, what comes next, and how your business
              benefits.
            </p>
          </div>
          <p className="text-xs text-[#D6B36A]/85 shrink-0">
            Select any step to preview the experience
          </p>
        </div>

        {/* Desktop Horizontal Timeline Rail */}
        <div className="hidden lg:block mb-8">
          <div className="relative h-1 w-full rounded-full bg-white/10 mb-8 overflow-hidden">
            <motion.div
              animate={{ scaleX: progressRatio }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#087F72] via-[#43C6B7] to-[#D6B36A]"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {BUSINESS_JOURNEY_STEPS.map((item, idx) => {
              const Icon = STEP_ICONS[idx];
              const isSelected = idx === activeIndex;
              const isCompleted = idx <= activeIndex;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left rounded-2xl p-5 border transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#142B3B] border-[#D6B36A] shadow-lg -translate-y-0.5'
                      : 'bg-[#142B3B]/45 border-white/10 hover:border-white/25 hover:bg-[#142B3B]/75'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`font-mono tabular-nums text-xs font-semibold ${
                          isCompleted ? 'text-[#D6B36A]' : 'text-[#F7F8F5]/50'
                        }`}
                      >
                        Step {item.step}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#087F72] text-white'
                            : 'bg-white/8 text-[#D6B36A]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7F8F5]/75 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative space-y-4 mb-8">
          {BUSINESS_JOURNEY_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx];
            const isSelected = idx === activeIndex;

            return (
              <div key={item.step} className="relative flex items-stretch gap-4">
                {/* Vertical connector column */}
                <div className="flex flex-col items-center shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Select Step ${item.step}: ${item.title}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
                      idx <= activeIndex
                        ? 'bg-[#087F72] border-[#D6B36A] text-white'
                        : 'bg-[#142B3B] border-white/20 text-[#F7F8F5]/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                  {idx < BUSINESS_JOURNEY_STEPS.length - 1 && (
                    <div
                      className={`w-0.5 flex-1 my-1 ${
                        idx < activeIndex ? 'bg-[#D6B36A]' : 'bg-white/15'
                      }`}
                    />
                  )}
                </div>

                {/* Step Card */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-1 text-left rounded-2xl p-5 border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#142B3B] border-[#D6B36A]'
                      : 'bg-[#142B3B]/50 border-white/10'
                  }`}
                >
                  <span className="font-mono tabular-nums text-xs font-semibold text-[#D6B36A] block mb-1">
                    Step {item.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F7F8F5]/80 leading-relaxed">
                    {item.summary}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Step Spotlight Panel */}
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-[#142B3B] border border-[#D6B36A]/35 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B36A] mb-2">
              <span className="font-mono tabular-nums font-semibold">
                Step {activeStep.step} Focus
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeStep.deliverableHint}</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
              {activeStep.title}: {activeStep.summary}
            </h4>
            <p className="text-sm sm:text-base text-[#F7F8F5]/80 leading-relaxed">
              {activeStep.whatHappens}
            </p>
          </div>

          <a
            href={SITE_INTEGRATIONS.officialGoogleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] text-sm font-semibold text-[#0D2130] bg-[#D6B36A] hover:bg-[#e3c37f] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>Consult With BOSS.</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
