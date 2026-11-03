/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { BusinessJourneySection } from './components/BusinessJourneySection';
import { BusinessNeedQuizSection } from './components/BusinessNeedQuizSection';
import { AboutSection } from './components/AboutSection';
import { KnowledgeHubSection } from './components/KnowledgeHubSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationAndInquirySection } from './components/ConsultationAndInquirySection';
import { PrivacyNoticePage } from './components/PrivacyNoticePage';
import { FloatingContactButton } from './components/FloatingContactButton';
import { BossSmartAssistant } from './components/BossSmartAssistant';
import { FreePublishingGuideModal } from './components/FreePublishingGuideModal';
import { Footer } from './components/Footer';
import { SITE_INTEGRATIONS } from './config/siteIntegrations';

type ActiveRoute = 'home' | 'privacy-notice';

const HOME_META = {
  title: 'BOSS. | Accounting, Bookkeeping & Business Solutions Philippines',
  description:
    'BOSS. provides accounting, bookkeeping, BIR tax compliance, business registration, financial reporting, and smart digital solutions for Filipino entrepreneurs.',
};

const PRIVACY_META = {
  title: 'Privacy Notice | BOSS. — Business Operations & Smart Solutions',
  description:
    'Official Data Privacy Act of 2012 (Republic Act No. 10173) Privacy Notice of BOSS. — Business Operations & Smart Solutions.',
};

function detectRouteFromLocation(): ActiveRoute {
  const cleaned = window.location.pathname
    .replace(/\/index\.html$/i, '')
    .replace(/\/+$/, '');
  if (cleaned.endsWith('/privacy-notice')) {
    return 'privacy-notice';
  }
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<ActiveRoute>(() =>
    detectRouteFromLocation()
  );
  const [highlightedServiceId, setHighlightedServiceId] = useState<
    string | null
  >(null);
  const [showOwnerSetupGuide, setShowOwnerSetupGuide] = useState(false);

  // Sync browser Back/Forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      setRoute(detectRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync page <title>, meta description, OpenGraph tags, and canonical URL per route
  useEffect(() => {
    const meta = route === 'privacy-notice' ? PRIVACY_META : HOME_META;
    document.title = meta.title;

    const canonicalPath =
      route === 'privacy-notice' ? SITE_INTEGRATIONS.privacyNoticePath : '/';
    const canonicalHref = window.location.origin + canonicalPath;

    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    const setMetaContent = (
      selector: string,
      attr: string,
      key: string,
      val: string
    ) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    setMetaContent(
      'meta[name="description"]',
      'name',
      'description',
      meta.description
    );
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaContent(
      'meta[property="og:description"]',
      'property',
      'og:description',
      meta.description
    );
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalHref);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaContent(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      meta.description
    );
  }, [route]);

  const scrollToElement = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const navigateToHomeSection = useCallback(
    (sectionId?: string) => {
      const targetUrl = sectionId ? `/#${sectionId}` : '/';
      if (route !== 'home') {
        window.history.pushState({}, '', targetUrl);
        setRoute('home');
        window.setTimeout(() => {
          if (sectionId) {
            scrollToElement(sectionId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        if (sectionId) {
          window.history.replaceState({}, '', targetUrl);
          scrollToElement(sectionId);
        } else {
          window.history.replaceState({}, '', '/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    },
    [route, scrollToElement]
  );

  const navigateToPrivacyNotice = useCallback(() => {
    if (route !== 'privacy-notice') {
      window.history.pushState({}, '', SITE_INTEGRATIONS.privacyNoticePath);
      setRoute('privacy-notice');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const handleExploreSolutions = () => {
    navigateToHomeSection('services');
  };

  const handleSelectServiceInterest = (serviceId: string) => {
    setHighlightedServiceId(null);
    window.setTimeout(() => {
      setHighlightedServiceId(serviceId);
    }, 20);
    navigateToHomeSection('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#142B3B]">
      <Navbar onNavigateSection={navigateToHomeSection} />

      <main className="flex-1">
        {route === 'privacy-notice' ? (
          <PrivacyNoticePage onNavigateHome={navigateToHomeSection} />
        ) : (
          <>
            <HeroSection onExploreSolutionsClick={handleExploreSolutions} />

            <ProblemSection onSelectService={handleSelectServiceInterest} />

            <ServicesSection highlightedServiceId={highlightedServiceId} />

            <BusinessJourneySection />

            <BusinessNeedQuizSection />

            <AboutSection />

            <KnowledgeHubSection
              onExploreRelatedService={handleSelectServiceInterest}
            />

            <FaqSection />

            <ConsultationAndInquirySection
              onOpenPrivacyNotice={navigateToPrivacyNotice}
            />
          </>
        )}
      </main>

      <FloatingContactButton />

      <BossSmartAssistant onOpenPrivacyNotice={navigateToPrivacyNotice} />

      <FreePublishingGuideModal
        isOpen={showOwnerSetupGuide}
        onClose={() => setShowOwnerSetupGuide(false)}
      />

      <Footer
        onOpenOwnerSetupGuide={() => setShowOwnerSetupGuide(true)}
        onNavigateSection={navigateToHomeSection}
        onOpenPrivacyNotice={navigateToPrivacyNotice}
      />
    </div>
  );
}
