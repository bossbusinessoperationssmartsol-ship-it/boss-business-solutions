import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

/**
 * Dedicated floating Contact Us link for mobile visitors (bottom-left),
 * opening the official Google Form in a separate browser tab while keeping BOSS. open.
 */
export const FloatingContactButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 z-40">
      <a
        href={SITE_INTEGRATIONS.officialGoogleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Us (opens in a new tab)"
        className="inline-flex items-center gap-1.5 px-4 h-11 rounded-full bg-[#087F72] hover:bg-[#06675C] text-white shadow-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142B3B]"
      >
        <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span className="text-xs font-semibold">Contact Us</span>
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
};
