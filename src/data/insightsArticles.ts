import { ContextualInquiryCta } from './expandedServices';

export type InsightCategory =
  | 'Philippine Tax Updates'
  | 'Business Registration'
  | 'Corporate Compliance'
  | 'Payroll and Employer Obligations'
  | 'Bookkeeping and Accounting'
  | 'Financial Reporting'
  | 'Business Advisory'
  | 'Business Closure and Retirement';

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  'Philippine Tax Updates',
  'Business Registration',
  'Corporate Compliance',
  'Payroll and Employer Obligations',
  'Bookkeeping and Accounting',
  'Financial Reporting',
  'Business Advisory',
  'Business Closure and Retirement',
];

export interface InsightProseSection {
  heading: string;
  paragraphs: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  publishedDate: string;
  publishedIso: string;
  lastReviewedDate: string;
  lastReviewedIso: string;
  readTime: string;
  featured?: boolean;
  regulatoryIssuance: string;
  plainEnglishSections: InsightProseSection[];
  whoIsAffected: string[];
  businessImplications: string[];
  recommendedActions: string[];
  verificationNote: string;
  officialSourceLabel: string;
  officialSourceUrl: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  relatedRegulationSlug?: string;
  relatedBirForms: string[];
  ctaLabel: ContextualInquiryCta;
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: 'bir-rr-6-2026-cwt-invoice-line-item-guide',
    title:
      'BIR RR No. 6-2026 & RMC No. 112-2026: Showing Creditable Withholding Tax Separately on Your Commercial Invoices',
    summary:
      'Effective October 16, 2026, invoices covering transactions subject to Creditable Withholding Tax (CWT) must display the CWT amount as a separate line item on the face of the invoice. Learn how manual stamping, unused booklets, Credit Memos, and 2027 software deadlines work.',
    category: 'Philippine Tax Updates',
    publishedDate: 'October 24, 2026',
    publishedIso: '2026-10-24',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    featured: true,
    regulatoryIssuance:
      'BIR Revenue Regulations (RR) No. 6-2026 (published October 1, 2026; effective October 16, 2026) and BIR Revenue Memorandum Circular (RMC) No. 112-2026 (issued October 22, 2026), amending Section 6(B) of RR No. 7-2024',
    plainEnglishSections: [
      {
        heading: '1. What RR No. 6-2026 Changed on Philippine Invoices',
        paragraphs: [
          'Under the Ease of Paying Taxes (EOPT) Act and RR No. 7-2024, the Invoice became the unified primary transaction document for both sales of goods and rendering of services. In October 2026, the Bureau of Internal Revenue issued RR No. 6-2026—clarified by RMC No. 112-2026—adding a specific transparency rule: whenever a sale is subject to Creditable Withholding Tax (CWT), the seller must show the CWT amount as a separate line item on the face of the invoice.',
          'In plain business terms, kung ang kliyente mo ay corporate withholding agent na nagkakaltas ng 1%, 2%, 5%, 10%, o 15% Expanded/Creditable Withholding Tax (gaya ng opisina na umuupa, kumpanyang nagbabayad ng professional/agency fees, o Top Withholding Agent), dapat nakasulat nang hiwalay sa harap ng Invoice ang halaga ng ikakaltas na CWT at ang net cash payable.',
        ],
      },
      {
        heading: '2. Can You Still Use Existing Printed Invoice Booklets?',
        paragraphs: [
          'Yes. RMC No. 112-2026 confirmed that businesses do NOT need to discard or immediately reprint unused manual or loose-leaf invoice booklets. Until your existing booklets are exhausted, your billing team may stamp, print, or legibly write "Less: Withholding Tax", "Less: Creditable Withholding Tax", or "Less: CWT" alongside the exact peso amount on the FRONT face of the invoice.',
          'Crucially, the BIR emphasized that placing the CWT breakdown on the back of the invoice is not compliant. When you eventually reorder invoice booklets under a new BIR Form 1906 (Authority to Print), your updated printer layout must incorporate the dedicated CWT line item.',
        ],
      },
      {
        heading: '3. Software Transition Deadlines & Post-Issuance Credit Memos',
        paragraphs: [
          'Recognizing that computerized systems require programming and vendor testing, RMC No. 112-2026 set transition windows: taxpayers using Computerized Accounting Systems (CAS) or Electronic Invoicing Systems have until January 1, 2027 to reconfigure invoice outputs, while POS/CRM users not covered by mandatory electronic invoicing have until March 31, 2027.',
          'What if you issue an invoice assuming no withholding applies, and the corporate buyer later informs you that they are a Top Withholding Agent? Rather than cancelling and reissuing every invoice unnecessarily, RMC No. 112-2026 allows issuing a BIR-registered Credit Memo referencing the original invoice to document the CWT deduction cleanly.',
        ],
      },
    ],
    whoIsAffected: [
      'B2B service firms, consultants, marketing/IT agencies, contractors, clinics, and commercial lessors whose clients deduct EWT/CWT.',
      'Suppliers selling goods or services to BIR-designated Top Withholding Agents or government entities.',
      'Finance teams managing manual invoice booklets, BIR Form 1906 reorders, POS machines, or Computerized Accounting Systems.',
    ],
    businessImplications: [
      'Retail B2C transactions where no withholding tax applies are unaffected—the separate CWT line item is required only when CWT applies to the sale.',
      'Showing CWT clearly on the face of the invoice makes matching Accounts Receivable short-payments against incoming client BIR Form 2307 certificates much cleaner.',
      'Stamping CWT notations on the reverse side of an invoice violates RMC No. 112-2026 formatting rules.',
    ],
    recommendedActions: [
      'Order a clean rubber stamp reading "Less: Creditable Withholding Tax (CWT): ₱________" and train billing staff to apply it on the FRONT face of manual invoices for withholding-agent clients.',
      'Update your customer onboarding form to ask corporate buyers upfront whether they are a Top Withholding Agent and confirm applicable ATC rates.',
      'Include a dedicated "Less: Creditable Withholding Tax" line in your next BIR Form 1906 Authority to Print template.',
      'Coordinate with your ERP/CAS or POS provider now so system updates finish ahead of the January 1, 2027 / March 31, 2027 deadlines.',
    ],
    verificationNote:
      'Applicable withholding tax rates depend on the exact Alphanumeric Tax Code (ATC) under RR No. 11-2018 (as amended) and the buyer’s withholding classification. Always verify specific system registration notices with your RDO or LTS office.',
    officialSourceLabel: 'Bureau of Internal Revenue — RR No. 6-2026 & RMC No. 112-2026 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    relatedRegulationSlug: 'bir-rr-6-2026-rmc-112-2026-cwt-on-invoices',
    relatedBirForms: ['1906', '2307', '2550Q', '1601-EQ'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    slug: 'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    title:
      '2026 SEC Corporate Compliance Guide: eFAST AFS & GIS Deadlines, HARBOR Beneficial Ownership & MC No. 16-2026 Penalty Relief',
    summary:
      'What domestic corporations and One Person Corporations (OPCs) must know in 2026—from SEC MC No. 9-2026 eFAST submission rules and the dedicated HARBOR Beneficial Ownership registry to temporary monthly delay penalty relief through December 31, 2026.',
    category: 'Corporate Compliance',
    publishedDate: 'May 20, 2026',
    publishedIso: '2026-05-20',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'SEC Memorandum Circular No. 9, s. 2026 (2026 eFAST AFS & GIS Guidelines), SEC MC No. 15, s. 2025 (2026 Beneficial Ownership Rules via HARBOR), and SEC MC No. 16, s. 2026 (Suspension of Monthly Delay Penalties)',
    plainEnglishSections: [
      {
        heading: '1. Annual AFS & GIS Filing Rules Under SEC MC No. 9, s. 2026',
        paragraphs: [
          'Incorporating with the Securities and Exchange Commission is only the beginning of corporate life. Every year, active domestic stock corporations, non-stock corporations, One Person Corporations (OPCs), and licensed foreign branches must submit reportorial documents exclusively through the SEC Electronic Filing and Submission Tool (eFAST).',
          'Under SEC Memorandum Circular No. 9, Series of 2026, corporations with a calendar fiscal year ending December 31, 2025 were given up to May 29, 2026 to upload their Annual Financial Statements (AFS)—following completion of their April 15 BIR Annual ITR / eAFS filing. Corporations using a non-December 31 fiscal year-end must file their AFS within 120 calendar days from fiscal year-end, while the General Information Sheet (GIS) is due within 30 calendar days following the actual annual stockholders’ or members’ meeting.',
        ],
      },
      {
        heading: '2. HARBOR: Dedicated Beneficial Ownership Registry Effective 2026',
        paragraphs: [
          'Beginning January 1, 2026 under SEC MC No. 15, Series of 2025 (Beneficial Ownership Disclosure Rules of 2026), Beneficial Ownership reporting moved out of static GIS pages into the SEC’s dedicated HARBOR platform (Hierarchical and Applicable Relations and Beneficial Ownership Registry), linked with eSECURE.',
          'Corporations must identify natural persons who ultimately own or control at least 20% of voting rights, shares, or capital (or exercise effective control), and report subsequent changes in beneficial ownership within strict statutory update windows (such as 7 days from change).',
        ],
      },
      {
        heading: '3. Catching Up Overdue Filings Under SEC MC No. 16, s. 2026',
        paragraphs: [
          'For corporations that fell behind on prior-year AFS or GIS submissions, SEC Memorandum Circular No. 16, Series of 2026 temporarily suspended the compounding monthly incremental delay penalties from May 13, 2026 through December 31, 2026. While foundational late-filing assessments remain subject to SEC evaluation, suspending monthly penalty escalation gives overdue companies a practical window to reconstruct backlog accounting records and restore Good Standing before year-end.',
        ],
      },
    ],
    whoIsAffected: [
      'Domestic stock and non-stock corporations, One Person Corporations (OPCs), and foreign branch/representative offices.',
      'Founders and corporate secretaries managing share transfers, board changes, or overdue SEC reportorial years.',
    ],
    businessImplications: [
      'Uploading an incomplete AFS without a signed Statement of Management’s Responsibility (SMR) or BIR eAFS/RDO filing proof results in eFAST rejection.',
      'Unresolved SEC non-filing over multiple years places a corporation at risk of Delinquent Status or revocation of its Certificate of Incorporation.',
    ],
    recommendedActions: [
      'Confirm that your corporate secretary and authorized filer hold verified credentials across SEC eSECURE, eFAST, and HARBOR.',
      'Align Stock and Transfer Book entries, GIS shareholding tables, and HARBOR Beneficial Ownership disclosures (20% threshold).',
      'If your corporation has unfiled prior-year AFS or GIS reports, complete backlog bookkeeping and financial statement compilation well before December 31, 2026.',
    ],
    verificationNote:
      'Statutory audit thresholds (determining whether Audited Financial Statements vs. certified financial statements apply) and specialized secondary-license SEC deadlines depend on entity classification. Formal corporate legal opinions and corporate secretary certifications are coordinated with legal counsel.',
    officialSourceLabel: 'Securities and Exchange Commission Philippines (sec.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    relatedServiceSlug: 'sec-corporate-compliance-efast-harbor-support',
    relatedServiceTitle:
      'SEC Corporate Compliance, eFAST Reportorial Support & Beneficial Ownership Coordination',
    relatedRegulationSlug: 'sec-mc-9-2026-annual-financial-statements-gis-efast-guidelines',
    relatedBirForms: ['1702-RT', '1702-EX'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    slug: 'eopt-act-invoicing-and-registration-reforms-guide',
    title:
      'Ease of Paying Taxes (EOPT) Act: What Sales Invoice and Registration Reforms Mean for Philippine Businesses',
    summary:
      'A practical breakdown of Republic Act No. 11976 and BIR Revenue Regulations No. 7-2024—covering why the Invoice is now the primary VAT document for both goods and services, how Official Receipts changed roles, and how 2026 CWT rules build on EOPT.',
    category: 'Philippine Tax Updates',
    publishedDate: 'January 18, 2025',
    publishedIso: '2025-01-18',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'Republic Act No. 11976 (Ease of Paying Taxes Act), BIR RR No. 7-2024, RR No. 11-2024, and 2026 CWT Invoice Amendment RR No. 6-2026',
    plainEnglishSections: [
      {
        heading: '1. One Primary Transaction Document: The Invoice',
        paragraphs: [
          'Before the Ease of Paying Taxes (EOPT) Act took effect in 2024, Philippine tax rules drew a strict documentary divide: sellers of goods issued Sales Invoices, while service providers issued Official Receipts (ORs) to recognize output and input VAT. Mixing up the two routinely caused disallowed input VAT claims during BIR examinations.',
          'Under Republic Act No. 11976 and implementing BIR Revenue Regulations No. 7-2024, the Invoice (whether titled Sales Invoice, Service Invoice, Commercial Invoice, or Billing Invoice containing mandatory statutory details) is now the unified primary document evidencing both the sale of goods and the sale or rendering of services.',
        ],
      },
      {
        heading: '2. What Happened to Official Receipts?',
        paragraphs: [
          'Official Receipts did not become illegal, but their legal classification changed: an Official Receipt (alongside Collection Receipts, Acknowledgment Receipts, or Payment Vouchers) is now treated as a supplementary proof-of-payment document rather than the primary basis for claiming creditable input VAT.',
          'For service businesses that previously recognized VAT only upon cash collection, the shift to Invoice-based accrual means output VAT generally attaches when the Invoice is issued for services rendered—making disciplined billing and receivables monitoring essential (and as of October 2026 under RR No. 6-2026, CWT must also be shown separately when applicable).',
        ],
      },
      {
        heading: '3. File-and-Pay Flexibility & Taxpayer Size Classifications',
        paragraphs: [
          'Beyond invoicing, the EOPT Act introduced four taxpayer tiers based on gross sales—Micro (under PHP 3M), Small (PHP 3M to under PHP 20M), Medium (PHP 20M to under PHP 1B), and Large (PHP 1B and above)—and removed the punitive 25% "wrong-venue" civil surcharge by allowing electronic or authorized tax filing and payment across authorized channels.',
        ],
      },
    ],
    whoIsAffected: [
      'Service providers, agencies, consultants, clinics, landlords, and freelancers who previously issued Official Receipts as primary billing documents.',
      'VAT-registered buyers and corporate accounting teams verifying supplier documents before claiming creditable input VAT on BIR Form 2550Q.',
      'Newly registering and expanding businesses applying for Authority to Print (BIR Form 1906) or configuring POS / computerized invoicing systems.',
    ],
    businessImplications: [
      'Claiming input VAT solely on a supplementary Official Receipt exposes buyers to input tax disallowance.',
      'Service firms extending 30-to-90-day credit terms must align billing issuance with cash-flow planning because Invoice issuance triggers quarterly VAT reporting.',
      'B2B sellers subject to Creditable Withholding Tax must also include a separate CWT line item on the face of the invoice under RR No. 6-2026.',
    ],
    recommendedActions: [
      'Audit the accountable booklets and billing templates your team currently issues to customers to confirm compliant Invoice headers and mandatory fields (including CWT lines where applicable).',
      'Train purchasing and accounts payable staff to request compliant Sales/Service Invoices from vendors—not just Acknowledgment or Collection Receipts.',
      'Review accounts receivable aging closely each quarter so uncollected service billings are monitored alongside VAT obligations.',
    ],
    verificationNote:
      'Always verify current RDO procedural circulars and RR No. 6-2026 / RMC No. 112-2026 invoicing rules applicable to your registration.',
    officialSourceLabel: 'Bureau of Internal Revenue — Issuances & EOPT Resources (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'vat-and-percentage-tax-compliance',
    relatedServiceTitle: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    relatedRegulationSlug: 'bir-rr-7-2024-eopt-act-primary-sales-invoice-rules',
    relatedBirForms: ['1906', '2550Q', '1905'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    slug: 'annual-registration-fee-repeal-rmc-14-2024',
    title:
      'BIR PHP 500 Annual Registration Fee Repealed (RMC No. 14-2024): Why Form 0605 Changed—and What Remains Required',
    summary:
      'Business taxpayers no longer pay the annual PHP 500 BIR registration renewal fee every January 31. Learn what changed under RMC No. 14-2024, why your Form 2303 COR stays valid, and when BIR Form 0605 is still legitimately used.',
    category: 'Philippine Tax Updates',
    publishedDate: 'January 22, 2025',
    publishedIso: '2025-01-22',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '5 min read',
    regulatoryIssuance:
      'Republic Act No. 11976 (Ease of Paying Taxes Act) and BIR Revenue Memorandum Circular (RMC) No. 14-2024 (effective January 22, 2024)',
    plainEnglishSections: [
      {
        heading: '1. End of the Yearly PHP 500 Renewal Ritual',
        paragraphs: [
          'For decades, every BIR-registered business, self-employed professional, head office, and branch had to file BIR Form 0605 and pay PHP 500.00 on or before January 31 as an Annual Registration Fee (ARF). Missing that single PHP 500 payment routinely created an "open case" in the BIR system.',
          'Under Republic Act No. 11976 (EOPT Act) and clarified by BIR Revenue Memorandum Circular No. 14-2024, the BIR permanently ceased collecting the PHP 500 Annual Registration Fee effective January 22, 2024—both for new business registrations and annual renewals.',
        ],
      },
      {
        heading: '2. Does Your Existing Certificate of Registration (Form 2303) Stay Valid?',
        paragraphs: [
          'Yes. RMC No. 14-2024 explicitly confirmed that existing BIR Certificates of Registration (Form 2303) that still list "Registration Fee (RF)" among printed tax types remain valid. You do not lose good standing simply because an older printed COR shows RF, though your COR will automatically omit RF whenever updated for other registration amendments.',
        ],
      },
      {
        heading: '3. Important Distinction: BIR Removal vs. Local Mayor’s Permit Renewal',
        paragraphs: [
          'Business owners sometimes confuse the BIR Annual Registration Fee repeal with January local government renewals. Repeal of the BIR PHP 500 ARF does NOT remove annual Barangay Clearance and City/Municipal Mayor’s Business Permit renewals, nor does it remove January BIR tax filings (such as Q4 Form 2550Q/2551Q, Q4 Form 1601-EQ, or Annual Form 1604-C/1604-E).',
          'Furthermore, BIR Form 0605 itself was not abolished—it remains an active payment form used for miscellaneous voluntary payments, approved deficiency settlements, or special relief fees (such as the PHP 5,000 micro-taxpayer abatement fee under RR No. 4-2026).',
        ],
      },
    ],
    whoIsAffected: [
      'All BIR-registered sole proprietors, professionals, freelancers, partnerships, OPCs, cooperatives, and corporations.',
      'Multi-branch enterprises that previously remitted PHP 500 per registered branch, warehouse, or facility every January.',
    ],
    businessImplications: [
      'Outdated compliance calendars downloaded online still frequently list "Jan 31 — Pay PHP 500 BIR Form 0605," leading to unnecessary or misallocated payments.',
      'Pre-2024 unpaid Annual Registration Fees (for 2023 and earlier years) may still appear in historical BIR open-case checks during tax clearance or business closure.',
    ],
    recommendedActions: [
      'Remove the recurring January 31 BIR PHP 500 Annual Registration Fee from your internal compliance checklist.',
      'Keep your 2023 and prior-year Form 0605 receipts archived safely in case historical RDO records are ever reviewed.',
      'Continue prioritizing January LGU business permit renewals and January year-end/Q4 BIR tax return deadlines.',
    ],
    verificationNote:
      'Local Government Unit (LGU) Mayor’s Permit renewal deadlines (baseline January 20 under the Local Government Code, subject to specific local city ordinances) are completely separate from BIR rules and must be verified with your respective city or municipality.',
    officialSourceLabel: 'BIR Revenue Memorandum Circular No. 14-2024 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'tax-account-reconciliations-compliance-reviews',
    relatedServiceTitle: 'Tax Account Reconciliation & BIR Compliance Review',
    relatedRegulationSlug: 'superseded-bir-annual-registration-fee-form-0605-repealed-rmc-14-2024',
    relatedBirForms: ['0605', '2303'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    slug: 'quarterly-vat-2550q-and-discontinuation-of-2550m',
    title:
      'Quarterly VAT Return (BIR Form 2550Q) vs. Discontinued Mandatory Monthly 2550M: Managing Cash Flow & Input VAT',
    summary:
      'Mandatory filing of Monthly VAT Declarations (BIR Form 2550M) ended on January 1, 2023 under the TRAIN Law and RMC No. 5-2023. Here is how quarterly Form 2550Q compliance works today—including optional monthly payments under RMC No. 52-2023.',
    category: 'Philippine Tax Updates',
    publishedDate: 'January 26, 2025',
    publishedIso: '2025-01-26',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '5 min read',
    regulatoryIssuance:
      'Section 37 of Republic Act No. 10963 (TRAIN Law), BIR RMC No. 5-2023, and BIR RMC No. 52-2023',
    plainEnglishSections: [
      {
        heading: '1. Why Mandatory BIR Form 2550M Ended in 2023',
        paragraphs: [
          'Pursuant to Section 37 of the TRAIN Law (RA No. 10963) and implemented through BIR Revenue Memorandum Circular No. 5-2023, VAT-registered taxpayers are no longer mandated to file Monthly Value-Added Tax Declarations (BIR Form 2550M) for transactions beginning January 1, 2023.',
          'Instead, mandatory VAT reporting consolidated into the Quarterly Value-Added Tax Return (BIR Form 2550Q), due within twenty-five (25) days following the close of each taxable quarter (for calendar quarters: April 25, July 25, October 25, and January 25, moving to the next business day if falling on a weekend or regular holiday).',
        ],
      },
      {
        heading: '2. Optional Monthly Remittance Under RMC No. 52-2023',
        paragraphs: [
          'Some business owners found that waiting three full months created a large lump-sum VAT cash outflow at quarter-end. In response, the BIR issued RMC No. 52-2023 clarifying that VAT-registered taxpayers may optionally use BIR Form 2550M for the first two months of a quarter to remit VAT in smaller monthly installments without strict monthly deadline penalties—provided they still file BIR Form 2550Q on or before the 25th day after quarter-end.',
        ],
      },
      {
        heading: '3. Why Quarterly Filing Still Demands Monthly Bookkeeping',
        paragraphs: [
          'Filing VAT once a quarter reduces paperwork, not accounting discipline. Waiting until day 20 after quarter-end to encode three months of sales invoices, supplier input VAT invoices, and Summary Lists of Sales and Purchases (SLSP) leads to rushed errors and missed input VAT credits.',
        ],
      },
    ],
    whoIsAffected: [
      'All VAT-registered corporations, partnerships, OPCs, and sole proprietors.',
      'Growing Non-VAT businesses approaching or crossing the statutory PHP 3,000,000 annual gross sales VAT threshold.',
    ],
    businessImplications: [
      'Output VAT collected from customers during Months 1 and 2 sits in your bank account until Month 4—spending that cash on operations causes painful quarter-end liquidity crunches.',
      'VAT returns require clean Summary Lists of Sales and Purchases (SLSP) reconciled against compliant supplier Invoices.',
    ],
    recommendedActions: [
      'Set aside collected net VAT in a dedicated tax reserve sub-account every month—or evaluate optional monthly Form 2550M remittances under RMC No. 52-2023.',
      'Close and reconcile sales and purchase ledgers monthly so Form 2550Q and SLSP schedules are 90% ready before quarter-end.',
      'Verify supplier TINs, registered names, and EOPT Invoice compliance upon receipt rather than weeks later.',
    ],
    verificationNote:
      'Fiscal-year corporate taxpayers follow 25-day deadlines measured from the close of their specific registered fiscal quarters. eFPS filers should also verify any staggered electronic filing group schedules applicable to their industry classification.',
    officialSourceLabel: 'BIR RMC No. 5-2023 & RMC No. 52-2023 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'vat-and-percentage-tax-compliance',
    relatedServiceTitle: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    relatedRegulationSlug: 'superseded-mandatory-monthly-vat-declaration-bir-form-2550m-rmc-5-2023',
    relatedBirForms: ['2550Q', '2550M', 'QAP / SAWT / SLSP'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    slug: 'expanded-withholding-tax-ewt-form-2307-essentials',
    title:
      'Expanded Withholding Tax (EWT), Form 2307 & Alphalists: Preventing Expensive Supplier & ITR Mistakes',
    summary:
      'Understand when your business acts as a withholding agent on rent, professional fees, and contractors—and how Form 0619-E, Form 1601-EQ, QAP, Form 2307, SAWT, and RR No. 6-2026 invoice rules fit together.',
    category: 'Philippine Tax Updates',
    publishedDate: 'January 30, 2025',
    publishedIso: '2025-01-30',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'NIRC Withholding Tax Provisions, RR No. 11-2018 (as amended), EOPT Withholding Timing Rules (RR No. 4-2024), and RR No. 6-2026',
    plainEnglishSections: [
      {
        heading: '1. Two Sides of Form 2307: Payor (Withholding Agent) vs. Payee',
        paragraphs: [
          'BIR Form 2307 (Certificate of Creditable Tax Withheld at Source) sits at the center of B2B transactions in the Philippines. When you pay commercial rent, professional or consultancy fees, contractor billings, or covered supplier purchases (especially if designated as a Top Withholding Agent), you withhold a statutory percentage and remit it to the BIR on the vendor’s behalf.',
          'Conversely, when corporate clients withhold tax from their payments to your business and hand you a signed BIR Form 2307, that certificate functions like advance income tax cash—reducing your quarterly and annual Income Tax Payable when properly scheduled via SAWT.',
        ],
      },
      {
        heading: '2. Monthly Remittances (0619-E), Quarterly Returns (1601-EQ) & QAP',
        paragraphs: [
          'Expanded Withholding Tax follows a structured quarterly rhythm: Months 1 and 2 of each quarter are remitted via BIR Form 0619-E, while Month 3 consolidates the entire quarter on BIR Form 1601-EQ accompanied by the electronic Quarterly Alphalist of Payees (QAP). At year-end, all four quarters are summarized in BIR Form 1604-E.',
        ],
      },
      {
        heading: '3. Protecting Your Income Tax Credits as a B2B Seller',
        paragraphs: [
          'Many service firms lose legitimate tax credits simply because nobody collects Form 2307 certificates upon client payment, or because client certificates contain a wrong TIN, wrong taxable quarter, or missing SAWT attachment. Under RR No. 6-2026, showing CWT as a separate line on your invoice also aligns client collections with incoming Form 2307 certificates.',
        ],
      },
    ],
    whoIsAffected: [
      'Businesses leasing office, retail, clinic, or warehouse space (commonly subject to 5% EWT on rentals).',
      'Companies paying external professionals, consultants, bookkeepers, lawyers, doctors, agencies, or contractors.',
      'B2B service providers and suppliers whose corporate clients deduct 1%, 2%, 5%, 10%, or 15% creditable withholding tax from invoices.',
    ],
    businessImplications: [
      'Paying a landlord or contractor 100% gross without deducting required EWT can result in deficiency withholding tax assessments plus penalties.',
      'Uncollected or unvalidated client Form 2307 certificates force your company to pay higher cash income tax out of pocket.',
    ],
    recommendedActions: [
      'Require vendor TIN, BIR Form 2303 copy, and ATC classification before releasing first payment to any landlord, professional, or contractor.',
      'Reconcile Monthly 0619-E remittances, Quarterly 1601-EQ returns, QAP `.DAT` files, and General Ledger expense lines every quarter.',
      'Track incoming client Form 2307 certificates right inside your Accounts Receivable collection log so none are missing at ITR deadline.',
    ],
    verificationNote:
      'Applicable EWT rates (1%, 2%, 5%, 10%, 15%, etc.) depend on the exact Alphanumeric Tax Code (ATC), payee entity type, gross income declaration, and whether the payor is notified by the BIR as a Top Withholding Agent. Verify specific ATC classifications against current BIR regulations.',
    officialSourceLabel: 'BIR Withholding Tax Forms & Regulations (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    relatedRegulationSlug: 'bir-rr-6-2026-rmc-112-2026-cwt-on-invoices',
    relatedBirForms: ['0619-E', '1601-EQ', '2307', 'QAP / SAWT / SLSP', '1604-E / 1604-F'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    slug: 'choosing-sole-proprietorship-opc-corporation-philippines',
    title:
      'Sole Proprietorship, One Person Corporation (OPC), or Regular Corporation? A Practical Philippine Setup Guide',
    summary:
      'How your initial choice between DTI registration and SEC incorporation shapes personal liability, tax computation options, governance paperwork, and how smoothly your business can scale.',
    category: 'Business Registration',
    publishedDate: 'February 1, 2025',
    publishedIso: '2025-02-01',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'Act No. 3883 (Business Name Law — DTI), Republic Act No. 11232 (Revised Corporation Code of the Philippines — SEC), and NIRC Registration Rules',
    plainEnglishSections: [
      {
        heading: '1. DTI Sole Proprietorship: Speed vs. Unlimited Personal Liability',
        paragraphs: [
          'A Sole Proprietorship registered with the Department of Trade and Industry (DTI) is the fastest structure to open and close. For Non-VAT sole proprietors whose gross sales do not exceed PHP 3,000,000, the Tax Code also offers the simplified 8% income tax rate option in lieu of graduated income tax and percentage tax.',
          'However, legally there is no separation between the owner and the business—meaning business debts, lease obligations, and tax liabilities attach directly to the proprietor’s personal TIN and personal assets.',
        ],
      },
      {
        heading: '2. SEC One Person Corporation (OPC): Solo Ownership With Corporate Shield',
        paragraphs: [
          'Introduced under the Revised Corporation Code (RA No. 11232), a One Person Corporation allows a single natural person (subject to professional practice restrictions) to form a juridical corporate entity with limited liability—without needing four nominal co-incorporators.',
          'An OPC requires appointing a nominee and alternate nominee, maintaining corporate books, filing SEC annual reports via eFAST, and paying corporate income tax rates under BIR Form 1702Q / 1702-RT.',
        ],
      },
      {
        heading: '3. Regular Domestic Corporation or Partnership: Built for Co-Founders & Investors',
        paragraphs: [
          'When two or more co-founders pool capital, plan equity splits, or court institutional clients and investors, a regular domestic stock corporation registered with the SEC provides clear shareholding governance, board oversight, and continuity.',
        ],
      },
    ],
    whoIsAffected: [
      'First-time founders deciding how to formalize an online brand, retail store, consultancy, or tech/service company.',
      'Growing sole proprietors evaluating whether rising contract sizes and liability risks justify incorporating into an OPC or regular corporation.',
    ],
    businessImplications: [
      'Transitioning later from a DTI Sole Proprietorship to an SEC Corporation is NOT a simple "upgrade"—it legally requires incorporating a new SEC entity/TIN and formally closing the old DTI/BIR sole proprietorship.',
      'Licensed professionals exercising a regulated profession should check SEC rules carefully, as OPC/corporate practice of profession is restricted unless specifically authorized by special law.',
    ],
    recommendedActions: [
      'Evaluate liability exposure, co-founder equity plans, corporate client requirements, and projected revenue margins before filing primary registration.',
      'Follow the complete four-stage registration sequence: Primary Registry (DTI/SEC) -> Barangay & LGU Mayor’s Permit -> BIR RDO/ORUS Registration (Form 1901/1903, Books, Invoices) -> Employer Agencies (SSS, PhilHealth, Pag-IBIG, DOLE).',
      'Review your BIR Certificate of Registration (Form 2303) within the first week of issuance so no initial quarterly return is missed.',
    ],
    verificationNote:
      'SEC eSPARC/OneSEC requirements, minimum capital rules for specific foreign-equity or regulated industries, and local LGU zoning prerequisites vary by industry and city. Confirm exact documentary checklists prior to filing.',
    officialSourceLabel: 'SEC Philippines (sec.gov.ph) & DTI BNRS (bnrs.dti.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    relatedServiceSlug: 'business-registration-dti-sec-bir-lgu',
    relatedServiceTitle: 'DTI, SEC, BIR Registration & LGU Permits Coordination',
    relatedRegulationSlug: 'dti-dilg-lgu-eboss-business-permit-renewal-quezon-city-makati-guide',
    relatedBirForms: ['1901 / 1903', '1906', '2303'],
    ctaLabel: 'Need Help With Business Registration?',
  },
  {
    slug: 'philippine-payroll-statutory-contributions-bir-2316-guide',
    title:
      'Philippine Employer Payroll Compliance: SSS, PhilHealth, Pag-IBIG, Monthly 1601-C & Year-End BIR Form 2316',
    summary:
      'Hiring employees introduces recurring monthly remittance duties across SSS (15% rate), PhilHealth (5% rate), Pag-IBIG, DOLE wage orders, and BIR compensation tax. Here is a clear employer roadmap through year-end payroll annualization.',
    category: 'Payroll and Employer Obligations',
    publishedDate: 'February 3, 2025',
    publishedIso: '2025-02-03',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'Labor Code of the Philippines, RA No. 11199 (15% SSS Schedule), RA No. 11223 (5% PhilHealth Schedule & Circular 2026-0001), RA No. 9679 / HDMF Circular 460, Regional RTWPB Wage Orders (e.g., NCR-28), and BIR Compensation Withholding Rules',
    plainEnglishSections: [
      {
        heading: '1. Four Mandatory Employer Pillars Every Month',
        paragraphs: [
          'Every legitimate Philippine employer manages four parallel monthly compliance tracks: Social Security System (SSS) contributions (15% rate across PHP 5,000–35,000 MSC plus EC), PhilHealth premiums (5% rate within the PHP 10,000–100,000 floor/ceiling), Pag-IBIG Fund (HDMF) savings (PHP 10,000 MFS cap), and BIR withholding tax on compensation via BIR Form 1601-C.',
          'Even when all staff earn below the annual PHP 250,000 taxable compensation threshold or qualify as Statutory Minimum Wage Earners (MWEs—such as PHP 755/day Non-Agriculture in Metro Manila effective September 26, 2026 under Wage Order No. NCR-28), employers registered for Compensation Withholding Tax must still file monthly BIR Form 1601-C.',
        ],
      },
      {
        heading: '2. Structuring De Minimis Benefits and the PHP 90,000 13th-Month Ceiling',
        paragraphs: [
          'Proper payroll configuration distinguishes basic taxable salary from statutory employee contribution deductions (mandatory employee SSS, PhilHealth, and Pag-IBIG shares are excluded from taxable compensation computation), qualified non-taxable de minimis allowances within BIR ceilings, and the PHP 90,000 aggregate tax-exempt ceiling for 13th-month pay and other benefits.',
        ],
      },
      {
        heading: '3. Year-End Annualization, Form 1604-C & Employee Form 2316',
        paragraphs: [
          'Before closing December payroll and paying mandatory 13th-month pay on or before December 24, employers perform year-end tax annualization—recomputing each employee’s full-year compensation tax due against cumulative monthly deductions so over- or under-withholding is adjusted cleanly before filing BIR Form 1604-C and issuing signed BIR Form 2316 certificates on or before January 31.',
        ],
      },
    ],
    whoIsAffected: [
      'Startups and MSMEs hiring their first regular, probationary, or project employees.',
      'Growing companies transitioning from manual spreadsheet payslips to structured payroll and HR compliance.',
    ],
    businessImplications: [
      'Deducting employee SSS, PhilHealth, Pag-IBIG, or tax shares without remitting them on time carries strict statutory surcharges and serious legal liability for corporate officers.',
      'Misclassifying regular employees as "freelancers" solely to avoid statutory benefits creates labor and withholding tax risks.',
    ],
    recommendedActions: [
      'Verify current-year SSS, PhilHealth, Pag-IBIG, and regional RTWPB minimum wage orders (never apply NCR rates blindly to provincial branches or vice versa).',
      'Reconcile your payroll summary register directly against Form 1601-C and general ledger salary expense accounts each month.',
      'Collect previous-employer BIR Form 2316 from mid-year new hires so year-end annualization is accurate.',
    ],
    verificationNote:
      'Minimum wages in the Philippines are set regionally by each RTWPB, and statutory agency contribution schedules are governed by official SSS, PhilHealth, and Pag-IBIG circulars.',
    officialSourceLabel: 'DOLE NWPC (nwpc.dole.gov.ph), SSS, PhilHealth & BIR Portals',
    officialSourceUrl: 'https://www.sss.gov.ph',
    relatedServiceSlug: 'payroll-preparation-and-processing',
    relatedServiceTitle: 'Payroll Preparation, Payslip Generation & Payroll Reconciliation',
    relatedRegulationSlug: 'dole-wage-order-ncr-28-minimum-wage-and-holiday-pay-2026',
    relatedBirForms: ['1601-C', '1604-C', '2316'],
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    slug: 'monthly-bookkeeping-vs-tax-season-cramming',
    title:
      'Monthly Bookkeeping Discipline vs. Year-End Cramming: How Reconciled Books Protect Cash and Deductions',
    summary:
      'Why encoding twelve months of receipts right before the April 15 ITR deadline leads to lost deductions, unreconciled e-wallet gaps, and mismatch risk across VAT and withholding returns.',
    category: 'Bookkeeping and Accounting',
    publishedDate: 'February 5, 2025',
    publishedIso: '2025-02-05',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '5 min read',
    regulatoryIssuance:
      'NIRC Section 232–235 (Keeping & Preservation of Books of Accounts) and EOPT Record-Retention Standards',
    plainEnglishSections: [
      {
        heading: '1. The Hidden Cost of "Tax-Only" Annual Encoding',
        paragraphs: [
          'Many small businesses treat bookkeeping as an emergency rescue mission performed once a year in March. By then, thermal receipts have faded, supplier Sales Invoices are missing TINs, marketplace payout CSVs are archived, and bank transfers can no longer be remembered by staff.',
          'Worse, quarterly VAT/Percentage returns (2550Q/2551Q) and quarterly Withholding returns (1601-EQ) were already filed throughout the year—so when year-end books fail to match earlier quarterly filings, variances immediately surface.',
        ],
      },
      {
        heading: '2. Bank, POS, and E-Wallet Reconciliation Is Where Leakage Hides',
        paragraphs: [
          'Modern Philippine merchants collect through bank transfers, InstaPay/PESONet, GCash, Maya, credit card terminals, and e-commerce platforms. Without monthly bank and payout reconciliation, gateway fees, chargebacks, duplicate supplier payments, and unrecorded cash withdrawals silently distort reported net profit.',
        ],
      },
      {
        heading: '3. Valid Substantiation Protects Legitimate Business Expenses',
        paragraphs: [
          'Under Philippine tax rules, an expense is only defensible when backed by compliant primary Invoices, proof of payment, and—where required—timely withholding tax remittance. Monthly voucher indexing ensures issues are caught within days while suppliers can still correct a document.',
        ],
      },
    ],
    whoIsAffected: [
      'Retailers, food & beverage operators, clinics, agencies, and online sellers handling high transaction volumes across banks and digital wallets.',
      'Businesses with historical bookkeeping backlogs preparing to clean up their general ledger.',
    ],
    businessImplications: [
      'Unreconciled books force business owners to price products blindly and guess whether they can afford new hires or inventory.',
      'Inconsistent figures across ITRs, VAT returns, and Financial Statements are primary triggers for system-assisted BIR discrepancy selection.',
    ],
    recommendedActions: [
      'Separate personal owner bank/e-wallet accounts completely from business operating accounts.',
      'Establish a fixed monthly document cutoff (e.g., every 5th of the following month) for invoices, bank statements, and disbursement vouchers.',
      'Reconcile every bank and e-wallet balance monthly before finalizing quarterly tax schedules.',
    ],
    verificationNote:
      'Registered Books of Accounts format (manual bound books, BIR-permitted loose-leaf, or registered Computerized Accounting System via ORUS) must match your approved BIR registration profile and statutory retention period.',
    officialSourceLabel: 'BIR Registration & Books of Accounts Guidelines (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'monthly-bookkeeping-accounting-maintenance',
    relatedServiceTitle: 'Monthly Bookkeeping & Accounting Records Maintenance',
    relatedBirForms: ['2550Q', '2551Q', '1701Q', '1702Q'],
    ctaLabel: 'Get Accounting Support',
  },
  {
    slug: 'reading-income-statement-balance-sheet-cash-flow',
    title:
      'Financial Reporting for Filipino Founders: Reading Your Income Statement, Balance Sheet & Cash Flow Together',
    summary:
      'High gross sales can still leave a bank account empty. Learn how your three core financial statements connect—and which management ratios reveal margin erosion before it hurts liquidity.',
    category: 'Financial Reporting',
    publishedDate: 'February 8, 2025',
    publishedIso: '2025-02-08',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '5 min read',
    regulatoryIssuance:
      'Philippine Financial Reporting Standards for Small Entities (PFRS for SEs) / PFRS for SMEs & SEC Financial Reporting Rules',
    plainEnglishSections: [
      {
        heading: '1. Why Looking Only at Profit—or Only at Cash—Misleads Owners',
        paragraphs: [
          'Relying solely on your mobile banking app balance hides upcoming supplier payables, accrued 13th-month pay, and quarterly VAT money that belongs to the government. Conversely, looking only at an Income Statement showing healthy net profit hides cash trapped inside slow-paying customer receivables or overstocked inventory.',
        ],
      },
      {
        heading: '2. What Each Statement Answers in Plain Business Language',
        paragraphs: [
          'Your Statement of Comprehensive Income (Profit & Loss) answers unit economics: after direct cost of goods/services and operating overhead, is your pricing sustainable? Your Statement of Financial Position (Balance Sheet) answers solvency and liquidity: how much working capital cushions your short-term liabilities? Your Statement of Cash Flows bridges the two—tracking cash generated by operations versus equipment capex, loan repayments, and owner drawings.',
        ],
      },
      {
        heading: '3. Readiness for Banks, Corporate Bidding, and Statutory Audits',
        paragraphs: [
          'Corporations filing annual reports with the SEC via eFAST and taxpayers meeting statutory audit thresholds must submit Audited Financial Statements (AFS) examined by an independent CPA. Maintaining clean monthly compilations and balance sheet schedules year-round dramatically shortens annual audit preparation.',
        ],
      },
    ],
    whoIsAffected: [
      'Founders scaling multi-product or multi-branch operations who want clear monthly margin visibility.',
      'Corporations and OPCs preparing annual financial statements for BIR eAFS and SEC eFAST submission.',
    ],
    businessImplications: [
      'Unmonitored gross margin slippage of just 4–5% across packaging, freight, or discounts can wipe out half of a growing company’s net income.',
      'Banks evaluating SME credit lines scrutinize debt-service coverage, receivable turnover, and tie-outs between Financial Statements and filed ITRs.',
    ],
    recommendedActions: [
      'Review a three-report monthly management pack (P&L, Balance Sheet, and AR/AP Aging) within 15 days after month-end.',
      'Track gross margin by service line or product category rather than blending all revenues into a single line.',
      'Maintain supporting balance sheet schedules (fixed asset lapsing, prepaid amortization, Form 2307 credits) every quarter.',
    ],
    verificationNote:
      'Statutory thresholds requiring independent CPA Audited Financial Statements depend on gross sales/receipts or total assets/liabilities under current BIR and SEC rules.',
    officialSourceLabel: 'SEC Financial Reporting & eFAST Guidelines (sec.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    relatedServiceSlug: 'financial-statement-management-reporting',
    relatedServiceTitle: 'Financial Statement Preparation & Management Reporting',
    relatedRegulationSlug: 'sec-mc-9-2026-annual-financial-statements-gis-efast-guidelines',
    relatedBirForms: ['1701', '1702-RT'],
    ctaLabel: 'Get Accounting Support',
  },
  {
    slug: 'closing-business-properly-philippines-lgu-bir-guide',
    title:
      'Closing or Retiring a Business in the Philippines: Why Stopping Operations Is Not Enough',
    summary:
      'Simply locking your storefront or letting a DTI certificate expire leaves your Mayor’s Permit and BIR registration active—accumulating open-case penalties every quarter. Follow the proper closure roadmap.',
    category: 'Business Closure and Retirement',
    publishedDate: 'February 10, 2025',
    publishedIso: '2025-02-10',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'NIRC Section 236(F) (Cancellation of Registration), BIR Form 1905 Closure Guidelines, RR No. 4-2026 (Micro-Taxpayer Abatement Relief), and Local Government Code Business Retirement Rules',
    plainEnglishSections: [
      {
        heading: '1. The "Dormant Business" Trap: Zero Sales Still Require Zero Returns',
        paragraphs: [
          'One of the costliest misconceptions among Filipino entrepreneurs is assuming that once sales stop—or once a DTI Business Name expires—tax obligations automatically stop too. In reality, until you formally apply for business retirement with your LGU and cancellation of registration with the BIR (via BIR Form 1905), government systems continue expecting every periodic return listed on your Certificate of Registration.',
          'Each unfiled monthly or quarterly no-operation return generates an "open case" in the BIR Case Monitoring System (CMS), carrying compromise penalties that compound quietly over years.',
        ],
      },
      {
        heading: '2. Multi-Agency Closure Sequence',
        paragraphs: [
          'A clean closure generally coordinates four tracks: (a) DTI Business Name cancellation or SEC corporate dissolution/shortening of term; (b) Barangay and City/Municipal Treasurer Business Retirement (securing a Certificate of Business Retirement after final local gross-receipts assessment); (c) SSS, PhilHealth, Pag-IBIG, and DOLE employer non-operating/termination notice if you had employees; and (d) BIR RDO registration cancellation via Form 1905.',
        ],
      },
      {
        heading: '3. Preparing Unused Invoices, Books of Accounts & Micro-Taxpayer Relief Check',
        paragraphs: [
          'For BIR closure routing, your RDO verifies all historical returns through the cessation date, inspects or receives inventory of all unused printed Invoices/receipts for cancellation/destruction, reviews registered Books of Accounts, and checks every internal section for open cases before issuing tax clearance. Eligible micro businesses with minor pre-2026 arrears may also evaluate one-time abatement relief under BIR RR No. 4-2026.',
        ],
      },
    ],
    whoIsAffected: [
      'Sole proprietors closing a shop or freelance practice to return to private employment.',
      'Founders shutting down an inactive partnership, OPC, corporation, or branch office.',
      'Entrepreneurs converting from a DTI Sole Proprietorship to a newly incorporated SEC company (requiring formal closure of the sole proprietorship business registration).',
    ],
    businessImplications: [
      'Delaying formal LGU retirement past January 20 can trigger assessments for another local permit billing cycle unless timely cessation proof is filed.',
      'Lost unused Invoice booklets or missing historical tax returns require specific affidavits, reconstructions, or penalty settlements during RDO routing.',
    ],
    recommendedActions: [
      'While deciding or routing closure, continue filing timely "no-operation / zero" returns until your formal cessation filing date with the BIR RDO.',
      'Safeguard your original BIR Form 2303 (COR), Notice to Issue Invoice signage, registered Books of Accounts, and every unused Invoice booklet.',
      'Conduct a pre-closure open-case check and organize copies of historical filed returns and eBIRForms confirmations before submitting Form 1905.',
    ],
    verificationNote:
      'Documentary checklists, RDO routing timelines, and SEC corporate dissolution procedures (which carry additional publication/creditor rules for corporations) vary by entity structure and locality.',
    officialSourceLabel: 'BIR Application for Registration Update/Cancellation — Form 1905 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'business-closure-retirement-cancellation',
    relatedServiceTitle:
      'Business Closure, LGU Retirement, BIR Cancellation & Corporate Dissolution Coordination',
    relatedRegulationSlug: 'bir-rr-4-2026-one-time-abatement-micro-taxpayers',
    relatedBirForms: ['1905', '0605', '2303', '1701', '1702-RT'],
    ctaLabel: 'Need Help Closing Your Business?',
  },
  {
    slug: 'practical-internal-controls-growing-philippine-smes',
    title:
      'Internal Controls for Growing Philippine SMEs: Stopping Cash Leakage Without Slowing Down Your Team',
    summary:
      'When founders step back from signing every petty cash slip, informal habits create blind spots. Here are five lightweight financial controls any 5-to-50-person team can implement immediately.',
    category: 'Business Advisory',
    publishedDate: 'February 12, 2025',
    publishedIso: '2025-02-12',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '5 min read',
    regulatoryIssuance:
      'COSO Internal Control Principles Adapted for Lean SME Operations & Philippine Tax Substantiation Standards',
    plainEnglishSections: [
      {
        heading: '1. Internal Controls Protect Good Employees Too',
        paragraphs: [
          'Founders often hesitate to introduce disbursement vouchers or dual bank approvals out of fear of looking distrustful toward loyal early employees. In reality, clear controls protect honest staff from ambiguity, prevent accidental double payments to vendors, and ensure tax documents pass scrutiny.',
        ],
      },
      {
        heading: '2. Segregation of Duties—Even in a Three-Person Admin Team',
        paragraphs: [
          'You do not need a corporate bureaucracy to separate incompatible duties. The person who approves a supplier Purchase Order or adds a vendor bank account should not be the same person who encodes the ledger entry and reconciles the monthly bank statement. Where headcount is lean, the founder or external accounting partner serves as the independent reviewer.',
        ],
      },
      {
        heading: '3. Three-Way Matching & Imprest Petty Cash Discipline',
        paragraphs: [
          'Before any check or online bank transfer is released, require a numbered Disbursement Voucher supported by three matched items: (1) approved Purchase Order or contract, (2) confirmed delivery/service receipt, and (3) a compliant vendor Invoice checked for EWT deduction. Keep petty cash strictly on an imprest fixed-fund basis replenished only upon submission of valid receipts.',
        ],
      },
    ],
    whoIsAffected: [
      'Founder-led companies delegating purchasing, billing, cashiering, or store operations to managers.',
      'Multi-branch clinics, F&B concepts, trading firms, and agencies preparing to implement cloud accounting software.',
    ],
    businessImplications: [
      'Uncontrolled petty cash and unverified online transfers erode both operating cash and tax-deductible expense documentation.',
      'Implementing clean voucher and approval SOPs first makes cloud accounting implementation twice as fast and reliable.',
    ],
    recommendedActions: [
      'Enable Maker-Approver dual authorization on all corporate online banking and e-wallet disbursement portals.',
      'Standardize pre-numbered Disbursement Vouchers requiring EOPT Invoice and EWT rate verification before payment approval.',
      'Have bank, POS, and inventory reconciliations reviewed monthly by someone independent of daily cash custody.',
    ],
    verificationNote:
      'Control matrices should be proportionate to your headcount, industry regulations, and transaction volume. Periodic walkthroughs ensure controls remain practical as operations evolve.',
    officialSourceLabel: 'Philippine SME Governance & Accounting Best Practices — SEC / DTI Resources',
    officialSourceUrl: 'https://www.dti.gov.ph',
    relatedServiceSlug: 'internal-control-reviews-process-improvement',
    relatedServiceTitle:
      'Internal Control Review, Process Improvement & External Audit Preparation Support',
    relatedBirForms: ['2307'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    slug: 'tax-health-check-resolving-bir-open-cases-early',
    title:
      'BIR Open Cases & Single-Instance Audit Readiness (RMO No. 22-2026): Why Proactive Tax Tie-Outs Matter',
    summary:
      'Why filed returns can still show up as "open cases" in RDO records, how system-assisted audit selection under RMO No. 22-2026 cross-matches your FS, VAT, and Withholding returns, and how to build an audit-ready tax archive.',
    category: 'Business Advisory',
    publishedDate: 'February 14, 2025',
    publishedIso: '2025-02-14',
    lastReviewedDate: 'November 3, 2026',
    lastReviewedIso: '2026-11-03',
    readTime: '6 min read',
    regulatoryIssuance:
      'BIR RMO No. 22-2026 (Consolidated Audit Program & Single-Instance Audit Framework), NIRC Assessment Rules, and BIR Tax Clearance Procedures',
    plainEnglishSections: [
      {
        heading: '1. Why Filed Returns Still Appear as RDO Open Cases',
        paragraphs: [
          'An "open case" occurs when the BIR internal system expects a periodic tax return listed on your BIR Form 2303 (COR) for a given period, and no matched filing record has posted to that tax type.',
          'Open cases arise not only from genuinely missed returns, but also from filing under an outdated RDO code after moving offices, selecting the wrong form version or return period in eBIRForms, forgetting to update COR tax types via Form 1905, or losing email confirmation receipts.',
        ],
      },
      {
        heading: '2. System-Assisted Cross-Matching Under RMO No. 22-2026',
        paragraphs: [
          'Under BIR Revenue Memorandum Order No. 22-2026 (Consolidated Audit Program), taxpayer audit selection relies on system-assisted risk indicators under a Single-Instance Audit Framework (generally one Electronic Letter of Authority per taxable year covering all internal revenue taxes).',
          'Discrepancies across your filings—gross revenues on Annual ITRs (1701/1702) versus four quarters of VAT/Percentage returns (2550Q/2551Q), salaries claimed on Financial Statements versus Form 1601-C/1604-C compensation alphalists, and rent/professional fees claimed as deductions versus Form 1601-EQ/1604-E withholding returns—are primary risk flags.',
        ],
      },
      {
        heading: '3. Building a Permanent Proof-of-Filing Vault',
        paragraphs: [
          'Every filed return should be stored in a structured year-and-quarter digital and physical binder containing four items together: (1) the XML/PDF tax return, (2) the official BIR Tax Return Receipt Confirmation email, (3) electronic attachment validation emails (QAP/SAWT/SLSP/eAFS), and (4) bank or ePayment confirmation.',
        ],
      },
    ],
    whoIsAffected: [
      'Contractors and suppliers applying for BIR Tax Clearance for government (PhilGEPS) or corporate bidding.',
      'Companies transitioning from a previous bookkeeper, transferring RDOs, or preparing for investor due diligence.',
    ],
    businessImplications: [
      'Discovering five years of missing eBIRForms confirmation emails three days before a PhilGEPS bid deadline can cost major commercial contracts.',
      'Proactive annual reconciliations allow errors or unrecorded reconciling items (such as timing differences or non-subject reimbursements) to be documented cleanly.',
    ],
    recommendedActions: [
      'Compare every tax type printed on your BIR Form 2303 against your actual monthly and quarterly filing calendar today.',
      'Verify that every filed eBIRForms/eFPS return received its official BIR confirmation email—submission without confirmation is incomplete.',
      'Schedule an annual Tax Account Reconciliation tying your Trial Balance to all filed VAT, Withholding, and Income Tax returns.',
    ],
    verificationNote:
      'Resolution of actual CMS open cases and issuance of formal Tax Clearance Certificates follow specific RDO verification procedures and applicable statutory compromise/surcharge schedules.',
    officialSourceLabel: 'BIR Tax Clearance & eServices Portal (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    relatedServiceSlug: 'tax-account-reconciliations-compliance-reviews',
    relatedServiceTitle: 'Tax Account Reconciliation & BIR Compliance Review',
    relatedRegulationSlug: 'bir-rmo-22-2026-consolidated-single-instance-audit-program',
    relatedBirForms: ['2303', '1905', '2550Q', '1601-EQ', '1601-C'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
];

export function findInsightBySlug(slug: string): InsightArticle | undefined {
  const normalized = slug.trim().toLowerCase();
  return INSIGHTS_ARTICLES.find((a) => a.slug.toLowerCase() === normalized);
}
