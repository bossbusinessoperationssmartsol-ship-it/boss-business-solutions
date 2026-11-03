export interface PrivacySectionBullet {
  label?: string;
  text: string;
}

export interface PrivacySubSection {
  heading: string;
  paragraphs?: string[];
  bullets?: PrivacySectionBullet[];
}

export interface PrivacyNoticeSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: PrivacySectionBullet[];
  subSections?: PrivacySubSection[];
  calloutNote?: string;
}

export const PRIVACY_NOTICE_SECTIONS: PrivacyNoticeSection[] = [
  {
    id: 'section-01',
    number: '01',
    title: 'Introduction and Commitment to Data Privacy',
    paragraphs: [
      'BOSS. — Business Operations & Smart Solutions ("BOSS.", "we", "us", or "our") respects and values the privacy of every entrepreneur, prospective client, and website visitor who engages with us. In the course of providing information about our services and receiving client discovery and engagement inquiries, we are committed to processing personal information lawfully, fairly, transparently, and proportionately.',
      'This Privacy Notice is prepared in alignment with the general data privacy principles of transparency, legitimate purpose, and proportionality under Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 ("DPA"), its Implementing Rules and Regulations ("IRR"), and applicable circulars, advisories, and issuances of the National Privacy Commission ("NPC") of the Philippines.',
      'This document explains what personal information we collect through our website and client inquiry channels, why and on what lawful bases we process it, which third-party platforms support our workflow, how we safeguard and retain records, and how you may exercise your rights as a data subject.',
    ],
  },
  {
    id: 'section-02',
    number: '02',
    title: 'Scope and Application',
    paragraphs: [
      'This Privacy Notice applies to personal information collected or processed by BOSS. — Business Operations & Smart Solutions in connection with:',
    ],
    bullets: [
      {
        label: 'Prospective Clients & Inquiry Respondents',
        text: 'Individuals, sole proprietors, freelancers, partners, corporate representatives, or authorized contact persons who complete and submit the official BOSS. Client Discovery and Engagement Inquiry Form.',
      },
      {
        label: 'Website Visitors',
        text: 'Individuals who browse our public website, read educational content, use interactive website guides, or follow our official inquiry links.',
      },
      {
        label: 'Direct Correspondents',
        text: 'Persons who communicate with BOSS. via email, mobile telephone, SMS, WhatsApp, Viber, or official social media pages regarding potential accounting, bookkeeping, tax compliance, business registration, financial reporting, smart accounting systems, or advisory services.',
      },
    ],
    calloutNote:
      'Engagement Distinction: This Privacy Notice governs website visits, initial client discovery, consultation requests, and pre-engagement inquiries. Should you formally engage BOSS. for ongoing professional services, separate engagement letters, confidentiality undertakings, or supplemental data processing terms may govern the handling of statutory books, tax returns, and operational engagement files.',
  },
  {
    id: 'section-03',
    number: '03',
    title: 'Personal Information We Collect',
    paragraphs: [
      'Depending on how you interact with BOSS. and what details you choose to share in your inquiry, we may collect and process the following categories of information:',
    ],
    bullets: [
      {
        label: 'Identity & Contact Information',
        text: 'Your full name, email address, mobile or landline number, role or designation, and preferred contact method.',
      },
      {
        label: 'Business & Organizational Information',
        text: 'Business or trade name (existing or proposed), industry or nature of business activities, location/city of operations, and organizational or legal structure (such as sole proprietorship, partnership, One Person Corporation, regular corporation, or self-employed professional practice).',
      },
      {
        label: 'Registration & Compliance Context',
        text: 'General business stage and registration status (for example, whether planning to register, newly registered, or currently operating with DTI, SEC, BIR, or local government permits) as voluntarily described in your inquiry.',
      },
      {
        label: 'Requested Services & Business Concerns',
        text: 'The specific BOSS. services you are inquiring about, preferred consultation or quotation needs, current bookkeeping or software setup, operational pain points, and any narrative message or questions you voluntarily submit.',
      },
      {
        label: 'Correspondence Records',
        text: 'Timestamps of form submissions, inquiry reference details, email threads, and notes from follow-up communications or discovery call scheduling.',
      },
      {
        label: 'Basic Technical Request Data',
        text: 'Standard browser, device, and network metadata automatically transmitted when your browser loads web pages or web fonts. Our website itself does not require user account registration or deploy behavioral advertising trackers.',
      },
    ],
    calloutNote:
      'Data Minimization Reminder: Please do not submit Tax Identification Numbers (TINs), government-issued ID numbers or scans, BIR/eFPS/eBIRForms or banking passwords, or confidential financial statements through our initial public inquiry form. If additional records are needed for formal scoping, BOSS. will advise you on appropriate submission steps.',
  },
  {
    id: 'section-04',
    number: '04',
    title: 'Purposes and Lawful Bases of Processing',
    paragraphs: [
      'BOSS. processes personal information only for specific, legitimate, and clearly defined purposes connected to understanding prospective client needs and delivering responsive professional communication.',
      'Under the Data Privacy Act of 2012 (including Sections 12 and 13, as applicable), lawful processing does not rely exclusively on consent in every instance. Depending on the specific activity and category of information involved, BOSS. relies on the appropriate lawful basis set out below:',
    ],
    subSections: [
      {
        heading: 'A. Purposes of Processing',
        bullets: [
          {
            text: 'Reviewing, evaluating, and responding to your client discovery submission, consultation request, or service question;',
          },
          {
            text: 'Understanding your business stage, organizational structure, and compliance concerns in order to identify appropriate solutions and prepare tailored service scopes or fee quotations;',
          },
          {
            text: 'Sending inquiry acknowledgments, scheduling coordination messages, and follow-up correspondence;',
          },
          {
            text: 'Maintaining organized internal logs of prospective client inquiries and communications to ensure continuity and accuracy of service;',
          },
          {
            text: 'Complying with applicable legal, regulatory, or professional obligations and establishing, exercising, or defending legal rights or claims where necessary.',
          },
        ],
      },
      {
        heading: 'B. Applicable Lawful Bases Under the Data Privacy Act',
        bullets: [
          {
            label: 'Pre-Contractual Steps & Contractual Necessity (Sec. 12(b), DPA)',
            text: 'Where processing your contact and business context information is necessary to take steps at your request prior to entering into a professional service engagement—such as evaluating your quotation request, assessing requested service scope, or coordinating a requested discovery consultation.',
          },
          {
            label: 'Legitimate Interests (Sec. 12(f), DPA)',
            text: 'Where processing is necessary for the legitimate business and operational interests of BOSS. in managing prospective client communications, organizing inquiry tracking workflows, ensuring service quality, and protecting against misuse or fraudulent submissions, except where such interests are overridden by your fundamental rights and freedoms under the Philippine Constitution.',
          },
          {
            label: 'Compliance With Legal Obligations (Sec. 12(c), DPA)',
            text: 'Where retention or disclosure of certain records is necessary to comply with a legal or regulatory obligation to which BOSS. is subject under Philippine law.',
          },
          {
            label: 'Consent (Sec. 12(a) / Sec. 13(a), DPA)',
            text: 'Where consent is the appropriate or required basis under the DPA—such as when you voluntarily provide optional personal details beyond pre-contractual necessity, when any sensitive personal information is voluntarily disclosed by you and requires specific consent, or when you expressly opt in to receive non-transactional updates.',
          },
        ],
      },
    ],
  },
  {
    id: 'section-05',
    number: '05',
    title: 'Collection Methods and Third-Party Platforms',
    paragraphs: [
      'Personal information is collected directly from you when you fill out our inquiry form or initiate contact with us. To operate a reliable, accessible client inquiry and correspondence workflow, BOSS. uses the following platforms and communication tools:',
    ],
    bullets: [
      {
        label: 'Google Forms (Google LLC)',
        text: 'Used to host and capture submissions through the official BOSS. Client Discovery and Engagement Inquiry Form, opened in a separate browser tab via our official form link.',
      },
      {
        label: 'Google Sheets & Google Apps Script (Google LLC)',
        text: 'Used to record submitted Google Form responses into a structured internal inquiry tracker and, where enabled by BOSS., execute automated form-submission notifications and inquiry acknowledgment emails.',
      },
      {
        label: 'Gmail (Google LLC)',
        text: 'Used via our official email address (bossbusinessoperationssmartsol@gmail.com) to receive inquiry alerts, send acknowledgments, and exchange business correspondence with prospective and active clients.',
      },
      {
        label: 'Optional Messaging & Social Channels (WhatsApp, Viber, Instagram, Facebook, Voice/SMS)',
        text: 'Available as optional alternative channels if you prefer to message or call BOSS. directly. When you initiate contact on third-party messaging or social media platforms, those providers also process personal data under their own respective terms and privacy policies.',
      },
      {
        label: 'On-Site Interactive Guides (Browser-Local Only)',
        text: 'Interactive tools on our website—specifically the "What Does Your Business Need?" finder and the rule-based BOSS. Smart Assistant—operate locally within your browser session to help navigate our services. They do not store or transmit personal information to BOSS. unless you proceed to submit our official Google Form or contact us directly.',
      },
    ],
  },
  {
    id: 'section-06',
    number: '06',
    title: 'Disclosure and International Processing',
    paragraphs: [
      'BOSS. does not sell, rent, or trade your personal information to third parties for commercial marketing.',
      'Access to personal information submitted through our inquiry channels is restricted to authorized BOSS. personnel involved in reviewing inquiries, preparing proposals, and communicating with prospective clients. Where relevant and subject to appropriate professional confidentiality or your prior coordination, information may be disclosed only in the following limited circumstances:',
    ],
    bullets: [
      {
        label: 'Cloud & Productivity Service Providers',
        text: 'Technology providers whose infrastructure supports our website hosting, content delivery, inquiry forms, spreadsheet tracking, and email communications (including Google LLC for Google Forms, Google Sheets, Google Apps Script, and Gmail).',
      },
      {
        label: 'Coordinated Professional Referrals',
        text: 'Where an inquiry requires specialized legal counsel or statutory independent audit assurance outside BOSS.’s scope, we only coordinate with external licensed practitioners with your awareness and direction.',
      },
      {
        label: 'Lawful & Regulatory Requirements',
        text: 'Competent government agencies, courts, or regulatory authorities when disclosure is required by applicable Philippine law, subpoena, or lawful order.',
      },
    ],
    subSections: [
      {
        heading: 'Cross-Border & International Data Processing',
        paragraphs: [
          'Personal information collected through our website and inquiry workflow is not stored exclusively within the Philippines. Because BOSS. utilizes global cloud-based productivity and hosting platforms—including Google Forms, Google Sheets, Gmail, and cloud web hosting/content delivery networks—personal information may be transmitted to, processed in, backed up, or stored on servers located outside the Philippines (such as data centers operated by Google LLC or cloud infrastructure providers in the Asia-Pacific region, the United States, or other jurisdictions).',
          'Such cross-border processing occurs as an integral part of operating reputable global cloud communication and productivity tools, subject to applicable provisions of the Data Privacy Act of 2012 (including Section 21 on accountability for transfer of personal information) and the standard security and data protection terms maintained by those cloud service providers.',
        ],
      },
    ],
  },
  {
    id: 'section-07',
    number: '07',
    title: 'Information Security',
    paragraphs: [
      'BOSS. takes reasonable and appropriate organizational and technical measures within our operational setup to protect personal information against accidental or unlawful destruction, alteration, unauthorized disclosure, or improper access.',
      'Rather than claiming unverified security certifications or proprietary infrastructure, we maintain practical, transparent safeguards aligned with the tools we actually use:',
    ],
    bullets: [
      {
        label: 'Restricted Account Access',
        text: 'Access to the Google account managing our official Google Form, linked Google Sheets inquiry tracker, and official Gmail inbox is limited to authorized BOSS. personnel.',
      },
      {
        label: 'Platform-Level Transport & Account Controls',
        text: 'Our website and official Google Forms links are served over HTTPS connections, and we utilize standard Google account authentication and access-control settings to protect stored inquiry records.',
      },
      {
        label: 'Upfront Data Minimization',
        text: 'Our public inquiry process is intentionally structured to collect high-level business discovery context rather than sensitive personal IDs, passwords, or unredacted statutory tax files.',
      },
    ],
    calloutNote:
      'Important Security Note: While BOSS. exercises care in managing its accounts and inquiry records, no method of internet transmission or cloud-based storage can be guaranteed to be completely free from risk. Please refrain from sending confidential credentials or sensitive personal documents through unverified public channels.',
  },
  {
    id: 'section-08',
    number: '08',
    title: 'Retention and Secure Disposal',
    paragraphs: [
      'In accordance with the Data Privacy Act of 2012, BOSS. retains personal information only for as long as reasonably necessary to fulfill the declared, specified, and legitimate purposes for which it was collected, unless a longer period is required or permitted by applicable law.',
      'Specifically, retention of client inquiry records is governed by the following principles:',
    ],
    bullets: [
      {
        label: 'Active Inquiry & Proposal Lifecycle',
        text: 'Information submitted through a business inquiry or consultation request is retained while we evaluate your concern, communicate regarding your discovery call or quotation, and allow a reasonable period for you to consider a proposed engagement.',
      },
      {
        label: 'Transition to Client Engagement',
        text: 'If your inquiry proceeds to a formal engagement with BOSS., relevant contact and onboarding details may be incorporated into your active client file subject to applicable engagement terms and statutory accounting/tax recordkeeping requirements.',
      },
      {
        label: 'Legal & Dispute Resolution Needs',
        text: 'Records may be retained where necessary to comply with applicable legal obligations, resolve disputes, or establish, exercise, or defend legal claims.',
      },
      {
        label: 'Disposal Practices',
        text: 'When personal information in unconverted inquiries is no longer necessary for the purposes above, BOSS. takes reasonable steps within the platforms used—including deleting obsolete entries from Google Forms responses, linked Google Sheets trackers, and email folders—to dispose of records so they are no longer accessible for unauthorized processing.',
      },
    ],
    calloutNote:
      'Retention Schedule Note: BOSS. does not publish an arbitrary fixed retention period where one has not yet been formally adopted. Prior to or upon final publication, BOSS. establishes its internal periodic review and deletion schedule for unconverted prospective client inquiries.',
  },
  {
    id: 'section-09',
    number: '09',
    title: 'Rights of Data Subjects',
    paragraphs: [
      'Under Republic Act No. 10173 (Data Privacy Act of 2012) and its Implementing Rules and Regulations, you are afforded specific rights in relation to your personal information, subject to the conditions, exceptions, and limitations provided by Philippine law:',
    ],
    bullets: [
      {
        label: 'Right to Be Informed',
        text: 'To be informed whether personal information pertaining to you shall be, is being, or has been processed, including clear information on the nature, purposes, scope, and methods of processing.',
      },
      {
        label: 'Right to Access',
        text: 'To request reasonable access, upon demand, to personal information about you held by BOSS., together with relevant information on how it was collected, used, and stored.',
      },
      {
        label: 'Right to Object',
        text: 'To object to the processing of your personal information where processing is based on consent or legitimate interest, including any processing for direct marketing. (BOSS. does not engage in automated profiling or automated decision-making producing legal effects.)',
      },
      {
        label: 'Right to Rectification',
        text: 'To dispute any inaccuracy or error in your personal information and have BOSS. correct it promptly and accordingly, unless the request is vexatious or otherwise unreasonable.',
      },
      {
        label: 'Right to Erasure or Blocking',
        text: 'To request the suspension, withdrawal, blocking, removal, or destruction of your personal information from BOSS.’s filing system upon discovery and substantial proof of grounds recognized under the DPA and its IRR.',
      },
      {
        label: 'Right to Data Portability',
        text: 'Where your personal information is processed by electronic means and in a structured or commonly used format, to obtain a copy of data you have provided to us, subject to statutory scope and technical feasibility.',
      },
      {
        label: 'Right to Damages',
        text: 'To be indemnified for any damages sustained due to inaccurate, incomplete, outdated, false, unlawfully obtained, or unauthorized use of your personal information, in accordance with the DPA.',
      },
    ],
    subSections: [
      {
        heading: 'Raising Concerns With the National Privacy Commission',
        paragraphs: [
          'We encourage you to contact BOSS. first so we can address any privacy question or request promptly and constructively. However, if you believe that your data privacy rights under Republic Act No. 10173 have been violated or inadequately addressed, you have the right to lodge a concern or formal complaint with the National Privacy Commission (NPC) of the Philippines (official website: https://privacy.gov.ph).',
        ],
      },
    ],
  },
  {
    id: 'section-10',
    number: '10',
    title: 'Withdrawal of Consent',
    paragraphs: [
      'Where BOSS. relies on your consent as the lawful basis for processing specific personal information, you have the right to withdraw that consent at any time by sending a clear written request to bossbusinessoperationssmartsol@gmail.com from the email address associated with your submission (or with reasonable details allowing us to verify your identity).',
      'Please note the following important legal and practical considerations when withdrawing consent:',
    ],
    bullets: [
      {
        label: 'Prospective Effect',
        text: 'Withdrawal of consent takes effect prospectively upon verification and processing of your request; it does not affect the lawfulness of any processing carried out based on your consent before its withdrawal.',
      },
      {
        label: 'Other Independent Lawful Bases',
        text: 'Withdrawal of consent applies to processing activities grounded on consent. It may not require the deletion or cessation of records whose continued retention or processing remains independently necessary and authorized under another lawful basis recognized by the DPA—such as compliance with a legal obligation or the establishment, exercise, or defense of legal claims.',
      },
      {
        label: 'Practical Impact on Pending Inquiries',
        text: 'If you withdraw consent or object to the processing of essential contact or inquiry information while an inquiry is pending, BOSS. may no longer be able to respond to your inquiry, coordinate a discovery call, or provide a service proposal.',
      },
    ],
  },
  {
    id: 'section-11',
    number: '11',
    title: 'Privacy Inquiries and Requests',
    paragraphs: [
      'If you have questions regarding this Privacy Notice, wish to inquire about how your personal information is handled, or would like to submit a request to exercise your rights under the Data Privacy Act of 2012, please reach out to us through our official privacy contact channel:',
      'To protect your privacy and prevent unauthorized disclosure of personal information to third parties, we may request reasonable information to verify your identity and clarify the specific submission or communication to which your request relates before acting on access, rectification, erasure, or withdrawal requests. We aim to acknowledge and respond to verified requests within a reasonable timeframe consistent with applicable NPC guidelines.',
    ],
  },
  {
    id: 'section-12',
    number: '12',
    title: 'Updates to the Privacy Notice',
    paragraphs: [
      'BOSS. — Business Operations & Smart Solutions may review, amend, or update this Privacy Notice from time to time to reflect changes in our professional services, client inquiry workflows, third-party technology tools, internal governance practices, or applicable Philippine data privacy laws and National Privacy Commission issuances.',
      'Any updated version will be published on this page (/privacy-notice). Material changes will apply prospectively from the confirmed effective date of the revised notice. We encourage visitors and prospective clients to review this Privacy Notice periodically before submitting new inquiries.',
    ],
  },
];

export interface OwnerVerificationItem {
  item: string;
  explanation: string;
}

export const OWNER_VERIFICATION_CHECKLIST: OwnerVerificationItem[] = [
  {
    item: 'Confirm Privacy Notice Effective Date',
    explanation:
      'No unconfirmed effective date is displayed as fact. Confirm your official launch/effective date and set `privacyEffectiveDate` in your site configuration before final public release.',
  },
  {
    item: 'Establish Written Inquiry Retention Schedule',
    explanation:
      'Adopt a documented internal retention timeframe (e.g., periodic review and deletion interval for unconverted inquiries in Google Forms, Google Sheets, and Gmail) so staff follow a consistent disposal schedule.',
  },
  {
    item: 'Confirm Accountable Privacy Personnel / DPO Designation',
    explanation:
      'No Data Protection Officer (DPO) name or NPC registration detail has been invented. Confirm internal responsibility for privacy requests (and evaluate NPC registration requirements under applicable NPC circulars as operations scale).',
  },
  {
    item: 'Optional Entity Registration & Business Address Disclosure',
    explanation:
      'No SEC, DTI, or business address details have been invented. Add verified entity registration details or office address only if you choose to publish them.',
  },
  {
    item: 'Align External Google Form & Google Apps Script Privacy Links',
    explanation:
      'Because your Google Form description and Google Apps Script acknowledgment email are managed separately in your Google account, update any privacy notice link inside those tools to point to your live `/privacy-notice` URL.',
  },
];
