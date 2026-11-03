import React from 'react';
import { X } from 'lucide-react';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

interface FreePublishingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreePublishingGuideModal: React.FC<
  FreePublishingGuideModalProps
> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="publishing-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D2130]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#F7F8F5] border border-[#142B3B]/15 p-6 sm:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#142B3B]/10">
          <div>
            <p className="text-xs font-semibold text-[#087F72] mb-1">
              BOSS. Owner Playbook · Launch &amp; Governance Checklist
            </p>
            <h3
              id="publishing-guide-title"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#142B3B]"
            >
              Google Form, Privacy Notice, Apps Script &amp; Hosting Guide
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close owner setup guide"
            className="w-10 h-10 rounded-lg border border-[#142B3B]/15 flex items-center justify-center text-[#142B3B] hover:bg-[#142B3B]/5 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6 text-sm text-[#142B3B]/85 leading-relaxed">
          {/* 1. Connected Official Google Form Verification */}
          <div className="p-5 rounded-xl bg-white border border-[#142B3B]/10 space-y-2.5">
            <h4 className="font-display text-lg font-semibold text-[#142B3B]">
              1. Verify Your Connected Official Google Form
            </h4>
            <p className="text-xs sm:text-sm">
              All inquiry buttons across the website open{' '}
              <a
                href={SITE_INTEGRATIONS.officialGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#087F72] underline break-all"
              >
                {SITE_INTEGRATIONS.officialGoogleFormUrl}
              </a>{' '}
              directly in a separate browser tab while keeping your BOSS.
              website open. After publishing, submit one live test inquiry and
              confirm:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                The response logs cleanly in your linked{' '}
                <strong>Google Sheets</strong> inquiry tracker.
              </li>
              <li>
                A notification arrives in{' '}
                <strong>{SITE_INTEGRATIONS.businessEmail}</strong>.
              </li>
              <li>
                In your Google Form description, update any privacy notice link
                so it points to your published{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1 rounded">
                  /privacy-notice
                </code>{' '}
                page.
              </li>
            </ol>
          </div>

          {/* 2. Update Privacy Notice Link in Google Apps Script */}
          <div className="p-5 rounded-xl bg-white border border-[#142B3B]/10 space-y-2.5">
            <h4 className="font-display text-lg font-semibold text-[#142B3B]">
              2. Update the Privacy Notice Link in Google Apps Script
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Open your linked Google Sheet &rarr; click{' '}
                <strong>Extensions &rarr; Apps Script</strong>.
              </li>
              <li>
                Press <kbd className="font-mono text-xs">Ctrl+F</kbd> (or{' '}
                <kbd className="font-mono text-xs">Cmd+F</kbd>) inside your{' '}
                <code className="font-mono text-xs">.gs</code> or HTML email
                template file to find any old privacy URL or placeholder.
              </li>
              <li>
                Replace it with your exact published URL ending in{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1.5 py-0.5 rounded">
                  /privacy-notice
                </code>
                .
              </li>
              <li>
                Click <strong>Save project</strong> (and redeploy only if your
                script uses a versioned deployment; standard{' '}
                <code className="font-mono text-xs">onFormSubmit</code> triggers
                use saved head code automatically), then run one test submission
                to verify the link inside the acknowledgment email.
              </li>
            </ol>
          </div>

          {/* 3. Free Hosting & Search Console */}
          <div className="p-5 rounded-xl bg-white border border-[#142B3B]/10 space-y-2.5">
            <h4 className="font-display text-lg font-semibold text-[#142B3B]">
              3. Publish Free on Cloudflare Pages &amp; Index in Google
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Confirm your Privacy Notice effective date and internal inquiry
                retention schedule prior to final launch.
              </li>
              <li>
                Deploy with Build command{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1.5 py-0.5 rounded">
                  npm run build
                </code>{' '}
                and Output directory{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1.5 py-0.5 rounded">
                  dist
                </code>{' '}
                (both <code className="font-mono text-xs">/</code> and{' '}
                <code className="font-mono text-xs">/privacy-notice</code> are
                pre-built for direct access).
              </li>
              <li>
                Update your final live domain in your sitemap and submit{' '}
                <code className="font-mono text-xs">/sitemap.xml</code> in{' '}
                <strong>Google Search Console</strong>.
              </li>
            </ol>
          </div>
        </div>

        <div className="pt-4 border-t border-[#142B3B]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
