import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Download,
  FileLock2,
  FileText,
  Lock,
  MapPin,
  ShieldCheck,
  Unlock,
  Users,
  X,
} from 'lucide-react';
import { Language, MAMandate } from '../types/ma';
import { UIStrings } from '../i18n/translations';

interface DealDetailModalProps {
  deal: MAMandate | null;
  initialTab?: 'overview' | 'vdr' | 'ndaLoi';
  lang: Language;
  t: UIStrings;
  onClose: () => void;
}

export const DealDetailModal: React.FC<DealDetailModalProps> = ({
  deal,
  initialTab = 'overview',
  lang,
  t,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'vdr' | 'ndaLoi'>(initialTab);
  const [ndaSubmitted, setNdaSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [formState, setFormState] = useState({
    fullName: '',
    organization: '',
    roleIdx: 0,
    email: '',
    phone: '',
    capitalCapacity: '$30M - $100M',
    intentIdx: 0,
    agreed: true,
  });

  useEffect(() => {
    setActiveTab(initialTab);
    setNdaSubmitted(false);
  }, [deal, initialTab]);

  if (!deal) return null;

  const handleNdaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setRefCode(`VDR-DCC-${randomNum}`);
    setNdaSubmitted(true);
  };

  const handleDownloadBlindTeaser = () => {
    const content = [
      '====================================================================',
      'DAICHUNGCAPITAL — INSTITUTIONAL CONFIDENTIAL BLIND TEASER',
      `VDR Reference: ${refCode || 'PRELIMINARY'}`,
      `Mandate Code : ${deal.code} (${deal.codename[lang]})`,
      '====================================================================',
      '',
      `TITLE        : ${deal.title[lang]}`,
      `LOCATION     : ${deal.location[lang]}`,
      `TICKET SIZE  : ${deal.ticketSizeUSD}`,
      `STAKE OFFERED: ${deal.equityOffered}`,
      `TARGET IRR   : ${deal.targetIRR}`,
      `SCALE/METRIC : ${deal.ebitdaOrScale[lang]} (${deal.valuationMultiple})`,
      '',
      '--- EXECUTIVE SUMMARY ---',
      deal.summary[lang],
      '',
      '--- INVESTMENT HIGHLIGHTS ---',
      ...deal.highlights[lang].map((h, i) => `${i + 1}. ${h}`),
      '',
      '--- VERIFIED LEGAL & AUDIT CHECKLIST ---',
      ...deal.legalChecklist[lang].map((c) => `[VERIFIED] ${c}`),
      '',
      '--- VIRTUAL DATA ROOM (VDR) DOSSIER INDEX ---',
      ...deal.vdrDocuments[lang],
      '',
      '--------------------------------------------------------------------',
      'CONFIDENTIALITY NOTICE: Distributed exclusively by DaiChungCapital.',
      'Ho Chi Minh City · Hanoi · Singapore · Greater China Desk',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${deal.code}-Blind-Teaser-${lang.toUpperCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      style={{ backgroundColor: 'var(--bg-backdrop)' }}
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        style={{
          backgroundColor: 'var(--bg-modal)',
          borderColor: 'var(--gold-border-strong)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div
          className="border-b dcc-divider px-6 py-5 flex items-start justify-between gap-4"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-finance">
              <span className="dcc-text-gold uppercase tracking-wider font-semibold">
                {t.modal.confidentialHeader}
              </span>
              <span className="opacity-30">•</span>
              <span className="rounded dcc-badge-gold px-2 py-0.5 font-medium">{deal.code}</span>
              <span className="rounded dcc-badge-emerald px-2 py-0.5 font-medium">
                {t.pipeline.stages[deal.stage]}
              </span>
            </div>

            <h3 className="mt-2 font-serif-luxury text-2xl sm:text-3xl font-semibold dcc-text-primary">
              {deal.title[lang]}
            </h3>

            <p className="mt-1 flex items-center gap-1.5 text-xs dcc-text-muted">
              <MapPin className="h-3.5 w-3.5 dcc-text-gold" />
              <span>{deal.location[lang]}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg dcc-inset p-2 dcc-text-muted hover:opacity-80 transition-opacity"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Key Financial Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 border-b dcc-divider dcc-inset px-6 py-3.5 gap-4 text-xs">
          <div>
            <span className="block text-[10px] uppercase dcc-text-subtle">
              {t.pipeline.labels.ticketSize}
            </span>
            <span className="font-mono-finance font-semibold dcc-text-primary">
              {deal.ticketSizeUSD}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase dcc-text-subtle">
              {t.pipeline.labels.equityOffered}
            </span>
            <span className="font-mono-finance font-semibold dcc-text-gold">
              {deal.equityOffered}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase dcc-text-subtle">
              {t.pipeline.labels.targetIRR}
            </span>
            <span className="font-mono-finance font-semibold dcc-text-emerald">
              {deal.targetIRR}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase dcc-text-subtle">
              {t.pipeline.labels.scaleOrEbitda}
            </span>
            <span className="font-mono-finance dcc-text-secondary">
              {deal.ebitdaOrScale[lang]}
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-[10px] uppercase dcc-text-subtle">
              {t.pipeline.labels.multiple}
            </span>
            <span className="font-mono-finance font-medium dcc-text-gold">
              {deal.valuationMultiple}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex border-b dcc-divider px-6 gap-2 overflow-x-auto"
          style={{ backgroundColor: 'var(--bg-surface)' }}
        >
          {(['overview', 'vdr', 'ndaLoi'] as const).map((tabKey) => {
            const active = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                type="button"
                onClick={() => setActiveTab(tabKey)}
                className={`cursor-pointer shrink-0 border-b-2 px-4 py-3.5 text-xs sm:text-sm font-medium transition-colors ${
                  active ? 'dcc-text-gold font-semibold' : 'border-transparent dcc-text-muted'
                }`}
                style={{
                  borderBottomColor: active ? 'var(--gold-accent)' : 'transparent',
                }}
              >
                {t.modal.tabs[tabKey]}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <>
              <div>
                <h4 className="text-xs font-mono-finance uppercase tracking-wider dcc-text-gold font-semibold mb-2">
                  {t.modal.execSummary}
                </h4>
                <p className="text-sm leading-relaxed dcc-text-secondary dcc-inset p-4 rounded-xl">
                  {deal.summary[lang]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl dcc-surface p-5">
                  <h4 className="text-xs font-mono-finance uppercase tracking-wider dcc-text-gold font-semibold mb-3.5">
                    {t.modal.investmentHighlights}
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] dcc-text-secondary">
                    {deal.highlights[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--gold-accent)' }}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl dcc-badge-emerald p-5">
                  <h4 className="text-xs font-mono-finance uppercase tracking-wider dcc-text-emerald font-semibold mb-3.5 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{t.modal.legalReadiness}</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-[13px] dcc-text-primary">
                    {deal.legalChecklist[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 dcc-text-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl dcc-surface-gold p-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 dcc-text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono-finance uppercase dcc-text-gold font-semibold">
                      {t.modal.idealBuyer}
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm dcc-text-secondary">
                      {deal.idealBuyerProfile[lang]}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('ndaLoi')}
                  className="cursor-pointer shrink-0 rounded-lg bg-gold-gradient px-5 py-2.5 text-xs font-semibold"
                >
                  {t.pipeline.labels.requestVdrBtn}
                </button>
              </div>
            </>
          )}

          {activeTab === 'vdr' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-serif-luxury text-xl dcc-text-primary font-semibold">
                  {t.modal.vdrTitle}
                </h4>
                <p className="mt-1 text-xs sm:text-sm dcc-text-muted">{t.modal.vdrLockedNote}</p>
              </div>

              <div className="space-y-2.5">
                {deal.vdrDocuments[lang].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl dcc-inset px-4 py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      {ndaSubmitted ? (
                        <FileText className="h-4 w-4 dcc-text-emerald shrink-0" />
                      ) : (
                        <FileLock2 className="h-4 w-4 dcc-text-gold shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm dcc-text-primary font-medium">{doc}</span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded px-2.5 py-1 text-[10.5px] font-mono-finance ${
                        ndaSubmitted ? 'dcc-badge-emerald' : 'dcc-badge-gold'
                      }`}
                    >
                      {ndaSubmitted ? (
                        <>
                          <Unlock className="h-3 w-3" /> VDR PENDING REVIEW
                        </>
                      ) : (
                        <>
                          <Lock className="h-3 w-3" /> NDA LOCKED
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {!ndaSubmitted && (
                <button
                  type="button"
                  onClick={() => setActiveTab('ndaLoi')}
                  className="cursor-pointer w-full rounded-xl bg-gold-gradient py-3.5 text-xs sm:text-sm font-semibold"
                >
                  {t.modal.unlockBtn}
                </button>
              )}
            </div>
          )}

          {activeTab === 'ndaLoi' && (
            <div>
              {ndaSubmitted ? (
                <div className="rounded-2xl dcc-badge-emerald p-6 sm:p-8 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full dcc-surface dcc-text-emerald">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <p className="font-mono-finance text-xs font-semibold dcc-text-gold">{refCode}</p>
                  <h4 className="font-serif-luxury text-2xl font-semibold dcc-text-primary">
                    {t.modal.fields.successTitle}
                  </h4>
                  <p className="max-w-xl mx-auto text-xs sm:text-sm dcc-text-secondary leading-relaxed">
                    {t.modal.fields.successDesc}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleDownloadBlindTeaser}
                      className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-6 py-3 text-xs sm:text-sm font-semibold"
                    >
                      <Download className="h-4 w-4" />
                      <span>{t.modal.fields.downloadTeaserBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNdaSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-semibold dcc-text-primary">
                      {t.modal.ndaFormTitle}
                    </h4>
                    <p className="mt-1 text-xs dcc-text-muted">{t.modal.ndaFormSubtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.fullName}
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.organization}
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState({ ...formState, organization: e.target.value })
                        }
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.roleType}
                      </label>
                      <select
                        value={formState.roleIdx}
                        onChange={(e) =>
                          setFormState({ ...formState, roleIdx: Number(e.target.value) })
                        }
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-xs sm:text-sm"
                      >
                        {t.modal.fields.roleOptions.map((opt, i) => (
                          <option key={i} value={i}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.intentType}
                      </label>
                      <select
                        value={formState.intentIdx}
                        onChange={(e) =>
                          setFormState({ ...formState, intentIdx: Number(e.target.value) })
                        }
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-xs sm:text-sm"
                      >
                        {t.modal.fields.intentOptions.map((opt, i) => (
                          <option key={i} value={i}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.email}
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.modal.fields.phone}
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2.5 pt-2 text-xs dcc-text-secondary cursor-pointer">
                    <input
                      required
                      type="checkbox"
                      checked={formState.agreed}
                      onChange={(e) => setFormState({ ...formState, agreed: e.target.checked })}
                      className="mt-0.5 accent-[#C9A461]"
                    />
                    <span>{t.modal.fields.agreeNda}</span>
                  </label>

                  <button
                    type="submit"
                    className="cursor-pointer w-full rounded-xl bg-gold-gradient py-3.5 text-xs sm:text-sm font-semibold shadow-[0_6px_24px_rgba(201,164,97,0.28)]"
                  >
                    {t.modal.fields.submitNda}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
