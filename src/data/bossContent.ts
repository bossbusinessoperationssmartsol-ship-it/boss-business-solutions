export interface SoundsFamiliarCard {
  number: string;
  question: string;
  description: string;
  founderContext: string;
  relatedServiceId: string;
  relatedServiceLabel: string;
}

export type ServiceStage = 'all' | 'starting' | 'compliance' | 'clarity';

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  stage: Exclude<ServiceStage, 'all'>;
  stageLabel: string;
  iconName: 'building' | 'fileCheck' | 'bookOpen' | 'lineChart' | 'cpu' | 'compass';
  problem: string;
  solution: string;
  benefit: string;
  whoItHelps: string;
  includedItems: string[];
}

export interface JourneyStep {
  step: string;
  title: string;
  summary: string;
  whatHappens: string;
  deliverableHint: string;
}

export type QuizBusinessStage =
  | 'planning'
  | 'newly_registered'
  | 'operating'
  | 'improving_system';

export type QuizConcern =
  | 'registration'
  | 'tax_filing'
  | 'bookkeeping'
  | 'financial_reports'
  | 'accounting_software'
  | 'not_sure';

export interface QuizRecommendation {
  primaryServiceId: string;
  primaryServiceTitle: string;
  secondaryServiceTitle?: string;
  whyItFits: string;
  suggestedFirstStep: string;
}

export interface PillarItem {
  index: string;
  title: string;
  description: string;
  detail: string;
}

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface KnowledgeArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  leadQuote: string;
  sections: ArticleSection[];
  takeaways: string[];
  relatedServiceId: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_CONTACT = {
  businessName: 'BOSS.',
  fullMeaning: 'Business Operations & Smart Solutions',
  tagline: 'Be Smart. Be Compliant. Be the BOSS.',
  email: 'bossbusinessoperationssmartsol@gmail.com',
  mobileDisplay: '0948 484 5114',
  mobileRaw: '09484845114',
  mobileIntl: '639484845114',
  instagramHandle: '@boss.solutionsph',
  instagramUrl: 'https://www.instagram.com/boss.solutionsph',
  facebookName: 'BOSS. Business Operations & Smart Solutions',
  facebookSearchUrl:
    'https://www.facebook.com/search/top/?q=BOSS.%20Business%20Operations%20%26%20Smart%20Solutions',
  whatsappUrl: 'https://wa.me/639484845114',
  viberUrl: 'viber://chat?number=%2B639484845114',
};

export const HERO_ROTATING_MESSAGES = [
  'Less Confusion. More Clarity.',
  'Less Paperwork. More Progress.',
  'Smarter Books. Better Decisions.',
  'From Business Registration to Business Growth.',
];

export const SOUNDS_FAMILIAR_CARDS: SoundsFamiliarCard[] = [
  {
    number: '01',
    question: '"Malakas ang benta. Pero nasaan ang kita?"',
    description:
      'You work hard to generate sales. But without clear financial records, understanding your actual profitability becomes difficult.',
    founderContext:
      'Busy orders and steady cash inflows can still mask rising supplier costs, platform fees, or unrecorded withdrawals unless your books separate gross revenue from true net margin.',
    relatedServiceId: 'bookkeeping-accounting',
    relatedServiceLabel: 'Bookkeeping & Accounting',
  },
  {
    number: '02',
    question: '"May business ka. Pero compliant ka ba?"',
    description:
      "Business registration and tax requirements can be confusing, especially when you're just starting.",
    founderContext:
      'Knowing how DTI or SEC, local government permits, and BIR registration fit together helps you operate legitimately without second-guessing your documents.',
    relatedServiceId: 'business-registration',
    relatedServiceLabel: 'Business Registration & Government Compliance',
  },
  {
    number: '03',
    question: '"Deadline na naman?!"',
    description:
      "Managing tax obligations shouldn't mean constantly worrying about missed filings and disorganized records.",
    founderContext:
      'When compliance is organized around a clear calendar and consistent monthly documentation, filing periods stop feeling like an emergency.',
    relatedServiceId: 'bir-tax-compliance',
    relatedServiceLabel: 'BIR Tax Filing & Compliance',
  },
  {
    number: '04',
    question: '"May reports ka. Pero naiintindihan mo ba?"',
    description:
      'Financial information should help you make decisions, not leave you with more questions.',
    founderContext:
      'Numbers only create value when explained in plain language—so you know whether to restock, adjust pricing, control expenses, or expand.',
    relatedServiceId: 'financial-reporting',
    relatedServiceLabel: 'Financial & Management Reporting',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'business-registration',
    index: '01',
    title: 'Business Registration & Government Compliance',
    stage: 'starting',
    stageLabel: 'Registration & Setup',
    iconName: 'building',
    problem:
      'Navigating DTI or SEC, BIR, and local permits feels overwhelming when you just want to launch properly.',
    solution:
      'We guide you through applicable registration requirements, documentary preparation, and post-registration setup.',
    benefit:
      'Start with legitimate, organized business credentials and clear knowledge of your ongoing obligations.',
    whoItHelps:
      'First-time entrepreneurs, formalizing online sellers, freelancers, partnerships, and corporations setting up in the Philippines.',
    includedItems: [
      'DTI (sole proprietorship) or SEC (partnership / corporation / OPC) registration documentary assistance',
      'BIR registration support, books of accounts registration guidance, and invoicing orientation',
      'Applicable Barangay and Mayor’s / Local Government Unit (LGU) business permit assistance',
      'Plain-language walkthrough of your Certificate of Registration and initial compliance checklist',
    ],
  },
  {
    id: 'bir-tax-compliance',
    index: '02',
    title: 'BIR Tax Filing & Compliance',
    stage: 'compliance',
    stageLabel: 'Tax & Regulatory Care',
    iconName: 'fileCheck',
    problem:
      'Recurring tax filings and changing rules make it stressful to stay on top of deadlines while running operations.',
    solution:
      'We prepare and assist with applicable tax filings, monitor your compliance schedule, and organize supporting schedules.',
    benefit:
      'Meet your registered tax obligations calmly and accurately without last-minute cramming.',
    whoItHelps:
      'Registered businesses and self-employed professionals seeking dependable periodic tax preparation and compliance monitoring.',
    includedItems: [
      'Review of registered tax types indicated on your BIR Certificate of Registration',
      'Preparation and filing assistance for applicable periodic tax returns and required attachments',
      'Structured compliance calendar reminders ahead of scheduled due dates',
      'Practical guidance on valid invoicing, withholding, and supporting documentation habits',
    ],
  },
  {
    id: 'bookkeeping-accounting',
    index: '03',
    title: 'Bookkeeping & Accounting',
    stage: 'compliance',
    stageLabel: 'Core Financial Records',
    iconName: 'bookOpen',
    problem:
      'You have transactions everywhere, but no clear picture of your finances.',
    solution:
      'We help organize, record, and reconcile your financial information.',
    benefit:
      'Understand your numbers and make more informed decisions.',
    whoItHelps:
      'Growing businesses whose daily sales, supplier bills, bank transfers, and e-wallet activity need consistent organization.',
    includedItems: [
      'Systematic recording and classification of revenue, purchases, and operating expenses',
      'Periodic reconciliation of bank accounts, digital wallets, and payment channels',
      'Organization of vouchers, official invoices, and accounting schedules',
      'Structured maintenance of books of accounts aligned with reporting needs',
    ],
  },
  {
    id: 'financial-reporting',
    index: '04',
    title: 'Financial & Management Reporting',
    stage: 'clarity',
    stageLabel: 'Performance & Decisions',
    iconName: 'lineChart',
    problem:
      'Looking only at cash in the bank hides whether your business is truly profitable or quietly losing margin.',
    solution:
      'We prepare clear financial statements and management reports translated into plain business language.',
    benefit:
      'See where your money goes, protect your margins, and plan your next move with confidence.',
    whoItHelps:
      'Founders and management teams evaluating profitability, expense trends, cash flow health, or expansion readiness.',
    includedItems: [
      'Periodic Income Statement, Balance Sheet, and cash movement summaries',
      'Customized management reports tracking margins, top cost drivers, and receivables/payables',
      'Executive walkthroughs explaining what the numbers mean in everyday business terms',
      'Decision-support schedules for budgeting, pricing review, and working capital control',
    ],
  },
  {
    id: 'smart-accounting-systems',
    index: '05',
    title: 'Smart Accounting Systems',
    stage: 'clarity',
    stageLabel: 'Digital Transformation',
    iconName: 'cpu',
    problem:
      'Manual spreadsheets and disconnected trackers create errors and slow down visibility as you grow.',
    solution:
      'We design digital bookkeeping workflows, configure accounting software, and build clean financial dashboards.',
    benefit:
      'Spend less time chasing receipts and gain faster, cleaner visibility over your operations.',
    whoItHelps:
      'Businesses ready to modernize manual record-keeping into structured cloud accounting or dashboard workflows.',
    includedItems: [
      'Accounting software setup and tailored Chart of Accounts configuration',
      'Digital receipt, billing, and disbursement workflow design',
      'Management dashboard templates for real-time operational clarity',
      'Practical onboarding and process guides so your team can use the system smoothly',
    ],
  },
  {
    id: 'business-advisory',
    index: '06',
    title: 'Business Advisory & Process Improvement',
    stage: 'starting',
    stageLabel: 'Controls & Operations',
    iconName: 'compass',
    problem:
      'Informal approvals, untracked petty cash, and inconsistent paperwork create operational blind spots.',
    solution:
      'We review your everyday financial workflows and establish practical documentation and internal control habits.',
    benefit:
      'Run a tighter, more resilient operation built on clear accountability and dependable processes.',
    whoItHelps:
      'Entrepreneurs strengthening internal controls across billing, collections, purchasing, inventory, and disbursements.',
    includedItems: [
      'Diagnostic review of billing, collection, purchasing, and payment workflows',
      'Practical internal control recommendations and approval checklists',
      'Standardized voucher forms, filing structures, and documentation SOPs',
      'Ongoing operational advisory to align daily team habits with accurate financial reporting',
    ],
  },
];

export const BUSINESS_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: "Let's Talk",
    summary: 'Tell us about your business and your concerns.',
    whatHappens:
      'We start with a straightforward, judgment-free conversation—whether you are still planning to register, catching up on records, or upgrading how you track finances.',
    deliverableHint: '15-Minute Discovery Call or Initial Inquiry Review',
  },
  {
    step: '02',
    title: 'We Understand',
    summary: 'We review your needs and identify appropriate services.',
    whatHappens:
      'We look at your business structure, registration profile, transaction flow, and pain points so we never push a generic one-size-fits-all package.',
    deliverableHint: 'Needs & Compliance Situation Assessment',
  },
  {
    step: '03',
    title: 'We Build a Plan',
    summary: 'We explain the proposed scope, requirements, and next steps.',
    whatHappens:
      'You receive a clear service proposal outlining exactly what we will handle, what documents are needed, and how our workflow will run—explained in plain English.',
    deliverableHint: 'Clear Scope, Checklist & Tailored Quotation',
  },
  {
    step: '04',
    title: 'We Work Together',
    summary: 'We provide the agreed services and communicate progress.',
    whatHappens:
      'Our team executes your registration, bookkeeping, tax preparation, or system setup methodically while keeping communication responsive and organized.',
    deliverableHint: 'Structured Execution & Proactive Milestones',
  },
  {
    step: '05',
    title: 'You Stay Informed',
    summary:
      'Receive relevant updates and reports so you can better understand your business.',
    whatHappens:
      'Beyond meeting requirements, we make sure you understand what your financial records and compliance updates mean for your next business decisions.',
    deliverableHint: 'Ongoing Clarity, Reports & Confident Control',
  },
];

export const QUIZ_STAGE_OPTIONS: {
  id: QuizBusinessStage;
  label: string;
  sublabel: string;
}[] = [
  {
    id: 'planning',
    label: "I'm planning to start a business.",
    sublabel: 'Preparing to formalize and register properly',
  },
  {
    id: 'newly_registered',
    label: 'I recently registered my business.',
    sublabel: 'Setting up books, invoicing, and first filings',
  },
  {
    id: 'operating',
    label: 'I already operate a business.',
    sublabel: 'Managing ongoing sales, expenses, and compliance',
  },
  {
    id: 'improving_system',
    label: 'I want to improve my accounting system.',
    sublabel: 'Moving beyond messy spreadsheets and manual workflows',
  },
];

export const QUIZ_CONCERN_OPTIONS: {
  id: QuizConcern;
  label: string;
}[] = [
  { id: 'registration', label: 'Government registration' },
  { id: 'tax_filing', label: 'BIR tax filing' },
  { id: 'bookkeeping', label: 'Bookkeeping and accounting' },
  { id: 'financial_reports', label: 'Financial reports' },
  { id: 'accounting_software', label: 'Accounting software' },
  { id: 'not_sure', label: "I'm not sure yet." },
];

export function getQuizRecommendation(
  stage: QuizBusinessStage,
  concern: QuizConcern
): QuizRecommendation {
  if (concern === 'registration') {
    return {
      primaryServiceId: 'business-registration',
      primaryServiceTitle: 'Business Registration & Government Compliance',
      secondaryServiceTitle:
        stage === 'operating'
          ? 'BIR Tax Filing & Compliance'
          : 'Bookkeeping & Accounting',
      whyItFits:
        'You want clarity on government registration requirements across DTI/SEC, BIR, and applicable local permits so your business stands on legitimate, organized ground.',
      suggestedFirstStep:
        'Start with a quick registration roadmap check so you know the exact sequence of documents to prepare.',
    };
  }

  if (concern === 'tax_filing') {
    return {
      primaryServiceId: 'bir-tax-compliance',
      primaryServiceTitle: 'BIR Tax Filing & Compliance',
      secondaryServiceTitle: 'Bookkeeping & Accounting',
      whyItFits:
        'Staying ahead of BIR obligations starts with reviewing your Certificate of Registration, organizing your compliance calendar, and ensuring filings match your records.',
      suggestedFirstStep:
        'Review your registered tax types and set up a calm, predictable filing workflow.',
    };
  }

  if (concern === 'bookkeeping') {
    return {
      primaryServiceId: 'bookkeeping-accounting',
      primaryServiceTitle: 'Bookkeeping & Accounting',
      secondaryServiceTitle: 'Financial & Management Reporting',
      whyItFits:
        'Structured recording and bank/e-wallet reconciliation will turn scattered daily transactions into reliable books you can actually trust.',
      suggestedFirstStep:
        'Organize your monthly document capture routine and reconcile your core business accounts.',
    };
  }

  if (concern === 'financial_reports') {
    return {
      primaryServiceId: 'financial-reporting',
      primaryServiceTitle: 'Financial & Management Reporting',
      secondaryServiceTitle: 'Bookkeeping & Accounting',
      whyItFits:
        'You need more than raw transaction lists—you need clear Income Statement, Balance Sheet, and cash flow insights explained in practical business language.',
      suggestedFirstStep:
        'Set up periodic management reports focused on true profitability, cost drivers, and cash health.',
    };
  }

  if (concern === 'accounting_software') {
    return {
      primaryServiceId: 'smart-accounting-systems',
      primaryServiceTitle: 'Smart Accounting Systems',
      secondaryServiceTitle: 'Business Advisory & Process Improvement',
      whyItFits:
        'Transitioning from manual spreadsheets to tailored accounting software and digital workflows will save hours and sharpen your financial visibility.',
      suggestedFirstStep:
        'Evaluate your transaction workflow so we can configure the right digital accounting setup for your team.',
    };
  }

  // When concern === 'not_sure', tailor intelligently by stage
  switch (stage) {
    case 'planning':
      return {
        primaryServiceId: 'business-registration',
        primaryServiceTitle: 'Business Registration & Government Compliance',
        secondaryServiceTitle: 'Smart Accounting Systems',
        whyItFits:
          'Since you are planning to launch, the smartest place to begin is mapping out your business structure, registration steps, and foundational record-keeping habits.',
        suggestedFirstStep:
          'Book a 15-minute discovery chat so we can walk through what registration and initial setup look like for your venture.',
      };
    case 'newly_registered':
      return {
        primaryServiceId: 'bir-tax-compliance',
        primaryServiceTitle: 'BIR Tax Filing & Compliance',
        secondaryServiceTitle: 'Bookkeeping & Accounting',
        whyItFits:
          'Right after registering, many new owners aren’t sure which books, invoices, and periodic filings come next. Aligning compliance and bookkeeping early prevents costly headaches.',
        suggestedFirstStep:
          'Let’s review your new registration documents together and map out your first 90 days of compliance.',
      };
    case 'improving_system':
      return {
        primaryServiceId: 'smart-accounting-systems',
        primaryServiceTitle: 'Smart Accounting Systems',
        secondaryServiceTitle: 'Business Advisory & Process Improvement',
        whyItFits:
          'Upgrading how information flows across your team—combining stronger internal procedures with digital accounting tools—gives you cleaner numbers with less manual effort.',
        suggestedFirstStep:
          'Share how you currently track sales and expenses so we can recommend a practical system upgrade.',
      };
    case 'operating':
    default:
      return {
        primaryServiceId: 'bookkeeping-accounting',
        primaryServiceTitle: 'Bookkeeping & Accounting',
        secondaryServiceTitle: 'Financial & Management Reporting',
        whyItFits:
          'For an active business, bringing your bookkeeping, reconciliations, and monthly reporting into sharp focus reveals exactly how your business is performing.',
        suggestedFirstStep:
          'Let’s talk briefly about your current operations to pinpoint whether bookkeeping, tax care, or reporting will help most.',
      };
  }
}

export const WHY_BOSS_PILLARS: PillarItem[] = [
  {
    index: '01',
    title: 'Clarity',
    description:
      'We explain accounting and tax matters in language business owners can understand.',
    detail:
      'No intimidating jargon. We translate numbers and requirements into clear, actionable insight.',
  },
  {
    index: '02',
    title: 'Compliance',
    description:
      'We help businesses manage applicable requirements, documentation, and filing responsibilities.',
    detail:
      'Organized records and proactive schedules help keep your business aligned with regulatory responsibilities.',
  },
  {
    index: '03',
    title: 'Technology',
    description:
      'We use practical digital solutions to make accounting processes more efficient.',
    detail:
      'Smart workflows, cloud tools, and clean dashboards designed around real-world operations.',
  },
  {
    index: '04',
    title: 'Partnership',
    description:
      "We aim to understand each client's business rather than offering one-size-fits-all solutions.",
    detail:
      'Approachable, responsive support tailored to your stage—from first registration to scaling up.',
  },
];

export const COMPANY_PROFILE_FOUNDATION = {
  purpose:
    'To bridge the gap between complex accounting and regulatory requirements and the everyday realities faced by Filipino business owners.',
  mission:
    'To deliver organized accounting, dependable compliance support, and smart digital financial solutions explained in clear, practical language—helping entrepreneurs run their businesses with confidence.',
  vision:
    'To be the trusted business operations and smart accounting partner for Filipino enterprises seeking clarity, compliance, and sustainable financial control.',
  originStory:
    'BOSS. — Business Operations & Smart Solutions was inspired by firsthand experience in accounting and auditing, where the value of organized documentation, accurate financial reporting, and disciplined compliance becomes unmistakable. We saw how often capable entrepreneurs feel left in the dark by overly technical explanations—and built BOSS. to be the knowledgeable, approachable partner who makes the numbers make sense.',
};

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'kumikita-ka-ba-talaga',
    category: 'Profitability & Cash Flow',
    readTime: '4 min read',
    title: "Kumikita Ka Ba Talaga? Let's Talk About Your Numbers.",
    subtitle:
      'Why strong daily sales and active e-wallet notifications do not automatically equal real net profit—and how to see what your business truly earns.',
    featured: true,
    leadQuote:
      'Revenue shows activity; profit shows sustainability. Until direct costs, operating overhead, and owner withdrawals are separated cleanly, a busy store can still run short on cash.',
    sections: [
      {
        heading: '1. Why "Malakas ang Benta" Can Still Feel Tight at Month-End',
        body: 'When orders come in non-stop, it is natural to feel confident. Yet gross sales only measure total inflows before paying for inventory restocking, packaging, delivery fees, platform commissions, rent, and utilities. Without tracking gross and net margins separately, thin pricing or creeping expenses quietly eat away your hard work.',
      },
      {
        heading: '2. Separating Personal Pocket from Business Funds',
        body: 'Using a single bank account or digital wallet for both store collections and household expenses blurs your true financial picture. Opening a dedicated business account and recording planned owner drawings gives you immediate honesty about what the business actually generates.',
      },
      {
        heading: '3. Profit on Paper vs. Cash on Hand',
        body: 'Uncollected customer invoices or excess slow-moving stock can leave a profitable business cash-strapped. Conversely, cash sitting in your account today might already belong to upcoming supplier bills or tax obligations. Good bookkeeping tracks both profit and cash flow together.',
      },
    ],
    takeaways: [
      'Keep business inflows and expenses in a dedicated account separate from personal funds.',
      'Measure product or service margins after packaging, discounts, and selling fees.',
      'Review a simple monthly Profit & Loss summary alongside your cash balance.',
    ],
    relatedServiceId: 'financial-reporting',
  },
  {
    id: 'registration-basics-new-owners',
    category: 'Business Registration',
    readTime: '4 min read',
    title: 'New Business Owner? Start With These Registration Basics.',
    subtitle:
      'A clear roadmap of how entity registration, local permits, and tax registration fit together when formalizing a business in the Philippines.',
    leadQuote:
      'Formalizing your business is much less intimidating when you treat it as an ordered sequence rather than a pile of disconnected forms.',
    sections: [
      {
        heading: '1. Choose the Right Legal Structure First',
        body: 'In the Philippines, your primary registration depends on your ownership structure: sole proprietors generally register a business name with the DTI, while partnerships, corporations, and One Person Corporations (OPCs) register with the SEC. Your choice affects liability, documentary requirements, and ongoing governance.',
      },
      {
        heading: '2. Connect Local Clearances and BIR Registration',
        body: 'Beyond primary entity registration, operating legitimately involves applicable Barangay and Mayor’s / LGU permits as well as registering with the BIR—including securing authority for official invoices, registering books of accounts, and understanding your Certificate of Registration (COR).',
      },
      {
        heading: '3. Registration Is Day One of Ongoing Habits',
        body: 'Getting your certificates framed on the wall is the starting line, not the finish line. Once registered, maintaining books of accounts, issuing authorized invoices, and monitoring periodic filings keep your business in good standing.',
      },
    ],
    takeaways: [
      'Confirm whether Sole Proprietorship, Partnership, OPC, or Corporation fits your goals before filing.',
      'Keep digital and physical copies of all certificates, permits, and registered books organized.',
      'Read your BIR Certificate of Registration carefully to know which periodic obligations apply.',
    ],
    relatedServiceId: 'business-registration',
  },
  {
    id: 'bookkeeping-more-than-recording',
    category: 'Bookkeeping & Controls',
    readTime: '3 min read',
    title: 'Bookkeeping: More Than Just Recording Transactions.',
    subtitle:
      'Why organized bookkeeping is your business’s early-warning radar—not just a chore performed right before tax season.',
    leadQuote:
      'Encoding receipts once a year only tells you what went wrong months ago. Consistent monthly bookkeeping lets you course-correct while it still counts.',
    sections: [
      {
        heading: '1. Classification & Reconciliation Catch Costly Errors',
        body: 'Proper bookkeeping goes beyond typing numbers into rows. Reconciling your recorded entries against bank statements, POS totals, and e-wallet histories uncovers missing payouts, duplicate supplier charges, and unrecorded expenses.',
      },
      {
        heading: '2. Documentation Protects Your Deductions & Credibility',
        body: 'In accounting and tax compliance, a number without valid supporting documentation is fragile. Building a simple weekly routine for labeling vouchers, official invoices, and proof of payment saves days of stressful searching later.',
      },
      {
        heading: '3. Clean Books Open Doors to Growth',
        body: 'When corporate clients, prospective partners, or financing institutions ask for financial records, organized books let you respond promptly and credibly.',
      },
    ],
    takeaways: [
      'Reconcile bank and e-wallet balances monthly rather than waiting for year-end.',
      'Standardize how your team collects and stores supplier invoices and disbursement vouchers.',
      'Use expense categories that reflect how you actually manage your operations.',
    ],
    relatedServiceId: 'bookkeeping-accounting',
  },
  {
    id: 'bir-compliance-before-deadlines',
    category: 'Tax Compliance',
    readTime: '4 min read',
    title: 'BIR Compliance: What You Need to Understand Before Deadlines Arrive.',
    subtitle:
      'Practical principles for staying organized, avoiding "zero-sales" misconceptions, and removing panic from periodic tax filings.',
    leadQuote:
      'Calm tax compliance is built three weeks before a due date—through clean records, verified registration details, and consistent invoicing.',
    sections: [
      {
        heading: '1. Your Certificate of Registration Is Your Compass',
        body: 'Different businesses have different registered tax types depending on their structure, industry, and tax classification. Rather than relying on generic social media advice, always anchor your compliance calendar on the specific tax types listed on your official registration documents.',
      },
      {
        heading: '2. Why Slow or Zero-Revenue Periods Still Matter',
        body: 'A common pitfall for newly registered businesses is assuming no return needs to be filed when there were zero sales for the period. In general practice, active registration carries ongoing filing responsibilities until formally updated or closed according to current regulatory procedures.',
      },
      {
        heading: '3. Verify Current Rules & Keep Complete Filing Archives',
        body: 'Philippine tax issuances and electronic filing procedures are updated periodically. Always keep organized folders containing filed returns, confirmation receipts, attachments, and payment proofs—and verify current regulatory guidance for your specific taxpayer classification.',
      },
    ],
    takeaways: [
      'Build a recurring compliance calendar aligned with your registered tax obligations.',
      'Never ignore filing periods during temporary pauses or zero-sales months.',
      'Archive every filed return, email confirmation, and payment receipt in one structured folder.',
    ],
    relatedServiceId: 'bir-tax-compliance',
  },
  {
    id: 'financial-statements-story',
    category: 'Financial Literacy',
    readTime: '4 min read',
    title: 'Your Business Has a Story. Your Financial Statements Tell It.',
    subtitle:
      'A plain-English guide to reading your Income Statement, Balance Sheet, and Cash Flow so your reports guide real decisions.',
    leadQuote:
      'You do not need to memorize accounting textbooks to read your financial statements—you just need to know which business question each report answers.',
    sections: [
      {
        heading: '1. Income Statement: Is Your Business Model Profitable?',
        body: 'The Income Statement (or Profit & Loss) shows revenue earned minus direct costs and operating expenses over a period. Comparing it month over month reveals whether sales growth is translating into healthier bottom-line earnings.',
      },
      {
        heading: '2. Balance Sheet: How Strong Is Your Foundation Today?',
        body: 'The Balance Sheet captures a snapshot of what your business owns (cash, receivables, inventory, equipment), what it owes (supplier payables, loans, tax liabilities), and net owner equity. It highlights liquidity and financial stability.',
      },
      {
        heading: '3. Cash Flow: Can Operations Comfortably Fund Tomorrow?',
        body: 'Tracking how cash moves across operations, equipment investments, and financing prevents overextending your working capital when expanding or purchasing bulk inventory.',
      },
    ],
    takeaways: [
      'Read financial statements side by side rather than relying on one number in isolation.',
      'Watch receivables and inventory turnover so cash does not get trapped.',
      'Ask your accounting partner to walk you through key variances in plain language.',
    ],
    relatedServiceId: 'smart-accounting-systems',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-bir-small-business',
    question: 'Do I need to register my small business with the BIR?',
    answer:
      'In general, businesses and self-employed individuals operating in the Philippines are required to register with the Bureau of Internal Revenue (BIR), alongside primary registration (such as DTI for sole proprietorships or SEC for partnerships and corporations) and applicable local government permits. Because specific classifications and requirements depend on your business structure and activities, we can walk you through what applies during a discovery consultation.',
  },
  {
    id: 'faq-bookkeeping-scope',
    question: 'What bookkeeping services do you offer?',
    answer:
      'We provide systematic transaction recording, categorization of income and expenses, bank and e-wallet reconciliation, organization of financial vouchers and documentation, maintenance of books of accounts, and periodic financial summaries explained in plain language.',
  },
  {
    id: 'faq-business-registration',
    question: 'Can you help with business registration?',
    answer:
      'Yes. We assist entrepreneurs with understanding the registration sequence, preparing required documents, and navigating DTI or SEC, BIR, and applicable Barangay and Mayor’s / LGU permit requirements—followed by an orientation on your post-registration compliance habits.',
  },
  {
    id: 'faq-which-tax-returns',
    question: 'How do I know which tax returns apply to my business?',
    answer:
      'Applicable tax returns depend on your legal entity type, nature of operations, tax classification, and the specific tax types registered on your BIR Certificate of Registration (COR). We review your registration documents and operational setup to help you establish an accurate compliance schedule.',
  },
  {
    id: 'faq-accounting-system',
    question: 'Can I use an accounting system instead of manual spreadsheets?',
    answer:
      'Yes. Through Smart Accounting Systems, we help businesses transition from manual spreadsheets to organized digital bookkeeping workflows, cloud accounting software, and clear financial dashboards while staying aligned with applicable record-keeping requirements.',
  },
  {
    id: 'faq-request-quotation',
    question: 'How can I request a quotation?',
    answer:
      'Click "Request a Quotation" or "Start Your Business Conversation" anywhere on this page to open our official Client Discovery and Engagement Inquiry Form in a separate browser tab, or try our quick "What Does Your Business Need?" guide first. Once we review your business structure and needs, we prepare a clear, tailored proposal.',
  },
];
