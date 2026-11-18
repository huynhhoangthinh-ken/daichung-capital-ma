import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Filter,
  LayoutGrid,
  List,
  Lock,
  MapPin,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
} from 'lucide-react';
import {
  DealStageKey,
  DealStructureKey,
  Language,
  MAMandate,
  ResolvedTheme,
  SectorKey,
} from '../types/ma';
import { UIStrings } from '../i18n/translations';
import { MandateVisual } from './MandateVisual';

interface DealPipelineSectionProps {
  lang: Language;
  resolvedTheme: ResolvedTheme;
  t: UIStrings;
  mandates: MAMandate[];
  onSelectMandate: (deal: MAMandate, initialTab?: 'overview' | 'vdr' | 'ndaLoi') => void;
  onOpenDeployModal: () => void;
}

const SECTOR_KEYS: SectorKey[] = [
  'all',
  'real_estate',
  'industrial',
  'manufacturing',
  'hospitality',
  'healthcare',
  'energy',
];

const STRUCTURE_KEYS: DealStructureKey[] = [
  'all',
  'equity_acquisition',
  'asset_transfer',
  'jv_strategic',
  'growth_capital',
];

const STAGE_KEYS: DealStageKey[] = ['all', 'open_nda', 'in_vdr', 'accepting_loi', 'closing'];

export const DealPipelineSection: React.FC<DealPipelineSectionProps> = ({
  lang,
  resolvedTheme,
  t,
  mandates,
  onSelectMandate,
  onOpenDeployModal,
}) => {
  const [sector, setSector] = useState<SectorKey>('all');
  const [structure, setStructure] = useState<DealStructureKey>('all');
  const [stage, setStage] = useState<DealStageKey>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredMandates = useMemo(() => {
    return mandates.filter((m) => {
      if (sector !== 'all' && m.sector !== sector) return false;
      if (structure !== 'all' && m.structure !== structure) return false;
      if (stage !== 'all' && m.stage !== stage) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const haystack = [
          m.code,
          m.codename[lang],
          m.title[lang],
          m.location[lang],
          m.summary[lang],
          m.ticketSizeUSD,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [mandates, sector, structure, stage, query, lang]);

  const resetFilters = () => {
    setSector('all');
    setStructure('all');
    setStage('all');
    setQuery('');
  };

  return (
    <section id="pipeline" className="py-20 lg:py-28 dcc-page relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-mono-finance uppercase tracking-[0.22em] dcc-text-gold font-semibold">
              {t.pipeline.eyebrow}
            </p>
            <h2 className="mt-2 font-serif-luxury text-3xl sm:text-4xl lg:text-[44px] font-semibold dcc-text-primary leading-tight">
              {t.pipeline.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base dcc-text-muted leading-relaxed">
              {t.pipeline.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenDeployModal}
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 text-xs sm:text-sm font-semibold shadow-[0_6px_24px_rgba(201,164,97,0.25)] transition-transform hover:-translate-y-0.5"
            >
              <Plus className="h-4 w-4" />
              <span>{t.pipeline.deployBtn}</span>
            </button>
          </div>
        </div>

        {/* Multi-Dimensional Filter Console */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 mb-8 space-y-5">
          {/* Sector Pill Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {SECTOR_KEYS.map((secKey) => {
              const active = sector === secKey;
              return (
                <button
                  key={secKey}
                  type="button"
                  onClick={() => setSector(secKey)}
                  className={`cursor-pointer shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                    active
                      ? 'bg-gold-gradient font-semibold shadow-sm'
                      : 'dcc-inset dcc-text-secondary hover:opacity-85'
                  }`}
                >
                  {t.pipeline.sectors[secKey]}
                </button>
              );
            })}
          </div>

          {/* Search + Dropdowns + View Switcher */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 items-center pt-2 border-t dcc-divider">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 dcc-text-subtle" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.pipeline.searchPlaceholder}
                className="w-full rounded-lg dcc-input pl-10 pr-4 py-2.5 text-xs sm:text-sm"
              />
            </div>

            <div className="md:col-span-3">
              <div className="relative flex items-center">
                <Filter className="pointer-events-none absolute left-3 h-3.5 w-3.5 dcc-text-gold" />
                <select
                  aria-label={t.pipeline.labels.structureFilter}
                  value={structure}
                  onChange={(e) => setStructure(e.target.value as DealStructureKey)}
                  className="w-full rounded-lg dcc-input pl-9 pr-3 py-2.5 text-xs sm:text-sm"
                >
                  {STRUCTURE_KEYS.map((sk) => (
                    <option key={sk} value={sk}>
                      {t.pipeline.structures[sk]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:col-span-3">
              <select
                aria-label={t.pipeline.labels.stageFilter}
                value={stage}
                onChange={(e) => setStage(e.target.value as DealStageKey)}
                className="w-full rounded-lg dcc-input px-3.5 py-2.5 text-xs sm:text-sm"
              >
                {STAGE_KEYS.map((stKey) => (
                  <option key={stKey} value={stKey}>
                    {t.pipeline.stages[stKey]}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-1 flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`cursor-pointer rounded-lg p-2.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'dcc-badge-gold'
                    : 'dcc-inset dcc-text-subtle hover:opacity-80'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                title="Table View"
                className={`cursor-pointer rounded-lg p-2.5 transition-colors ${
                  viewMode === 'table'
                    ? 'dcc-badge-gold'
                    : 'dcc-inset dcc-text-subtle hover:opacity-80'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Status & Reset Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs dcc-text-muted">
            <span>{t.pipeline.resultsCount(filteredMandates.length)}</span>
            {(sector !== 'all' || structure !== 'all' || stage !== 'all' || query) && (
              <button
                type="button"
                onClick={resetFilters}
                className="cursor-pointer inline-flex items-center gap-1.5 dcc-text-gold font-medium hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{t.pipeline.resetBtn}</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredMandates.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center space-y-4">
            <h3 className="font-serif-luxury text-2xl dcc-text-primary">
              {t.pipeline.labels.emptyTitle}
            </h3>
            <p className="max-w-xl mx-auto text-sm dcc-text-muted">{t.pipeline.labels.emptyDesc}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg dcc-badge-gold px-5 py-2.5 text-xs font-medium"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{t.pipeline.resetBtn}</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Luxury Institutional Blind Teaser Cards Grid */
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredMandates.map((deal) => (
              <article
                key={deal.id}
                className="group flex flex-col justify-between rounded-2xl dcc-surface-gold overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Bespoke Architectural Header Visual */}
                  <div className="relative">
                    <MandateVisual
                      theme={deal.visualTheme}
                      code={deal.code}
                      resolvedTheme={resolvedTheme}
                    />

                    {/* Top Floating Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span
                        className="inline-flex items-center gap-1 rounded-md backdrop-blur-md dcc-badge-emerald px-2.5 py-1 text-[10.5px] font-medium"
                        style={{
                          backgroundColor:
                            resolvedTheme === 'light'
                              ? 'rgba(255,255,255,0.92)'
                              : 'rgba(7,10,16,0.85)',
                        }}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {t.pipeline.labels.verifiedBadge}
                      </span>

                      <span
                        className="inline-flex items-center gap-1 rounded-md backdrop-blur-md dcc-badge-gold px-2.5 py-1 text-[10.5px] font-mono-finance font-medium"
                        style={{
                          backgroundColor:
                            resolvedTheme === 'light'
                              ? 'rgba(255,255,255,0.92)'
                              : 'rgba(7,10,16,0.85)',
                        }}
                      >
                        <Lock className="h-3 w-3" />
                        {t.pipeline.labels.ndaBadge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <span className="font-mono-finance uppercase tracking-wider dcc-text-gold font-semibold">
                        {deal.codename[lang]}
                      </span>
                      {deal.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium dcc-badge-gold px-2 py-0.5 rounded">
                          <Sparkles className="h-2.5 w-2.5" />
                          {t.pipeline.labels.featuredBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-luxury text-[21px] font-semibold leading-snug dcc-text-primary">
                      {deal.title[lang]}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs dcc-text-muted">
                      <MapPin className="h-3.5 w-3.5 shrink-0 dcc-text-gold" />
                      <span className="truncate">{deal.location[lang]}</span>
                    </div>

                    <p className="text-xs leading-relaxed dcc-text-muted line-clamp-3">
                      {deal.summary[lang]}
                    </p>

                    {/* 4-Cell Institutional Financial Matrix */}
                    <div className="grid grid-cols-2 gap-2.5 rounded-xl dcc-inset p-3.5">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider dcc-text-subtle">
                          {t.pipeline.labels.ticketSize}
                        </span>
                        <span className="mt-0.5 block font-mono-finance text-xs sm:text-[13px] font-semibold dcc-text-primary">
                          {deal.ticketSizeUSD}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider dcc-text-subtle">
                          {t.pipeline.labels.targetIRR}
                        </span>
                        <span className="mt-0.5 block font-mono-finance text-xs sm:text-[13px] font-semibold dcc-text-emerald">
                          {deal.targetIRR}
                        </span>
                      </div>
                      <div className="pt-2 border-t dcc-divider">
                        <span className="block text-[10px] uppercase tracking-wider dcc-text-subtle">
                          {t.pipeline.labels.equityOffered}
                        </span>
                        <span className="mt-0.5 block font-mono-finance text-xs font-semibold dcc-text-gold">
                          {deal.equityOffered}
                        </span>
                      </div>
                      <div className="pt-2 border-t dcc-divider">
                        <span className="block text-[10px] uppercase tracking-wider dcc-text-subtle">
                          {t.pipeline.labels.scaleOrEbitda}
                        </span>
                        <span className="mt-0.5 block font-mono-finance text-xs font-medium dcc-text-secondary truncate">
                          {deal.ebitdaOrScale[lang]}
                        </span>
                      </div>
                    </div>

                    {/* Structure & Stage Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] dcc-text-muted">
                      <span className="rounded dcc-inset px-2.5 py-1">
                        {t.pipeline.structures[deal.structure]}
                      </span>
                      <span className="font-mono-finance font-semibold dcc-text-gold">
                        {t.pipeline.stages[deal.stage]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectMandate(deal, 'overview')}
                    className="cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg dcc-badge-gold px-3.5 py-2.5 text-xs font-semibold hover:opacity-85 transition-opacity"
                  >
                    <span>{t.pipeline.labels.viewTeaserBtn}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectMandate(deal, 'ndaLoi')}
                    className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-gold-gradient px-3.5 py-2.5 text-xs font-semibold"
                  >
                    {t.pipeline.labels.requestVdrBtn}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Institutional Data Table View */
          <div className="glass-panel rounded-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b dcc-divider text-[11px] font-mono-finance uppercase tracking-wider dcc-text-muted">
                  <th className="py-4 px-5">Code / Mandate</th>
                  <th className="py-4 px-4">{t.pipeline.labels.structureFilter}</th>
                  <th className="py-4 px-4">{t.pipeline.labels.ticketSize}</th>
                  <th className="py-4 px-4">{t.pipeline.labels.equityOffered}</th>
                  <th className="py-4 px-4">{t.pipeline.labels.targetIRR}</th>
                  <th className="py-4 px-4">{t.pipeline.labels.stageFilter}</th>
                  <th className="py-4 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y dcc-divider text-xs sm:text-sm">
                {filteredMandates.map((deal) => (
                  <tr key={deal.id} className="hover:opacity-90 transition-opacity">
                    <td className="py-4 px-5">
                      <span className="block font-mono-finance text-[11px] dcc-text-gold font-semibold">
                        {deal.code} · {deal.codename[lang]}
                      </span>
                      <span className="mt-0.5 block font-semibold dcc-text-primary">
                        {deal.title[lang]}
                      </span>
                      <span className="mt-0.5 block text-xs dcc-text-subtle">
                        {deal.location[lang]}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs dcc-text-secondary">
                      {t.pipeline.structures[deal.structure]}
                    </td>
                    <td className="py-4 px-4 font-mono-finance font-semibold dcc-text-primary">
                      {deal.ticketSizeUSD}
                    </td>
                    <td className="py-4 px-4 font-mono-finance font-semibold dcc-text-gold">
                      {deal.equityOffered}
                    </td>
                    <td className="py-4 px-4 font-mono-finance font-semibold dcc-text-emerald">
                      {deal.targetIRR}
                    </td>
                    <td className="py-4 px-4 text-xs dcc-text-secondary">
                      {t.pipeline.stages[deal.stage]}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() => onSelectMandate(deal, 'overview')}
                        className="cursor-pointer inline-flex items-center gap-1 rounded-lg bg-gold-gradient px-3.5 py-2 text-xs font-semibold"
                      >
                        <span>Teaser / NDA</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
