/**
 * BOSS. — Comprehensive Philippine Accounting, Registration, Reconciliation,
 * Payroll, Tax Compliance & Business Advisory Service Catalog
 *
 * Organized into the 6 core practice categories covering all professional engagements.
 */

export type ServicePillarId =
  | 'all'
  | 'registration-corporate'
  | 'accounting-bookkeeping'
  | 'reconciliation-services'
  | 'payroll-employer'
  | 'tax-compliance'
  | 'reporting-advisory';

export type ContextualInquiryCta =
  | "Let's Talk Business"
  | 'Get Accounting Support'
  | 'Discuss Your Tax Compliance Needs'
  | 'Need Help With Business Registration?'
  | 'Request Payroll Assistance'
  | 'Need Help Closing Your Business?'
  | 'Let BOSS. Review Your Compliance Needs';

export interface ExpandedServiceItem {
  id: string;
  slug: string;
  index: string;
  pillarId: Exclude<ServicePillarId, 'all'>;
  pillarLabel: string;
  title: string;
  whatItIs: string;
  whyItMatters: string;
  whoNeedsIt: string;
  howBossAssists: string;
  typicalDeliverables: string[];
  scopeBoundaryNote?: string;
  ctaLabel: ContextualInquiryCta;
  relatedInsightSlugs: string[];
  relatedBirForms: string[];
}

export const SERVICE_PILLARS: {
  id: ServicePillarId;
  label: string;
  shortLabel: string;
  description: string;
  engagementTags: string[];
}[] = [
  {
    id: 'all',
    label: 'All Practice Services',
    shortLabel: 'All Services',
    description:
      'Complete directory across business registration, accounting & bookkeeping, reconciliations, payroll, tax compliance, and financial reporting & advisory.',
    engagementTags: [],
  },
  {
    id: 'registration-corporate',
    label: 'Business Registration & Corporate Compliance',
    shortLabel: 'Registration & Corporate',
    description:
      'DTI business name registration, SEC incorporation & reporting, BIR registration & updates, LGU permits, business amendments, retirement, and corporate dissolution coordination.',
    engagementTags: [
      'DTI Registration Assistance',
      'SEC Registration Support',
      'BIR Registration & Updates',
      'LGU Permits & Licensing',
      'Business Amendments',
      'Business Closure & Retirement',
      'Corporate Dissolution Coordination',
    ],
  },
  {
    id: 'accounting-bookkeeping',
    label: 'Accounting & Bookkeeping',
    shortLabel: 'Accounting & Bookkeeping',
    description:
      'Monthly bookkeeping, accounting records maintenance, backlog bookkeeping & cleanup, general ledger & journal entries, trial balance review, AR/AP monitoring, and month-end/year-end closing.',
    engagementTags: [
      'Monthly Bookkeeping',
      'Records Maintenance',
      'Backlog Bookkeeping & Cleanup',
      'General Ledger & Journal Entries',
      'Trial Balance Review',
      'AR & AP Monitoring',
      'Month-End & Year-End Closing',
    ],
  },
  {
    id: 'reconciliation-services',
    label: 'Reconciliation Services',
    shortLabel: 'Reconciliations',
    description:
      'Line-by-line bank, cash, general ledger, balance sheet, accounts receivable, accounts payable, intercompany, and tax account reconciliations.',
    engagementTags: [
      'Bank Reconciliation',
      'Cash Reconciliation',
      'General Ledger Reconciliation',
      'Balance Sheet Reconciliation',
      'AR & AP Reconciliation',
      'Intercompany Reconciliation',
      'Tax Account Reconciliation',
    ],
  },
  {
    id: 'payroll-employer',
    label: 'Payroll & Employer Compliance',
    shortLabel: 'Payroll & Employer',
    description:
      'Payroll & payslip preparation, payroll reconciliation, compensation withholding tax, SSS, PhilHealth & Pag-IBIG contributions, 13th-month pay, payroll annualization, and statutory reporting.',
    engagementTags: [
      'Payroll & Payslip Preparation',
      'Payroll Reconciliation',
      'Compensation Withholding Tax',
      'SSS, PhilHealth & Pag-IBIG Support',
      '13th-Month Pay Computation',
      'Payroll Annualization',
      'Employee Statutory Reporting',
    ],
  },
  {
    id: 'tax-compliance',
    label: 'Tax Compliance',
    shortLabel: 'Tax Compliance',
    description:
      'VAT, percentage tax, expanded/final/compensation withholding taxes, individual & corporate income tax, BIR alphalists & data attachments, tax compliance reviews, and BIR assessment documentation support.',
    engagementTags: [
      'VAT & Percentage Tax Returns',
      'Expanded & Final Withholding Tax',
      'Compensation Withholding Tax',
      'Individual & Corporate Income Tax',
      'BIR Alphalists, SAWT & QAP',
      'Tax Compliance Review',
      'BIR Assessment Documentation',
    ],
  },
  {
    id: 'reporting-advisory',
    label: 'Financial Reporting & Advisory',
    shortLabel: 'Reporting & Advisory',
    description:
      'Financial statement preparation, management reporting, budgeting & forecasting, accounting system implementation, internal control review, process improvement, performance analysis, and audit preparation.',
    engagementTags: [
      'Financial Statement Preparation',
      'Management Reporting',
      'Budgeting & Forecasting',
      'Accounting System Implementation',
      'Internal Control Review',
      'Process Improvement',
      'Business Performance Analysis',
      'Audit Preparation Support',
    ],
  },
];

export const EXPANDED_SERVICES: ExpandedServiceItem[] = [
  // =========================================================================
  // 1. BUSINESS REGISTRATION & CORPORATE COMPLIANCE (01 - 04)
  // =========================================================================
  {
    id: 'svc-01-business-registration',
    slug: 'business-registration-dti-sec-bir-lgu',
    index: '01',
    pillarId: 'registration-corporate',
    pillarLabel: 'Business Registration & Corporate Compliance',
    title:
      'DTI, SEC, BIR Registration & LGU Permits Coordination',
    whatItIs:
      'End-to-end documentary preparation and step-by-step coordination across primary business registries (DTI BNRS for sole proprietors or SEC eSPARC/OneSEC for partnerships, OPCs, and corporations), Barangay and City/Municipal eBOSS Mayor’s Permits, BIR RDO/ORUS registration, and initial employer registration.',
    whyItMatters:
      'Launching without aligned entity, local permit, and BIR registration records exposes founders to late-registration surcharges, unauthorized invoicing penalties, and mismatched tax types on Form 2303.',
    whoNeedsIt:
      'Startups, formalizing online sellers, independent professionals/freelancers, One Person Corporations (OPCs), partnerships, and newly incorporating domestic enterprises.',
    howBossAssists:
      'BOSS. structures your registration roadmap in the proper statutory order, prepares complete filing checklists, guides compliant Invoice printing (including RR No. 7-2024 & RR No. 6-2026 layouts), and orients you on your first 90 days of compliance.',
    typicalDeliverables: [
      'Entity structure orientation and DTI Business Name or SEC incorporation documentary preparation support',
      'BIR registration package (Form 1901 or 1903), Certificate of Registration (Form 2303) walkthrough, Books of Accounts registration guidance, and Form 1906 Authority to Print Invoices setup',
      'Barangay Clearance and City/Municipal Mayor’s Permit (eBOSS) documentary coordination',
      'Initial employer registration checklists for SSS, PhilHealth, Pag-IBIG, and DOLE Rule 1020 where applicable',
      'Customized post-registration tax and statutory filing calendar',
    ],
    scopeBoundaryNote:
      'Agency approval timelines rest with the respective government offices. Drafting of bespoke shareholder agreements or specialized legal opinions is coordinated with legal counsel.',
    ctaLabel: 'Need Help With Business Registration?',
    relatedInsightSlugs: [
      'choosing-sole-proprietorship-opc-corporation-philippines',
      'eopt-act-invoicing-and-registration-reforms-guide',
    ],
    relatedBirForms: ['1901 / 1903', '1906', '2303'],
  },
  {
    id: 'svc-02-sec-corporate-compliance',
    slug: 'sec-corporate-compliance-efast-harbor-support',
    index: '02',
    pillarId: 'registration-corporate',
    pillarLabel: 'Business Registration & Corporate Compliance',
    title:
      'SEC Corporate Compliance, eFAST Reportorial Support & Beneficial Ownership Coordination',
    whatItIs:
      'Ongoing corporate compliance support covering annual SEC reportorial schedules (General Information Sheet, OPC filings, and Annual Financial Statement upload workflows via SEC eFAST) alongside Beneficial Ownership Registry (HARBOR) coordination.',
    whyItMatters:
      'Missing annual SEC eFAST filings or failing to keep HARBOR Beneficial Ownership records consistent with corporate shareholdings triggers administrative fines and risks delinquent corporate standing.',
    whoNeedsIt:
      'Domestic stock and non-stock corporations, One Person Corporations (OPCs), corporate secretaries, and companies catching up under SEC MC No. 16-2026.',
    howBossAssists:
      'We track your corporation’s annual SEC filing calendar, organize financial and shareholding data schedules for corporate secretary review, and assist with eFAST submission readiness.',
    typicalDeliverables: [
      'Annual SEC compliance calendar aligned with SEC MC No. 9-2026 eFAST schedules',
      'Preparation support for General Information Sheet (GIS) data schedules and OPC annual reporting checklists',
      'Coordination of BIR-filed/eAFS-confirmed Financial Statements and SMR packages for SEC eFAST upload',
      'Beneficial Ownership data organization checklist aligned with 2026 SEC HARBOR disclosure rules',
      'Delinquency / late-filing catch-up document organization',
    ],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
    relatedInsightSlugs: [
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
      'choosing-sole-proprietorship-opc-corporation-philippines',
    ],
    relatedBirForms: ['1702-RT', '1702-EX'],
  },
  {
    id: 'svc-03-business-amendments',
    slug: 'business-amendments-registration-updates',
    index: '03',
    pillarId: 'registration-corporate',
    pillarLabel: 'Business Registration & Corporate Compliance',
    title: 'Business Amendments & Registration Updates',
    whatItIs:
      'Synchronized registration updates across DTI/SEC, LGU Business Permits, and BIR RDO/ORUS whenever your business changes trade names, transfers office addresses, opens branches, adds business lines, or shifts from Non-VAT to VAT.',
    whyItMatters:
      'Operating at a new address or under new business lines without updating BIR Form 2303 and local permits causes open-case mismatches and local inspection violations.',
    whoNeedsIt:
      'Relocating enterprises, growing SMEs opening branches or warehouses, taxpayers crossing the ₱3,000,000 VAT threshold, and corporations amending corporate details.',
    howBossAssists:
      'BOSS. coordinates the documentary sequence across agencies so your SEC/DTI records, Mayor’s Permit, and BIR Certificate of Registration match seamlessly.',
    typicalDeliverables: [
      'BIR Form 1905 registration updates (address/RDO transfer, trade name, tax type updates, books of accounts, or invoice updates)',
      'LGU Mayor’s Permit and Barangay clearance amendment checklists',
      'Branch registration setup and head-office vs. branch tax filing alignment',
      'Standard SEC eAMEND / DTI update documentary coordination (in coordination with corporate legal counsel where statutory corporate resolutions apply)',
    ],
    ctaLabel: 'Need Help With Business Registration?',
    relatedInsightSlugs: [
      'eopt-act-invoicing-and-registration-reforms-guide',
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ],
    relatedBirForms: ['1905', '2303', '1906'],
  },
  {
    id: 'svc-04-business-closure-dissolution',
    slug: 'business-closure-retirement-cancellation',
    index: '04',
    pillarId: 'registration-corporate',
    pillarLabel: 'Business Registration & Corporate Compliance',
    title:
      'Business Closure, LGU Retirement, BIR Cancellation & Corporate Dissolution Coordination',
    whatItIs:
      'Structured wind-down and formal registration cancellation across Barangay/LGU Business Retirement, BIR Form 1905 tax registration cancellation, statutory employer inactivation, and DTI cancellation or SEC corporate dissolution coordination.',
    whyItMatters:
      'Ceasing commercial operations without formal retirement leaves LGU local taxes and BIR periodic return obligations running—generating compounding open-case penalties year after year.',
    whoNeedsIt:
      'Sole proprietors closing a shop or transitioning to employment, founders retiring a sole proprietorship after incorporating an SEC company, closing branches, and dormant corporations winding down.',
    howBossAssists:
      'We audit open cases beforehand, prepare final/short-period returns and closing accounting schedules, inventory unused invoices for surrender, and coordinate multi-agency retirement checklists.',
    typicalDeliverables: [
      'Pre-closure BIR open-case (CMS) and unfiled-return diagnostic check (including RR No. 4-2026 micro-taxpayer abatement eligibility check where applicable)',
      'Barangay and City/Municipal Treasurer Business Retirement documentary package',
      'BIR Form 1905 cancellation filing support, unused invoice surrender inventory, and closing books preparation',
      'Employer non-operating / inactivation notices for SSS, PhilHealth, Pag-IBIG, and DOLE',
      'Accounting and tax clearance coordination supporting SEC corporate dissolution / shortening of corporate term with legal counsel',
    ],
    scopeBoundaryNote:
      'Issuance of final LGU retirement and BIR tax clearance certificates is subject to agency verification and settlement of any assessed liabilities.',
    ctaLabel: 'Need Help Closing Your Business?',
    relatedInsightSlugs: [
      'closing-business-properly-philippines-lgu-bir-guide',
    ],
    relatedBirForms: ['1905', '0605', '2303', '1701', '1702-RT'],
  },

  // =========================================================================
  // 2. ACCOUNTING & BOOKKEEPING (05 - 08)
  // =========================================================================
  {
    id: 'svc-05-monthly-bookkeeping',
    slug: 'monthly-bookkeeping-accounting-maintenance',
    index: '05',
    pillarId: 'accounting-bookkeeping',
    pillarLabel: 'Accounting & Bookkeeping',
    title: 'Monthly Bookkeeping & Accounting Records Maintenance',
    whatItIs:
      'Consistent monthly recording, classification, and organization of revenue, purchases, disbursements, and books of accounts tailored to Philippine accounting and BIR substantiation standards.',
    whyItMatters:
      'Timely monthly bookkeeping gives business owners an accurate view of profitability while ensuring quarterly VAT, percentage tax, and withholding returns match recorded ledgers.',
    whoNeedsIt:
      'Startups, SMEs, clinics, service agencies, retailers, e-commerce sellers, and professionals wanting reliable monthly accounting without full-time internal staff overhead.',
    howBossAssists:
      'BOSS. establishes a predictable monthly document cutoff, encodes and classifies transactions accurately, maintains registered books of accounts, and delivers clean monthly ledgers.',
    typicalDeliverables: [
      'Monthly review and indexing of sales invoices, supplier invoices, official receipts, and disbursement vouchers',
      'Transaction classification into a structured Philippine Chart of Accounts',
      'Maintenance guidance for BIR-registered Books of Accounts (manual, loose-leaf, or computerized)',
      'Monthly transaction registers and preliminary tax schedules',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'monthly-bookkeeping-vs-tax-season-cramming',
      'reading-income-statement-balance-sheet-cash-flow',
    ],
    relatedBirForms: ['2550Q', '2551Q', '1701Q', '1702Q'],
  },
  {
    id: 'svc-06-backlog-bookkeeping-cleanup',
    slug: 'backlog-bookkeeping-records-cleanup',
    index: '06',
    pillarId: 'accounting-bookkeeping',
    pillarLabel: 'Accounting & Bookkeeping',
    title: 'Backlog Bookkeeping & Historical Accounting Cleanup',
    whatItIs:
      'Systematic reconstruction and cleanup of unrecorded prior months or years, broken spreadsheets, and unsubstantiated historical ledger balances.',
    whyItMatters:
      'Unresolved accounting backlogs block annual BIR/SEC filings (including companies catching up under SEC MC No. 16-2026), stall bank credit applications, and conceal tax discrepancies.',
    whoNeedsIt:
      'Growing companies that outgrew informal tracking, businesses recovering from staff turnover, and corporations catching up on overdue financial statements.',
    howBossAssists:
      'We sort historical bank statements, invoices, and previously filed BIR returns chronologically—rebuilding clean ledgers and establishing verified opening balances.',
    typicalDeliverables: [
      'Scoping matrix of missing accounting periods, source documents, and filed returns',
      'Chronological reconstruction of revenue, purchase, payroll, and expense ledgers',
      'Cleanup of suspense accounts, duplicate postings, and commingled owner transactions',
      'Tie-out comparison between reconstructed books and prior BIR filings with variance notes',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'monthly-bookkeeping-vs-tax-season-cramming',
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ],
    relatedBirForms: ['1701', '1702-RT', '2550Q', '1601-EQ'],
  },
  {
    id: 'svc-07-gl-journal-trial-balance-closing',
    slug: 'general-ledger-trial-balance-month-year-end-closing',
    index: '07',
    pillarId: 'accounting-bookkeeping',
    pillarLabel: 'Accounting & Bookkeeping',
    title:
      'General Ledger Maintenance, Journal Entry, Trial Balance Review & Month/Year-End Closing',
    whatItIs:
      'Senior-level accounting supervision covering accrual journal entries, depreciation/amortization schedules, trial balance review, and disciplined month-end and year-end book closing.',
    whyItMatters:
      'Even when junior admin staff encode daily receipts, books remain inaccurate without proper accruals, cutoffs, prepayment amortizations, and closing adjustments.',
    whoNeedsIt:
      'SMEs and corporations with internal encoding clerks/admin staff that need professional accounting review and disciplined period-end closing.',
    howBossAssists:
      'BOSS. reviews raw encodings, prepares adjusting and closing journal entries, validates trial balance integrity, and locks clean monthly and annual periods.',
    typicalDeliverables: [
      'Standardized recurring and adjusting Journal Entries (accruals, deferrals, depreciation, tax provisions)',
      'General Ledger scrutiny for misclassified expenses or abnormal account balances',
      'Reviewed Working Trial Balance (unadjusted, adjusting entries, and adjusted columns)',
      'Structured Month-End and Year-End Closing Checklists and cutoff schedules',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'reading-income-statement-balance-sheet-cash-flow',
      'monthly-bookkeeping-vs-tax-season-cramming',
    ],
    relatedBirForms: ['1701', '1702-RT'],
  },
  {
    id: 'svc-08-ar-ap-monitoring',
    slug: 'accounts-receivable-payable-management',
    index: '08',
    pillarId: 'accounting-bookkeeping',
    pillarLabel: 'Accounting & Bookkeeping',
    title: 'Accounts Receivable & Accounts Payable Monitoring',
    whatItIs:
      'Structured tracking of customer billings, collections, credit terms, supplier invoices, withholding deductions, and scheduled payment runs.',
    whyItMatters:
      'Under EOPT and RR No. 6-2026 invoicing rules, unmonitored receivables trap working capital while unverified supplier payables lead to duplicate payments or disallowed input VAT/expenses.',
    whoNeedsIt:
      'B2B service firms, contractors, agencies, distributors, and multi-supplier operations managing credit terms.',
    howBossAssists:
      'We maintain aging trackers for both receivables and payables, verify supplier invoice compliance and EWT rates prior to disbursement, and track incoming client Form 2307 certificates.',
    typicalDeliverables: [
      'Accounts Receivable Aging Report (current, 30, 60, 90+ days past due) and SOA tracking',
      'Client BIR Form 2307 collection tracker matched against settled invoices',
      'Accounts Payable Aging Schedule and weekly/semi-monthly payment run summaries',
      'Three-way vendor voucher verification checklist (PO, delivery/completion, and EOPT-compliant Invoice)',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'bir-rr-6-2026-cwt-invoice-line-item-guide',
      'expanded-withholding-tax-ewt-form-2307-essentials',
    ],
    relatedBirForms: ['2307', '0619-E', '1601-EQ'],
  },

  // =========================================================================
  // 3. RECONCILIATION SERVICES (09 - 12)
  // =========================================================================
  {
    id: 'svc-09-bank-cash-reconciliation',
    slug: 'bank-and-cash-reconciliations',
    index: '09',
    pillarId: 'reconciliation-services',
    pillarLabel: 'Reconciliation Services',
    title: 'Bank & Cash Reconciliations (Including POS & Digital Wallets)',
    whatItIs:
      'Transaction-level reconciliation comparing book cash ledgers against bank statements, revolving petty cash counts, credit-card terminals, e-wallets (GCash/Maya), and e-commerce marketplace payouts.',
    whyItMatters:
      'Merchant MDR fees, gateway holds, bank charges, uncleared checks, and unrecorded transfers cause book cash to diverge from actual spendable funds.',
    whoNeedsIt:
      'Retailers, F&B groups, clinics, online merchants, and businesses operating multiple bank and digital collection channels.',
    howBossAssists:
      'BOSS. matches inflows and outflows line by line each month, isolates deposits in transit and outstanding checks, and prepares clean adjusting entries.',
    typicalDeliverables: [
      'Monthly Bank Reconciliation Statements per checking, savings, and foreign-currency account',
      'POS terminal, payment gateway, and marketplace settlement net-payout reconciliations',
      'Imprest petty cash replenishment and cash-on-hand count variance schedules',
      'Schedule of stale checks, unrecorded bank memos, and reconciling adjustments',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'monthly-bookkeeping-vs-tax-season-cramming',
      'practical-internal-controls-growing-philippine-smes',
    ],
    relatedBirForms: [],
  },
  {
    id: 'svc-10-gl-balance-sheet-reconciliation',
    slug: 'general-ledger-balance-sheet-reconciliations',
    index: '10',
    pillarId: 'reconciliation-services',
    pillarLabel: 'Reconciliation Services',
    title: 'General Ledger & Balance Sheet Account Reconciliations',
    whatItIs:
      'Detailed substantiation of every Balance Sheet control account—prepayments, advances, fixed assets, deferred/input VAT, creditable tax assets, loans, and accrued liabilities—against subsidiary schedules.',
    whyItMatters:
      'Unreconciled Balance Sheet accounts accumulate historical errors that distort net worth and delay annual financial statement audits.',
    whoNeedsIt:
      'Corporations preparing for external CPA audits, companies cleaning up historical balance sheets, and enterprises monitoring asset/liability accuracy.',
    howBossAssists:
      'We build subsidiary schedules for every asset and liability line item, clear stale clearing accounts, and reconcile subsidiary totals to the General Ledger.',
    typicalDeliverables: [
      'Subsidiary schedules for Prepaid Expenses, Security Deposits, and Advances to Officers/Employees',
      'Fixed Asset Lapsing Schedule reconciling cost, additions, disposals, and accumulated depreciation',
      'Loan principal vs. interest amortization and accrued expense tie-out schedules',
      'Creditable Withholding Tax (Form 2307) asset rollforward and Input VAT carryforward reconciliations',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'reading-income-statement-balance-sheet-cash-flow',
    ],
    relatedBirForms: ['2307', '1702-RT'],
  },
  {
    id: 'svc-11-ar-ap-intercompany-reconciliation',
    slug: 'ar-ap-and-intercompany-reconciliations',
    index: '11',
    pillarId: 'reconciliation-services',
    pillarLabel: 'Reconciliation Services',
    title:
      'Accounts Receivable, Accounts Payable & Intercompany Reconciliations',
    whatItIs:
      'Counterparty and inter-entity reconciliation aligning customer SOA balances, vendor statements, and Due-To / Due-From intercompany or multi-branch accounts.',
    whyItMatters:
      'Founders operating sister companies, franchises, or multiple branches frequently experience out-of-balance intercompany advances and disputed supplier/customer ledgers.',
    whoNeedsIt:
      'Multi-entity business groups, sister companies, multi-branch operations, and high-volume B2B enterprises.',
    howBossAssists:
      'BOSS. reconciles subsidiary AR/AP ledgers to General Ledger control accounts, compares vendor statements, and balances reciprocal intercompany Due-To and Due-From ledgers.',
    typicalDeliverables: [
      'AR Subsidiary Ledger vs. General Ledger control account reconciliation',
      'Supplier Statement of Account (SOA) vs. AP Ledger reconciliation to uncover unrecorded bills or unapplied credits',
      'Reciprocal Intercompany / Affiliate Due-To and Due-From reconciliation matrix',
      'Proposed clearing and reclassifying journal entries supported by counterparty documentation',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'reading-income-statement-balance-sheet-cash-flow',
      'practical-internal-controls-growing-philippine-smes',
    ],
    relatedBirForms: ['1702-RT'],
  },
  {
    id: 'svc-12-tax-account-reconciliation',
    slug: 'tax-account-reconciliations-compliance-reviews',
    index: '12',
    pillarId: 'reconciliation-services',
    pillarLabel: 'Reconciliation Services',
    title: 'Tax Account Reconciliation & BIR Compliance Review',
    whatItIs:
      'Comprehensive reconciliation of tax payable/asset ledger accounts and three-way tie-outs across Financial Statements, VAT/Percentage Tax returns, Withholding returns, and Alphalists.',
    whyItMatters:
      'Under the BIR’s system-assisted audit regime (RMO No. 22-2026), discrepancies across filed returns or unresolved RDO open cases surface during tax clearance applications or eLA selection.',
    whoNeedsIt:
      'Contractors applying for PhilGEPS/corporate Tax Clearance, companies transitioning accounting providers, and businesses seeking a proactive tax health check.',
    howBossAssists:
      'We tie out your Trial Balance against all filed BIR returns and electronic attachments, identify variances early, and organize proof-of-filing archives.',
    typicalDeliverables: [
      'COR (Form 2303) registered tax-type vs. historical filed-returns completeness matrix',
      'Three-way tie-out: Revenue per FS/ITR vs. Form 2550Q/2551Q, and Expenses per FS vs. Form 1601-EQ/1604-E & Form 1601-C/1604-C',
      'Tax Payable and Creditable Tax Asset General Ledger reconciliation',
      'Prioritized Tax Compliance Gap Report and permanent tax binder organization',
    ],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
    relatedInsightSlugs: [
      'tax-health-check-resolving-bir-open-cases-early',
      'expanded-withholding-tax-ewt-form-2307-essentials',
    ],
    relatedBirForms: ['2303', '2550Q', '1601-EQ', '1601-C', '1702-RT'],
  },

  // =========================================================================
  // 4. PAYROLL & EMPLOYER COMPLIANCE (13 - 15)
  // =========================================================================
  {
    id: 'svc-13-payroll-payslip-reconciliation',
    slug: 'payroll-preparation-and-processing',
    index: '13',
    pillarId: 'payroll-employer',
    pillarLabel: 'Payroll & Employer Compliance',
    title: 'Payroll Preparation, Payslip Generation & Payroll Reconciliation',
    whatItIs:
      'Confidential semi-monthly or monthly payroll computation, itemized employee payslip preparation, bank payout summaries, and payroll-to-ledger reconciliation.',
    whyItMatters:
      'Accurate application of regional wage orders (such as NCR-28 in Metro Manila), DOLE holiday/overtime multipliers, and accounting payroll tie-outs prevents employee disputes and payroll leakage.',
    whoNeedsIt:
      'Startups, SMEs, clinics, agencies, and growing corporations seeking accurate, confidential outsourced payroll processing.',
    howBossAssists:
      'BOSS. computes gross-to-net pay from your approved attendance logs, prepares confidential payslips and payout files, and reconciles payroll registers to your General Ledger.',
    typicalDeliverables: [
      'Semi-monthly or monthly Payroll Register (basic pay, OT, night shift differential, holiday/rest-day premiums, leaves, tardiness/undertime, loans)',
      'Confidential itemized employee payslips and bank batch-disbursement schedules',
      'Final pay computation for resigning/separating employees',
      'Monthly Payroll Reconciliation tying payroll registers to disbursed cash and GL salary/benefit accounts',
    ],
    ctaLabel: 'Request Payroll Assistance',
    relatedInsightSlugs: [
      'philippine-payroll-statutory-contributions-bir-2316-guide',
    ],
    relatedBirForms: ['1601-C', '2316'],
  },
  {
    id: 'svc-14-sss-philhealth-pagibig-employer',
    slug: 'statutory-payroll-deductions-remittance',
    index: '14',
    pillarId: 'payroll-employer',
    pillarLabel: 'Payroll & Employer Compliance',
    title:
      'SSS, PhilHealth & Pag-IBIG Contribution & Employee Statutory Reporting Support',
    whatItIs:
      'Monthly employer/employee contribution computation, portal upload/PRN generation support, loan deduction schedules, and employee statutory onboarding/separation reporting.',
    whyItMatters:
      'Applying current contribution brackets (15% SSS rate up to ₱35k MSC, 5% PhilHealth premium, ₱10k Pag-IBIG MFS cap) and remitting on time protects employee benefits and shields employers from statutory surcharges.',
    whoNeedsIt:
      'All Philippine employers managing monthly SSS, PhilHealth, Pag-IBIG, and DOLE establishment reporting obligations.',
    howBossAssists:
      'We prepare monthly contribution and loan remittance schedules, generate portal billing/PRN summaries for employer payment approval, and assist with statutory employee updates.',
    typicalDeliverables: [
      'Monthly SSS (regular SS, EC, and WISP/Pension Booster), PhilHealth, and Pag-IBIG contribution schedules',
      'My.SSS PRN, PhilHealth EPRS, and Virtual Pag-IBIG remittance schedule preparation',
      'SSS and Pag-IBIG employee salary/calamity loan deduction and remittance tracking',
      'New-hire and separated-employee statutory reporting support (plus PhilHealth Circular 2026-0001 arrears reconciliation if needed)',
    ],
    ctaLabel: 'Request Payroll Assistance',
    relatedInsightSlugs: [
      'philippine-payroll-statutory-contributions-bir-2316-guide',
    ],
    relatedBirForms: ['1601-C', '2316'],
  },
  {
    id: 'svc-15-compensation-tax-13th-month-annualization',
    slug: 'compensation-withholding-tax-compliance',
    index: '15',
    pillarId: 'payroll-employer',
    pillarLabel: 'Payroll & Employer Compliance',
    title:
      'Compensation Withholding Tax, 13th-Month Pay & Year-End Payroll Annualization',
    whatItIs:
      'End-to-end employer tax compliance covering monthly BIR Form 1601-C filings, statutory 13th-month pay computation (PD No. 851), year-end tax annualization, Form 1604-C alphalists, and employee Form 2316 certificates.',
    whyItMatters:
      'Proper segregation of MWE pay, de minimis benefits, and the ₱90,000 non-taxable 13th-month/benefits ceiling prevents year-end tax shocks and ensures Form 1604-C reconciles cleanly.',
    whoNeedsIt:
      'Every BIR-registered employer—whether staff fall in taxable compensation brackets or qualify under zero-withholding / Minimum Wage Earner rules.',
    howBossAssists:
      'BOSS. prepares monthly Form 1601-C returns, computes compliant 13th-month pay ahead of December 24, runs full-year tax annualization, and generates Form 1604-C and Form 2316 packages.',
    typicalDeliverables: [
      'Monthly BIR Form 1601-C computation and electronic filing support',
      'PD No. 851 13th-Month Pay computation schedule and DOLE Establishment Compliance Report data',
      'Year-end Compensation Tax Annualization reconciling Jan–Dec cumulative tax due vs. tax withheld',
      'BIR Form 1604-C with validated Annual Alphalist of Employees and employee BIR Form 2316 certificates',
    ],
    ctaLabel: 'Request Payroll Assistance',
    relatedInsightSlugs: [
      'philippine-payroll-statutory-contributions-bir-2316-guide',
    ],
    relatedBirForms: ['1601-C', '1604-C', '2316'],
  },

  // =========================================================================
  // 5. TAX COMPLIANCE (16 - 20)
  // =========================================================================
  {
    id: 'svc-16-vat-percentage-tax',
    slug: 'vat-and-percentage-tax-compliance',
    index: '16',
    pillarId: 'tax-compliance',
    pillarLabel: 'Tax Compliance',
    title: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    whatItIs:
      'Quarterly Value-Added Tax and Percentage Tax computation, invoice substantiation review, Summary List of Sales and Purchases (SLSP) preparation, and electronic return filing assistance.',
    whyItMatters:
      'Under EOPT accrual invoicing rules (RR No. 7-2024 & RR No. 6-2026), claiming input VAT on non-compliant receipts or missing SLSP attachments leads directly to tax disallowances.',
    whoNeedsIt:
      'VAT-registered enterprises, exporters/zero-rated suppliers, and Non-VAT businesses subject to quarterly percentage tax.',
    howBossAssists:
      'We verify sales and purchase invoices against current BIR rules, compute output/input VAT or percentage tax accurately, and prepare Form 2550Q/2551Q and SLSP files ahead of the 25th-day deadline.',
    typicalDeliverables: [
      'Quarterly VAT Return (BIR Form 2550Q) or Quarterly Percentage Tax Return (BIR Form 2551Q) preparation (plus optional Form 2550M tracking if elected under RMC 52-2023)',
      'Input VAT invoice compliance check under RR No. 7-2024 & RR No. 6-2026',
      'Electronic Summary Lists of Sales, Purchases, and Importations (SLSP / Relief `.DAT` validation)',
      'Cumulative gross sales monitoring against the ₱3,000,000 statutory VAT threshold',
    ],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
    relatedInsightSlugs: [
      'quarterly-vat-2550q-and-discontinuation-of-2550m',
      'eopt-act-invoicing-and-registration-reforms-guide',
    ],
    relatedBirForms: ['2550Q', '2550M', '2551Q', 'QAP / SAWT / SLSP'],
  },
  {
    id: 'svc-17-ewt-fwt-compliance',
    slug: 'expanded-final-withholding-tax-compliance',
    index: '17',
    pillarId: 'tax-compliance',
    pillarLabel: 'Tax Compliance',
    title: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    whatItIs:
      'ATC rate evaluation on supplier/payee disbursements, monthly remittance preparation (0619-E / 0619-F), quarterly withholding returns (1601-EQ / 1601-FQ), and issuance of Form 2307 / 2306 certificates.',
    whyItMatters:
      'Under-withholding on rentals, professional fees, contractors, or Top Withholding Agent purchases exposes businesses to deficiency assessments and expense timing issues.',
    whoNeedsIt:
      'Businesses paying commercial rent, engaging professionals/contractors, designated as Top Withholding Agents, or remitting final tax on dividends/royalties.',
    howBossAssists:
      'BOSS. maps applicable ATC rates to your vendor payments, prepares monthly and quarterly withholding filings reconciled to your GL, and generates compliant Form 2307/2306 certificates.',
    typicalDeliverables: [
      'Vendor disbursement EWT / FWT rate schedule and RR No. 6-2026 invoice CWT line verification',
      'Monthly Remittance Forms (BIR Form 0619-E and 0619-F) for Months 1 and 2 of each quarter',
      'Quarterly Remittance Returns (BIR Form 1601-EQ and 1601-FQ) reconciled to expense accounts',
      'Quarterly BIR Form 2307 and Form 2306 tax certificates for payees, plus Annual Form 1604-E / 1604-F',
    ],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
    relatedInsightSlugs: [
      'bir-rr-6-2026-cwt-invoice-line-item-guide',
      'expanded-withholding-tax-ewt-form-2307-essentials',
    ],
    relatedBirForms: ['0619-E', '1601-EQ', '0619-F', '1601-FQ', '2307', '2306'],
  },
  {
    id: 'svc-18-income-tax-preparation',
    slug: 'individual-corporate-income-tax-preparation',
    index: '18',
    pillarId: 'tax-compliance',
    pillarLabel: 'Tax Compliance',
    title: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    whatItIs:
      'Quarterly and annual income tax computation, statutory regime evaluation (Itemized Deductions, 40% OSD, 8% Flat Rate for eligible individuals, or CREATE / CREATE MORE corporate rates), Form 2307 tax credit scheduling, and eAFS submission packaging.',
    whyItMatters:
      'Accurate book-to-tax reconciliations and complete SAWT / Form 2307 substantiation protect legitimate deductions and prevent forfeited tax credits.',
    whoNeedsIt:
      'Self-employed professionals, doctors, freelancers, sole proprietors, mixed-income earners, partnerships, OPCs, regular corporations, and PEZA/BOI/exempt entities.',
    howBossAssists:
      'We compute quarterly (1701Q / 1702Q) and annual (1701 / 1701A / 1702-RT / 1702-EX / 1702-MX) returns from reconciled ledgers and assemble complete eAFS attachment bundles.',
    typicalDeliverables: [
      'Quarterly Income Tax Returns (BIR Form 1701Q and Form 1702Q)',
      'Annual Income Tax Returns (BIR Form 1701, 1701A, 1700, 1702-RT, 1702-EX, or 1702-MX)',
      'Statutory tax-option comparison schedule (e.g., Itemized vs. OSD vs. 8% for eligible Non-VAT individuals)',
      'Summary of claimed Form 2307 credits and eAFS PDF attachment assembly',
    ],
    scopeBoundaryNote:
      'Tax option illustrations apply statutory rules to client data and do not guarantee specific tax savings. Statutory Audited Financial Statements, when required by threshold, are audited by an independent BOA-accredited CPA.',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
    relatedInsightSlugs: [
      'expanded-withholding-tax-ewt-form-2307-essentials',
      'reading-income-statement-balance-sheet-cash-flow',
    ],
    relatedBirForms: ['1701Q', '1701', '1701A', '1702Q', '1702-RT', '1702-EX', '1702-MX'],
  },
  {
    id: 'svc-19-bir-alphalists-attachments',
    slug: 'bir-alphalists-sawt-qap-attachments',
    index: '19',
    pillarId: 'tax-compliance',
    pillarLabel: 'Tax Compliance',
    title: 'BIR Alphalists, SAWT, QAP, SLSP & Electronic Data Attachments',
    whatItIs:
      'Preparation, TIN/name formatting, official BIR validation-module testing, and electronic submission tracking for `.DAT` tax return attachments and eAFS packages.',
    whyItMatters:
      'Filing a parent return without a validated QAP, SAWT, SLSP, or Annual Alphalist leaves compliance incomplete and risks disallowance of claimed Form 2307 credits.',
    whoNeedsIt:
      'Withholding agents, VAT-registered taxpayers, and B2B businesses claiming creditable withholding taxes.',
    howBossAssists:
      'BOSS. encodes payee/customer/supplier schedules, validates `.DAT` files using current BIR Alphalist Data Entry and Relief modules, and archives official BIR validation confirmations.',
    typicalDeliverables: [
      'Quarterly Alphalist of Payees (QAP) for Form 1601-EQ / 1601-FQ',
      'Summary Alphalist of Withholding Taxes (SAWT) supporting ITR, VAT, and Percentage Tax credit claims',
      'Annual Alphalists for Form 1604-C, Form 1604-E, and Form 1604-F',
      'Quarterly VAT Summary Lists of Sales and Purchases (SLSP) and eAFS PDF submission organization',
    ],
    ctaLabel: 'Discuss Your Tax Compliance Needs',
    relatedInsightSlugs: [
      'expanded-withholding-tax-ewt-form-2307-essentials',
      'quarterly-vat-2550q-and-discontinuation-of-2550m',
    ],
    relatedBirForms: ['QAP / SAWT / SLSP', '1604-C', '1604-E / 1604-F'],
  },
  {
    id: 'svc-20-bir-assessment-documentation',
    slug: 'bir-assessment-documentation-assistance',
    index: '20',
    pillarId: 'tax-compliance',
    pillarLabel: 'Tax Compliance',
    title: 'BIR Assessment Documentation & Reconciliation Assistance',
    whatItIs:
      'Factual accounting reconciliation, source-document indexing, and schedule preparation for businesses responding to a BIR Electronic Letter of Authority (eLA), Notice of Discrepancy (NOD), or open-case notice.',
    whyItMatters:
      'Under consolidated BIR audit timelines (RMO No. 22-2026), disorganized vouchers and unreconciled alleged discrepancies weaken a taxpayer’s factual defense.',
    whoNeedsIt:
      'Taxpayers organizing accounting schedules and documentary substantiation for an ongoing BIR verification or coordinating with tax legal counsel.',
    howBossAssists:
      'We index books, invoices, alphalists, and Form 2307 certificates item-by-item against revenue officer checklists and prepare accounting tie-out schedules.',
    typicalDeliverables: [
      'Line-by-line accounting reconciliation of alleged sales, input VAT, or withholding tax discrepancies',
      'Indexed documentary binders cross-referencing general ledger entries to compliant primary invoices and tax returns',
      'Working-paper support coordinated with your external tax counsel or accredited tax practitioner',
    ],
    scopeBoundaryNote:
      'BOSS. provides accounting reconciliation and documentary substantiation support; formal legal protest advocacy before the BIR or Court of Tax Appeals is performed by licensed legal counsel.',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
    relatedInsightSlugs: [
      'tax-health-check-resolving-bir-open-cases-early',
    ],
    relatedBirForms: ['2550Q', '1601-EQ', '1702-RT', '2307'],
  },

  // =========================================================================
  // 6. FINANCIAL REPORTING & ADVISORY (21 - 24)
  // =========================================================================
  {
    id: 'svc-21-financial-statements-management-reporting',
    slug: 'financial-statement-management-reporting',
    index: '21',
    pillarId: 'reporting-advisory',
    pillarLabel: 'Financial Reporting & Advisory',
    title: 'Financial Statement Preparation & Management Reporting',
    whatItIs:
      'Compilation of PFRS-aligned Financial Statements (Balance Sheet, Income Statement, Cash Flows, Changes in Equity, and Notes) alongside plain-language monthly management packs.',
    whyItMatters:
      'Bank balances alone cannot reveal gross margin erosion or trapped working capital—clear financial statements turn historical data into management visibility.',
    whoNeedsIt:
      'Founders, boards, corporations preparing annual BIR/SEC filings, and SMEs applying for commercial bank credit lines.',
    howBossAssists:
      'BOSS. compiles structured financial statements from reconciled trial balances and walks leadership through margins, liquidity, and cost drivers in clear business terms.',
    typicalDeliverables: [
      'Statement of Financial Position, Comprehensive Income, Changes in Equity, Cash Flows, and Notes',
      'Monthly or Quarterly Management Reporting Pack with executive variance commentary',
      'Draft annual Financial Statements and lead schedules ready for independent external CPA audit',
    ],
    scopeBoundaryNote:
      'Management compilations prepared by BOSS. are distinct from an independent statutory CPA audit opinion, which is issued by an independent BOA-accredited external auditor.',
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'reading-income-statement-balance-sheet-cash-flow',
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ],
    relatedBirForms: ['1701', '1702-RT'],
  },
  {
    id: 'svc-22-budgeting-forecasting-performance-analysis',
    slug: 'budgeting-forecasting-business-performance-analysis',
    index: '22',
    pillarId: 'reporting-advisory',
    pillarLabel: 'Financial Reporting & Advisory',
    title:
      'Budgeting, Cash-Flow Forecasting & Business Performance Analysis',
    whatItIs:
      'Forward-looking financial planning covering annual operating budgets, rolling 13-week/12-month cash-flow forecasts, unit-economics pricing reviews, and KPI profitability analysis.',
    whyItMatters:
      'Growing sales without cash-flow forecasting and product/branch margin analysis frequently leads to working-capital crunches during inventory expansion or hiring.',
    whoNeedsIt:
      'Scaling SMEs, multi-branch retail/F&B/clinic operators, project-based agencies, and founders planning capital expenditures or pricing updates.',
    howBossAssists:
      'We build practical, driver-based budget and cash-flow models anchored on your actual historical margins and track budget-vs.-actual performance periodically.',
    typicalDeliverables: [
      'Annual Operating Budget and rolling Cash-Flow Forecast model (including quarterly tax & 13th-month cash reserves)',
      'Product, service-line, or branch profitability and gross-margin contribution analysis',
      'Breakeven volume, pricing sensitivity, and overhead efficiency reviews',
      'Budget-vs.-Actual variance analysis reports for leadership meetings',
    ],
    ctaLabel: "Let's Talk Business",
    relatedInsightSlugs: [
      'reading-income-statement-balance-sheet-cash-flow',
    ],
    relatedBirForms: [],
  },
  {
    id: 'svc-23-accounting-systems-implementation',
    slug: 'accounting-systems-setup-training',
    index: '23',
    pillarId: 'reporting-advisory',
    pillarLabel: 'Financial Reporting & Advisory',
    title: 'Accounting System Implementation, Migration & Team Training',
    whatItIs:
      'Selection orientation, Philippine Chart of Accounts & tax-code setup, clean opening-balance migration, and hands-on staff training for modern cloud or desktop accounting software.',
    whyItMatters:
      'Implementing accounting software without configuring Philippine VAT/EWT structures (including RR No. 6-2026 CWT invoice tracking) and opening balances creates "garbage-in, garbage-out" reports.',
    whoNeedsIt:
      'Businesses moving off manual spreadsheets, multi-location teams adopting cloud accounting, and companies standardizing finance workflows.',
    howBossAssists:
      'BOSS. configures your Chart of Accounts, cost centers, and tax codes, migrates reconciled opening balances, aligns BIR books/system considerations, and trains your team.',
    typicalDeliverables: [
      'Tailored Philippine Chart of Accounts, cost-center structure, and VAT/withholding tax configuration',
      'Migration of reconciled opening Trial Balance, open customer invoices, and unpaid vendor bills',
      'Guidance on BIR Books of Accounts / ORUS / CAS registration considerations',
      'Role-based staff training sessions and step-by-step accounting workflow SOPs',
    ],
    ctaLabel: 'Get Accounting Support',
    relatedInsightSlugs: [
      'bir-rr-6-2026-cwt-invoice-line-item-guide',
      'practical-internal-controls-growing-philippine-smes',
    ],
    relatedBirForms: ['1905'],
  },
  {
    id: 'svc-24-internal-controls-process-audit-prep',
    slug: 'internal-control-reviews-process-improvement',
    index: '24',
    pillarId: 'reporting-advisory',
    pillarLabel: 'Financial Reporting & Advisory',
    title:
      'Internal Control Review, Process Improvement & External Audit Preparation Support',
    whatItIs:
      'Operational workflow diagnostics strengthening billing, collection, purchasing, disbursement, and inventory controls—paired with Prepared-by-Client (PBC) audit readiness support.',
    whyItMatters:
      'Right-sized internal controls prevent cash leakage and error before they happen, while organized PBC audit schedules keep annual statutory audits smooth and on time.',
    whoNeedsIt:
      'Founder-led companies delegating financial authority to managers, growing multi-branch SMEs, and corporations preparing for annual external CPA audits.',
    howBossAssists:
      'We evaluate segregation of duties, standardize approval vouchers and SOPs, and assemble complete PBC working-paper schedules for your independent external auditor.',
    typicalDeliverables: [
      'Diagnostic walkthrough of order-to-cash, procure-to-pay, petty cash, payroll, and inventory custody processes',
      'Approval authority matrix and standardized PO, Disbursement Voucher, and Billing SOP templates',
      'External Audit Readiness (PBC) pack: reconciled trial balance, account lead schedules, aging schedules, and indexed voucher samples',
    ],
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
    relatedInsightSlugs: [
      'practical-internal-controls-growing-philippine-smes',
      'sec-2026-afs-gis-efast-and-harbor-beneficial-ownership-guide',
    ],
    relatedBirForms: ['1702-RT'],
  },
];

const LEGACY_TO_EXPANDED_SLUG: Record<string, string> = {
  'business-registration': 'business-registration-dti-sec-bir-lgu',
  'bir-tax-compliance': 'vat-and-percentage-tax-compliance',
  'bookkeeping-accounting': 'monthly-bookkeeping-accounting-maintenance',
  'financial-reporting': 'financial-statement-management-reporting',
  'smart-accounting-systems': 'accounting-systems-setup-training',
  'business-advisory': 'internal-control-reviews-process-improvement',
  'audit-preparation-bir-assessment-support':
    'bir-assessment-documentation-assistance',
};

export function findExpandedService(
  idOrSlug: string
): ExpandedServiceItem | undefined {
  const mappedSlug = LEGACY_TO_EXPANDED_SLUG[idOrSlug] || idOrSlug;
  return EXPANDED_SERVICES.find(
    (s) => s.slug === mappedSlug || s.id === mappedSlug
  );
}
