/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Navbar, NavPageTarget } from './components/Navbar';
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
import { ServicesDirectoryPage } from './components/ServicesDirectoryPage';
import { InsightsHubPage } from './components/InsightsHubPage';
import { InsightArticlePage } from './components/InsightArticlePage';
import { TaxResourceCenterPage } from './components/TaxResourceCenterPage';
import { RegulatoryUpdatesPage } from './components/RegulatoryUpdatesPage';
import { RegulationDetailPage } from './components/RegulationDetailPage';
import { AboutPage } from './components/AboutPage';
import { FloatingContactButton } from './components/FloatingContactButton';
import { BossSmartAssistant } from './components/BossSmartAssistant';
import { Footer } from './components/Footer';
import { SITE_INTEGRATIONS } from './config/siteIntegrations';
import { findInsightBySlug } from './data/insightsArticles';
import { findExpandedService } from './data/expandedServices';
import { findPublicRegulationBySlug } from './data/regulatoryUpdates';

type RouteState =
  | { page: 'home' }
  | { page: 'services'; focusedServiceSlug?: string | null }
  | { page: 'insights' }
  | { page: 'insight-article'; slug: string }
  | { page: 'tax-resources'; formQuery?: string | null }
  | { page: 'regulatory-updates' }
  | { page: 'regulation-detail'; slug: string }
  | { page: 'about' }
  | { page: 'privacy-notice' };

const ROUTE_META: Record<
  Exclude<RouteState['page'], 'insight-article' | 'regulation-detail'>,
  { title: string; description: string; canonicalPath: string; breadcrumbLabel?: string }
> = {
  home: {
    title: 'BOSS. | Accounting, Bookkeeping & Business Solutions Philippines',
    description:
      'BOSS. provides accounting, bookkeeping, BIR tax compliance, business registration, payroll, financial reporting, and smart digital solutions for Filipino businesses.',
    canonicalPath: '/',
  },
  services: {
    title:
      'Accounting, Tax, Payroll & Business Registration Services | BOSS. Philippines',
    description:
      'Explore all 24 BOSS. services across Philippine business registration, corporate compliance, monthly & backlog bookkeeping, reconciliations, payroll, BIR tax compliance, and financial advisory.',
    canonicalPath: '/services',
    breadcrumbLabel: 'Services',
  },
  insights: {
    title:
      'BOSS. Insights | Philippine Tax Compliance, BIR Updates & Accounting Guides',
    description:
      'Plain-English briefings on BIR RR No. 6-2026 CWT invoicing, SEC eFAST & HARBOR compliance, Ease of Paying Taxes (EOPT) Act, Form 2550Q, payroll, bookkeeping, and business closure.',
    canonicalPath: '/insights',
    breadcrumbLabel: 'Insights',
  },
  'tax-resources': {
    title:
      'Philippine Tax Resource Center & BIR Forms Guide | BOSS.',
    description:
      'Searchable Philippine BIR Forms library across 11 categories—including VAT, Percentage Tax, EWT, FWT, Compensation, Income Tax, Alphalists, and discontinued 2550M / Form 0605 ARF flags.',
    canonicalPath: '/tax-resources',
    breadcrumbLabel: 'Tax Forms',
  },
  'regulatory-updates': {
    title:
      'Philippine Regulatory & Business Compliance Updates | BOSS.',
    description:
      'Track important BIR, SEC, SSS, PhilHealth, Pag-IBIG, DOLE, DTI, LGU, CDA, PEZA, BOI, FIRB, and NPC circulars and compliance developments affecting Philippine businesses.',
    canonicalPath: '/regulatory-updates',
    breadcrumbLabel: 'Regulatory Updates',
  },
  about: {
    title:
      'About BOSS. | Business Operations & Smart Solutions Philippines',
    description:
      'Learn how BOSS. — Business Operations & Smart Solutions helps Philippine entrepreneurs, SMEs, and corporations stay organized, tax-compliant, and financially confident.',
    canonicalPath: '/about',
    breadcrumbLabel: 'About',
  },
  'privacy-notice': {
    title: 'Privacy Notice | BOSS. — Business Operations & Smart Solutions',
    description:
      'Official Data Privacy Act of 2012 (Republic Act No. 10173) Privacy Notice of BOSS. — Business Operations & Smart Solutions.',
    canonicalPath: '/privacy-notice',
    breadcrumbLabel: 'Privacy Notice',
  },
};

function detectRouteFromLocation(): RouteState {
  const cleanedPath = window.location.pathname
    .replace(/\/index\.html$/i, '')
    .replace(/\.html$/i, '')
    .replace(/\/+$/, '');
  const lowerPath = cleanedPath.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  const lowerHash = rawHash.toLowerCase();

  // 1. Privacy Notice & aliases
  if (
    lowerPath.endsWith('/privacy-notice') ||
    lowerPath.endsWith('/privacy-policy') ||
    lowerPath.endsWith('/privacy') ||
    lowerHash === 'privacy-notice' ||
    lowerHash === 'privacy-policy' ||
    lowerHash === 'privacy'
  ) {
    return { page: 'privacy-notice' };
  }

  // 2. Individual Insights Article: /insights/<slug>
  const insightMatch = lowerPath.match(/\/insights\/([^/]+)$/);
  if (insightMatch && insightMatch[1]) {
    const candidateSlug = decodeURIComponent(insightMatch[1]);
    if (findInsightBySlug(candidateSlug)) {
      return { page: 'insight-article', slug: candidateSlug };
    }
    return { page: 'insights' };
  }

  // 3. Insights Hub: /insights
  if (lowerPath.endsWith('/insights') || lowerHash === 'insights') {
    return { page: 'insights' };
  }

  // 4. Individual Regulatory Update Detail: /regulatory-updates/<slug>
  const regMatch = lowerPath.match(/\/(?:regulatory-updates|updates)\/([^/]+)$/);
  if (regMatch && regMatch[1]) {
    const candidateSlug = decodeURIComponent(regMatch[1]);
    const matchedReg = findPublicRegulationBySlug(candidateSlug);
    if (matchedReg) {
      return { page: 'regulation-detail', slug: matchedReg.slug };
    }
    return { page: 'regulatory-updates' };
  }

  // 5. Regulatory Updates Directory: /regulatory-updates or /updates
  if (
    lowerPath.endsWith('/regulatory-updates') ||
    lowerPath.endsWith('/updates') ||
    lowerHash === 'regulatory-updates'
  ) {
    return { page: 'regulatory-updates' };
  }

  // 6. Services Directory: /services
  if (lowerPath.endsWith('/services')) {
    const paramSvc = params.get('service') || '';
    const hashSvc = lowerHash.startsWith('service-')
      ? lowerHash.replace(/^service-/, '')
      : '';
    const matched = findExpandedService(paramSvc || hashSvc);
    return {
      page: 'services',
      focusedServiceSlug: matched ? matched.slug : null,
    };
  }

  // 7. Tax Resource Center: /tax-resources or /bir-forms
  if (
    lowerPath.endsWith('/tax-resources') ||
    lowerPath.endsWith('/bir-forms') ||
    lowerHash === 'tax-resources' ||
    lowerHash === 'bir-forms'
  ) {
    return {
      page: 'tax-resources',
      formQuery: params.get('form') || null,
    };
  }

  // 8. Dedicated About Page: /about
  if (lowerPath.endsWith('/about')) {
    return { page: 'about' };
  }

  // 9. Query-param fallback (?page=...)
  const pageParam = (
    params.get('page') ||
    params.get('view') ||
    ''
  ).toLowerCase();
  if (
    pageParam === 'privacy-notice' ||
    pageParam === 'privacy-policy' ||
    pageParam === 'privacy'
  ) {
    return { page: 'privacy-notice' };
  }
  if (pageParam === 'services') {
    return { page: 'services' };
  }
  if (pageParam === 'insights') {
    return { page: 'insights' };
  }
  if (pageParam === 'tax-resources' || pageParam === 'bir-forms') {
    return { page: 'tax-resources', formQuery: params.get('form') || null };
  }
  if (pageParam === 'regulatory-updates' || pageParam === 'updates') {
    return { page: 'regulatory-updates' };
  }
  if (pageParam === 'about') {
    return { page: 'about' };
  }

  return { page: 'home' };
}

export default function App() {
  const [routeState, setRouteState] = useState<RouteState>(() =>
    detectRouteFromLocation()
  );
  const [highlightedServiceId, setHighlightedServiceId] = useState<
    string | null
  >(null);

  // Sync browser Back/Forward history and hash navigation
  useEffect(() => {
    const syncRoute = () => {
      setRouteState(detectRouteFromLocation());
    };
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  // Handle initial hash scrolling (e.g. /insights#insights-subscribe or /#contact)
  useEffect(() => {
    const rawHash = window.location.hash.replace(/^#/, '');
    if (!rawHash) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(rawHash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 90);
    return () => window.clearTimeout(timer);
  }, [routeState]);

  // Sync page <title>, meta description, OpenGraph tags, canonical URL & Schema.org JSON-LD per route
  useEffect(() => {
    let title = ROUTE_META.home.title;
    let description = ROUTE_META.home.description;
    let canonicalPath = '/';
    let ogType = 'website';
    let routeJsonLd: Record<string, unknown> | null = null;

    if (routeState.page === 'insight-article') {
      const article = findInsightBySlug(routeState.slug);
      if (article) {
        title = `${article.title} | BOSS. Insights`;
        description = article.summary;
        canonicalPath = `/insights/${article.slug}`;
        ogType = 'article';
        routeJsonLd = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: article.title,
              description: article.summary,
              articleSection: article.category,
              datePublished: article.publishedIso,
              dateModified: article.lastReviewedIso,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE_INTEGRATIONS.siteBaseUrl}/insights/${article.slug}`,
              },
              author: {
                '@type': 'Organization',
                name: 'BOSS. — Business Operations & Smart Solutions',
                url: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
              },
              publisher: {
                '@type': 'Organization',
                name: 'BOSS. — Business Operations & Smart Solutions',
                url: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Insights',
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/insights`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: article.title,
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/insights/${article.slug}`,
                },
              ],
            },
          ],
        };
      }
    } else if (routeState.page === 'regulation-detail') {
      const regulation = findPublicRegulationBySlug(routeState.slug);
      if (regulation) {
        title = `${regulation.issuanceNumber}: ${regulation.title} | BOSS. Regulatory Updates`;
        description = regulation.shortSummary;
        canonicalPath = `/regulatory-updates/${regulation.slug}`;
        ogType = 'article';
        routeJsonLd = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: `${regulation.issuanceNumber} — ${regulation.title}`,
              description: regulation.shortSummary,
              articleSection: `${regulation.agencyDisplay} · ${regulation.category}`,
              datePublished: regulation.publishedIso,
              dateModified: '2026-11-03',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE_INTEGRATIONS.siteBaseUrl}/regulatory-updates/${regulation.slug}`,
              },
              author: {
                '@type': 'Organization',
                name: 'BOSS. — Business Operations & Smart Solutions',
                url: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
              },
              publisher: {
                '@type': 'Organization',
                name: 'BOSS. — Business Operations & Smart Solutions',
                url: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Updates',
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/regulatory-updates`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: regulation.title,
                  item: `${SITE_INTEGRATIONS.siteBaseUrl}/regulatory-updates/${regulation.slug}`,
                },
              ],
            },
          ],
        };
      }
    } else {
      const meta = ROUTE_META[routeState.page];
      title = meta.title;
      description = meta.description;
      canonicalPath = meta.canonicalPath;
      if (meta.breadcrumbLabel) {
        routeJsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_INTEGRATIONS.siteBaseUrl}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: meta.breadcrumbLabel,
              item: `${SITE_INTEGRATIONS.siteBaseUrl}${meta.canonicalPath}`,
            },
          ],
        };
      }
    }

    document.title = title;
    const canonicalHref = `${SITE_INTEGRATIONS.siteBaseUrl}${canonicalPath}`;

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

    setMetaContent('meta[name="description"]', 'name', 'description', description);
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaContent(
      'meta[property="og:description"]',
      'property',
      'og:description',
      description
    );
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalHref);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaContent(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      description
    );

    const existingJsonLd = document.getElementById('boss-route-jsonld');
    if (routeJsonLd) {
      const scriptEl =
        existingJsonLd ||
        Object.assign(document.createElement('script'), {
          id: 'boss-route-jsonld',
          type: 'application/ld+json',
        });
      scriptEl.textContent = JSON.stringify(routeJsonLd);
      if (!existingJsonLd) {
        document.head.appendChild(scriptEl);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }
  }, [routeState]);

  const scrollToElement = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const navigateToHomeSection = useCallback(
    (sectionId?: string) => {
      const targetUrl = sectionId ? `/#${sectionId}` : '/';
      if (routeState.page !== 'home') {
        window.history.pushState({}, '', targetUrl);
        setRouteState({ page: 'home' });
        window.setTimeout(() => {
          if (sectionId) {
            scrollToElement(sectionId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 65);
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
    [routeState.page, scrollToElement]
  );

  const navigateToServices = useCallback((serviceIdOrSlug?: string) => {
    const matched = serviceIdOrSlug
      ? findExpandedService(serviceIdOrSlug)
      : undefined;
    const targetUrl = matched
      ? `/services#service-${matched.slug}`
      : '/services';
    window.history.pushState({}, '', targetUrl);
    setRouteState({
      page: 'services',
      focusedServiceSlug: matched ? matched.slug : null,
    });
    if (!matched) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToInsightsHub = useCallback(() => {
    window.history.pushState({}, '', '/insights');
    setRouteState({ page: 'insights' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToInsightArticle = useCallback((slug: string) => {
    const targetUrl = `/insights/${slug}`;
    window.history.pushState({}, '', targetUrl);
    setRouteState({ page: 'insight-article', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToTaxResources = useCallback((formNumber?: string) => {
    const targetUrl = formNumber
      ? `/tax-resources?form=${encodeURIComponent(formNumber)}`
      : '/tax-resources';
    window.history.pushState({}, '', targetUrl);
    setRouteState({
      page: 'tax-resources',
      formQuery: formNumber || null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToRegulatoryUpdates = useCallback(() => {
    window.history.pushState({}, '', '/regulatory-updates');
    setRouteState({ page: 'regulatory-updates' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToRegulationDetail = useCallback((slug: string) => {
    const targetUrl = `/regulatory-updates/${slug}`;
    window.history.pushState({}, '', targetUrl);
    setRouteState({ page: 'regulation-detail', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToAbout = useCallback(() => {
    window.history.pushState({}, '', SITE_INTEGRATIONS.aboutPath);
    setRouteState({ page: 'about' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToPrivacyNotice = useCallback(() => {
    if (routeState.page !== 'privacy-notice') {
      window.history.pushState({}, '', SITE_INTEGRATIONS.privacyNoticePath);
      setRouteState({ page: 'privacy-notice' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [routeState.page]);

  const handleNavigatePage = useCallback(
    (page: NavPageTarget) => {
      switch (page) {
        case 'services':
          navigateToServices();
          break;
        case 'insights':
          navigateToInsightsHub();
          break;
        case 'tax-resources':
          navigateToTaxResources();
          break;
        case 'regulatory-updates':
          navigateToRegulatoryUpdates();
          break;
        case 'about':
          navigateToAbout();
          break;
        case 'privacy-notice':
          navigateToPrivacyNotice();
          break;
      }
    },
    [
      navigateToServices,
      navigateToInsightsHub,
      navigateToTaxResources,
      navigateToRegulatoryUpdates,
      navigateToAbout,
      navigateToPrivacyNotice,
    ]
  );

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

  const renderActivePage = () => {
    if (routeState.page === 'privacy-notice') {
      return <PrivacyNoticePage onNavigateHome={navigateToHomeSection} />;
    }

    if (routeState.page === 'about') {
      return (
        <AboutPage
          onNavigateHome={navigateToHomeSection}
          onNavigateServices={() => navigateToServices()}
          onNavigateInsights={navigateToInsightsHub}
          onOpenPrivacyNotice={navigateToPrivacyNotice}
        />
      );
    }

    if (routeState.page === 'services') {
      return (
        <ServicesDirectoryPage
          focusedServiceSlug={routeState.focusedServiceSlug}
          onNavigateHome={navigateToHomeSection}
          onNavigateInsight={navigateToInsightArticle}
          onNavigateTaxResources={navigateToTaxResources}
        />
      );
    }

    if (routeState.page === 'insights') {
      return (
        <InsightsHubPage
          onNavigateHome={navigateToHomeSection}
          onSelectArticle={navigateToInsightArticle}
          onNavigateServices={navigateToServices}
          onNavigateTaxResources={navigateToTaxResources}
          onNavigateRegulatoryUpdates={navigateToRegulatoryUpdates}
          onOpenPrivacyNotice={navigateToPrivacyNotice}
        />
      );
    }

    if (routeState.page === 'insight-article') {
      const article = findInsightBySlug(routeState.slug);
      if (article) {
        return (
          <InsightArticlePage
            article={article}
            onNavigateHome={() => navigateToHomeSection()}
            onNavigateInsightsHub={navigateToInsightsHub}
            onSelectArticle={navigateToInsightArticle}
            onSelectRegulation={navigateToRegulationDetail}
            onNavigateServices={navigateToServices}
            onNavigateTaxResources={navigateToTaxResources}
            onOpenPrivacyNotice={navigateToPrivacyNotice}
          />
        );
      }
      return (
        <InsightsHubPage
          onNavigateHome={navigateToHomeSection}
          onSelectArticle={navigateToInsightArticle}
          onNavigateServices={navigateToServices}
          onNavigateTaxResources={navigateToTaxResources}
          onNavigateRegulatoryUpdates={navigateToRegulatoryUpdates}
          onOpenPrivacyNotice={navigateToPrivacyNotice}
        />
      );
    }

    if (routeState.page === 'tax-resources') {
      return (
        <TaxResourceCenterPage
          initialFormQuery={routeState.formQuery}
          onNavigateHome={navigateToHomeSection}
          onNavigateServices={navigateToServices}
          onNavigateInsight={navigateToInsightArticle}
        />
      );
    }

    if (routeState.page === 'regulation-detail') {
      const regulation = findPublicRegulationBySlug(routeState.slug);
      if (regulation) {
        return (
          <RegulationDetailPage
            regulation={regulation}
            onNavigateHome={navigateToHomeSection}
            onNavigateRegulatoryUpdates={navigateToRegulatoryUpdates}
            onSelectRegulation={navigateToRegulationDetail}
            onNavigateServices={navigateToServices}
            onNavigateInsight={navigateToInsightArticle}
            onNavigateTaxResources={navigateToTaxResources}
          />
        );
      }
      return (
        <RegulatoryUpdatesPage
          onNavigateHome={navigateToHomeSection}
          onSelectRegulation={navigateToRegulationDetail}
          onNavigateInsight={navigateToInsightArticle}
          onNavigateServices={navigateToServices}
          onNavigateTaxResources={navigateToTaxResources}
        />
      );
    }

    if (routeState.page === 'regulatory-updates') {
      return (
        <RegulatoryUpdatesPage
          onNavigateHome={navigateToHomeSection}
          onSelectRegulation={navigateToRegulationDetail}
          onNavigateInsight={navigateToInsightArticle}
          onNavigateServices={navigateToServices}
          onNavigateTaxResources={navigateToTaxResources}
        />
      );
    }

    return (
      <>
        <HeroSection onExploreSolutionsClick={handleExploreSolutions} />

        <ProblemSection onSelectService={handleSelectServiceInterest} />

        <ServicesSection
          highlightedServiceId={highlightedServiceId}
          onOpenFullDirectory={navigateToServices}
        />

        <BusinessJourneySection />

        <BusinessNeedQuizSection />

        <AboutSection />

        <KnowledgeHubSection
          onExploreRelatedService={handleSelectServiceInterest}
          onOpenInsights={navigateToInsightsHub}
          onOpenTaxResources={() => navigateToTaxResources()}
          onOpenRegulatoryUpdates={navigateToRegulatoryUpdates}
        />

        <FaqSection />

        <ConsultationAndInquirySection
          onOpenPrivacyNotice={navigateToPrivacyNotice}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#142B3B]">
      <Navbar
        activePage={routeState.page}
        onNavigateSection={navigateToHomeSection}
        onNavigatePage={handleNavigatePage}
      />

      <main className="flex-1">{renderActivePage()}</main>

      <FloatingContactButton />

      <BossSmartAssistant onOpenPrivacyNotice={navigateToPrivacyNotice} />

      <Footer
        onNavigateSection={navigateToHomeSection}
        onNavigatePage={handleNavigatePage}
        onOpenPrivacyNotice={navigateToPrivacyNotice}
      />
    </div>
  );
}
