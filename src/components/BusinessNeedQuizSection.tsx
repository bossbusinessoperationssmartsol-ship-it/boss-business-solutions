import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, RotateCcw } from 'lucide-react';
import {
  getQuizRecommendation,
  QUIZ_CONCERN_OPTIONS,
  QUIZ_STAGE_OPTIONS,
  QuizBusinessStage,
  QuizConcern,
} from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

export const BusinessNeedQuizSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<QuizBusinessStage | null>(
    null
  );
  const [selectedConcern, setSelectedConcern] = useState<QuizConcern | null>(
    null
  );

  const recommendation =
    selectedStage && selectedConcern
      ? getQuizRecommendation(selectedStage, selectedConcern)
      : null;

  const handleReset = () => {
    setSelectedStage(null);
    setSelectedConcern(null);
  };

  return (
    <section
      id="quiz"
      className="py-20 sm:py-28 bg-[#F7F8F5] border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
            Interactive Solution Finder
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#142B3B] leading-[1.14] mb-4">
            What Does Your Business Need?
          </h2>
          <div className="w-16 h-0.5 bg-[#D6B36A] mb-4" />
          <p className="text-base text-[#142B3B]/75 leading-relaxed">
            Answer two quick questions about where your business stands today,
            and we&rsquo;ll point you toward the most relevant BOSS. starting
            point.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Questions Column */}
          <div className="lg:col-span-7 space-y-8 rounded-2xl bg-white border border-[#142B3B]/10 p-6 sm:p-8">
            {/* Question 1 */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B]">
                  <span className="font-mono tabular-nums text-sm text-[#8A6824] mr-2">
                    01.
                  </span>
                  What best describes your business?
                </h3>
                {selectedStage && (
                  <span className="text-xs font-medium text-[#087F72]">
                    Selected
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUIZ_STAGE_OPTIONS.map((option) => {
                  const active = selectedStage === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedStage(option.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                        active
                          ? 'bg-[#142B3B] border-[#142B3B] text-white shadow-xs'
                          : 'bg-[#F7F8F5] border-[#142B3B]/12 text-[#142B3B] hover:border-[#087F72]/60'
                      }`}
                    >
                      <span className="text-sm font-semibold block mb-1">
                        {option.label}
                      </span>
                      <span
                        className={`text-xs block ${
                          active ? 'text-[#D6B36A]' : 'text-[#142B3B]/60'
                        }`}
                      >
                        {option.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2 */}
            <div className="pt-6 border-t border-[#142B3B]/10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#142B3B]">
                  <span className="font-mono tabular-nums text-sm text-[#8A6824] mr-2">
                    02.
                  </span>
                  What&rsquo;s your biggest concern?
                </h3>
                {selectedConcern && (
                  <span className="text-xs font-medium text-[#087F72]">
                    Selected
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUIZ_CONCERN_OPTIONS.map((option) => {
                  const active = selectedConcern === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedConcern(option.id)}
                      className={`flex items-center justify-between gap-3 text-left px-4 py-3.5 min-h-[46px] rounded-xl border transition-all duration-150 cursor-pointer ${
                        active
                          ? 'bg-[#087F72] border-[#087F72] text-white shadow-xs'
                          : 'bg-[#F7F8F5] border-[#142B3B]/12 text-[#142B3B] hover:border-[#087F72]/60'
                      }`}
                    >
                      <span className="text-sm font-medium">{option.label}</span>
                      {active && (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recommendation Result Column */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-[#142B3B] text-[#F7F8F5] border border-[#D6B36A]/35 p-6 sm:p-8 flex flex-col justify-between">
              {recommendation ? (
                <motion.div
                  key={`${selectedStage}-${selectedConcern}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-[#D6B36A]">
                        Suggested Starting Point
                      </span>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1 text-xs text-[#F7F8F5]/65 hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
                      {recommendation.primaryServiceTitle}
                    </h3>

                    <p className="text-sm sm:text-base text-[#F7F8F5]/85 leading-relaxed mb-5">
                      {recommendation.whyItFits}
                    </p>

                    <div className="p-4 rounded-xl bg-[#0D2130] border border-white/10 space-y-2 mb-6">
                      <p className="text-xs font-semibold text-[#43C6B7]">
                        Practical First Step
                      </p>
                      <p className="text-xs sm:text-sm text-[#F7F8F5]/85 leading-relaxed">
                        {recommendation.suggestedFirstStep}
                      </p>
                      {recommendation.secondaryServiceTitle && (
                        <p className="text-xs text-[#D6B36A] pt-2 border-t border-white/10">
                          Often paired with:{' '}
                          {recommendation.secondaryServiceTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm font-semibold text-[#0D2130] bg-[#D6B36A] hover:bg-[#e3c37f] rounded-lg transition-colors duration-150 whitespace-nowrap"
                    >
                      <span>Start Your Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>

                    <p className="text-[11px] text-[#F7F8F5]/55 leading-relaxed">
                      Guidance note: This recommendation is an informational
                      starting point for discussion and does not constitute
                      definitive tax or legal advice.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col justify-center h-full py-8 text-left">
                  <div className="w-12 h-0.5 bg-[#D6B36A] mb-4" />
                  <p className="text-xs font-semibold text-[#D6B36A] mb-2">
                    Personalized Service Guide
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    Select Both Answers to See Your Recommended BOSS. Focus
                  </h3>
                  <p className="text-sm text-[#F7F8F5]/75 leading-relaxed mb-6">
                    {!selectedStage
                      ? 'Start with Question 01 on the left—tell us what best describes your business right now.'
                      : 'Great! Now pick your biggest concern in Question 02 to view our tailored suggestion.'}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#F7F8F5]/55">
                    <span>Step {selectedStage ? '2' : '1'} of 2</span>
                    <span aria-hidden="true">·</span>
                    <span>Takes 10 seconds</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
