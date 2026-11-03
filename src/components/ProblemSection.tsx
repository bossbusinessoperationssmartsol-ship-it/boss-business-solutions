import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { SOUNDS_FAMILIAR_CARDS } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';
import { ResilientImage } from './ResilientImage';
import studioImg from '../assets/images/modern_manila_business_studio_1793711728822.jpg';

interface ProblemSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  onSelectService,
}) => {
  const [expandedCard, setExpandedCard] = useState<string>('01');

  return (
    <section
      id="sounds-familiar"
      className="py-20 sm:py-28 bg-[#F7F8F5] border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Intro Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
              Relatable Entrepreneur Realities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#142B3B] leading-[1.12] mb-4">
              Sounds Familiar?
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B36A] mb-5" />
            <p className="text-base sm:text-lg leading-relaxed text-[#142B3B]/80 mb-4">
              Behind almost every growing Filipino business is an owner juggling
              daily operations, customer demands, and financial questions that
              nobody ever explained clearly.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#142B3B]/70">
              Recognizing the gap is the first step toward fixing it—calmly,
              systematically, and without guesswork.
            </p>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-[#142B3B]/10 relative min-h-[250px] sm:min-h-[300px]">
              <ResilientImage
                src={studioImg}
                alt="Contemporary Philippine independent retail and café counter in warm natural daylight"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                fallbackLabel="BOSS. — Built for Filipino Business Owners"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2130]/90 via-[#0D2130]/35 to-transparent flex items-end p-6 sm:p-7">
                <p className="font-display text-base sm:text-lg text-[#F7F8F5] leading-snug max-w-lg">
                  &ldquo;You didn&rsquo;t start a business to get buried in
                  paperwork. You started it to build something.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Interactive Relatable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOUNDS_FAMILIAR_CARDS.map((card, index) => {
            const isOpen = expandedCard === card.number;
            return (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl bg-white border border-[#142B3B]/10 hover:border-[#087F72]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono tabular-nums text-sm font-semibold text-[#8A6824]">
                      {card.number}.
                    </span>
                    <span className="text-xs text-[#142B3B]/55">
                      Real Business Situation
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#142B3B] tracking-tight mb-3">
                    {card.question}
                  </h3>

                  <p className="text-sm sm:text-base text-[#142B3B]/85 leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#142B3B]/10">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCard(isOpen ? '' : card.number)
                    }
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-2 text-left text-xs sm:text-sm font-semibold text-[#087F72] hover:text-[#06675C] py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F72]"
                  >
                    <span>Why this happens &amp; how BOSS. helps</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[#142B3B]/8 space-y-3">
                      <p className="text-xs sm:text-sm text-[#142B3B]/75 leading-relaxed">
                        {card.founderContext}
                      </p>
                      <button
                        type="button"
                        onClick={() => onSelectService(card.relatedServiceId)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B3B] hover:text-[#087F72] transition-colors duration-150 cursor-pointer"
                      >
                        <span>See Solution: {card.relatedServiceLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Strong Closing Transition */}
        <div className="mt-14 rounded-2xl bg-[#142B3B] text-[#F7F8F5] border border-[#D6B36A]/30 p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="w-12 h-0.5 bg-[#D6B36A] mb-3" />
            <p className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-semibold text-white leading-snug">
              You focus on building your dream.{' '}
              <span className="text-[#D6B36A]">
                We&rsquo;ll help you understand the business behind it.
              </span>
            </p>
          </div>
          <a
            href={SITE_INTEGRATIONS.officialGoogleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B36A]"
          >
            <span>Let&rsquo;s Talk Business</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
