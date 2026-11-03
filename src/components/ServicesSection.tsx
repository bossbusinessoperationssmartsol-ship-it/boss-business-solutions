import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Check,
  Compass,
  Cpu,
  FileCheck2,
  LineChart,
  X,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, ServiceStage } from '../data/bossContent';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface ServicesSectionProps {
  highlightedServiceId: string | null;
}

const STAGE_FILTERS: { id: ServiceStage; label: string }[] = [
  { id: 'all', label: 'All Solutions' },
  { id: 'starting', label: 'Registration & Controls' },
  { id: 'compliance', label: 'Bookkeeping & Tax' },
  { id: 'clarity', label: 'Reporting & Systems' },
];

const renderServiceIcon = (iconName: ServiceItem['iconName']) => {
  const iconClass = 'w-5 h-5 text-[#087F72]';
  switch (iconName) {
    case 'building':
      return <Building2 className={iconClass} />;
    case 'fileCheck':
      return <FileCheck2 className={iconClass} />;
    case 'bookOpen':
      return <BookOpen className={iconClass} />;
    case 'lineChart':
      return <LineChart className={iconClass} />;
    case 'cpu':
      return <Cpu className={iconClass} />;
    case 'compass':
      return <Compass className={iconClass} />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  highlightedServiceId,
}) => {
  const [stageFilter, setStageFilter] = useState<ServiceStage>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  useEffect(() => {
    if (highlightedServiceId) {
      setStageFilter('all');
      const matched = SERVICES_LIST.find((s) => s.id === highlightedServiceId);
      if (matched) {
        setSelectedService(matched);
      }
    }
  }, [highlightedServiceId]);

  const filteredServices =
    stageFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((service) => service.stage === stageFilter);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-white border-b border-[#142B3B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header + Stage Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#087F72] mb-3">
              Our Core Solutions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#142B3B] leading-[1.15] mb-4">
              Smart Solutions Built Around Real Business Needs.
            </h2>
            <div className="w-16 h-0.5 bg-[#D6B36A] mb-4" />
            <p className="text-base text-[#142B3B]/75 leading-relaxed">
              Every service is structured around the real challenge you face,
              what we do to solve it, and the practical clarity your business
              gains.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter solutions by category"
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#F7F8F5] border border-[#142B3B]/10 self-start lg:self-auto"
          >
            {STAGE_FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStageFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  stageFilter === tab.id
                    ? 'bg-[#142B3B] text-white'
                    : 'text-[#142B3B]/70 hover:text-[#142B3B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid with Problem -> Solution -> Benefit Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredServices.map((service, idx) => {
            const colSpanClass =
              stageFilter === 'all'
                ? idx === 0 || idx === 2 || idx === 5
                  ? 'lg:col-span-7'
                  : 'lg:col-span-5'
                : 'lg:col-span-6';

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className={`group ${colSpanClass} rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/10 hover:border-[#087F72] p-6 sm:p-8 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div>
                  {/* Quiet Unboxed Index + Icon */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-2 text-xs text-[#142B3B]/60">
                      <span className="font-mono tabular-nums font-semibold text-[#8A6824]">
                        {service.index}.
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.stageLabel}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#142B3B]/10 group-hover:border-[#087F72]/40 flex items-center justify-center shrink-0 transition-colors">
                      {renderServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#142B3B] tracking-tight mb-5">
                    {service.title}
                  </h3>

                  {/* Structured Problem -> Solution -> Benefit Triad */}
                  <div className="space-y-3.5 mb-6">
                    <div className="pb-3 border-b border-[#142B3B]/8">
                      <span className="text-[11px] font-semibold text-[#142B3B]/55 block mb-1">
                        The Problem
                      </span>
                      <p className="text-sm text-[#142B3B]/85 leading-relaxed">
                        &ldquo;{service.problem}&rdquo;
                      </p>
                    </div>

                    <div className="pb-3 border-b border-[#142B3B]/8">
                      <span className="text-[11px] font-semibold text-[#087F72] block mb-1">
                        The BOSS. Solution
                      </span>
                      <p className="text-sm text-[#142B3B] font-medium leading-relaxed">
                        {service.solution}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-[#8A6824] block mb-1">
                        The Benefit
                      </span>
                      <p className="text-sm text-[#142B3B]/90 leading-relaxed">
                        {service.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#142B3B]/10">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#142B3B] hover:text-[#087F72] py-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F72]"
                  >
                    <span>View Included Scope</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>

                  <a
                    href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142B3B]"
                  >
                    <span>Request a Quotation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-[#142B3B]/60 leading-relaxed max-w-3xl">
          Professional scope note: BOSS. delivers accounting, bookkeeping, tax
          filing assistance, business registration support, management
          reporting, and operational process advisory. Where specialized legal
          counsel or statutory independent audit assurance is required, we
          coordinate transparently with appropriate licensed practitioners.
        </p>
      </div>

      {/* Service Scope Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D2130]/75 backdrop-blur-xs"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/15 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-medium text-[#8A6824] mb-1">
                  {selectedService.index}. · {selectedService.stageLabel}
                </p>
                <h3
                  id="service-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B] tracking-tight"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="w-10 h-10 rounded-lg border border-[#142B3B]/15 flex items-center justify-center text-[#142B3B] hover:bg-[#142B3B]/5 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-white border border-[#142B3B]/10">
                <span className="text-[11px] font-semibold text-[#142B3B]/55 block mb-1">
                  Problem
                </span>
                <p className="text-xs text-[#142B3B]/85 leading-relaxed">
                  {selectedService.problem}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#087F72]/35">
                <span className="text-[11px] font-semibold text-[#087F72] block mb-1">
                  Solution
                </span>
                <p className="text-xs text-[#142B3B] font-medium leading-relaxed">
                  {selectedService.solution}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#D6B36A]/55">
                <span className="text-[11px] font-semibold text-[#8A6824] block mb-1">
                  Benefit
                </span>
                <p className="text-xs text-[#142B3B] leading-relaxed">
                  {selectedService.benefit}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[#142B3B]/85">
              <div>
                <h4 className="text-xs font-semibold text-[#142B3B]/60 mb-1.5">
                  Ideal For
                </h4>
                <p className="leading-relaxed">{selectedService.whoItHelps}</p>
              </div>

              <div className="pt-4 border-t border-[#142B3B]/10">
                <h4 className="text-xs font-semibold text-[#142B3B]/60 mb-3">
                  Key Deliverables &amp; Support
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#087F72] shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#142B3B]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 min-h-[42px] text-sm font-medium text-[#142B3B] bg-white border border-[#142B3B]/20 rounded-lg hover:bg-[#EFEFE9] transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#087F72] hover:bg-[#06675C] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Request a Quotation</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
