import React, { useState } from 'react';
import {
  Building,
  CheckCircle2,
  Lock,
  Mail,
  MapPin,
  Monitor,
  Moon,
  Phone,
  Send,
  ShieldAlert,
  Sun,
} from 'lucide-react';
import { Language, ThemePreference } from '../types/ma';
import { UIStrings } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface ContactAndFooterProps {
  lang: Language;
  setLang: (l: Language) => void;
  themePref: ThemePreference;
  setThemePref: (pref: ThemePreference) => void;
  t: UIStrings;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  lang,
  setLang,
  themePref,
  setThemePref,
  t,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [mandateIdx, setMandateIdx] = useState(0);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [estimatedValue, setEstimatedValue] = useState('$25M – $80M');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Private Mandate Consultation Section */}
      <section
        id="contact"
        className="py-20 lg:py-28 border-t dcc-divider dcc-section-alt relative"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Info & Regional Desks */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <p className="text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
                  {t.contact.eyebrow}
                </p>
                <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl font-semibold dcc-text-primary leading-tight">
                  {t.contact.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed dcc-text-muted">{t.contact.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-mono-finance uppercase tracking-wider dcc-text-gold font-semibold">
                  {t.contact.desksTitle}
                </h3>
                {t.contact.desks.map((desk, i) => (
                  <div key={i} className="rounded-xl dcc-surface p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm dcc-text-primary flex items-center gap-2">
                        <Building className="h-4 w-4 dcc-text-gold" />
                        {desk.city}
                      </span>
                    </div>
                    <p className="text-xs dcc-text-muted flex items-start gap-1.5 pt-1">
                      <MapPin className="h-3.5 w-3.5 dcc-text-gold shrink-0 mt-0.5" />
                      <span>{desk.address}</span>
                    </p>
                    <p className="text-[11px] font-mono-finance font-medium dcc-text-gold pt-0.5">
                      {desk.deskType}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Institutional Channels */}
              <div className="rounded-xl dcc-surface-gold p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold dcc-text-primary">
                  <Lock className="h-4 w-4 dcc-text-gold" />
                  <span>{t.contact.confidentialPromiseTitle}</span>
                </div>
                <p className="text-xs leading-relaxed dcc-text-muted">
                  {t.contact.confidentialPromiseDesc}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-finance dcc-text-secondary">
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 dcc-text-gold" />
                    mandates@daichung.capital
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 dcc-text-gold" />
                    +84 (0) 28 3888 9999
                  </span>
                </div>
              </div>
            </div>

            {/* Right Encrypted Mandate Intake Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-2xl p-6 sm:p-9">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full dcc-badge-emerald">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold dcc-text-primary">
                      {t.contact.form.submittedTitle}
                    </h3>
                    <p className="max-w-lg mx-auto text-sm dcc-text-secondary leading-relaxed">
                      {t.contact.form.submittedDesc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer mt-4 rounded-lg dcc-badge-gold px-5 py-2.5 text-xs font-semibold"
                    >
                      {lang === 'vi'
                        ? 'Gửi thêm yêu cầu khác'
                        : lang === 'zh'
                        ? '继续提交新委托'
                        : 'Submit another mandate'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium dcc-text-secondary mb-1.5">
                        {t.contact.form.mandateType}
                      </label>
                      <select
                        value={mandateIdx}
                        onChange={(e) => setMandateIdx(Number(e.target.value))}
                        className="w-full rounded-lg dcc-input px-4 py-3 text-xs sm:text-sm"
                      >
                        {t.contact.form.mandateOptions.map((opt, idx) => (
                          <option key={idx} value={idx}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.name}
                        </label>
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.company}
                        </label>
                        <input
                          required
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.position}
                        </label>
                        <input
                          type="text"
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.estimatedValue}
                        </label>
                        <input
                          type="text"
                          value={estimatedValue}
                          onChange={(e) => setEstimatedValue(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm font-mono-finance font-semibold dcc-text-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.email}
                        </label>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs dcc-text-secondary mb-1">
                          {t.contact.form.phone}
                        </label>
                        <input
                          required
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs dcc-text-secondary mb-1">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient py-4 text-sm font-semibold shadow-[0_8px_28px_rgba(201,164,97,0.28)] transition-transform hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" />
                      <span>{t.contact.form.submit}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="border-t dcc-divider dcc-footer pt-16 pb-12 text-xs dcc-text-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b dcc-divider">
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo subtitle={t.brandSub} />
              <p className="leading-relaxed dcc-text-muted pr-4">{t.footer.description}</p>

              {/* Footer Quick Language & Theme Controls */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {(['vi', 'en', 'zh'] as Language[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`cursor-pointer rounded px-2.5 py-1 text-[11px] font-mono-finance transition-colors ${
                      lang === code ? 'dcc-badge-gold font-semibold' : 'dcc-inset dcc-text-muted'
                    }`}
                  >
                    {code === 'vi' ? 'VI · Tiếng Việt' : code === 'en' ? 'EN · English' : 'ZH · 中文'}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {(
                  [
                    {
                      key: 'system' as ThemePreference,
                      icon: Monitor,
                      label: lang === 'vi' ? 'Theo máy' : lang === 'zh' ? '跟随系统' : 'System',
                    },
                    {
                      key: 'light' as ThemePreference,
                      icon: Sun,
                      label: lang === 'vi' ? 'Sáng' : lang === 'zh' ? '浅色' : 'Light',
                    },
                    {
                      key: 'dark' as ThemePreference,
                      icon: Moon,
                      label: lang === 'vi' ? 'Tối' : lang === 'zh' ? '深色' : 'Dark',
                    },
                  ] as const
                ).map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setThemePref(m.key)}
                      className={`cursor-pointer inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] transition-colors ${
                        themePref === m.key
                          ? 'dcc-badge-gold font-semibold'
                          : 'dcc-inset dcc-text-muted'
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      <span>{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-mono-finance text-[11px] uppercase tracking-wider dcc-text-gold font-semibold">
                {t.footer.colPlatform}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#pipeline" className="hover:underline">
                    {t.pipeline.sectors.real_estate}
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:underline">
                    {t.pipeline.sectors.industrial}
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:underline">
                    {t.pipeline.sectors.manufacturing}
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:underline">
                    {t.pipeline.sectors.healthcare}
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:underline">
                    {t.pipeline.sectors.energy}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono-finance text-[11px] uppercase tracking-wider dcc-text-gold font-semibold">
                {t.footer.colSolutions}
              </h4>
              <ul className="space-y-2">
                {t.advisory.cards.map((c) => (
                  <li key={c.code}>
                    <a href="#advisory" className="hover:underline">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono-finance text-[11px] uppercase tracking-wider dcc-text-gold font-semibold">
                {t.footer.colCompliance}
              </h4>
              <ul className="space-y-2">
                {t.footer.complianceItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--gold-accent)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institutional Legal Disclaimer */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-2.5 rounded-xl dcc-surface p-4 text-[11px] leading-relaxed dcc-text-muted">
              <ShieldAlert className="h-4 w-4 dcc-text-gold shrink-0 mt-0.5" />
              <p>{t.footer.disclaimer}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] dcc-text-subtle">
              <p>{t.footer.copyright}</p>
              <p className="font-mono-finance dcc-text-muted">
                DAICHUNGCAPITAL · M&A DEAL & VDR PLATFORM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
