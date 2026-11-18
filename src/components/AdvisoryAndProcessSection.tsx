import React from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Globe2,
  Layers,
  Shield,
  Workflow,
} from 'lucide-react';
import { ClosedTombstone, Language } from '../types/ma';
import { UIStrings } from '../i18n/translations';

interface AdvisoryAndProcessSectionProps {
  lang: Language;
  t: UIStrings;
  tombstones: ClosedTombstone[];
}

export const AdvisoryAndProcessSection: React.FC<AdvisoryAndProcessSectionProps> = ({
  lang,
  t,
  tombstones,
}) => {
  const icons = [Briefcase, Globe2, Layers, Shield];

  return (
    <>
      {/* 1. Bespoke Investment Banking & M&A Product Capabilities */}
      <section
        id="advisory"
        className="py-20 lg:py-28 border-t dcc-divider dcc-section-alt relative"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
              {t.advisory.eyebrow}
            </p>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl lg:text-[44px] font-semibold dcc-text-primary leading-tight">
              {t.advisory.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base dcc-text-muted leading-relaxed">
              {t.advisory.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.advisory.cards.map((card, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={card.code}
                  className="glass-panel rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-finance text-xs tracking-wider dcc-text-gold font-semibold">
                      {card.code}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg dcc-badge-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-semibold dcc-text-primary">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed dcc-text-muted">{card.desc}</p>

                  <ul className="mt-5 space-y-2.5 pt-5 border-t dcc-divider text-xs sm:text-[13px] dcc-text-secondary">
                    {card.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 dcc-text-gold mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Standardized 5-Stage Institutional M&A Process */}
      <section
        id="process"
        className="py-20 lg:py-28 border-t dcc-divider dcc-page institutional-grid-bg"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
              <Workflow className="h-3.5 w-3.5" />
              <span>{t.process.eyebrow}</span>
            </p>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl lg:text-[44px] font-semibold dcc-text-primary">
              {t.process.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base dcc-text-muted leading-relaxed">
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {t.process.steps.map((st, idx) => (
              <div
                key={st.step}
                className="relative flex flex-col justify-between rounded-2xl dcc-surface-gold p-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md dcc-badge-gold px-2.5 py-1 font-mono-finance text-[11px] font-semibold">
                      {st.step}
                    </span>
                    <span className="font-serif-luxury text-2xl font-bold dcc-text-subtle opacity-45">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="font-mono-finance text-[10px] tracking-widest dcc-text-gold uppercase font-semibold">
                    {st.tag}
                  </p>
                  <h3 className="mt-1.5 font-serif-luxury text-xl font-semibold dcc-text-primary leading-snug">
                    {st.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed dcc-text-muted">{st.desc}</p>
                </div>

                <div className="mt-5 pt-3.5 border-t dcc-divider text-[11px] font-semibold dcc-text-emerald">
                  {st.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Three-Pillar Capital Ecosystem */}
      <section id="ecosystem" className="py-20 lg:py-28 border-t dcc-divider dcc-section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
              {t.ecosystem.eyebrow}
            </p>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl lg:text-[44px] font-semibold dcc-text-primary">
              {t.ecosystem.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base dcc-text-muted">{t.ecosystem.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {t.ecosystem.roles.map((role, idx) => (
              <div
                key={role.id}
                className={`flex flex-col justify-between rounded-2xl p-7 transition-all ${
                  idx === 1 ? 'dcc-surface-gold ring-1 ring-[#C9A461]/35' : 'dcc-surface'
                }`}
              >
                <div>
                  <span className="inline-block rounded-full dcc-badge-gold px-3 py-1 font-mono-finance text-[10.5px] font-semibold">
                    {role.badge}
                  </span>

                  <h3 className="mt-4 font-serif-luxury text-2xl font-semibold dcc-text-primary leading-snug">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm dcc-text-muted">{role.subtitle}</p>

                  <ul className="mt-6 space-y-3 pt-5 border-t dcc-divider text-xs sm:text-[13px] dcc-text-secondary">
                    {role.benefits.map((bf, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 dcc-text-emerald shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold transition-all ${
                      idx === 1
                        ? 'bg-gold-gradient'
                        : 'dcc-badge-gold hover:opacity-85'
                    }`}
                  >
                    <span>{role.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closed Tombstones & Trilingual Cross-Border Corridor Advantage */}
      <section id="tombstones" className="py-20 lg:py-28 border-t dcc-divider dcc-page">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
              {t.tombstones.eyebrow}
            </p>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl lg:text-[44px] font-semibold dcc-text-primary">
              {t.tombstones.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base dcc-text-muted">{t.tombstones.subtitle}</p>
          </div>

          {/* Tombstones Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {tombstones.map((tb) => (
              <div
                key={tb.code}
                className="flex flex-col justify-between rounded-2xl dcc-surface-gold p-6 text-center"
              >
                <div>
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full dcc-badge-gold">
                    <Award className="h-4 w-4" />
                  </div>
                  <p className="font-mono-finance text-[10px] tracking-widest dcc-text-muted">
                    {tb.code}
                  </p>
                  <p className="mt-3 font-serif-luxury text-3xl font-bold text-gold-gradient">
                    {tb.valueUSD}
                  </p>
                  <p className="mt-1 font-mono-finance text-[11px] font-semibold dcc-text-emerald">
                    {tb.corridor}
                  </p>

                  <div
                    className="my-4 h-px w-full"
                    style={{
                      background:
                        'linear-gradient(to right, transparent, var(--gold-border-strong), transparent)',
                    }}
                  />

                  <h4 className="text-sm font-semibold dcc-text-primary">{tb.sector[lang]}</h4>
                  <p className="mt-1 text-[11.5px] font-medium dcc-text-gold">
                    {tb.dealType[lang]}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed dcc-text-muted">
                    {tb.description[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t dcc-divider font-serif-luxury text-xs italic dcc-text-secondary">
                  Sole Advisor · DaiChungCapital
                </div>
              </div>
            ))}
          </div>

          {/* Trilingual Execution Banner */}
          <div className="rounded-2xl glass-panel p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono-finance font-semibold dcc-text-gold mb-2">
                <Globe2 className="h-4 w-4" />
                <span>TIẾNG VIỆT · ENGLISH · 简体中文</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold dcc-text-primary">
                {t.tombstones.corridorsTitle}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed dcc-text-secondary">
                {t.tombstones.corridorsDesc}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2.5 font-mono-finance text-xs font-medium">
              <span className="rounded-lg dcc-badge-gold px-3.5 py-2">VN ⇄ SG</span>
              <span className="rounded-lg dcc-badge-gold px-3.5 py-2">VN ⇄ CN / HK / TW</span>
              <span className="rounded-lg dcc-badge-gold px-3.5 py-2">VN ⇄ JP / KR</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
