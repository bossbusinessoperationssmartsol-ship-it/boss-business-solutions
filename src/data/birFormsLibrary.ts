import { ContextualInquiryCta } from './expandedServices';

export type BirFormSection =
  | 'VAT'
  | 'Percentage Tax'
  | 'Expanded Withholding Tax'
  | 'Final Withholding Tax'
  | 'Compensation Tax'
  | 'Individual Income Tax'
  | 'Corporate Income Tax'
  | 'Tax Certificates'
  | 'Payment Forms'
  | 'Alphalists and Attachments'
  | 'Business Registration and Closure';

export const BIR_FORM_SECTIONS: BirFormSection[] = [
  'VAT',
  'Percentage Tax',
  'Expanded Withholding Tax',
  'Final Withholding Tax',
  'Compensation Tax',
  'Individual Income Tax',
  'Corporate Income Tax',
  'Tax Certificates',
  'Payment Forms',
  'Alphalists and Attachments',
  'Business Registration and Closure',
];

export type BirFormRegulatoryStatus =
  | 'Active'
  | 'Amended / EOPT Updated'
  | 'Discontinued Mandatory Filing';

export interface BirFormEntry {
  formNumber: string;
  officialName: string;
  section: BirFormSection;
  status: BirFormRegulatoryStatus;
  regulatoryAlert?: string;
  usedFor: string;
  whoGenerallyNeedsIt: string;
  filingFrequency: string;
  deadlineSummary: string;
  deadlineVerificationNote?: string;
  requiredAttachments: string[];
  commonMistakes: string[];
  officialBirReferenceUrl: string;
  lastVerifiedDate: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  ctaLabel: ContextualInquiryCta;
}

export const BIR_FORMS_LIBRARY: BirFormEntry[] = [
  // =========================================================================
  // 1. VAT
  // =========================================================================
  {
    formNumber: '2550Q',
    officialName: 'Quarterly Value-Added Tax (VAT) Return',
    section: 'VAT',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Current mandatory VAT return following discontinuation of mandatory monthly Form 2550M (RMC No. 5-2023) and updated for Invoice-based VAT recognition under RA No. 11976 (EOPT Act), RR No. 7-2024, and RR No. 6-2026.',
    usedFor:
      'Declaration and payment of quarterly output Value-Added Tax on gross sales of goods, properties, and services less allowable creditable input VAT.',
    whoGenerallyNeedsIt:
      'All VAT-registered individuals, sole proprietors, partnerships, One Person Corporations (OPCs), cooperatives (where non-exempt), and corporations.',
    filingFrequency: 'Quarterly (every taxable quarter)',
    deadlineSummary:
      'Verified statutory deadline: Within twenty-five (25) days following the close of each taxable quarter (Calendar quarters: April 25, July 25, October 25, and January 25).',
    deadlineVerificationNote:
      'Fiscal-year taxpayers count 25 days from the close of their registered fiscal quarter. eFPS filers should verify applicable industry group electronic filing schedules.',
    requiredAttachments: [
      'Quarterly Summary Lists of Sales, Purchases, and Importations (SLSP / Relief `.DAT` file submitted electronically)',
      'Summary Alphalist of Withholding Taxes (SAWT), if claiming creditable VAT withheld',
      'Copies of BIR Form 2307 / 2306 certificates supporting claimed VAT credits (via eAFS where applicable)',
    ],
    commonMistakes: [
      'Claiming input VAT using supplementary Official Receipts instead of compliant EOPT Sales/Service Invoices.',
      'Filing Form 2550Q on time while forgetting to submit the electronic SLSP `.DAT` file.',
      'Forgetting to credit optional monthly Form 2550M installment payments made during Months 1 or 2.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'vat-and-percentage-tax-compliance',
    relatedServiceTitle: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '2550M',
    officialName: 'Monthly Value-Added Tax Declaration (Discontinued as Mandatory)',
    section: 'VAT',
    status: 'Discontinued Mandatory Filing',
    regulatoryAlert:
      'DISCONTINUED AS MANDATORY BEGINNING JANUARY 1, 2023 (Section 37, RA No. 10963 / TRAIN Law & BIR RMC No. 5-2023). Per RMC No. 52-2023, VAT-registered taxpayers may still use Form 2550M strictly on an OPTIONAL basis for Months 1 and 2 cash-flow payments, with no monthly late-filing penalty—provided Quarterly Form 2550Q is filed on time.',
    usedFor:
      'Historically used for mandatory monthly VAT declarations prior to 2023; currently used ONLY if a VAT taxpayer voluntarily elects optional monthly VAT installment remittances under RMC No. 52-2023 (or when settling pre-2023 historical open cases).',
    whoGenerallyNeedsIt:
      'Not required for routine mandatory filing. Optional only for VAT-registered businesses preferring monthly VAT cash management, or taxpayers resolving pre-2023 open cases.',
    filingFrequency: 'Discontinued as mandatory (Optional only for Months 1 & 2 of a quarter)',
    deadlineSummary:
      'No mandatory statutory deadline for transactions from January 1, 2023 onward (per RMC No. 5-2023 & RMC No. 52-2023). Quarterly Form 2550Q remains mandatory within 25 days after quarter-end.',
    requiredAttachments: [
      'None required for optional monthly remittance; full SLSP and credit attachments accompany the mandatory Quarterly Form 2550Q.',
    ],
    commonMistakes: [
      'Assuming optional filing of 2550M replaces the mandatory requirement to file Quarterly Form 2550Q.',
      'Following outdated pre-2023 tax calendars that still list Form 2550M as a mandatory 20th-of-the-month obligation.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'vat-and-percentage-tax-compliance',
    relatedServiceTitle: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },

  // =========================================================================
  // 2. PERCENTAGE TAX
  // =========================================================================
  {
    formNumber: '2551Q',
    officialName: 'Quarterly Percentage Tax Return',
    section: 'Percentage Tax',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Updated under EOPT rules to align gross sales recognition and venue flexibility. Standard non-VAT percentage tax returned to 3% starting July 1, 2023 following expiration of the temporary CREATE Act 1% rate.',
    usedFor:
      'Reporting and payment of quarterly percentage tax on gross sales/receipts of Non-VAT taxpayers and specific industries subject to Other Percentage Taxes under Title V of the NIRC.',
    whoGenerallyNeedsIt:
      'Non-VAT registered sole proprietors, professionals, OPCs, partnerships, and corporations whose gross annual sales do not exceed PHP 3,000,000 (excluding eligible individuals who validly elected the 8% flat income tax rate in lieu of graduated income tax and percentage tax), plus entities subject to specific industry percentage taxes.',
    filingFrequency: 'Quarterly',
    deadlineSummary:
      'Verified statutory deadline: Within twenty-five (25) days after the end of each taxable quarter (Calendar quarters: April 25, July 25, October 25, and January 25).',
    requiredAttachments: [
      'Summary Alphalist of Withholding Taxes (SAWT) and BIR Form 2307/2306 copies, if claiming creditable percentage tax withheld.',
    ],
    commonMistakes: [
      'Applying the expired temporary 1% CREATE percentage tax rate instead of the active statutory 3% rate.',
      'Filing Form 2551Q despite having validly elected the 8% flat income tax rate—or conversely, failing to file 2551Q when an 8% election was not timely made in Q1.',
      'Failing to monitor cumulative gross sales crossing the PHP 3,000,000 VAT registration threshold.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'vat-and-percentage-tax-compliance',
    relatedServiceTitle: 'VAT Returns (Form 2550Q) & Percentage Tax Returns (Form 2551Q)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // 3. EXPANDED WITHHOLDING TAX
  // =========================================================================
  {
    formNumber: '0619-E',
    officialName: 'Monthly Remittance Form of Creditable Income Taxes Withheld (Expanded)',
    section: 'Expanded Withholding Tax',
    status: 'Active',
    usedFor:
      'Remitting Expanded Withholding Tax (EWT) deducted from supplier/payee payments (such as rentals, professional fees, contractors, and Top Withholding Agent purchases) for the FIRST TWO (2) months of every taxable quarter.',
    whoGenerallyNeedsIt:
      'Businesses, professionals, partnerships, and corporations registered as Expanded Withholding Tax agents on their BIR Form 2303 (COR).',
    filingFrequency: 'Monthly — for Month 1 and Month 2 of each quarter (Month 3 is reported on Form 1601-EQ)',
    deadlineSummary:
      'Verified manual/eBIRForms deadline: On or before the 10th day of the month following the month in which withholding was made.',
    deadlineVerificationNote:
      'For eFPS-enrolled taxpayers, staggered filing deadlines (between the 11th and 15th day of the following month) depend on your assigned eFPS industry group—verify your specific eFPS group schedule.',
    requiredAttachments: [
      'None attached to the monthly remittance form; payee details are consolidated in the quarterly QAP with Form 1601-EQ.',
    ],
    commonMistakes: [
      'Filing Form 0619-E for the 3rd month of a quarter (March, June, September, December) instead of consolidating on Form 1601-EQ.',
      'Forgetting to file a zero/no-transaction remittance when EWT is registered on your COR.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1601-EQ',
    officialName: 'Quarterly Remittance Return of Creditable Income Taxes Withheld (Expanded)',
    section: 'Expanded Withholding Tax',
    status: 'Active',
    usedFor:
      'Quarterly reporting of all Expanded Withholding Taxes withheld across Months 1, 2, and 3 of the quarter (crediting prior 0619-E remittances from Months 1 and 2) and remitting the remaining Month 3 balance.',
    whoGenerallyNeedsIt:
      'All taxpayers registered for Expanded Withholding Tax on their BIR Certificate of Registration.',
    filingFrequency: 'Quarterly',
    deadlineSummary:
      'Verified statutory deadline: Not later than the last day of the month following the close of the quarter during which withholding was made (Calendar quarters: April 30, July 31, October 31, and January 31).',
    requiredAttachments: [
      'Quarterly Alphalist of Payees (QAP) generated via the official BIR Alphalist Data Entry module and submitted electronically (`.DAT` file).',
    ],
    commonMistakes: [
      'Filing Form 1601-EQ without transmitting and receiving validation confirmation for the electronic QAP attachment.',
      'Mismatches between total EWT bases on Form 1601-EQ and rent/professional/contractor expenses claimed on the Annual ITR.',
      'Forgetting to deduct Month 1 and Month 2 Form 0619-E payments on the quarterly return.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // 4. FINAL WITHHOLDING TAX
  // =========================================================================
  {
    formNumber: '0619-F',
    officialName: 'Monthly Remittance Form of Final Income Taxes Withheld',
    section: 'Final Withholding Tax',
    status: 'Active',
    usedFor:
      'Remitting Final Income Taxes withheld at source (such as cash dividends, royalties, prizes, certain interest payments, or payments to non-resident foreign payees where applicable) for the FIRST TWO (2) months of each taxable quarter.',
    whoGenerallyNeedsIt:
      'Corporations and withholding agents registered for Final Withholding Tax or executing transactions subject to final tax at source.',
    filingFrequency: 'Monthly — for Month 1 and Month 2 of each quarter (when registered or applicable)',
    deadlineSummary:
      'Verified manual/eBIRForms deadline: On or before the 10th day of the month following the month in which withholding was made.',
    deadlineVerificationNote:
      'eFPS-enrolled taxpayers follow staggered group deadlines (11th–15th) for filing; verify your eFPS group classification.',
    requiredAttachments: [
      'None for Months 1 and 2; payee schedule is reported quarterly on Form 1601-FQ QAP.',
    ],
    commonMistakes: [
      'Confusing Creditable Expanded Withholding Tax (0619-E) with Final Withholding Tax (0619-F) when remitting routine domestic rent or professional fees.',
      'Declaring cash dividends without checking applicable dividend final withholding tax rates and treaty relief rules (for foreign shareholders).',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1601-FQ',
    officialName: 'Quarterly Remittance Return of Final Income Taxes Withheld',
    section: 'Final Withholding Tax',
    status: 'Active',
    usedFor:
      'Quarterly consolidation and remittance of Final Income Taxes withheld across the three months of a taxable quarter, crediting Months 1 and 2 Form 0619-F remittances.',
    whoGenerallyNeedsIt:
      'Corporations and taxpayers registered for Final Withholding Tax or remitting final taxes on dividends, royalties, interest, or non-resident payments.',
    filingFrequency: 'Quarterly (as registered on COR or per taxable event)',
    deadlineSummary:
      'Verified statutory deadline: Not later than the last day of the month following the close of the quarter during which withholding was made (April 30, July 31, October 31, and January 31 for calendar quarters).',
    requiredAttachments: [
      'Quarterly Alphalist of Payees Subject to Final Withholding Tax (QAP `.DAT` submission).',
    ],
    commonMistakes: [
      'Failing to issue BIR Form 2306 (Certificate of Final Tax Withheld at Source) to recipients.',
      'Omitting QAP electronic attachment validation.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // 5. COMPENSATION TAX
  // =========================================================================
  {
    formNumber: '1601-C',
    officialName: 'Monthly Remittance Return of Income Taxes Withheld on Compensation',
    section: 'Compensation Tax',
    status: 'Active',
    usedFor:
      'Monthly reporting of total gross compensation paid to employees, non-taxable/exempt compensation breakdowns (including MWE basic/OT/holiday pay and mandatory employee SSS/PhilHealth/Pag-IBIG shares), and remittance of income taxes withheld.',
    whoGenerallyNeedsIt:
      'Every BIR-registered employer with Compensation Withholding Tax on its Form 2303 (even if all employees are Minimum Wage Earners or earn below the taxable bracket, requiring a timely zero-tax-due filing).',
    filingFrequency: 'Monthly (all 12 months of the year)',
    deadlineSummary:
      'Verified manual/eBIRForms deadline: On or before the 10th day of the following month for January to November; on or before January 15 of the following year for the December return.',
    deadlineVerificationNote:
      'eFPS filers follow staggered filing group schedules (11th–15th day, and January 20 for December in applicable eFPS rules)—verify your exact eFPS group calendar.',
    requiredAttachments: [
      'None monthly; annual employee-level breakdown is submitted via Form 1604-C Alphalist.',
    ],
    commonMistakes: [
      'Skipping Form 1601-C during months when zero tax was withheld from staff.',
      'Including mandatory employee SSS, PhilHealth, and Pag-IBIG shares inside taxable compensation instead of deducting them properly.',
      'Failing to reflect year-end annualization adjustments in the December 1601-C return.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'compensation-withholding-tax-compliance',
    relatedServiceTitle: 'Compensation Withholding Tax, 13th-Month Pay & Year-End Payroll Annualization',
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    formNumber: '1604-C',
    officialName: 'Annual Information Return of Income Taxes Withheld on Compensation',
    section: 'Compensation Tax',
    status: 'Active',
    usedFor:
      'Annual employer summary reconciling all 12 monthly Form 1601-C remittances against the itemized Annual Alphalist of Employees.',
    whoGenerallyNeedsIt: 'All employers registered for Compensation Withholding Tax.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before January 31 of the year following the calendar year in which compensation was paid.',
    requiredAttachments: [
      'Annual Alphalist of Employees (`.DAT` electronic submission validated through the official BIR Alphalist Data Entry module).',
    ],
    commonMistakes: [
      'Discrepancies between the sum of 12 monthly 1601-C returns, the Form 1604-C summary, employee Form 2316 certificates, and Financial Statement salaries expense.',
      'Invalid or unverified employee TINs causing Alphalist validation rejection right before January 31.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'compensation-withholding-tax-compliance',
    relatedServiceTitle: 'Compensation Withholding Tax, 13th-Month Pay & Year-End Payroll Annualization',
    ctaLabel: 'Request Payroll Assistance',
  },

  // =========================================================================
  // 6. INDIVIDUAL INCOME TAX
  // =========================================================================
  {
    formNumber: '1701Q',
    officialName: 'Quarterly Income Tax Return for Individuals, Estates and Trusts',
    section: 'Individual Income Tax',
    status: 'Active',
    usedFor:
      'Cumulative quarterly reporting and payment of income tax for self-employed individuals, sole proprietors, professionals, and mixed-income earners across Q1, Q2, and Q3.',
    whoGenerallyNeedsIt:
      'Sole proprietors, freelancers, licensed professionals, consultants, and mixed-income earners.',
    filingFrequency: 'Quarterly (1st, 2nd, and 3rd quarters; Q4 is consolidated in Annual Form 1701 or 1701A)',
    deadlineSummary:
      'Verified statutory deadline: May 15 (Q1), August 15 (Q2), and November 15 (Q3) of the current taxable year.',
    requiredAttachments: [
      'Summary Alphalist of Withholding Taxes (SAWT) `.DAT` submission and BIR Form 2307 copies when claiming creditable withholding tax credits.',
    ],
    commonMistakes: [
      'Forgetting that 1701Q is cumulative—failing to include prior-quarter revenues/deductions and prior-quarter tax payments/credits properly.',
      'Missing the Q1 election box for the 8% flat income tax rate or Optional Standard Deduction (OSD), locking the taxpayer into graduated itemized deductions for the rest of the year.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1701',
    officialName: 'Annual Income Tax Return for Individuals (Including Mixed Income Earners), Estates and Trusts',
    section: 'Individual Income Tax',
    status: 'Active',
    usedFor:
      'Annual income tax declaration for individuals earning mixed income (both compensation and business/practice of profession) OR sole proprietors/professionals taxed under Graduated Income Tax Rates claiming Itemized Deductions.',
    whoGenerallyNeedsIt:
      'Mixed-income earners (regardless of deduction method/8% on business portion) and purely self-employed individuals/sole proprietors using Itemized Deductions.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before April 15 of each year covering income for the preceding calendar year.',
    requiredAttachments: [
      'Financial Statements (or Audited Financial Statements when gross sales/receipts meet the statutory audit threshold)',
      'BIR Form 2316 from employer(s) (for mixed-income earners)',
      'BIR Form 2307 certificates and validated SAWT confirmation (if claiming tax credits)',
    ],
    commonMistakes: [
      'Using Form 1701A instead of Form 1701 when the taxpayer also earned employment compensation during the same calendar year.',
      'Claiming the PHP 250,000 zero-rate slab deduction again on the 8% business portion of a mixed-income earner (already built into the graduated compensation tax table).',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1701A',
    officialName:
      'Annual Income Tax Return for Individuals Earning Purely from Business/Profession (Graduated Rates with OSD, or 8% Flat Income Tax Rate)',
    section: 'Individual Income Tax',
    status: 'Active',
    usedFor:
      'Simplified two-page Annual Income Tax Return exclusively for individuals earning PURELY from business or practice of profession who opted for either the 8% Flat Income Tax Rate or Graduated Rates with the 40% Optional Standard Deduction (OSD).',
    whoGenerallyNeedsIt:
      'Purely self-employed freelancers, professionals, and sole proprietors with ZERO compensation income who validly elected 8% flat tax or 40% OSD.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before April 15 following the close of the calendar year.',
    requiredAttachments: [
      'SAWT confirmation and BIR Form 2307 copies (when claiming creditable withholding taxes).',
    ],
    commonMistakes: [
      'Filing Form 1701A while claiming Itemized Deductions (Itemized Deductions require Form 1701).',
      'Using Form 1701A after exceeding the PHP 3,000,000 VAT threshold mid-year (crossing the threshold disqualifies the 8% rate and triggers VAT reassessment).',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1700',
    officialName: 'Annual Income Tax Return for Individuals Earning Purely Compensation Income',
    section: 'Individual Income Tax',
    status: 'Active',
    usedFor:
      'Annual income tax filing for employees earning purely compensation income who do NOT qualify for substituted filing (e.g., worked for two or more employers within the same calendar year, or tax withheld was incorrect).',
    whoGenerallyNeedsIt:
      'Employees who changed employers mid-year, held concurrent employment, or are otherwise disqualified from substituted filing via BIR Form 2316.',
    filingFrequency: 'Annually (when not covered by substituted filing)',
    deadlineSummary:
      'Verified statutory deadline: On or before April 15 of the following calendar year.',
    requiredAttachments: [
      'Signed BIR Form 2316 certificates from all employers during the calendar year.',
    ],
    commonMistakes: [
      'Assuming no return is needed when switching jobs mid-year if the second employer did not annualize prior-employer income.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // 7. CORPORATE INCOME TAX
  // =========================================================================
  {
    formNumber: '1702Q',
    officialName: 'Quarterly Income Tax Return for Corporations, Partnerships and Other Non-Individual Taxpayers',
    section: 'Corporate Income Tax',
    status: 'Active',
    usedFor:
      'Cumulative quarterly corporate income tax computation (including Regular Corporate Income Tax / 20% or 25% CREATE brackets and Minimum Corporate Income Tax check where applicable) for Q1, Q2, and Q3.',
    whoGenerallyNeedsIt:
      'Domestic and resident foreign corporations, One Person Corporations (OPCs), and taxable partnerships.',
    filingFrequency: 'Quarterly (first three quarters of the accounting year)',
    deadlineSummary:
      'Verified statutory deadline: Within sixty (60) days following the close of each of the first three quarters of the taxable year (Calendar year: ~May 30, August 29, and November 29).',
    deadlineVerificationNote:
      'Count exact 60 calendar days (accounting for leap years and fiscal quarter-ends).',
    requiredAttachments: [
      'Validated SAWT `.DAT` confirmation and BIR Form 2307 certificates (when claiming tax credits).',
    ],
    commonMistakes: [
      'Applying the 20% MSME corporate rate without verifying both statutory CREATE conditions (net taxable income not exceeding PHP 5,000,000 AND total assets excluding land not exceeding PHP 100,000,000).',
      'Overlooking Minimum Corporate Income Tax (MCIT) applicability starting on the fourth taxable year following commencement of operations.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1702-RT',
    officialName:
      'Annual Income Tax Return for Corporation, Partnership and Other Non-Individual Taxpayer Subject Only to REGULAR Income Tax Rate',
    section: 'Corporate Income Tax',
    status: 'Active',
    usedFor:
      'Annual corporate income tax declaration for corporations, OPCs, and taxable partnerships subject exclusively to the Regular Corporate Income Tax rate (20% or 25% under CREATE, and MCIT comparison where applicable).',
    whoGenerallyNeedsIt:
      'Most regular domestic corporations, OPCs, and taxable partnerships without special/PEZA/BOI or tax-exempt regimes.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before the 15th day of the fourth (4th) month following the close of the taxpayer’s taxable year (April 15 for calendar-year corporations).',
    requiredAttachments: [
      'Financial Statements / Audited Financial Statements (per statutory BIR & SEC thresholds), Statement of Management’s Responsibility (SMR)',
      'BIR Form 2307 certificates and validated SAWT confirmation (via eAFS / manual rules)',
      'BIR Form 1709 (Related Party Transactions Form), ONLY if meeting mandatory materiality/reporting criteria under current BIR RR',
    ],
    commonMistakes: [
      'Missing the subsequent SEC eFAST AFS upload deadline (e.g., May 29, 2026 under SEC MC No. 9-2026 for calendar-year corporations) after completing the April 15 BIR filing.',
      'Unreconciled differences between book income per AFS and taxable income reconciliation schedules on Form 1702-RT.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '1702-EX',
    officialName:
      'Annual Income Tax Return for Corporation, Partnership and Other Non-Individual Taxpayer EXEMPT Under the Tax Code and Other Special Laws',
    section: 'Corporate Income Tax',
    status: 'Active',
    usedFor:
      'Annual information and income return for non-stock, non-profit corporations, General Professional Partnerships (GPPs), cooperatives holding valid CTEs, and entities wholly exempt from corporate income tax under Section 30 of the NIRC or special laws.',
    whoGenerallyNeedsIt:
      'Qualified non-stock non-profit organizations, General Professional Partnerships (GPPs), CDA-registered tax-exempt cooperatives, and wholly tax-exempt entities.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before the 15th day of the 4th month following the close of the fiscal or calendar year (April 15 for calendar-year entities).',
    requiredAttachments: [
      'Audited/Compiled Financial Statements, Certificate of Tax Exemption / Ruling (where applicable), and GPP partner distributive share schedules.',
    ],
    commonMistakes: [
      'Assuming a non-stock non-profit corporation is automatically exempt from filing an Annual ITR or exempt on commercial/unrelated income (commercial income requires Form 1702-MX or regular tax assessment).',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    formNumber: '1702-MX',
    officialName:
      'Annual Income Tax Return for Corporation, Partnership and Other Non-Individual with MIXED Income Subject to Multiple Income Tax Rates or Special/Preferential Rate',
    section: 'Corporate Income Tax',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Covers Registered Business Enterprises (PEZA, BOI, FIRB) operating under RA No. 12066 (CREATE MORE Act)—including the 20% corporate tax rate under Enhanced Deductions, 5% Special Corporate Income Tax (SCIT), or ITH mixed with regular activities.',
    usedFor:
      'Annual corporate income tax return for enterprises registered under special/preferential tax incentives (PEZA/BOI/FIRB) or earning mixed exempt, special, and regular-rate income streams.',
    whoGenerallyNeedsIt:
      'Registered Business Enterprises (RBEs) with IPA incentives and non-profits earning both exempt and taxable commercial revenues.',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: On or before the 15th day of the 4th month following the close of the taxable year.',
    requiredAttachments: [
      'Audited Financial Statements with segmented cost/revenue schedules per registered activity, Certificate of Entitlement to Tax Incentives (CETI) issued by IPA, and SAWT/2307 credits.',
    ],
    commonMistakes: [
      'Failing to maintain strict General Ledger segmentation between incentive-registered activities and regular-rate activities.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'individual-corporate-income-tax-preparation',
    relatedServiceTitle: 'Individual & Corporate Income Tax Preparation (Quarterly & Annual)',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },

  // =========================================================================
  // 8. TAX CERTIFICATES
  // =========================================================================
  {
    formNumber: '2307',
    officialName: 'Certificate of Creditable Tax Withheld at Source',
    section: 'Tax Certificates',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Under BIR RR No. 6-2026 & RMC No. 112-2026 (effective October 16, 2026), sellers issuing invoices for transactions covered by Creditable Withholding Tax must show the CWT amount separately on the face of the invoice—aligning invoice deductions directly with Form 2307.',
    usedFor:
      'Official tax certificate issued by a withholding agent (payor) to a supplier/professional (payee) evidencing Expanded Withholding Tax (or creditable VAT/percentage tax where applicable) deducted from payments—used by the payee as tax credit against Income Tax (or VAT/Percentage Tax).',
    whoGenerallyNeedsIt:
      'Issued by withholding agents to landlords, professionals, contractors, and suppliers; collected and claimed as tax credits by B2B sellers and professionals.',
    filingFrequency: 'Issued per quarter (within 20 days after quarter-end) or upon request at payment',
    deadlineSummary:
      'Verified statutory issuance rule: Within twenty (20) days following the close of the taxable quarter employed by the payee in filing quarterly returns, or upon demand at time of payment.',
    requiredAttachments: [
      'Payees claiming Form 2307 credits attach them via eAFS/RDO submission alongside a validated SAWT `.DAT` confirmation.',
    ],
    commonMistakes: [
      'Accepting unsigned Form 2307 certificates or certificates bearing an incorrect TIN, wrong ATC, or wrong quarter period.',
      'Claiming a Form 2307 dated in Q3 against a Q2 return improperly.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '2316',
    officialName: 'Certificate of Compensation Payment / Tax Withheld',
    section: 'Tax Certificates',
    status: 'Active',
    usedFor:
      'Annual employer-issued certificate detailing an employee’s total compensation, non-taxable benefits, mandatory contributions, and income tax withheld during the calendar year (also serving as Substituted Filing for qualified single-employer employees).',
    whoGenerallyNeedsIt:
      'Issued by all employers to every employee employed during the year (and upon employee separation prior to final pay release).',
    filingFrequency: 'Annually (plus upon employee resignation/separation)',
    deadlineSummary:
      'Verified statutory issuance deadline: Furnished to employees on or before January 31 of the succeeding year; signed duplicate copies for employees covered by Substituted Filing are submitted to the BIR on or before February 28.',
    requiredAttachments: [
      'Submitted via eAFS / authorized electronic media per latest BIR year-end circular instructions.',
    ],
    commonMistakes: [
      'Failing to issue Form 2316 to resigned employees along with their final pay.',
      'Submitting Substituted Filing copies without both employer and employee signatures.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'compensation-withholding-tax-compliance',
    relatedServiceTitle: 'Compensation Withholding Tax, 13th-Month Pay & Year-End Payroll Annualization',
    ctaLabel: 'Request Payroll Assistance',
  },
  {
    formNumber: '2306',
    officialName: 'Certificate of Final Tax Withheld at Source',
    section: 'Tax Certificates',
    status: 'Active',
    usedFor:
      'Certificate issued by a payor evidencing Final Income Tax (or Final VAT) withheld at source on dividends, royalties, prizes, interest, or non-resident payments.',
    whoGenerallyNeedsIt:
      'Withholding agents remitting final taxes via Form 0619-F / 1601-FQ and recipients needing proof that income already suffered final tax.',
    filingFrequency: 'Annually (on or before January 31) or upon payee request per transaction',
    deadlineSummary:
      'Verified issuance rule: On or before January 31 of the succeeding year, or upon payee request.',
    requiredAttachments: ['Retained by recipient as proof of final-taxed income.'],
    commonMistakes: [
      'Issuing Form 2307 instead of Form 2306 for final-taxed dividend or royalty distributions.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'expanded-final-withholding-tax-compliance',
    relatedServiceTitle: 'Expanded Withholding Tax (EWT) & Final Withholding Tax (FWT)',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: '2303',
    officialName: 'BIR Certificate of Registration (COR)',
    section: 'Tax Certificates',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Per RMC No. 14-2024, existing Form 2303 certificates remain valid even if they still display the repealed Annual Registration Fee line item, unless other registration details require updating.',
    usedFor:
      'Official BIR registration certificate issued to business/professional taxpayers displaying TIN, registered name, trade name, address, RDO code, PSIC line of business, and exact registered periodic tax types.',
    whoGenerallyNeedsIt:
      'Every BIR-registered business, branch, and self-employed professional (must be conspicuously displayed at the place of business / online seller profile as required by BIR issuances).',
    filingFrequency: 'Issued upon registration and re-issued when registration details are amended via Form 1905 / ORUS',
    deadlineSummary:
      'Secured prior to commencement of business operations; displayed continuously while registered.',
    requiredAttachments: ['Displayed alongside official Notice to Issue Invoice (NII) signage.'],
    commonMistakes: [
      'Guessing which returns to file instead of reading the exact tax types listed on Form 2303.',
      'Forgetting to display the COR and official Notice to Issue Invoice at the business premises.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'business-registration-dti-sec-bir-lgu',
    relatedServiceTitle: 'DTI, SEC, BIR Registration & LGU Permits Coordination',
    ctaLabel: 'Need Help With Business Registration?',
  },

  // =========================================================================
  // 9. PAYMENT FORMS
  // =========================================================================
  {
    formNumber: '0605',
    officialName: 'Payment Form (Annual PHP 500 Registration Fee Repealed Effective Jan 22, 2024)',
    section: 'Payment Forms',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'IMPORTANT REFORM FLAG: Beginning January 22, 2024, the PHP 500.00 Annual Registration Fee (ARF) formerly paid via BIR Form 0605 every January 31 was PERMANENTLY DISCONTINUED under RA No. 11976 (EOPT Act) and BIR RMC No. 14-2024. Form 0605 remains active ONLY for approved miscellaneous/deficiency/compromise payments (including the PHP 5,000 one-time micro-taxpayer abatement fee under RR No. 4-2026 when approved).',
    usedFor:
      'Miscellaneous tax payments not covered by a dedicated return—such as voluntary deficiency payments, installment assessments, RDO-approved compromise penalties, or specific statutory relief fees (e.g., RR No. 4-2026). NO LONGER USED for the repealed PHP 500 Annual Registration Fee.',
    whoGenerallyNeedsIt:
      'Taxpayers settling approved deficiency assessments, compromise penalties, or specific miscellaneous BIR fees (not routine annual registration renewal).',
    filingFrequency: 'Per transaction / only when specifically applicable (Annual Jan 31 ARF repealed)',
    deadlineSummary:
      'Annual January 31 PHP 500 ARF deadline is REPEALED (RMC No. 14-2024). For assessment or penalty payments, due dates depend on the specific BIR assessment notice or RDO routing sheet.',
    requiredAttachments: [
      'Copy of RDO computation sheet, Notice of Discrepancy, or approved abatement application when paying penalties or settlements.',
    ],
    commonMistakes: [
      'Erroneously paying PHP 500 every January for the repealed Annual Registration Fee.',
      'Paying compromise penalties on Form 0605 without first securing official RDO computation/officer signature, which can delay open-case closure.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'tax-account-reconciliations-compliance-reviews',
    relatedServiceTitle: 'Tax Account Reconciliation & BIR Compliance Review',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },
  {
    formNumber: '0613',
    officialName: 'Payment Form Covered by Memorandum of Assignment / Tax Compliance Verification Drive',
    section: 'Payment Forms',
    status: 'Active',
    usedFor:
      'Specialized payment form used to settle administrative penalties assessed during BIR Tax Compliance Verification Drives (TCVD / tax mapping inspections) or specific enforcement assignments.',
    whoGenerallyNeedsIt:
      'Taxpayers settling verified administrative violations identified during official BIR TCVD inspections.',
    filingFrequency: 'Event-driven (only upon official BIR TCVD / assignment assessment)',
    deadlineSummary:
      'Requires verification against the specific BIR TCVD / Mission Order assessment notice.',
    requiredAttachments: [
      'Official BIR TCVD / violation computation slip signed by authorized revenue officers.',
    ],
    commonMistakes: [
      'Confusing Form 0613 with Form 0605 when remitting routine RDO open-case compromise penalties.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'bir-assessment-documentation-assistance',
    relatedServiceTitle: 'BIR Assessment Documentation & Reconciliation Assistance',
    ctaLabel: 'Let BOSS. Review Your Compliance Needs',
  },

  // =========================================================================
  // 10. ALPHALISTS AND ATTACHMENTS
  // =========================================================================
  {
    formNumber: '1604-E / 1604-F',
    officialName:
      'Annual Information Return of Creditable (1604-E) and Final (1604-F) Income Taxes Withheld & Annual Alphalists',
    section: 'Alphalists and Attachments',
    status: 'Active',
    usedFor:
      'Annual year-end information returns summarizing full-year Expanded Withholding Taxes (1604-E, including income payments exempt from withholding) and Final Withholding Taxes (1604-F) with itemized payee alphalists.',
    whoGenerallyNeedsIt:
      'All Expanded Withholding Tax agents (1604-E) and Final Withholding Tax agents (1604-F).',
    filingFrequency: 'Annually',
    deadlineSummary:
      'Verified statutory deadline: Form 1604-E is due on or before March 1 following the close of the calendar year; Form 1604-F is due on or before January 31 following the close of the calendar year.',
    requiredAttachments: [
      'Validated `.DAT` Annual Alphalist of Payees transmitted via BIR eSubmission / eFPS.',
    ],
    commonMistakes: [
      'Mixing up the January 31 deadline for Form 1604-C / 1604-F with the March 1 deadline for Form 1604-E.',
      'Failing to match 1604-E totals against the four quarterly 1601-EQ returns and Financial Statement expense deductions.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'bir-alphalists-sawt-qap-attachments',
    relatedServiceTitle: 'BIR Alphalists, SAWT, QAP, SLSP & Electronic Data Attachments',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },
  {
    formNumber: 'QAP / SAWT / SLSP',
    officialName:
      'Electronic Data Attachments: Quarterly Alphalist of Payees (QAP), Summary Alphalist of Withholding Taxes (SAWT) & Summary Lists of Sales/Purchases (SLSP)',
    section: 'Alphalists and Attachments',
    status: 'Active',
    usedFor:
      'Machine-readable `.DAT` electronic schedules generated through official BIR Alphalist Data Entry and Relief Validation modules supporting Form 1601-EQ/1601-FQ (QAP), tax credit claims on ITR/VAT/Percentage returns (SAWT), and VAT input/output substantiation (SLSP).',
    whoGenerallyNeedsIt:
      'Withholding agents filing 1601-EQ/1601-FQ, taxpayers claiming Form 2307/2306 credits, and VAT-registered businesses.',
    filingFrequency: 'Quarterly / Per Parent Return Filing',
    deadlineSummary:
      'Submitted alongside or on the statutory due date of the parent tax return (e.g., within 25 days after quarter-end for VAT SLSP; last day of month following quarter-end for QAP; and with ITR for SAWT/eAFS).',
    requiredAttachments: [
      'Validated `.DAT` files tested through the latest BIR validation module plus official BIR eSubmission validation email receipt.',
    ],
    commonMistakes: [
      'Assuming emailing an unvalidated `.DAT` file satisfies compliance without waiting for the BIR validation confirmation response.',
      'Encoding dashes, special characters, or wrong branch codes that trigger TIN validation rejections.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'bir-alphalists-sawt-qap-attachments',
    relatedServiceTitle: 'BIR Alphalists, SAWT, QAP, SLSP & Electronic Data Attachments',
    ctaLabel: 'Discuss Your Tax Compliance Needs',
  },

  // =========================================================================
  // 11. BUSINESS REGISTRATION AND CLOSURE
  // =========================================================================
  {
    formNumber: '1901 / 1903',
    officialName:
      'Application for Registration: Individuals/Sole Proprietors/Professionals (1901) & Corporations/Partnerships/OPCs (1903)',
    section: 'Business Registration and Closure',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Streamlined under EOPT Act (RA No. 11976 & RR No. 7-2024) and RMO No. 27-2026 digital priorities—eliminating the PHP 500 registration fee upon initial registration and supporting online registration via BIR ORUS.',
    usedFor:
      'Primary BIR tax registration for self-employed professionals, freelancers, mixed-income earners, and DTI sole proprietors (Form 1901), as well as SEC-registered corporations, OPCs, and partnerships (Form 1903).',
    whoGenerallyNeedsIt:
      'All newly formed businesses, branches, and self-employed individuals registering with the BIR prior to commencing commercial operations.',
    filingFrequency: 'Upon initial business or branch setup',
    deadlineSummary:
      'Verified rule: On or before commencement of business (or within 30 days from issuance of SEC/DTI/Mayor’s registration under applicable BIR rules to avoid late-registration penalties).',
    requiredAttachments: [
      'DTI Certificate (for 1901) or SEC Certificate of Incorporation & Articles/By-Laws (for 1903), valid government IDs, proof of business address/lease if applicable, and Documentary Stamp Tax (Form 2000) on lease/subscribed shares where applicable.',
    ],
    commonMistakes: [
      'Missing the Documentary Stamp Tax (Form 2000) deadline on original share subscriptions after SEC incorporation (due on the 5th day of the following month).',
      'Selecting inappropriate tax types during registration that do not match actual operations.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'business-registration-dti-sec-bir-lgu',
    relatedServiceTitle: 'DTI, SEC, BIR Registration & LGU Permits Coordination',
    ctaLabel: 'Need Help With Business Registration?',
  },
  {
    formNumber: '1905',
    officialName: 'Application for Registration Information Update / Correction / Cancellation',
    section: 'Business Registration and Closure',
    status: 'Active',
    usedFor:
      'Updating registered taxpayer details (address/RDO transfer, trade name, tax types, books of accounts updates, replacement of lost COR) AND formally applying for Business Closure / Cancellation of BIR Registration.',
    whoGenerallyNeedsIt:
      'Businesses amending registration information, transferring offices, registering books, or permanently closing/retiring operations.',
    filingFrequency: 'Event-driven (upon registration change or business cessation)',
    deadlineSummary:
      'Filed promptly upon change of registration details; for business closure, Section 236(F) of the NIRC requires written notice of cessation alongside surrender of COR and unused invoices per RDO closure routing checklist.',
    requiredAttachments: [
      'For updates: supporting amended SEC/DTI/LGU documents and original COR.',
      'For closure: original Form 2303 (COR), Notice to Issue Invoice signage, Inventory List and surrender of unused Invoices/receipts, LGU retirement application/certificate, and Books of Accounts per RDO checklist.',
    ],
    commonMistakes: [
      'Stopping business operations without filing Form 1905, allowing unfiled-return open cases to pile up for years.',
      'Moving to a new city without transferring RDO registration properly.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'business-closure-retirement-cancellation',
    relatedServiceTitle:
      'Business Closure, LGU Retirement, BIR Cancellation & Corporate Dissolution Coordination',
    ctaLabel: 'Need Help Closing Your Business?',
  },
  {
    formNumber: '1906',
    officialName: 'Application for Authority to Print (ATP) Invoices and Supplementary Receipts',
    section: 'Business Registration and Closure',
    status: 'Amended / EOPT Updated',
    regulatoryAlert:
      'Updated under RR No. 7-2024 (EOPT Act) and RR No. 6-2026 / RMC No. 112-2026: Primary accountable forms must be structured as Invoices (Sales/Service Invoices) AND newly printed layouts for withholding-subject sales must include a separate line item for Creditable Withholding Tax (CWT).',
    usedFor:
      'Securing BIR authorization (via RDO or ORUS) to print official manual or loose-leaf primary Sales/Service Invoices and supplementary collection receipts through a BIR-accredited printer.',
    whoGenerallyNeedsIt:
      'Newly registered businesses and operating businesses ordering new accountable invoice booklets.',
    filingFrequency: 'Upon initial registration and whenever reordering accountable booklets',
    deadlineSummary:
      'Secured prior to printing and issuing commercial invoices; reorder well before exhausting current booklets.',
    requiredAttachments: [
      'Sample layout of compliant EOPT + RR No. 6-2026 Invoice, copy of COR (Form 2303), and accredited printer details (plus prior ATP copy on reorders).',
    ],
    commonMistakes: [
      'Printing invoices at a non-BIR-accredited print shop without an approved Authority to Print (carries steep statutory penalties).',
      'Reprinting legacy Official Receipt layouts or omitting the dedicated CWT line item on new B2B invoice print runs.',
    ],
    officialBirReferenceUrl: 'https://www.bir.gov.ph/bir-forms',
    lastVerifiedDate: 'November 3, 2026',
    relatedServiceSlug: 'business-registration-dti-sec-bir-lgu',
    relatedServiceTitle: 'DTI, SEC, BIR Registration & LGU Permits Coordination',
    ctaLabel: 'Need Help With Business Registration?',
  },
];
