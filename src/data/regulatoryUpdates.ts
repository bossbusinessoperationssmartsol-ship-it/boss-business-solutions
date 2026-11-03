/**
 * BOSS. — Philippine Regulatory & Business Compliance Directory Data Module
 *
 * Internal Editorial Governance:
 * - Supported statuses: 'Draft' | 'Pending Verification' | 'Published' | 'Superseded' | 'Archived'
 * - Only verified entries marked 'Published' or 'Superseded' are returned by `getPublicRegulatoryUpdates()`.
 * - Unverified, Draft, Pending Verification, or Archived items never appear on the public website.
 */

export type RegulatoryUpdateStatus =
  | 'Draft'
  | 'Pending Verification'
  | 'Published'
  | 'Superseded'
  | 'Archived';

export type RegulatoryAgencyCode =
  | 'BIR'
  | 'SEC'
  | 'SSS'
  | 'PhilHealth'
  | 'Pag-IBIG'
  | 'DOLE'
  | 'DTI'
  | 'LGUs'
  | 'DILG'
  | 'DOF'
  | 'CDA'
  | 'FIRB'
  | 'PEZA'
  | 'BOI'
  | 'NPC';

export type ComplianceCategory =
  | 'Tax & Invoicing'
  | 'Corporate & SEC Governance'
  | 'Payroll, Labor & Statutory Benefits'
  | 'Business Registration & Local Permits'
  | 'Fiscal Incentives & Ecozones'
  | 'Cooperative Compliance'
  | 'Data Privacy & Security';

export type PersuasiveInquiryCta =
  | "Let's Talk Business"
  | 'Get Accounting Support'
  | 'Discuss Your Tax Compliance Needs'
  | 'Need Help With Business Registration?'
  | 'Request Payroll Assistance'
  | 'Need Help Closing Your Business?'
  | 'Let BOSS. Review Your Compliance Needs';

export const REGULATORY_AGENCIES: {
  code: RegulatoryAgencyCode;
  shortName: string;
  fullName: string;
}[] = [
  { code: 'BIR', shortName: 'BIR', fullName: 'Bureau of Internal Revenue' },
  { code: 'SEC', shortName: 'SEC', fullName: 'Securities and Exchange Commission' },
  { code: 'SSS', shortName: 'SSS', fullName: 'Social Security System' },
  {
    code: 'PhilHealth',
    shortName: 'PhilHealth',
    fullName: 'Philippine Health Insurance Corporation',
  },
  {
    code: 'Pag-IBIG',
    shortName: 'Pag-IBIG / HDMF',
    fullName: 'Home Development Mutual Fund (Pag-IBIG)',
  },
  {
    code: 'DOLE',
    shortName: 'DOLE',
    fullName: 'Department of Labor and Employment',
  },
  {
    code: 'DTI',
    shortName: 'DTI',
    fullName: 'Department of Trade and Industry',
  },
  {
    code: 'LGUs',
    shortName: 'LGUs',
    fullName: 'Local Government Units (City / Municipal)',
  },
  {
    code: 'DILG',
    shortName: 'DILG',
    fullName: 'Department of the Interior and Local Government',
  },
  { code: 'DOF', shortName: 'DOF', fullName: 'Department of Finance' },
  {
    code: 'CDA',
    shortName: 'CDA',
    fullName: 'Cooperative Development Authority',
  },
  {
    code: 'FIRB',
    shortName: 'FIRB',
    fullName: 'Fiscal Incentives Review Board',
  },
  {
    code: 'PEZA',
    shortName: 'PEZA',
    fullName: 'Philippine Economic Zone Authority',
  },
  { code: 'BOI', shortName: 'BOI', fullName: 'Board of Investments' },
  {
    code: 'NPC',
    shortName: 'NPC',
    fullName: 'National Privacy Commission',
  },
];

export const COMPLIANCE_CATEGORIES: ComplianceCategory[] = [
  'Tax & Invoicing',
  'Corporate & SEC Governance',
  'Payroll, Labor & Statutory Benefits',
  'Business Registration & Local Permits',
  'Fiscal Incentives & Ecozones',
  'Cooperative Compliance',
  'Data Privacy & Security',
];

export interface RegulatoryUpdateItem {
  id: string;
  slug: string;
  issuanceNumber: string;
  title: string;
  primaryAgency: RegulatoryAgencyCode;
  agencies: RegulatoryAgencyCode[];
  agencyDisplay: string;
  jurisdictionNote?: string;
  year: '2026' | '2025' | '2024' | '2023';
  category: ComplianceCategory;
  publicationDate: string;
  publishedIso: string;
  effectiveDate: string;
  shortSummary: string;
  overview: string[];
  whatChanged: string[];
  whoIsAffected: string[];
  practicalImplications: string[];
  requiredActions: string[];
  complianceConsiderations: string[];
  officialSourceLabel: string;
  officialSourceUrl: string;
  lastVerifiedDate: string;
  status: RegulatoryUpdateStatus;
  supersededNote?: string;
  relatedServiceSlugs: string[];
  relatedInsightSlug?: string;
  relatedBirForms?: string[];
  ctaLabel: PersuasiveInquiryCta;
}

export const REGULATORY_UPDATES: RegulatoryUpdateItem[] = [
  // =========================================================================
  // 2026 VERIFIED UPDATES (SORTED NEWEST FIRST)
  // =========================================================================
  {
    id: 'reg-2026-bir-rr-6-rmc-112-cwt-invoice',
    slug: 'bir-rr-6-2026-rmc-112-2026-cwt-on-invoices',
    issuanceNumber: 'BIR RR No. 6-2026 & RMC No. 112-2026',
    title:
      'Mandatory Separate Creditable Withholding Tax (CWT) Line Item on Invoices & Transitory Rules',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: 'October 22, 2026 (RMC 112-2026) / October 1, 2026 (RR 6-2026)',
    publishedIso: '2026-10-22',
    effectiveDate: 'October 16, 2026 (RR No. 6-2026 effectivity)',
    shortSummary:
      'Amends Section 6(B) of RR No. 7-2024 to require showing Creditable Withholding Tax (CWT) as a separate line item on commercial invoices whenever CWT applies, with transitory stamping rules for unused booklets and software reconfiguration windows.',
    overview: [
      'Revenue Regulations (RR) No. 6-2026, clarified by Revenue Memorandum Circular (RMC) No. 112-2026, updates the mandatory invoicing content rules introduced under the Ease of Paying Taxes (EOPT) Act.',
      'Whenever a sale of goods or services is subject to Creditable Withholding Tax (kaltas na buwis na ibinabawas ng buyer/withholding agent gaya ng renta, professional fees, o B2B purchases ng Top Withholding Agents), the invoice must display the CWT amount as a distinct line item on the face of the document.',
    ],
    whatChanged: [
      'Adds a mandatory invoice detail under Section 6(B) of RR No. 7-2024 requiring the amount of Creditable Withholding Tax, if applicable, to be shown separately on the face of the invoice.',
      'Allows existing unused manual and loose-leaf invoices to be consumed without immediate reprinting, provided the seller stamps, prints, or legibly writes "Less: Withholding Tax", "Less: Creditable Withholding Tax", or "Less: CWT" with the amount on the FRONT face of the invoice (stamping on the back is not valid).',
      'Grants system reconfiguration periods for Computerized Accounting Systems (CAS) / Electronic Invoicing Systems (up to January 1, 2027) and POS/CRM systems not under strict e-invoicing mandates (up to March 31, 2027).',
      'Allows BIR-registered Credit Memos referencing the original invoice when CWT applicability is determined only after an invoice has already been issued.',
    ],
    whoIsAffected: [
      'VAT and Non-VAT B2B sellers, service providers, landlords, contractors, and professionals billing corporate withholding agents or government agencies.',
      'Businesses using manual invoice booklets, loose-leaf invoices, POS machines, or Computerized Accounting Systems (CAS).',
    ],
    practicalImplications: [
      'Retail/B2C sales not subject to withholding tax do NOT require a CWT line item; the requirement applies only when CWT covers the transaction.',
      'Next time your business applies for an Authority to Print (BIR Form 1906), your printer layout must already incorporate the dedicated CWT line.',
      'Clear CWT presentation on the face of the invoice reduces reconciliation disputes between Accounts Receivable collections and incoming BIR Form 2307 certificates.',
    ],
    requiredActions: [
      'Instruct billing staff to write or stamp "Less: Creditable Withholding Tax (CWT)" on the front face of existing manual/loose-leaf invoices whenever billing a withholding agent.',
      'Update newly ordered invoice templates before filing your next BIR Form 1906 (Authority to Print).',
      'Coordinate with your accounting software or POS vendor to schedule CWT field configuration ahead of the 2027 system transition deadlines.',
    ],
    complianceConsiderations: [
      'Never stamp CWT details on the back of an invoice—RMC No. 112-2026 specifies the notation must appear on the face of the invoice.',
      'Ensure BIR Form 2307 certificates collected from clients match the exact CWT amount shown on the invoice or registered Credit Memo.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue — Issuances (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'vat-and-percentage-tax-compliance',
      'expanded-final-withholding-tax-compliance',
      'accounting-systems-setup-training',
    ],
    relatedInsightSlug: 'bir-rr-6-2026-cwt-invoice-line-item-guide',
    relatedBirForms: ['1906', '2307', '2550Q', '1601-EQ'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    id: 'reg-2026-bir-rr-7-senior-citizen-discount',
    slug: 'bir-rr-7-2026-senior-citizen-discount-deduction-rules',
    issuanceNumber: 'BIR Revenue Regulations No. 7-2026',
    title:
      'Updated Senior Citizen Discount Tax Deduction Rules & Supply-Chain Burden-Sharing Framework',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: 'October 13, 2026',
    publishedIso: '2026-10-13',
    effectiveDate: '15 days following official publication (October 2026)',
    shortSummary:
      'Amends RR No. 07-10 to align income tax deductions for the 20% Senior Citizen discount with Department of Health (DOH) burden-sharing and rebate arrangements across pharmaceutical retailers, distributors, wholesalers, and manufacturers.',
    overview: [
      'Revenue Regulations No. 7-2026 updates BIR rules implementing Republic Act No. 9994 (Expanded Senior Citizens Act of 2010) concerning how businesses claim the 20% senior citizen discount as an allowable deduction from gross income.',
      'Specifically, the regulation harmonizes tax deductions with DOH-prescribed burden-sharing mechanisms in the pharmaceutical and healthcare supply chain.',
    ],
    whatChanged: [
      'Broadens covered establishments to explicitly recognize pharmaceutical retailers, wholesalers, distributors, wholesaler-retailers, and manufacturers participating in statutory discount sharing.',
      'Clarifies that each tier in the supply chain may claim as a tax deduction ONLY the exact net portion of the 20% senior citizen discount it actually shouldered after accounting for compulsory manufacturer/distributor rebates.',
    ],
    whoIsAffected: [
      'Pharmacies, drugstores, hospital pharmacies, medical retailers, pharmaceutical distributors, wholesalers, and manufacturers.',
      'Establishments granting statutory 20% Senior Citizen discounts and claiming special itemized deductions on Form 1701 or Form 1702-RT.',
    ],
    practicalImplications: [
      'Drugstores receiving rebates or credit notes from suppliers/manufacturers for senior citizen discounts cannot deduct the full 20% retail discount if part of the financial cost was reimbursed upstream.',
      'General ledger accounts must separate gross sales, senior citizen discounts granted, and supplier burden-sharing rebates cleanly.',
    ],
    requiredActions: [
      'Configure separate accounting ledger accounts for Senior Citizen Discounts Borne vs. Supplier Rebates/Reimbursements Received.',
      'Maintain complete POS logs and senior citizen ID/booklet transaction records to substantiate special deductions during annual ITR preparation.',
    ],
    complianceConsiderations: [
      'Taxpayers electing the 40% Optional Standard Deduction (OSD) or 8% flat income tax rate cannot separately deduct senior citizen discounts on top of standard deductions.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue — Revenue Regulations (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'individual-corporate-income-tax-preparation',
      'monthly-bookkeeping-accounting-maintenance',
    ],
    relatedBirForms: ['1701', '1702-RT'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    id: 'reg-2026-bir-rmc-110-esp-einvoicing',
    slug: 'bir-rmc-110-2026-electronic-invoicing-service-providers',
    issuanceNumber: 'BIR Revenue Memorandum Circular No. 110-2026',
    title:
      'Accreditation, Security & Data Governance Standards for Electronic Invoicing Service Providers (ESPs)',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: 'October 12, 2026',
    publishedIso: '2026-10-12',
    effectiveDate: 'October 2026',
    shortSummary:
      'Establishes the technical, cybersecurity, operational, and accreditation requirements for third-party Electronic Invoicing Service Providers (ESPs) supporting taxpayer compliance under Sections 237 and 237-A of the Tax Code.',
    overview: [
      'Under the TRAIN Law, EOPT Act, and CREATE MORE Act, the BIR is expanding structured electronic invoicing and electronic sales reporting.',
      'RMC No. 110-2026 sets strict stage-gated accreditation standards for third-party software vendors acting as Electronic Invoicing Service Providers (ESPs) before they may commercially deploy certified e-invoicing transmission solutions to mandated taxpayers.',
    ],
    whatChanged: [
      'Requires ESPs to secure an official BIR Electronic Invoicing Solutions Accreditation Certificate prior to commercial deployment for e-invoicing transmission.',
      'Imposes rigorous cybersecurity, Vulnerability Assessment and Penetration Testing (VAPT), ISO/IEC security alignment, data residency, and structured JSON/XML transmission standards.',
    ],
    whoIsAffected: [
      'Large taxpayers, e-commerce enterprises, export enterprises, and corporations evaluating or onboarding third-party e-invoicing / ERP software providers.',
      'Software vendors and SaaS providers developing Philippine e-invoicing integrations.',
    ],
    practicalImplications: [
      'Businesses upgrading accounting or ERP software should verify whether a prospective vendor holds—or is actively completing—valid BIR accreditation appropriate to their taxpayer classification (CAS/CBA registration vs. certified ESP transmission).',
    ],
    requiredActions: [
      'Request official BIR accreditation or system registration documentation before signing multi-year e-invoicing software contracts.',
      'Ensure your internal Chart of Accounts and tax code masterfiles map cleanly to BIR electronic sales reporting fields.',
    ],
    complianceConsiderations: [
      'Using unaccredited invoicing software without proper BIR system registration/permit exposes businesses to penalties for unauthorized invoice generation.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'accounting-systems-setup-training',
      'vat-and-percentage-tax-compliance',
    ],
    relatedBirForms: ['1905', '1906', '2550Q'],
    ctaLabel: 'Get Accounting Support',
  },
  {
    id: 'reg-2026-dole-ncr-wage-order-28',
    slug: 'dole-wage-order-ncr-28-minimum-wage-and-holiday-pay-2026',
    issuanceNumber: 'RTWPB-NCR Wage Order No. NCR-28 & DOLE Pay Advisories',
    title:
      'Metro Manila (NCR) Minimum Wage Increase to ₱755/Day & Statutory Holiday / 13th-Month Pay Compliance',
    primaryAgency: 'DOLE',
    agencies: ['DOLE'],
    agencyDisplay: 'Department of Labor and Employment (DOLE) — RTWPB NCR',
    jurisdictionNote:
      'Regional Scope: Wage Order No. NCR-28 applies specifically to private-sector employers in the National Capital Region (Metro Manila). Employers outside NCR must verify their respective Regional Tripartite Wages and Productivity Board (RTWPB) wage order.',
    year: '2026',
    category: 'Payroll, Labor & Statutory Benefits',
    publicationDate: 'September 2026',
    publishedIso: '2026-09-26',
    effectiveDate: 'September 26, 2026 (NCR-28)',
    shortSummary:
      'Grants a ₱60/day minimum wage increase across Metro Manila (bringing NCR Non-Agriculture minimum wage to ₱755.00/day and Agriculture / Small Retail & Service ≤15 workers / Small Manufacturing <10 workers to ₱718.00/day), impacting payroll, overtime, holiday pay, and MWE tax exemptions.',
    overview: [
      'Effective September 26, 2026, Wage Order No. NCR-28 raised daily minimum wage rates in the National Capital Region by ₱60.00 across private-sector classifications. Earlier in the year (effective February 7, 2026), Wage Order No. NCR-DW-06 also adjusted the monthly minimum wage for domestic workers (kasambahay) in NCR to ₱7,800.00.',
      'Minimum wage adjustments directly affect statutory payroll computations, overtime/night-shift differentials, holiday pay multipliers, SSS/PhilHealth Monthly Salary Credits, and Statutory Minimum Wage Earner (MWE) income tax exemption classifications.',
    ],
    whatChanged: [
      'NCR Non-Agriculture daily minimum wage increased from ₱695.00 to ₱755.00 per day.',
      'NCR Agriculture, Retail/Service establishments regularly employing 15 workers or fewer, and Manufacturing establishments regularly employing fewer than 10 workers increased from ₱658.00 to ₱718.00 per day.',
      'Reaffirms DOLE statutory pay multipliers: 200% of basic wage for work on Regular Holidays (100% if unworked subject to attendance rules), 130% for work on Special Non-Working Days, and mandatory 13th-Month Pay (at least 1/12 of total basic salary earned) payable on or before December 24 under PD No. 851.',
    ],
    whoIsAffected: [
      'All private-sector employers operating in Cities and Municipality of Metro Manila (NCR) with minimum-wage or near-minimum-wage staff.',
      'HR and payroll teams correcting wage distortion, updating SSS/PhilHealth salary brackets, and preparing 13th-month pay computations.',
    ],
    practicalImplications: [
      'Statutory Minimum Wage Earners (MWEs) remain exempt from BIR withholding tax on their basic minimum wage, holiday pay, overtime pay, night shift differential, and hazard pay—but must still be accurately reported on monthly Form 1601-C and annual Form 1604-C / Form 2316.',
      'Higher daily rates increase prorated basic pay from September 26 onward when computing full-year 13th-month pay before December 24.',
    ],
    requiredActions: [
      'Update payroll masterfiles for NCR-based minimum wage employees effective September 26, 2026 and compute any retroactive differential if applicable.',
      'Review salary brackets just above ₱755/day to address potential wage distortion in accordance with Labor Code procedures.',
      'Verify regional RTWPB wage orders separately if you operate branches in CALABARZON, Central Luzon, Cebu, Davao, or other regions.',
      'Prepare 13th-month pay schedules for payout on or before December 24 and submit the annual DOLE Establishment Compliance Report via the DOLE ERS portal.',
    ],
    complianceConsiderations: [
      'Never apply NCR minimum wage rates blindly to provincial branches, or provincial rates to Metro Manila staff—minimum wages in the Philippines are strictly regional.',
    ],
    officialSourceLabel: 'DOLE & National Wages and Productivity Commission (nwpc.dole.gov.ph)',
    officialSourceUrl: 'https://nwpc.dole.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'payroll-preparation-and-processing',
      'compensation-withholding-tax-compliance',
      'statutory-payroll-deductions-remittance',
    ],
    relatedInsightSlug: 'philippine-payroll-statutory-contributions-bir-2316-guide',
    relatedBirForms: ['1601-C', '1604-C', '2316'],
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    id: 'reg-2026-bir-rmo-22-consolidated-audit',
    slug: 'bir-rmo-22-2026-consolidated-single-instance-audit-program',
    issuanceNumber: 'BIR Revenue Memorandum Order No. 22-2026',
    title:
      'Consolidated BIR Audit Program & Single-Instance Electronic Letter of Authority (eLA) Framework',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: 'August 24, 2026',
    publishedIso: '2026-08-24',
    effectiveDate: 'August 2026',
    shortSummary:
      'Establishes revised, consolidated BIR audit guidelines featuring system-assisted risk selection, the Single-Instance Audit Framework (generally one eLA per taxable year covering all tax types), and standardized documentation controls.',
    overview: [
      'Issued on August 24, 2026, RMO No. 22-2026 consolidates and modernizes the policies and procedures governing BIR tax examinations across Revenue District Offices and investigating divisions.',
      'Paired with the BIR Strategic Plan 2026–2028 (RMO No. 27-2026 under the BIR D.A.R.E.s Digitalization and Audit Reform agenda), tax audits now rely heavily on automated cross-matching of VAT returns, SLSPs, Alphalists (QAP/SAWT), Financial Statements, and third-party data.',
    ],
    whatChanged: [
      'Reinforces the Single-Instance Audit Framework so a taxpayer is generally issued only one Electronic Letter of Authority (eLA) per taxable year encompassing all internal revenue tax types, preventing fragmented multi-team audits.',
      'Institutionalizes system-assisted, risk-based taxpayer selection criteria using defined discrepancy and compliance risk indicators.',
      'Introduces standardized audit checklists, strict procedural timelines, and internal quality-control ("Revalida") and anonymization safeguards.',
    ],
    whoIsAffected: [
      'Corporations, partnerships, OPCs, and high-volume sole proprietors whose Financial Statements, VAT returns, and Withholding Tax alphalists are subject to electronic cross-matching.',
      'Taxpayers currently responding to an eLA, Notice of Discrepancy (NOD), or Preliminary Assessment Notice (PAN).',
    ],
    practicalImplications: [
      'Because audit selection is system-assisted, unexplained variances between Sales per ITR (1701/1702) and Sales per four quarters of VAT/Percentage returns (2550Q/2551Q), or Expenses per FS vs. Withholding Alphalists (1601-EQ/1604-E), immediately elevate audit risk.',
    ],
    requiredActions: [
      'Perform a proactive annual Three-Way Tax Tie-Out reconciling Trial Balance/FS figures against filed VAT, EWT, Compensation Withholding, and ITR schedules.',
      'Verify the authenticity of any Letter of Authority to ensure it is a valid Electronic Letter of Authority (eLA) issued under current RMO protocols.',
      'Organize source invoices, Form 2307 certificates, and registered Books of Accounts systematically by quarter.',
    ],
    complianceConsiderations: [
      'BOSS. assists clients with accounting reconciliations and documentary substantiation schedules; formal legal tax protest representation is coordinated with licensed legal counsel or accredited tax practitioners.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue — Revenue Memorandum Orders (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'audit-preparation-bir-assessment-support',
      'tax-account-reconciliations-compliance-reviews',
    ],
    relatedInsightSlug: 'tax-health-check-resolving-bir-open-cases-early',
    relatedBirForms: ['1702-RT', '2550Q', '1601-EQ', '1604-E'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    id: 'reg-2026-npc-advisory-asir-privacy-governance',
    slug: 'npc-2026-annual-security-incident-report-and-privacy-compliance',
    issuanceNumber: 'NPC Advisory No. 2026-03 & 2025–2026 Privacy Governance Rules',
    title:
      'National Privacy Commission (NPC) Annual Security Incident Reporting (ASIR) & PIA Compliance',
    primaryAgency: 'NPC',
    agencies: ['NPC'],
    agencyDisplay: 'National Privacy Commission (NPC)',
    year: '2026',
    category: 'Data Privacy & Security',
    publicationDate: '2026',
    publishedIso: '2026-08-10',
    effectiveDate: 'ASIR Extended Submission Window up to November 10, 2026',
    shortSummary:
      'Extends the submission deadline for prior-year Annual Security Incident Reports (ASIR) via the NPC Portal to November 10, 2026 and reinforces Privacy Impact Assessment (PIA), data minimization, and Data Protection Officer (DPO) registration duties.',
    overview: [
      'Under Republic Act No. 10173 (Data Privacy Act of 2012), Personal Information Controllers (PICs) and Personal Information Processors (PIPs) operating in the Philippines—especially employers, clinics, financial/accounting firms, e-commerce merchants, and SaaS platforms—must maintain active data protection governance.',
      'Through NPC Advisory No. 2026-03 and related 2025–2026 issuances, the Commission clarified ASIR electronic reporting timelines via the NPC Registration System (NPCRS) and tightened rules on automated data collection and over-collection of IDs.',
    ],
    whatChanged: [
      'Extended the filing deadline for 2025 Annual Security Incident Reports (ASIR) to November 10, 2026 through the official NPC portal.',
      'Reinforced mandatory Privacy Impact Assessments (PIAs) before deploying automated data-scraping or high-risk customer/employee data processing workflows.',
      'Reiterated data minimization principles when verifying customer identities (such as avoiding unnecessary photocopying/retention of sensitive IDs beyond statutory verification needs).',
    ],
    whoIsAffected: [
      'Corporations, SMEs, healthcare clinics, BPOs, retail/e-commerce operators, and employers meeting mandatory NPC DPO/DPS registration criteria or handling sensitive personal information (such as TINs, payroll, and government IDs).',
    ],
    practicalImplications: [
      'Accounting, HR, and client onboarding workflows collect highly sensitive personal data (TINs, SSS/PhilHealth numbers, compensation, addresses) that require clear Privacy Notices and access controls.',
    ],
    requiredActions: [
      'Verify whether your organization meets mandatory NPC registration criteria (e.g., employing 250+ persons, or processing sensitive personal information of 1,000+ individuals, or core data-processing sectors) on privacy.gov.ph.',
      'Maintain a clear Website and Client Onboarding Privacy Notice aligned with RA 10173.',
      'Log and review minor security incidents annually for timely ASIR submission via NPCRS.',
    ],
    complianceConsiderations: [
      'Mandatory serious personal data breaches affecting data subjects still carry strict 72-hour notification rules separate from the annual ASIR summary.',
    ],
    officialSourceLabel: 'National Privacy Commission (privacy.gov.ph)',
    officialSourceUrl: 'https://privacy.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'internal-control-reviews-process-improvement',
      'payroll-preparation-and-processing',
    ],
    ctaLabel: "Let's Talk Business",
  },
  {
    id: 'reg-2026-bir-rr-4-micro-taxpayer-abatement',
    slug: 'bir-rr-4-2026-one-time-abatement-micro-taxpayers',
    issuanceNumber: 'BIR Revenue Regulations No. 4-2026',
    title:
      'One-Time Abatement of Taxes and Penalties for Micro Taxpayers (Gross Sales Not Exceeding ₱3M)',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: 'June 22, 2026',
    publishedIso: '2026-06-22',
    effectiveDate: 'July 2026 (15 days after publication)',
    shortSummary:
      'Prescribes guidelines for a one-time abatement relief program under Section 204(D) of the Tax Code for Micro Taxpayers (gross sales ≤ ₱3,000,000) with minor delinquent accounts, stop-filer open cases, or assessments not exceeding ₱80,000 as of December 31, 2025.',
    overview: [
      'Issued on June 22, 2026 pursuant to Section 204(D) of the NIRC as amended by the EOPT Act, RR No. 4-2026 provides targeted relief for Micro Taxpayers burdened by historical stop-filer cases, minor arrears, or pending non-final assessments.',
      'Crucially, the regulation covers eligible micro businesses—including sole proprietors or entities that have already ceased commercial operations—helping them clear minor historical tax liabilities and formalize closure or compliance rehabilitation.',
    ],
    whatChanged: [
      'Allows eligible Micro Taxpayers (annual gross sales/receipts not exceeding ₱3,000,000) whose total basic tax liability and/or penalties for a covered taxable year do not exceed ₱80,000 (as of December 31, 2025) to apply for one-time abatement.',
      'Requires filing an abatement application with the home RDO and paying a non-refundable ₱5,000 abatement fee via BIR Form 0605 upon evaluation/approval guidelines.',
      'Excludes cases already subject to final and executory court judgments or criminal tax fraud cases.',
    ],
    whoIsAffected: [
      'Micro enterprises, freelancers, online sellers, and closed small shops with historical stop-filer open cases or minor BIR arrears as of December 31, 2025.',
    ],
    practicalImplications: [
      'Small business owners who stopped operating years ago without filing BIR Form 1905 often face accumulated compromise penalties; RR No. 4-2026 provides a structured statutory window to evaluate whether their open cases qualify for micro-taxpayer abatement.',
    ],
    requiredActions: [
      'Request an updated RDO open-case / CMS verification list and compute total basic tax and penalties per taxable year as of December 31, 2025.',
      'Verify exact eligibility exclusions and RDO application deadlines under RR No. 4-2026 before remitting any Form 0605 fee.',
      'Pair open-case resolution with formal BIR Form 1905 cancellation if the business has permanently ceased operations.',
    ],
    complianceConsiderations: [
      'Abatement approval rests with authorized BIR officials upon complete documentary verification; never pay an unassessed Form 0605 amount without RDO routing.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue — RR No. 4-2026 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'business-closure-retirement-cancellation',
      'tax-account-reconciliations-compliance-reviews',
    ],
    relatedInsightSlug: 'closing-business-properly-philippines-lgu-bir-guide',
    relatedBirForms: ['0605', '1905'],
    ctaLabel: 'Need Help Closing Your Business?',
  },
  {
    id: 'reg-2026-sec-mc-16-penalty-suspension',
    slug: 'sec-mc-16-2026-suspension-monthly-delay-penalties-afs-gis',
    issuanceNumber: 'SEC Memorandum Circular No. 16, Series of 2026',
    title:
      'Temporary Suspension of Monthly Incremental Delay Penalties on Late/Non-Filed AFS and GIS Through December 31, 2026',
    primaryAgency: 'SEC',
    agencies: ['SEC'],
    agencyDisplay: 'Securities and Exchange Commission (SEC)',
    year: '2026',
    category: 'Corporate & SEC Governance',
    publicationDate: 'May 2026',
    publishedIso: '2026-05-13',
    effectiveDate: 'May 13, 2026 through December 31, 2026',
    shortSummary:
      'Suspends the monthly incremental delay surcharges for late or unfiled Annual Financial Statements (AFS) and General Information Sheets (GIS) until December 31, 2026—helping corporations and OPCs catch up on overdue reportorial filings.',
    overview: [
      'Following the heightened corporate penalty scale introduced in recent years, overdue corporations faced compounding monthly delay charges on late AFS and GIS submissions.',
      'Under SEC Memorandum Circular No. 16, Series of 2026, the Commission suspended those monthly incremental delay penalties from May 13, 2026 until December 31, 2026.',
    ],
    whatChanged: [
      'Lifts the monthly accumulating delay surcharge on late or non-filed AFS and GIS submissions processed during the relief window ending December 31, 2026.',
      'Clarifies that base foundational penalties for late/non-filing remain applicable where assessed, while removing the compounding monthly escalation.',
    ],
    whoIsAffected: [
      'Domestic stock and non-stock corporations, One Person Corporations (OPCs), and foreign branch/representative offices with delinquent or late 2026 / prior-year AFS or GIS filings.',
    ],
    practicalImplications: [
      'Corporations with backlog accounting records have an important window before December 31, 2026 to reconstruct their books, complete required audits/compilations, and upload overdue AFS and GIS reports via eFAST without incurring further monthly penalty escalations.',
    ],
    requiredActions: [
      'Check your corporation’s standing and unfiled reportorial years via SEC eFAST / compliance monitoring.',
      'Complete backlog bookkeeping and financial statement preparation promptly so overdue AFS and GIS filings are submitted before December 31, 2026.',
    ],
    complianceConsiderations: [
      'Maintaining Good Standing with the SEC prevents corporate delinquency status or revocation of your Certificate of Incorporation.',
    ],
    officialSourceLabel: 'Securities and Exchange Commission Philippines (sec.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'backlog-bookkeeping-records-cleanup',
      'financial-statement-management-reporting',
      'business-amendments-registration-updates',
    ],
    relatedInsightSlug:
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    id: 'reg-2026-cda-mc-07-cais-mandatory-reports',
    slug: 'cda-mc-2026-07-cooperative-mandatory-reports-cais-portal',
    issuanceNumber: 'CDA Memorandum Circular No. 2026-07 & CAIS Guidelines',
    title:
      'Cooperative Development Authority (CDA) Mandatory Annual Reports via CAIS & Certificate of Compliance Rules',
    primaryAgency: 'CDA',
    agencies: ['CDA'],
    agencyDisplay: 'Cooperative Development Authority (CDA)',
    year: '2026',
    category: 'Cooperative Compliance',
    publicationDate: 'April 2026',
    publishedIso: '2026-04-20',
    effectiveDate: '2026 Reporting Cycle (Statutory April 30 baseline; FY 2025 extended to May 31, 2026)',
    shortSummary:
      'Outlines online submission requirements via the Cooperative Assessment Information System (CAIS) for CAPR, Audited Financial Statements, Social & Performance Audits, and tax incentive reports required to maintain a valid CDA Certificate of Compliance (COC).',
    overview: [
      'Registered Philippine cooperatives must submit annual mandatory reports within 120 days after calendar year-end (ordinarily April 30; extended to May 31, 2026 without penalty for FY 2025 reports under CDA MC No. 2026-07) through the online CAIS portal to renew their Certificate of Compliance (COC).',
    ],
    whatChanged: [
      'Extended the FY 2025 mandatory report submission deadline and existing COC validity to May 31, 2026 under MC No. 2026-07.',
      'Enforces scheduled CAIS portal access windows (Wednesday–Sunday access for Cooperatives) to prevent server congestion.',
      'Requires cooperatives holding a BIR Certificate of Tax Exemption to include the Annual Tax Incentive Report (ATIR) and Annual Benefits Report (ABR) alongside CAPR, AFS (audited by a CDA-accredited external auditor), Social Audit, and Performance Audit reports.',
    ],
    whoIsAffected: [
      'Credit, multipurpose, consumers, producers, transport, agrarian, and service cooperatives registered with the CDA.',
    ],
    practicalImplications: [
      'Without an active CDA Certificate of Compliance (COC), cooperatives risk suspension of privileges and complications in renewing BIR Certificate of Tax Exemption (CTE) and local Mayor’s Permits.',
    ],
    requiredActions: [
      'Maintain monthly cooperative books of accounts aligned with the Standard Chart of Accounts for Cooperatives.',
      'Prepare lead schedules early for your CDA-accredited independent external auditor ahead of the annual April 30 statutory cycle.',
    ],
    complianceConsiderations: [
      'Statutory audits of cooperatives must be conducted by an independent CPA accredited by both the BOA and the CDA.',
    ],
    officialSourceLabel: 'Cooperative Development Authority (cda.gov.ph)',
    officialSourceUrl: 'https://cda.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'monthly-bookkeeping-accounting-maintenance',
      'financial-statement-management-reporting',
      'audit-preparation-bir-assessment-support',
    ],
    relatedBirForms: ['1702-EX'],
    ctaLabel: 'Get Accounting Support',
  },
  {
    id: 'reg-2026-dof-dilg-dti-jmc-01-rbelt-create-more',
    slug: 'dof-dilg-dti-jmc-01-2026-rbelt-local-tax-create-more',
    issuanceNumber: 'DOF-DILG-DTI Joint Memorandum Circular No. 01-2026',
    title:
      'Standardized Registered Business Enterprise Local Tax (RBELT) Under CREATE MORE Across Ecozones & LGUs',
    primaryAgency: 'DOF',
    agencies: ['DOF', 'DILG', 'DTI', 'FIRB', 'PEZA', 'BOI', 'LGUs'],
    agencyDisplay: 'DOF, DILG & DTI (covering FIRB, PEZA, BOI & Host LGUs)',
    year: '2026',
    category: 'Fiscal Incentives & Ecozones',
    publicationDate: 'March 2026',
    publishedIso: '2026-03-30',
    effectiveDate: 'March 30, 2026',
    shortSummary:
      'Implements the Registered Business Enterprise Local Tax (RBELT) capped at a maximum of 2% of gross income under RA No. 12066 (CREATE MORE Act), replacing conflicting local business and real property tax assessments on qualified ecozone/BOI enterprises.',
    overview: [
      'Issued jointly by the Department of Finance (DOF), Department of the Interior and Local Government (DILG), and Department of Trade and Industry (DTI), JMC No. 01-2026 operationalizes the local taxation reforms of Republic Act No. 12066 (CREATE MORE Act).',
      'It resolves long-standing jurisdictional disputes between Local Government Units (LGUs) and Investment Promotion Agencies (PEZA, BOI, and FIRB-overseen ecozones) regarding local business taxes.',
    ],
    whatChanged: [
      'Standardizes the Registered Business Enterprise Local Tax (RBELT) at a ceiling of not more than 2% of gross income (where imposed by the host LGU via ordinance in accordance with CREATE MORE) during ITH or Enhanced Deductions regimes, in lieu of all local taxes and real property taxes (subject to statutory terms).',
      'Clarifies coordination procedures among host LGUs, PEZA, BOI, and FIRB for incentive-registered enterprises.',
    ],
    whoIsAffected: [
      'PEZA-registered export and IT-BPM enterprises, BOI-registered domestic/export projects, and FIRB-monitored Registered Business Enterprises (RBEs).',
    ],
    practicalImplications: [
      'Ecozone and BOI enterprises must maintain strict accounting segmentation between Incentive-Registered Activities and Non-Registered / Regular corporate activities to compute Gross Income accurately.',
    ],
    requiredActions: [
      'Verify your Certificate of Registration and Certificate of Entitlement to Tax Incentives (CETI) terms with PEZA or BOI.',
      'Check the specific host city/municipality local revenue ordinance adopting RBELT rates.',
      'Segment registered vs. regular revenues and direct costs cleanly in your General Ledger for Form 1702-MX and RBELT schedules.',
    ],
    complianceConsiderations: [
      'Local ordinances vary by host city or municipality; verify whether your host LGU has enacted an RBELT ordinance and its exact rate up to the 2% statutory cap.',
    ],
    officialSourceLabel: 'Department of Finance & FIRB (dof.gov.ph / firb.gov.ph)',
    officialSourceUrl: 'https://www.dof.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'individual-corporate-income-tax-preparation',
      'financial-statement-management-reporting',
    ],
    relatedBirForms: ['1702-MX'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    id: 'reg-2026-sec-mc-9-afs-gis-efast-schedule',
    slug: 'sec-mc-9-2026-annual-financial-statements-gis-efast-guidelines',
    issuanceNumber: 'SEC Memorandum Circular No. 9, Series of 2026',
    title:
      '2026 SEC Annual Financial Statements (AFS) & General Information Sheet (GIS) Electronic Filing Guidelines via eFAST',
    primaryAgency: 'SEC',
    agencies: ['SEC'],
    agencyDisplay: 'Securities and Exchange Commission (SEC)',
    year: '2026',
    category: 'Corporate & SEC Governance',
    publicationDate: 'February 11, 2026',
    publishedIso: '2026-02-11',
    effectiveDate: '2026 Corporate Filing Season',
    shortSummary:
      'Prescribes the 2026 electronic submission rules and deadlines via SEC eFAST for Audited Financial Statements (AFS), General Information Sheets (GIS), and One Person Corporation (OPC) reportorial filings.',
    overview: [
      'Released on February 11, 2026, SEC Memorandum Circular No. 9, Series of 2026 governs how domestic stock corporations, non-stock corporations, One Person Corporations (OPCs), and foreign corporation branches submit annual reports exclusively through the SEC Electronic Filing and Submission Tool (eFAST).',
    ],
    whatChanged: [
      'Set the standard AFS filing deadline on or before May 29, 2026 for corporations whose fiscal year ended December 31, 2025.',
      'Reaffirmed that corporations with non-December 31 fiscal year-ends must upload their AFS within 120 calendar days from the end of their fiscal year (105 days for publicly listed / SRC Sec. 17.2 issuers).',
      'Requires GIS submission within 30 calendar days from the actual annual stockholders’ or members’ meeting (or within 30 days from anniversary date / appointment rules for applicable entities; OPCs file specific SEC appointment/AFS reports rather than a multi-stockholder GIS).',
    ],
    whoIsAffected: [
      'All SEC-registered domestic stock corporations, non-stock foundations/associations, One Person Corporations (OPCs), and licensed foreign branches/representative offices.',
    ],
    practicalImplications: [
      'Before uploading AFS to SEC eFAST, calendar-year corporations must first complete their annual audit, sign the Statement of Management’s Responsibility (SMR), and secure BIR eAFS / RDO filing confirmation by April 15.',
    ],
    requiredActions: [
      'Ensure your company’s authorized filer and official corporate email are active on SEC eSECURE and eFAST.',
      'Close year-end books and reconcile Balance Sheet schedules in January–February so your external CPA auditor can complete the AFS ahead of the April 15 BIR and May SEC deadlines.',
      'Ensure Beneficial Ownership declarations are separately updated on the SEC HARBOR registry under MC No. 15, s. 2025.',
    ],
    complianceConsiderations: [
      'Corporations below the statutory audit threshold must verify applicable SEC financial statement certification/sworn-statement rules in MC No. 9-2026.',
    ],
    officialSourceLabel: 'Securities and Exchange Commission — eFAST & Issuances (sec.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'financial-statement-management-reporting',
      'audit-preparation-bir-assessment-support',
      'business-registration-dti-sec-bir-lgu',
    ],
    relatedInsightSlug:
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    relatedBirForms: ['1702-RT', '1702-EX'],
    ctaLabel: 'Get Accounting Support',
  },
  {
    id: 'reg-2026-philhealth-circular-0001-employer-relief',
    slug: 'philhealth-circular-2026-0001-employer-interest-waiver-and-contributions',
    issuanceNumber: 'PhilHealth Circular No. 2026-0001 & 5% Premium Schedule',
    title:
      'PhilHealth Employer Contribution Relief Program (One-Time Interest Waiver Through Dec 31, 2026) & 5% Premium Compliance',
    primaryAgency: 'PhilHealth',
    agencies: ['PhilHealth'],
    agencyDisplay: 'Philippine Health Insurance Corporation (PhilHealth)',
    year: '2026',
    category: 'Payroll, Labor & Statutory Benefits',
    publicationDate: '2026',
    publishedIso: '2026-02-02',
    effectiveDate: 'Application Window Open Through December 31, 2026',
    shortSummary:
      'Provides private and government employers a one-time waiver or reduction of accumulated interest on missed premium contributions (covering July 2013–December 2024) for applications filed by December 31, 2026, alongside ongoing 5% monthly premium compliance.',
    overview: [
      'PhilHealth Circular No. 2026-0001 establishes the Guidelines on Recovery of Missed Employer Contributions Through a One-Time Waiver of Interest, helping employers settle historical unremitted premiums without crippling compounded interest.',
      'For current 2026 payroll operations, the active PhilHealth premium rate stands at 5% of monthly basic salary (split 2.5% employee / 2.5% employer), subject to a ₱10,000 income floor (₱500 minimum total premium) and ₱100,000 income ceiling (₱5,000 maximum total premium).',
    ],
    whatChanged: [
      'Grants 100% waiver of interest (0% interest) on missed July 2013–December 2024 employer contributions if full principal arrears are settled within 1 month; 1% interest for 2–6 month installments; or 2% interest for 7–12 month installments.',
      'Requires participating employers to update their Employee Masterlist, register/assign employees under the Yaman ng Kalusugan Program (YAKAP) / First Patient Encounter (FPE), and apply at their PhilHealth Regional/Local Health Insurance Office no later than December 31, 2026.',
    ],
    whoIsAffected: [
      'Private-sector and government employers with unremitted historical PhilHealth billing periods, pending interest waiver appeals, or ongoing payroll operations.',
    ],
    practicalImplications: [
      'Employers cleaning up historical payroll/statutory arrears have until December 31, 2026 to clear July 2013–December 2024 PhilHealth contribution gaps with full or partial interest relief.',
    ],
    requiredActions: [
      'Reconcile historical PhilHealth EPRS remittance logs against payroll ledgers to check for unposted or missed months prior to 2025.',
      'If arrears exist, coordinate with your assigned PhilHealth Accounts Information Management Specialist (PAIMS) well before December 31, 2026.',
      'Ensure current monthly payroll applies the 5% rate (2.5% EE / 2.5% ER) within the ₱10,000–₱100,000 floor/ceiling.',
    ],
    complianceConsiderations: [
      'Defaulting on an approved installment schedule reinstates regular statutory interest charges.',
    ],
    officialSourceLabel: 'PhilHealth Circulars Portal (philhealth.gov.ph)',
    officialSourceUrl: 'https://www.philhealth.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'statutory-payroll-deductions-remittance',
      'payroll-preparation-and-processing',
    ],
    relatedInsightSlug: 'philippine-payroll-statutory-contributions-bir-2316-guide',
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    id: 'reg-2026-bir-rmo-27-strategic-plan',
    slug: 'bir-rmo-27-2026-strategic-plan-2026-2028-digitalization',
    issuanceNumber: 'BIR Revenue Memorandum Order No. 27-2026',
    title:
      'BIR Strategic Plan 2026–2028 (D.A.R.E.s Agenda): ORUS, eBIRForms & Digital Tax Administration Priorities',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2026',
    category: 'Tax & Invoicing',
    publicationDate: '2026',
    publishedIso: '2026-01-28',
    effectiveDate: '2026–2028 Institutional Program Cycle',
    shortSummary:
      'Sets the Bureau’s 2026–2028 transformation roadmap around Digitalization, Audit Reform, Revenue Base Protection, Employee Welfare, and Service Excellence—expanding ORUS online registration, electronic filing, and digital compliance cross-matching.',
    overview: [
      'RMO No. 27-2026 aligns BIR programs, activities, and projects from 2026 through 2028 around electronic taxpayer services (ORUS, eBIRForms, eFPS, eAFS, and eSubmission) and data-driven compliance enforcement.',
    ],
    whatChanged: [
      'Prioritizes end-to-end digital taxpayer registration, book of accounts registration, ATP issuance, and TIN verification via the Online Registration and Update System (ORUS).',
      'Expands digital cross-matching across electronic tax returns, e-marketplace withholding reports, and electronic invoicing data.',
    ],
    whoIsAffected: [
      'All Philippine businesses, online merchants, freelancers, and corporations interacting with BIR registration, invoicing, and e-filing portals.',
    ],
    practicalImplications: [
      'Businesses still relying on unorganized manual trackers face higher friction as registration updates, books of accounts stamping/QR codes, and return validations operate digitally via ORUS and eBIRForms.',
    ],
    requiredActions: [
      'Ensure your business has an updated, accessible ORUS account registered under an official company email address.',
      'Use the latest Offline eBIRForms Package version (or eFPS where mandated) and archive every electronic confirmation email.',
    ],
    complianceConsiderations: [
      'Never use a former bookkeeper’s personal inaccessible email as your sole registered ORUS or eBIRForms confirmation address.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'business-registration-dti-sec-bir-lgu',
      'accounting-systems-setup-training',
    ],
    relatedBirForms: ['1901 / 1903', '1905', '2303'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    id: 'reg-2026-lgu-dilg-eboss-permit-renewal-city-guide',
    slug: 'dti-dilg-lgu-eboss-business-permit-renewal-quezon-city-makati-guide',
    issuanceNumber: 'RA No. 7160 Sec. 167, RA No. 11032 (eBOSS) & City LGU Advisories',
    title:
      'Annual LGU Business Permit Renewal, DTI BNRS & eBOSS Digital Processing (Quezon City & Makati City Examples)',
    primaryAgency: 'LGUs',
    agencies: ['LGUs', 'DILG', 'DTI'],
    agencyDisplay: 'Local Government Units (LGUs), DILG & DTI',
    jurisdictionNote:
      'Jurisdiction Notice: While Section 167 of the Local Government Code sets January 20 as the baseline statutory deadline, exact fee schedules, zoning clearances, eBOSS portals, and city council extensions are strictly LOCAL to each city or municipality (illustrative examples below cover Quezon City and Makati City).',
    year: '2026',
    category: 'Business Registration & Local Permits',
    publicationDate: 'January 2026 Annual Renewal Cycle',
    publishedIso: '2026-01-05',
    effectiveDate: 'Baseline Statutory Window: January 1–20 Annually (Subject to Local City Ordinances)',
    shortSummary:
      'Explains the statutory January 20 Mayor’s Permit renewal baseline under the Local Government Code, DILG/ARTA Electronic Business One-Stop Shop (eBOSS) mandates, DTI Business Name validity, and city-specific online renewal workflows in Quezon City and Makati City.',
    overview: [
      'Operating legitimately in the Philippines requires maintaining both national registration (DTI Business Name valid for 5 years for sole proprietors, or SEC registration for corporations/partnerships, plus BIR registration) AND annual Local Government Unit (LGU) licensing.',
      'Under Section 167 of Republic Act No. 7160 (Local Government Code) and DILG-ARTA directives under RA No. 11032, cities and municipalities process renewals through Electronic Business One-Stop Shop (eBOSS) platforms.',
    ],
    whatChanged: [
      'Expanded eBOSS integration across Metro Manila and key cities—such as Quezon City (via QC E-Services portal at quezoncity.gov.ph) and Makati City (via Makati eBOSS portal)—integrating Barangay Clearance, Local Business Tax assessment, Fire Safety Inspection Certificate (FSIC) fees, and digital QR-coded Mayor’s Permits.',
      'Late renewal past January 20 (unless formally extended by a specific Sangguniang Panlungsod / City Council ordinance) triggers a statutory 25% surcharge plus 2% monthly interest on unpaid local taxes under Section 168 of the Local Government Code.',
    ],
    whoIsAffected: [
      'All sole proprietors, partnerships, OPCs, corporations, branches, and warehouses holding municipal or city Mayor’s Permits.',
    ],
    practicalImplications: [
      'Local Business Tax is assessed on prior-year gross sales/receipts—meaning your 2025 quarterly VAT/Percentage tax returns and Sworn Gross Sales Declaration must tie out cleanly before January 20.',
      'Remember: Repeal of the BIR ₱500 Annual Registration Fee (RMC No. 14-2024) did NOT eliminate annual Barangay and Mayor’s Permit renewals.',
    ],
    requiredActions: [
      'Reconcile full-year gross sales per branch/locality during the first week of January so your LGU Sworn Declaration matches your BIR VAT/Percentage returns.',
      'Check your specific city’s official portal (e.g., QC E-Services for Quezon City businesses, Makati eBOSS for Makati businesses, or your respective municipal BPLO) for local ancillary requirements such as Sanitary, Environmental, and BFP Fire Safety clearances.',
      'Track your 5-year DTI Business Name expiration date on bnrs.dti.gov.ph if operating as a sole proprietor.',
    ],
    complianceConsiderations: [
      'If closing a branch or business, file formal LGU Business Retirement before January 20 so another full year of local business tax is not assessed.',
    ],
    officialSourceLabel: 'DTI BNRS (bnrs.dti.gov.ph) & DILG / Local BPLO Portals',
    officialSourceUrl: 'https://bnrs.dti.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'business-registration-dti-sec-bir-lgu',
      'business-amendments-registration-updates',
      'business-closure-retirement-cancellation',
    ],
    relatedInsightSlug: 'choosing-sole-proprietorship-opc-corporation-philippines',
    ctaLabel: 'Need Help With Business Registration?',
  },
  {
    id: 'reg-2026-sec-harbor-beneficial-ownership',
    slug: 'sec-harbor-beneficial-ownership-disclosure-rules-2026',
    issuanceNumber: 'SEC Memorandum Circular No. 15, Series of 2025 (2026 Rules)',
    title:
      'SEC Beneficial Ownership Disclosure Rules of 2026 & Dedicated HARBOR Registry Reporting',
    primaryAgency: 'SEC',
    agencies: ['SEC'],
    agencyDisplay: 'Securities and Exchange Commission (SEC)',
    year: '2026',
    category: 'Corporate & SEC Governance',
    publicationDate: 'Late 2025 (Effective January 1, 2026)',
    publishedIso: '2026-01-01',
    effectiveDate: 'January 1, 2026',
    shortSummary:
      'Transitions corporate Beneficial Ownership Declarations (BOD) into the SEC’s dedicated HARBOR platform with a 20% ownership threshold and strict 7-day update timelines for changes in beneficial control.',
    overview: [
      'Effective January 1, 2026, SEC Memorandum Circular No. 15, Series of 2025 (The Beneficial Ownership Disclosure Rules of 2026) overhauled how SEC-registered corporations report the natural persons who ultimately own or control the company.',
      'Instead of treating Beneficial Ownership merely as an embedded page inside the annual GIS PDF, the SEC launched HARBOR (Hierarchical and Applicable Relations and Beneficial Ownership Registry) integrated with eSECURE and eFAST.',
    ],
    whatChanged: [
      'Establishes HARBOR as the dedicated SEC registry for Beneficial Ownership Declarations (BOD).',
      'Sets a 20% voting/ownership threshold (down from 25% in older frameworks) for identifying natural-person beneficial owners, alongside control-prong criteria when no single individual holds 20%.',
      'Mandates prompt reporting (such as a 7-day update window) whenever changes occur in beneficial ownership.',
    ],
    whoIsAffected: [
      'All SEC-registered domestic stock and non-stock corporations, OPCs (where applicable nominee/control disclosures apply), partnerships, and foreign corporations.',
      'Corporate secretaries, directors, and shareholders executing share transfers or equity rounds.',
    ],
    practicalImplications: [
      'Inconsistencies between Stock and Transfer Book records, GIS filings on eFAST, and Beneficial Ownership profiles on HARBOR carry steep SEC administrative fines.',
    ],
    requiredActions: [
      'Ensure corporate secretaries and authorized filers have active credentials across SEC eSECURE, eFAST, and HARBOR.',
      'Review multi-layered corporate shareholdings to identify natural persons holding at least 20% ultimate ownership or exercising effective control.',
      'Update HARBOR promptly within the prescribed window whenever share transfers or board control changes occur.',
    ],
    complianceConsiderations: [
      'Legal corporate secretary certifications and complex shareholder restructuring instruments should be reviewed with corporate legal counsel.',
    ],
    officialSourceLabel: 'Securities and Exchange Commission Philippines (sec.gov.ph)',
    officialSourceUrl: 'https://www.sec.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'business-registration-dti-sec-bir-lgu',
      'business-amendments-registration-updates',
    ],
    relatedInsightSlug:
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ctaLabel: 'Need Help With Business Registration?',
  },

  // =========================================================================
  // 2025 ACTIVE STATUTORY & IMPLEMENTING FRAMEWORKS
  // =========================================================================
  {
    id: 'reg-2025-sss-pagibig-employer-contribution-schedules',
    slug: 'sss-15-percent-and-pag-ibig-employer-contribution-compliance-2025-2026',
    issuanceNumber: 'RA No. 11199 (SSS Circular Nos. 2024-006/007) & HDMF Circular No. 460',
    title:
      'Active SSS (15% Rate / ₱35,000 MSC Ceiling) & Pag-IBIG (₱10,000 MFS Cap) Employer Contribution Rules',
    primaryAgency: 'SSS',
    agencies: ['SSS', 'Pag-IBIG'],
    agencyDisplay: 'Social Security System (SSS) & Pag-IBIG Fund (HDMF)',
    year: '2025',
    category: 'Payroll, Labor & Statutory Benefits',
    publicationDate: 'Effective January 2025 (Active Through 2026)',
    publishedIso: '2025-01-15',
    effectiveDate: 'January 2025 (Continuing in 2026)',
    shortSummary:
      'Covers the active 15% SSS contribution rate (10% employer / 5% employee) across the ₱5,000–₱35,000 Monthly Salary Credit range (including Mandatory Provident Fund above ₱20,000 MSC) and the ₱200/₱200 Pag-IBIG mandatory monthly contribution cap.',
    overview: [
      'Philippine employers processing 2025 and 2026 payroll must apply the final scheduled statutory tier under Republic Act No. 11199 (Social Security Act of 2018) alongside the updated Pag-IBIG Maximum Fund Salary ceiling under HDMF Circular No. 460.',
    ],
    whatChanged: [
      'SSS total contribution rate stands at 15% (10% Employer share + 5% Employee share) on Monthly Salary Credits from ₱5,000 up to ₱35,000, plus Employer-only Employees’ Compensation (EC) of ₱10 (MSC below ₱15,000) or ₱30 (MSC ₱15,000 and above).',
      'SSS MSC brackets above ₱20,000 up to ₱35,000 are credited to the Mandatory Provident Fund (MySSS Pension Booster).',
      'Pag-IBIG (HDMF) Maximum Fund Salary stands at ₱10,000 (2% Employee = ₱200 max; 2% Employer = ₱200 max; total ₱400/month mandatory savings for employees earning over ₱1,500).',
    ],
    whoIsAffected: [
      'All Philippine employers with at least one employee, as well as self-employed professionals remitting voluntary/mandatory contributions.',
    ],
    practicalImplications: [
      'Mandatory employee shares deducted for SSS (excluding voluntary excesses), PhilHealth, and Pag-IBIG are excluded from gross taxable compensation before computing monthly BIR Form 1601-C withholding tax.',
    ],
    requiredActions: [
      'Generate Payment Reference Numbers (PRNs) via the My.SSS Employer Portal and remit via Virtual Pag-IBIG / accredited channels on or before prescribed monthly due dates.',
      'Report newly hired employees promptly via SSS R-1A / online portal and update separated staff to prevent erroneous billing.',
      'Reconcile payroll deduction liability accounts monthly against official agency receipts.',
    ],
    complianceConsiderations: [
      'Unremitted SSS and Pag-IBIG deductions carry steep monthly statutory penalties (2% per month for SSS) and officer liability under special penal clauses.',
    ],
    officialSourceLabel: 'SSS (sss.gov.ph) & Pag-IBIG Fund (pagibigfund.gov.ph)',
    officialSourceUrl: 'https://www.sss.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'statutory-payroll-deductions-remittance',
      'payroll-preparation-and-processing',
    ],
    relatedInsightSlug: 'philippine-payroll-statutory-contributions-bir-2316-guide',
    relatedBirForms: ['1601-C', '2316'],
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    id: 'reg-2025-create-more-ra-12066-irr',
    slug: 'ra-12066-create-more-act-dof-dti-irr-incentives-vat-rules',
    issuanceNumber: 'Republic Act No. 12066 (CREATE MORE Act) & Joint DOF-DTI IRR',
    title:
      'CREATE MORE Act Implementing Rules: Outright 5% SCIT, 20% Enhanced Deductions Rate & VAT Zero-Rating Reforms',
    primaryAgency: 'FIRB',
    agencies: ['DOF', 'FIRB', 'PEZA', 'BOI', 'BIR', 'DTI'],
    agencyDisplay: 'DOF, DTI, FIRB, PEZA, BOI & BIR',
    year: '2025',
    category: 'Fiscal Incentives & Ecozones',
    publicationDate: 'February 2025 (Signed Joint IRR)',
    publishedIso: '2025-02-17',
    effectiveDate: '2025 (Statute enacted November 2024; Joint IRR signed February 2025)',
    shortSummary:
      'Enhances tax incentives for PEZA, BOI, and FIRB-registered enterprises through a 20% corporate tax rate under Enhanced Deductions, outright 5% Special Corporate Income Tax (SCIT) option for exporters, and liberalized "directly attributable" VAT zero-rating.',
    overview: [
      'Republic Act No. 12066 (CREATE MORE Act) and its February 2025 Joint DOF-DTI Implementing Rules resolved major operational bottlenecks experienced by Registered Business Enterprises (RBEs) under the earlier CREATE Law.',
    ],
    whatChanged: [
      'Allows Registered Export Enterprises to elect the 5% Gross Income Tax (SCIT) or Enhanced Deductions (ED) outright upon commercial operations without being forced through ITH first.',
      'Reduces the corporate income tax rate to 20% on taxable income from registered activities under the Enhanced Deductions regime (with expanded additional deductions such as power expense and trade fair deductions).',
      'Broadens VAT zero-rating on local purchases and VAT exemption on importations from strict "direct and exclusive use" to goods and services "directly attributable" to registered activities (covering essential support services like janitorial, security, financial, and consultancy services subject to statutory safeguards).',
      'Raises the investment capital threshold requiring direct FIRB approval to over ₱15 billion, empowering IPAs (PEZA and BOI) to approve projects up to ₱15 billion faster.',
    ],
    whoIsAffected: [
      'Export manufacturers, IT-BPM companies, ecozone locators under PEZA, BOI-registered strategic domestic/export enterprises, and B2B local suppliers selling zero-rated services/goods to RBEs.',
    ],
    practicalImplications: [
      'Local suppliers billing PEZA/BOI exporters at 0% VAT must still secure and verify the buyer’s valid IPA VAT Zero-Rating Certification and issue compliant zero-rated invoices.',
    ],
    requiredActions: [
      'Review whether transitioning existing CREATE registrations to CREATE MORE Enhanced Deductions (20% rate) or SCIT rules aligns with your approved IPA terms.',
      'Maintain clean accounting cost-allocation schedules separating registered activities from non-registered income for BIR Form 1702-MX.',
    ],
    complianceConsiderations: [
      'Timely submission of annual tax incentive reports to your IPA (PEZA/BOI) and securing your annual CETI remain prerequisites before claiming preferential rates on Form 1702-MX.',
    ],
    officialSourceLabel: 'FIRB, PEZA & BOI Official Portals (firb.gov.ph)',
    officialSourceUrl: 'https://firb.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'individual-corporate-income-tax-preparation',
      'vat-and-percentage-tax-compliance',
    ],
    relatedBirForms: ['1702-MX', '2550Q'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // FOUNDATIONAL EOPT / TRAIN REFORMS & SUPERSEDED OBLIGATIONS
  // =========================================================================
  {
    id: 'reg-2024-eopt-rr-7-primary-sales-invoice',
    slug: 'bir-rr-7-2024-eopt-act-primary-sales-invoice-rules',
    issuanceNumber: 'Republic Act No. 11976 (EOPT Act) & BIR RR No. 7-2024',
    title:
      'Ease of Paying Taxes (EOPT) Foundation: Sales Invoice as Unified Primary VAT Document & File-and-Pay Flexibility',
    primaryAgency: 'BIR',
    agencies: ['BIR', 'DOF'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR) & Department of Finance (DOF)',
    year: '2024',
    category: 'Tax & Invoicing',
    publicationDate: 'April 11, 2024',
    publishedIso: '2024-04-11',
    effectiveDate: 'April 27, 2024 (Further amended on CWT line items by RR No. 6-2026)',
    shortSummary:
      'Established the Invoice (Sales/Service Invoice) as the primary document evidencing both sales of goods and services, reclassified Official Receipts as supplementary payment proof, introduced Micro/Small/Medium/Large taxpayer tiers, and removed the 25% wrong-venue surcharge.',
    overview: [
      'Republic Act No. 11976 (Ease of Paying Taxes Act) and RR No. 7-2024 remain the foundational invoicing and registration baseline in effect today, now supplemented in 2026 by RR No. 6-2026 (separate CWT line item on invoices).',
    ],
    whatChanged: [
      'Unified invoicing so both goods sellers and service providers issue an Invoice as the primary VAT and expense-substantiation document.',
      'Reclassified Official Receipts as supplementary proof of cash collection rather than valid standalone support for input VAT claims.',
      'Removed the 25% civil penalty for filing at an unauthorized RDO venue and classified taxpayers into Micro (<₱3M), Small (₱3M–<₱20M), Medium (₱20M–<₱1B), and Large (≥₱1B).',
    ],
    whoIsAffected: [
      'All BIR-registered businesses, freelancers, clinics, landlords, agencies, and corporate accounting departments.',
    ],
    practicalImplications: [
      'Accounts payable teams must demand compliant Invoices from service vendors—an Official Receipt or Collection Receipt alone cannot support creditable input VAT on Form 2550Q.',
    ],
    requiredActions: [
      'Confirm all issued invoices follow RR No. 7-2024 mandatory fields plus the 2026 RR No. 6-2026 CWT line-item requirement when applicable.',
      'Monitor Accounts Receivable aging closely since service VAT attaches upon Invoice issuance.',
    ],
    complianceConsiderations: [
      'Statutory output VAT credit rules on uncollected receivables follow strict NIRC conditions and quarterly reporting windows.',
    ],
    officialSourceLabel: 'Bureau of Internal Revenue (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Published',
    relatedServiceSlugs: [
      'vat-and-percentage-tax-compliance',
      'accounts-receivable-payable-management',
    ],
    relatedInsightSlug: 'eopt-act-invoicing-and-registration-reforms-guide',
    relatedBirForms: ['1906', '2550Q', '1905'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    id: 'reg-superseded-arf-0605-repealed',
    slug: 'superseded-bir-annual-registration-fee-form-0605-repealed-rmc-14-2024',
    issuanceNumber: 'BIR RMC No. 14-2024 (Repealing Former NIRC Sec. 236[B] ARF)',
    title:
      'Repealed Requirement: Cessation of the ₱500 Annual BIR Registration Fee (Form 0605)',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2024',
    category: 'Business Registration & Local Permits',
    publicationDate: 'January 24, 2024',
    publishedIso: '2024-01-24',
    effectiveDate: 'Repealed Effective January 22, 2024 (Remains Repealed in 2026)',
    shortSummary:
      'Confirms that the former ₱500.00 Annual Registration Fee (ARF) previously paid every January 31 via BIR Form 0605 is permanently repealed under the EOPT Act—existing Form 2303 CORs remain valid.',
    overview: [
      'Many outdated online checklists still tell Filipino entrepreneurs to pay ₱500 via BIR Form 0605 every January 31. Under Republic Act No. 11976 and BIR RMC No. 14-2024, that annual registration renewal fee ceased permanently on January 22, 2024.',
    ],
    whatChanged: [
      'Eliminated the ₱500 initial and annual BIR registration fee for head offices, branches, and facilities.',
      'Confirmed that existing Certificates of Registration (Form 2303) remain legally valid even if older printed copies still display "Registration Fee".',
      'Retained BIR Form 0605 ONLY as a miscellaneous payment form (for example, when paying approved compromise penalties or the ₱5,000 micro-taxpayer abatement fee under RR No. 4-2026).',
    ],
    whoIsAffected: [
      'All new and existing BIR-registered taxpayers nationwide.',
    ],
    practicalImplications: [
      'Do not remit ₱500 every January for ARF—focus your January compliance calendar on LGU Mayor’s Permit renewal, Q4 VAT/Percentage/EWT returns, and Annual Compensation/Withholding information returns.',
    ],
    requiredActions: [
      'Keep your 2023 and earlier Form 0605 payment proofs archived for historical reference, and omit annual ARF payments going forward.',
    ],
    complianceConsiderations: [
      'Unpaid Annual Registration Fees from taxable years 2023 and earlier may still appear in historical open-case checks if never settled prior to repeal.',
    ],
    officialSourceLabel: 'BIR RMC No. 14-2024 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Superseded',
    supersededNote:
      'The former annual ₱500 BIR Registration Fee obligation is permanently repealed effective January 22, 2024 pursuant to RA No. 11976 (EOPT Act) and BIR RMC No. 14-2024.',
    relatedServiceSlugs: [
      'business-registration-dti-sec-bir-lgu',
      'tax-account-reconciliations-compliance-reviews',
    ],
    relatedInsightSlug: 'annual-registration-fee-repeal-rmc-14-2024',
    relatedBirForms: ['0605', '2303'],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    id: 'reg-superseded-monthly-vat-2550m',
    slug: 'superseded-mandatory-monthly-vat-declaration-bir-form-2550m-rmc-5-2023',
    issuanceNumber: 'BIR RMC No. 5-2023 & RMC No. 52-2023 (Implementing TRAIN Sec. 37)',
    title:
      'Discontinued Mandatory Filing: Monthly VAT Declaration (BIR Form 2550M) Replaced by Quarterly Form 2550Q',
    primaryAgency: 'BIR',
    agencies: ['BIR'],
    agencyDisplay: 'Bureau of Internal Revenue (BIR)',
    year: '2023',
    category: 'Tax & Invoicing',
    publicationDate: 'January 13, 2023 / May 10, 2023',
    publishedIso: '2023-05-10',
    effectiveDate: 'Mandatory Monthly Filing Discontinued Effective January 1, 2023',
    shortSummary:
      'Mandatory monthly filing of BIR Form 2550M ended on January 1, 2023. VAT-registered taxpayers file Quarterly VAT Returns (BIR Form 2550Q) within 25 days after quarter-end, with optional monthly installment remittances allowed under RMC No. 52-2023.',
    overview: [
      'Pursuant to Section 37 of RA No. 10963 (TRAIN Law) and BIR RMC No. 5-2023, VAT-registered taxpayers are no longer required to file Monthly VAT Declarations (BIR Form 2550M).',
    ],
    whatChanged: [
      'Shifted mandatory VAT compliance exclusively to Quarterly BIR Form 2550Q due within 25 days following the close of each taxable quarter.',
      'Clarified under RMC No. 52-2023 that VAT taxpayers who prefer paying monthly for cash-flow discipline may optionally use Form 2550M during Months 1 and 2 without monthly late-filing penalties, provided Form 2550Q is filed on time quarterly.',
    ],
    whoIsAffected: [
      'All VAT-registered individuals, partnerships, OPCs, cooperatives, and corporations.',
    ],
    practicalImplications: [
      'Even though VAT returns are filed quarterly, sales and input VAT books must be reconciled monthly so collected VAT cash is reserved and supplier invoices are verified on time.',
    ],
    requiredActions: [
      'File BIR Form 2550Q and submit electronic SLSP attachments within 25 days after the close of every taxable quarter.',
    ],
    complianceConsiderations: [
      'Pre-2023 unfiled Form 2550M returns (for 2022 and earlier periods) may still require reconciliation during historical RDO open-case reviews.',
    ],
    officialSourceLabel: 'BIR RMC No. 5-2023 & RMC No. 52-2023 (bir.gov.ph)',
    officialSourceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Superseded',
    supersededNote:
      'Mandatory monthly VAT filing via BIR Form 2550M ceased beginning January 1, 2023 under RMC No. 5-2023. Current mandatory VAT filing uses Quarterly BIR Form 2550Q.',
    relatedServiceSlugs: [
      'vat-and-percentage-tax-compliance',
      'monthly-bookkeeping-accounting-maintenance',
    ],
    relatedInsightSlug: 'quarterly-vat-2550q-and-discontinuation-of-2550m',
    relatedBirForms: ['2550Q', '2550M', 'SLSP'],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // PRIVATE INTERNAL STAGING RECORD (NEVER SHOWN PUBLICLY)
  // =========================================================================
  {
    id: 'reg-internal-staging-provincial-wage-review',
    slug: 'internal-pending-regional-wage-orders-q4-check',
    issuanceNumber: 'Pending Regional RTWPB Q4 Wage Orders Verification',
    title: 'Internal Review Queue: Provincial RTWPB Q4 Wage Orders Check',
    primaryAgency: 'DOLE',
    agencies: ['DOLE'],
    agencyDisplay: 'Department of Labor and Employment (DOLE)',
    year: '2026',
    category: 'Payroll, Labor & Statutory Benefits',
    publicationDate: 'Pending Official Gazette Publication Check',
    publishedIso: '2026-11-01',
    effectiveDate: 'Pending Verification',
    shortSummary: 'Internal staging placeholder held out of public view until official RTWPB publication dates are verified.',
    overview: [],
    whatChanged: [],
    whoIsAffected: [],
    practicalImplications: [],
    requiredActions: [],
    complianceConsiderations: [],
    officialSourceLabel: 'NWPC Official Portal',
    officialSourceUrl: 'https://nwpc.dole.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    status: 'Pending Verification',
    relatedServiceSlugs: ['payroll-preparation-and-processing'],
    ctaLabel: 'Request Payroll Assistance',
  },
];

/**
 * Returns only verified public regulatory updates ('Published' and 'Superseded'),
 * sorted newest first by publication date (`publishedIso`).
 */
export function getPublicRegulatoryUpdates(): RegulatoryUpdateItem[] {
  return REGULATORY_UPDATES.filter(
    (item) => item.status === 'Published' || item.status === 'Superseded'
  ).sort((a, b) => b.publishedIso.localeCompare(a.publishedIso));
}

export function findPublicRegulationBySlug(
  slug: string
): RegulatoryUpdateItem | undefined {
  const normalized = slug.trim().toLowerCase();
  return getPublicRegulatoryUpdates().find(
    (item) => item.slug.toLowerCase() === normalized
  );
}
