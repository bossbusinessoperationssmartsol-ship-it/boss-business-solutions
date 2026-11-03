import React from 'react';
import { motion } from 'motion/react';
import {
  COMPANY_PROFILE_FOUNDATION,
  WHY_BOSS_PILLARS,
} from '../data/bossContent';
import { BossLogo } from './BossLogo';
import { ResilientImage } from './ResilientImage';
import handbookDeskImg from '../assets/images/boss_handbook_desk_1793711726748.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-white border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Story & Brand Crest Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
              About BOSS. — Business Operations &amp; Smart Solutions
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-[#142B3B] leading-[1.14] mb-5">
              We Believe Every Great Business Deserves a Strong Financial
              Foundation.
            </h2>

            <div className="w-16 h-0.5 bg-[#D6B36A] mb-6" />

            <div className="space-y-4 text-base text-[#142B3B]/85 leading-relaxed mb-8">
              <p>{COMPANY_PROFILE_FOUNDATION.originStory}</p>
              <p>
                Accounting should never feel like a wall of confusing terms or a
                yearly scramble before a deadline. When your records are
                organized and explained clearly, your numbers become one of the
                most practical tools you have for protecting and growing what
                you built.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/10">
                <p className="text-xs font-semibold text-[#087F72] mb-2">
                  Our Mission
                </p>
                <p className="text-sm text-[#142B3B]/85 leading-relaxed">
                  {COMPANY_PROFILE_FOUNDATION.mission}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/10">
                <p className="text-xs font-semibold text-[#8A6824] mb-2">
                  Our Vision
                </p>
                <p className="text-sm text-[#142B3B]/85 leading-relaxed">
                  {COMPANY_PROFILE_FOUNDATION.vision}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Official Brand Identity + Editorial Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.4,
              delay: 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Official Brand Crest Showcase */}
            <div className="rounded-2xl bg-[#0D2130] text-[#F7F8F5] border border-[#D6B36A]/35 p-6 sm:p-7 flex items-center gap-5">
              <BossLogo size="xl" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#D6B36A] mb-1">
                  Our Purpose
                </p>
                <p className="text-xs sm:text-sm text-[#F7F8F5]/85 leading-relaxed mb-2">
                  {COMPANY_PROFILE_FOUNDATION.purpose}
                </p>
                <p className="font-display text-xs italic text-[#D6B36A]">
                  Be Smart. Be Compliant. Be the BOSS.
                </p>
              </div>
            </div>

            {/* Editorial Handbook Desk Visual */}
            <div className="flex-1 min-h-[240px] rounded-2xl overflow-hidden border border-[#142B3B]/10 relative">
              <ResilientImage
                src={handbookDeskImg}
                alt="Organized wooden desk with an open business accounting handbook in warm natural daylight"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                fallbackLabel="BOSS. Practical Financial Guidance"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2130]/85 via-transparent to-transparent flex items-end p-5">
                <p className="font-display text-sm sm:text-base text-white leading-snug">
                  &ldquo;We don&rsquo;t just want you to comply. We want you to
                  understand your business.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values / Four Pillars Row */}
        <div className="pt-12 border-t border-[#142B3B]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-[#8A6824] mb-1">
                Our Core Values &amp; Approach
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B]">
                More Than Compliance. Clarity, Confidence, and Control.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#142B3B]/65">
              Your numbers should tell you where your business stands—not leave
              you guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_BOSS_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono tabular-nums text-xs font-semibold text-[#8A6824] block mb-3">
                    {pillar.index}.
                  </span>
                  <h4 className="font-display text-xl font-semibold text-[#142B3B] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#142B3B]/85 leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                </div>
                <p className="text-xs text-[#142B3B]/65 leading-relaxed pt-3 border-t border-[#142B3B]/8">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
