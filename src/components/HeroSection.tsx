import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Lock,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { Language, MAMandate } from '../types/ma';
import { UIStrings } from '../i18n/translations';

interface HeroSectionProps {
  lang: Language;
  t: UIStrings;
  featuredDeals: MAMandate[];
  onSelectDeal: (deal: MAMandate) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  t,
  featuredDeals,
  onSelectDeal,
}) => {
  return (
    <section className="relative overflow-hidden border-b dcc-divider institutional-grid-bg pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Radial Champagne Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full blur-[130px] animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(201,164,97,0.16) 0%, rgba(201,164,97,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Executive Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 rounded-full dcc-badge-gold px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full animate-ping"
                style={{ backgroundColor: 'var(--gold-accent)' }}
              />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.12] tracking-tight dcc-text-primary">
              {t.hero.titleLine1}{' '}
              <span className="text-gold-gradient italic font-bold">{t.hero.titleHighlight}</span>{' '}
              {t.hero.titleLine2}
            </h1>

            <p className="max-w-2xl text-base sm:text-[17px] leading-relaxed dcc-text-muted font-normal">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#pipeline"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-semibold shadow-[0_8px_30px_rgba(201,164,97,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg dcc-surface-gold px-6 py-4 text-sm font-medium dcc-text-primary hover:opacity-90 transition-all"
              >
                <FileCheck2 className="h-4 w-4 dcc-text-gold" />
                <span>{t.hero.ctaSubmitMandate}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs dcc-text-muted pt-1">
              <ShieldCheck className="h-4 w-4 shrink-0 dcc-text-emerald" />
              <span>{t.hero.securityNote}</span>
            </div>
          </div>

          {/* Right Live Institutional Deal Desk Console */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b dcc-divider pb-4 mb-5">
                <div>
                  <p className="text-[10px] font-mono-finance uppercase tracking-[0.2em] dcc-text-gold font-semibold">
                    LIVE MANDATE DESK · VDR READY
                  </p>
                  <h2 className="mt-1 font-serif-luxury text-xl font-semibold dcc-text-primary">
                    {lang === 'vi'
                      ? 'Thương vụ M&A Trọng điểm Đang Mở'
                      : lang === 'zh'
                      ? '本期重点开放并购标的预览'
                      : 'Priority Active M&A Mandates'}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full dcc-badge-emerald px-2.5 py-1 text-[10.5px] font-mono-finance font-medium">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--emerald-text)' }}
                  />
                  LIVE VDR
                </span>
              </div>

              <div className="space-y-3.5">
                {featuredDeals.slice(0, 3).map((deal) => (
                  <button
                    key={deal.id}
                    type="button"
                    onClick={() => onSelectDeal(deal)}
                    className="cursor-pointer w-full text-left group rounded-xl dcc-surface p-4 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono-finance">
                      <span className="dcc-text-gold font-semibold">{deal.code}</span>
                      <span className="inline-flex items-center gap-1 dcc-text-emerald font-medium">
                        <CheckCircle2 className="h-3 w-3" />
                        {t.pipeline.stages[deal.stage]}
                      </span>
                    </div>

                    <h3 className="mt-1.5 text-sm font-semibold dcc-text-primary group-hover:opacity-80 transition-opacity line-clamp-1">
                      {deal.title[lang]}
                    </h3>

                    <div className="mt-3 grid grid-cols-3 gap-2 pt-2.5 border-t dcc-divider text-[11px]">
                      <div>
                        <span className="block dcc-text-subtle text-[10px]">
                          {t.pipeline.labels.ticketSize}
                        </span>
                        <span className="font-mono-finance font-semibold dcc-text-primary">
                          {deal.ticketSizeUSD}
                        </span>
                      </div>
                      <div>
                        <span className="block dcc-text-subtle text-[10px]">
                          {t.pipeline.labels.equityOffered}
                        </span>
                        <span className="font-mono-finance font-semibold dcc-text-gold">
                          {deal.equityOffered}
                        </span>
                      </div>
                      <div>
                        <span className="block dcc-text-subtle text-[10px]">
                          {t.pipeline.labels.targetIRR}
                        </span>
                        <span className="font-mono-finance font-semibold dcc-text-emerald">
                          {deal.targetIRR}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-lg dcc-inset px-3.5 py-2.5 text-[11px] dcc-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 dcc-text-gold" />
                  <span>VI · EN · 中文 Trilingual Deal Desk</span>
                </span>
                <a href="#pipeline" className="dcc-text-gold font-semibold hover:underline">
                  {lang === 'vi' ? 'Xem tất cả →' : lang === 'zh' ? '查看全部 →' : 'View all →'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Institutional Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 pt-10 border-t dcc-divider">
          {[
            {
              icon: TrendingUp,
              value: t.hero.stats.volumeValue,
              label: t.hero.stats.volumeLabel,
            },
            {
              icon: Building2,
              value: t.hero.stats.mandatesValue,
              label: t.hero.stats.mandatesLabel,
            },
            {
              icon: ShieldCheck,
              value: t.hero.stats.investorsValue,
              label: t.hero.stats.investorsLabel,
            },
            {
              icon: FileCheck2,
              value: t.hero.stats.closingValue,
              label: t.hero.stats.closingLabel,
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="rounded-xl dcc-surface p-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
                    {stat.value}
                  </span>
                  <Icon className="h-5 w-5 dcc-text-gold opacity-80" />
                </div>
                <p className="mt-1.5 text-xs sm:text-[13px] dcc-text-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
