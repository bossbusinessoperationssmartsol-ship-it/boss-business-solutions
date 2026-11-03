import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#F7F8F5] border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Sticky-Ready Editorial Intro */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#142B3B] leading-[1.15] mb-4">
              Straightforward Answers Before You Decide.
            </h2>
            <p className="text-base text-[#142B3B]/75 leading-relaxed mb-6">
              It&rsquo;s completely normal to have questions before hiring an
              accounting partner. Here are honest, practical answers to what
              Filipino entrepreneurs ask us most often.
            </p>
            <div className="p-5 rounded-xl bg-white border border-[#142B3B]/10">
              <p className="text-sm font-medium text-[#142B3B] mb-2">
                Have a specific setup in mind?
              </p>
              <p className="text-xs text-[#142B3B]/70 leading-relaxed mb-4">
                Every business structure is unique. Send us a quick note and we
                will point you in the right direction.
              </p>
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors duration-150 whitespace-nowrap"
              >
                <span>Consult With BOSS.</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#142B3B]/10 border-y border-[#142B3B]/10">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full flex items-start justify-between gap-4 text-left py-1 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F72]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono tabular-nums text-xs font-semibold text-[#8A6824] shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="font-display text-lg sm:text-xl font-medium text-[#142B3B] group-hover:text-[#087F72] transition-colors duration-150">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#142B3B]/60 shrink-0 mt-1 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#087F72]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      className="pt-3 pl-7 pr-2 text-sm sm:text-base text-[#142B3B]/80 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
