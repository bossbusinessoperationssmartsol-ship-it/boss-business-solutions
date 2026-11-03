import React, { useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { SITE_INTEGRATIONS } from '../config/siteIntegrations';

const OFFICIAL_PLAIN_SIGNATURE = `BOSS. | Business Advisory Team
Business Operations & Smart Solutions
Be Smart. Be Compliant. Be the BOSS.
bossbusinessoperationssmartsol@gmail.com
0948 484 5114`;

const OFFICIAL_HTML_SIGNATURE = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top: 24px; padding-top: 18px; border-top: 2px solid #D6B36A; width: 100%; max-width: 560px; font-family: Arial, Helvetica, sans-serif;">
  <tr>
    <td style="padding: 0; line-height: 1.55;">
      <div style="font-size: 15px; font-weight: 700; color: #142B3B; margin: 0 0 2px 0;">BOSS. | Business Advisory Team</div>
      <div style="font-size: 13.5px; font-weight: 600; color: #142B3B; margin: 0 0 4px 0;">Business Operations &amp; Smart Solutions</div>
      <div style="font-size: 13px; font-style: italic; color: #087F72; margin: 0 0 10px 0;">Be Smart. Be Compliant. Be the BOSS.</div>
      <div style="font-size: 13px; color: #142B3B; margin: 0 0 2px 0;"><a href="mailto:bossbusinessoperationssmartsol@gmail.com" style="color: #087F72; text-decoration: none;">bossbusinessoperationssmartsol@gmail.com</a></div>
      <div style="font-size: 13px; color: #142B3B; margin: 0;"><a href="tel:+639484845114" style="color: #142B3B; text-decoration: none;">0948 484 5114</a></div>
    </td>
  </tr>
</table>`;

interface FreePublishingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreePublishingGuideModal: React.FC<
  FreePublishingGuideModalProps
> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<'plain' | 'html' | null>(null);

  if (!isOpen) return null;

  const handleCopySignature = async (type: 'plain' | 'html') => {
    try {
      await navigator.clipboard.writeText(
        type === 'html' ? OFFICIAL_HTML_SIGNATURE : OFFICIAL_PLAIN_SIGNATURE
      );
      setCopiedType(type);
      window.setTimeout(() => setCopiedType(null), 2400);
    } catch {
      setCopiedType(null);
    }
  };

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
                so it points to{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1 rounded">
                  {SITE_INTEGRATIONS.siteBaseUrl}
                  {SITE_INTEGRATIONS.privacyNoticePath}
                </code>
                .
              </li>
            </ol>
          </div>

          {/* 2. Update Privacy Notice Link & Signature in Google Apps Script */}
          <div className="p-5 rounded-xl bg-white border border-[#142B3B]/10 space-y-3">
            <h4 className="font-display text-lg font-semibold text-[#142B3B]">
              2. Google Apps Script — Privacy Link &amp; Acknowledgment Signature
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Open your linked Google Sheet &rarr; click{' '}
                <strong>Extensions &rarr; Apps Script</strong>.
              </li>
              <li>
                Ensure any privacy notice URL points to{' '}
                <code className="font-mono text-xs bg-[#EFEFE9] px-1.5 py-0.5 rounded">
                  {SITE_INTEGRATIONS.siteBaseUrl}
                  {SITE_INTEGRATIONS.privacyNoticePath}
                </code>
                .
              </li>
              <li>
                Replace <code className="font-mono text-xs">BOSS. | Client Relations</code>{' '}
                with <code className="font-mono text-xs">BOSS. | Business Advisory Team</code>{' '}
                using the official acknowledgment email signature below, then click{' '}
                <strong>Save project</strong>:
              </li>
            </ol>

            <div className="rounded-lg bg-[#F7F8F5] border border-[#142B3B]/12 p-4">
              <div className="border-t-2 border-[#D6B36A] pt-3 space-y-0.5 text-xs sm:text-[13px] leading-relaxed">
                <p className="font-bold text-[#142B3B] text-sm">
                  BOSS. | Business Advisory Team
                </p>
                <p className="font-semibold text-[#142B3B]">
                  Business Operations &amp; Smart Solutions
                </p>
                <p className="italic text-[#087F72] pb-1.5">
                  Be Smart. Be Compliant. Be the BOSS.
                </p>
                <p className="text-[#087F72]">
                  {SITE_INTEGRATIONS.businessEmail}
                </p>
                <p className="font-mono tabular-nums text-[#142B3B]">
                  {SITE_INTEGRATIONS.mobileDisplay}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-[#142B3B]/10 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleCopySignature('html')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#142B3B] hover:bg-[#087F72] rounded-md transition-colors cursor-pointer"
                >
                  {copiedType === 'html' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied HTML Signature</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy HTML Signature</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => handleCopySignature('plain')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#142B3B] bg-white border border-[#142B3B]/20 hover:border-[#087F72] hover:text-[#087F72] rounded-md transition-colors cursor-pointer"
                >
                  {copiedType === 'plain' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#087F72]" />
                      <span>Copied Plain Text</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Plain-Text Signature</span>
                    </>
                  )}
                </button>
              </div>
            </div>
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
