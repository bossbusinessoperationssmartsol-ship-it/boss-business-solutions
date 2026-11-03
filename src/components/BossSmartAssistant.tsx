import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  MessageSquareText,
  RotateCcw,
  Send,
  X,
} from 'lucide-react';
import { BossLogo } from './BossLogo';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface BossSmartAssistantProps {
  onOpenPrivacyNotice: () => void;
}

type TopicKey =
  | 'registration'
  | 'bir_tax'
  | 'bookkeeping'
  | 'payroll_statutory'
  | 'closure_updates'
  | 'reporting'
  | 'digital_systems'
  | 'consultation'
  | 'talk_to_boss';

interface AssistantReply {
  title: string;
  body: string;
  disclaimer?: string;
  showInquiryLink: boolean;
}

interface ChatEntry {
  id: string;
  sender: 'assistant' | 'visitor';
  text: string;
  disclaimer?: string;
  showInquiryLink?: boolean;
}

const TOPIC_BUTTONS: { key: TopicKey; label: string }[] = [
  { key: 'registration', label: 'Business Registration' },
  { key: 'bir_tax', label: 'BIR Tax & Forms' },
  { key: 'bookkeeping', label: 'Bookkeeping & Cleanup' },
  { key: 'payroll_statutory', label: 'Payroll & SSS/PHIC/HDMF' },
  { key: 'closure_updates', label: 'Amendments & Closure' },
  { key: 'reporting', label: 'Financial Reporting' },
  { key: 'digital_systems', label: 'Accounting Systems' },
  { key: 'talk_to_boss', label: 'Talk to BOSS.' },
];

const TOPIC_REPLIES: Record<TopicKey, AssistantReply> = {
  registration: {
    title: 'Business Registration',
    body: "Nagsisimula ka pa lang o ready nang i-formalize ang negosyo mo? Depending on your ownership structure, registration generally involves DTI (for sole proprietorships) or SEC (for partnerships, corporations, or OPCs), alongside applicable local government permits and BIR registration. We help prepare your documentation and explain the sequence clearly from day one.",
    disclaimer:
      'General overview only—specific documentary requirements depend on your business structure and locality.',
    showInquiryLink: true,
  },
  bir_tax: {
    title: 'BIR Tax Compliance',
    body: 'Para iwas stress tuwing filing season, everything starts with understanding the registered tax types on your BIR Certificate of Registration (COR) and keeping organized supporting records. Even during slow or zero-sales periods, active registrations generally carry filing obligations.',
    disclaimer:
      'For accuracy, we review your actual registration profile rather than giving generic tax advice or unverified deadlines.',
    showInquiryLink: true,
  },
  bookkeeping: {
    title: 'Bookkeeping & Accounting',
    body: 'Malakas ang benta pero mahirap makita kung saan napupunta ang pera? Consistent monthly bookkeeping, backlog cleanup, bank/e-wallet reconciliations, and AR/AP tracking give you a reliable picture of your finances.',
    showInquiryLink: true,
  },
  payroll_statutory: {
    title: 'Payroll & Statutory Remittances',
    body: 'We assist employers with confidential semi-monthly or monthly payroll computation, SSS, PhilHealth, and Pag-IBIG contribution schedules, monthly BIR Form 1601-C returns, and year-end Form 1604-C / Form 2316 annualization.',
    disclaimer:
      'Employer contribution rates follow current official SSS, PhilHealth, and Pag-IBIG circulars.',
    showInquiryLink: true,
  },
  closure_updates: {
    title: 'Registration Amendments & Business Closure',
    body: 'Stopping operations does not automatically stop BIR or LGU obligations. Whether you need to amend your registered address/tax types (Form 1905) or formally retire and close an inactive business with the LGU and BIR, BOSS. helps organize your clearance checklist and open-case review.',
    showInquiryLink: true,
  },
  reporting: {
    title: 'Financial Reporting',
    body: "Financial statements shouldn't leave you with more questions! We prepare clear Financial & Management Reports—such as your Profit & Loss, Balance Sheet, and cash flow summaries—and walk you through what the numbers mean in plain business language.",
    showInquiryLink: true,
  },
  digital_systems: {
    title: 'Digital Accounting Solutions',
    body: 'Kung nakakapagod na ang sabog-sabog na spreadsheets at mano-manong listahan, our Smart Accounting Systems service helps you set up organized digital bookkeeping workflows, accounting software, and clean financial dashboards.',
    showInquiryLink: true,
  },
  consultation: {
    title: 'Business Consultation',
    body: "Not sure yet which service fits best? Okay lang 'yan! Open our official Client Discovery Form in a new tab and tell us where your business stands—we'll review your concerns and reach out to coordinate next steps.",
    disclaimer:
      'Note: Submission of an inquiry does not constitute a confirmed consultation or professional engagement.',
    showInquiryLink: true,
  },
  talk_to_boss: {
    title: 'Talk to BOSS.',
    body: `Ready to connect? Click below to open our official BOSS. Client Discovery and Engagement Inquiry Form in a separate browser tab. You can also reach us via Email (${SITE_INTEGRATIONS.businessEmail}) or WhatsApp / Viber (${SITE_INTEGRATIONS.mobileDisplay}).`,
    showInquiryLink: true,
  },
};

const WELCOME_MESSAGE =
  'Hi there! 👋 Welcome to BOSS. Your business deserves clarity, confidence, and smarter solutions. How can we help you today?';

function matchKeywordToTopic(input: string): TopicKey | null {
  const q = input.toLowerCase();
  if (
    q.includes('close') ||
    q.includes('closure') ||
    q.includes('retire') ||
    q.includes('cancel') ||
    q.includes('amend') ||
    q.includes('1905')
  ) {
    return 'closure_updates';
  }
  if (
    q.includes('payroll') ||
    q.includes('salary') ||
    q.includes('sss') ||
    q.includes('philhealth') ||
    q.includes('pag-ibig') ||
    q.includes('pagibig') ||
    q.includes('hdmf') ||
    q.includes('1601-c') ||
    q.includes('2316')
  ) {
    return 'payroll_statutory';
  }
  if (
    q.includes('register') ||
    q.includes('dti') ||
    q.includes('sec') ||
    q.includes('opc') ||
    q.includes('permit') ||
    q.includes('mayor') ||
    q.includes('start')
  ) {
    return 'registration';
  }
  if (
    q.includes('bir') ||
    q.includes('tax') ||
    q.includes('vat') ||
    q.includes('ewt') ||
    q.includes('eopt') ||
    q.includes('2550') ||
    q.includes('0605') ||
    q.includes('2307') ||
    q.includes('sawt') ||
    q.includes('alphalist') ||
    q.includes('cor') ||
    q.includes('filing') ||
    q.includes('return') ||
    q.includes('deadline')
  ) {
    return 'bir_tax';
  }
  if (
    q.includes('bookkeep') ||
    q.includes('backlog') ||
    q.includes('cleanup') ||
    q.includes('ledger') ||
    q.includes('reconcil') ||
    q.includes('resibo') ||
    q.includes('receipt')
  ) {
    return 'bookkeeping';
  }
  if (
    q.includes('report') ||
    q.includes('statement') ||
    q.includes('profit') ||
    q.includes('kita') ||
    q.includes('benta') ||
    q.includes('margin')
  ) {
    return 'reporting';
  }
  if (
    q.includes('software') ||
    q.includes('digital') ||
    q.includes('excel') ||
    q.includes('spreadsheet') ||
    q.includes('dashboard') ||
    q.includes('system')
  ) {
    return 'digital_systems';
  }
  if (
    q.includes('consult') ||
    q.includes('call') ||
    q.includes('discover') ||
    q.includes('quote') ||
    q.includes('presyo') ||
    q.includes('price') ||
    q.includes('magkano')
  ) {
    return 'consultation';
  }
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('viber') ||
    q.includes('whatsapp') ||
    q.includes('facebook') ||
    q.includes('instagram') ||
    q.includes('talk') ||
    q.includes('inquir') ||
    q.includes('service')
  ) {
    return 'talk_to_boss';
  }
  return null;
}

export const BossSmartAssistant: React.FC<BossSmartAssistantProps> = ({
  onOpenPrivacyNotice,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatEntry[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: WELCOME_MESSAGE,
    },
  ]);

  const scrollEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleTopicSelect = (key: TopicKey) => {
    const selectedLabel =
      TOPIC_BUTTONS.find((b) => b.key === key)?.label ?? key;
    const reply = TOPIC_REPLIES[key];

    setMessages((prev) => [
      ...prev,
      {
        id: `v-${Date.now()}`,
        sender: 'visitor',
        text: selectedLabel,
      },
      {
        id: `a-${Date.now() + 1}`,
        sender: 'assistant',
        text: reply.body,
        disclaimer: reply.disclaimer,
        showInquiryLink: reply.showInquiryLink,
      },
    ]);
  };

  const handleKeywordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const matchedKey = matchKeywordToTopic(trimmed);
    setInputValue('');

    if (matchedKey) {
      const reply = TOPIC_REPLIES[matchedKey];
      setMessages((prev) => [
        ...prev,
        {
          id: `v-${Date.now()}`,
          sender: 'visitor',
          text: trimmed,
        },
        {
          id: `a-${Date.now() + 1}`,
          sender: 'assistant',
          text: reply.body,
          disclaimer: reply.disclaimer,
          showInquiryLink: reply.showInquiryLink,
        },
      ]);
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `v-${Date.now()}`,
        sender: 'visitor',
        text: trimmed,
      },
      {
        id: `a-${Date.now() + 1}`,
        sender: 'assistant',
        text: "Salamat sa tanong mo! Because I'm a rule-based guided FAQ assistant (rather than a live AI or tax advisor), I stick to verified topic guides so we never guess on your business details. Open our official Client Discovery Form in a new tab so the BOSS. team can assist you personally!",
        showInquiryLink: true,
      },
    ]);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: WELCOME_MESSAGE,
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div
          role="dialog"
          aria-label="BOSS. Smart Assistant"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-[395px] max-h-[78vh] rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/20 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Assistant Header */}
          <div className="bg-[#0D2130] text-[#F7F8F5] px-4 py-3.5 border-b border-[#D6B36A]/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <BossLogo size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  BOSS. Smart Assistant
                </p>
                <p className="text-[11px] text-[#D6B36A] truncate">
                  Guided FAQ Guide · Instant Answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#F7F8F5]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close BOSS. Smart Assistant"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#F7F8F5]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[340px]">
            {messages.map((entry) => (
              <div
                key={entry.id}
                className={`flex flex-col ${
                  entry.sender === 'visitor' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    entry.sender === 'visitor'
                      ? 'bg-[#142B3B] text-white rounded-br-xs'
                      : 'bg-white text-[#142B3B] border border-[#142B3B]/10 rounded-bl-xs shadow-2xs'
                  }`}
                >
                  <p>{entry.text}</p>

                  {entry.disclaimer && (
                    <p className="mt-2 pt-2 border-t border-[#142B3B]/10 text-[11px] text-[#142B3B]/60">
                      {entry.disclaimer}
                    </p>
                  )}

                  {entry.showInquiryLink && (
                    <div className="mt-3">
                      <a
                        href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#087F72] hover:bg-[#06675C] text-white text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap"
                      >
                        <span>START YOUR BUSINESS CONVERSATION</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Interactive Topic Buttons */}
            <div className="pt-1">
              <p className="text-[11px] font-medium text-[#142B3B]/60 mb-2">
                Choose a topic below:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TOPIC_BUTTONS.map((btn) => (
                  <button
                    key={btn.key}
                    type="button"
                    onClick={() => handleTopicSelect(btn.key)}
                    className="px-2.5 py-1.5 text-xs font-medium text-[#142B3B] bg-white hover:bg-[#087F72] hover:text-white border border-[#142B3B]/15 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            <div ref={scrollEndRef} />
          </div>

          {/* Rule-Based Keyword Input + Privacy Notice Link */}
          <div className="bg-white border-t border-[#142B3B]/10">
            <form
              onSubmit={handleKeywordSubmit}
              className="p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a topic (e.g., BIR, DTI, bookkeeping)..."
                aria-label="Ask a topic keyword"
                className="flex-1 px-3 py-2 min-h-[38px] text-xs rounded-lg bg-[#F7F8F5] border border-[#142B3B]/15 text-[#142B3B] placeholder:text-[#142B3B]/45 focus:outline-none focus:border-[#087F72]"
              />
              <button
                type="submit"
                aria-label="Send topic keyword"
                className="w-9 h-9 rounded-lg bg-[#142B3B] hover:bg-[#087F72] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="px-3 pb-2.5 flex items-center justify-between text-[11px] text-[#142B3B]/60">
              <span>Browser-local FAQ guide</span>
              <a
                href={SITE_INTEGRATIONS.privacyNoticeUrl}
                onClick={(e) => {
                  if (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !e.shiftKey &&
                    !e.altKey &&
                    e.button === 0
                  ) {
                    e.preventDefault();
                    setIsOpen(false);
                    onOpenPrivacyNotice();
                  }
                }}
                className="font-medium text-[#087F72] hover:underline"
              >
                Privacy Notice
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Assistant Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Open BOSS. Smart Assistant"
        className="inline-flex items-center gap-2.5 px-4 h-11 sm:h-12 rounded-full bg-[#0D2130] hover:bg-[#142B3B] text-white border border-[#D6B36A]/70 shadow-xl transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F72]"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs sm:text-sm font-semibold">Close</span>
          </>
        ) : (
          <>
            <MessageSquareText className="w-4 h-4 text-[#D6B36A]" />
            <span className="text-xs sm:text-sm font-semibold">
              BOSS. Smart Assistant
            </span>
          </>
        )}
      </button>
    </div>
  );
};
