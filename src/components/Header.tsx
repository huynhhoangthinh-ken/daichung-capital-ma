import React, { useState } from 'react';
import { Globe, Lock, Menu, Monitor, Moon, PlusCircle, Sun, X } from 'lucide-react';
import { Language, ResolvedTheme, ThemePreference } from '../types/ma';
import { UIStrings } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  themePref: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setThemePref: (pref: ThemePreference) => void;
  t: UIStrings;
  onOpenDeployModal: () => void;
}

const LANG_OPTIONS: Array<{ code: Language; short: string; native: string }> = [
  { code: 'vi', short: 'VI', native: 'Tiếng Việt' },
  { code: 'en', short: 'EN', native: 'English' },
  { code: 'zh', short: 'ZH', native: '中文' },
];

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  themePref,
  resolvedTheme,
  setThemePref,
  t,
  onOpenDeployModal,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const themeLabels: Record<ThemePreference, string> = {
    system: lang === 'vi' ? 'Theo máy' : lang === 'zh' ? '跟随系统' : 'System',
    light: lang === 'vi' ? 'Sáng' : lang === 'zh' ? '浅色' : 'Light',
    dark: lang === 'vi' ? 'Tối' : lang === 'zh' ? '深色' : 'Dark',
  };

  const themeOptions: Array<{
    key: ThemePreference;
    icon: React.FC<{ className?: string }>;
  }> = [
    { key: 'system', icon: Monitor },
    { key: 'light', icon: Sun },
    { key: 'dark', icon: Moon },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header transition-colors duration-200">
      {/* Top Institutional Utility Bar with Theme Switcher (System / Light / Dark) + Language Selector */}
      <div
        className="border-b dcc-divider transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-topbar)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center gap-4 text-[11px] dcc-text-muted">
            <span className="inline-flex items-center gap-1.5 dcc-text-gold font-medium">
              <Lock className="h-3 w-3" />
              <span>NDA-ENCRYPTED DEAL ROOM</span>
            </span>
            <span className="opacity-30">|</span>
            <span>HO CHI MINH CITY · HANOI · SINGAPORE · HONG KONG DESK</span>
          </div>

          {/* Right Controls: OS/Browser Theme Switcher + Trilingual Switcher */}
          <div className="flex w-full lg:w-auto items-center justify-between lg:justify-end gap-2.5 sm:gap-4">
            {/* Theme Selector: System (Browser/OS) | Light | Dark */}
            <div
              role="group"
              aria-label="Theme Mode Selector"
              className="inline-flex items-center rounded-full p-0.5 border"
              style={{
                backgroundColor: 'var(--bg-pill-group)',
                borderColor: 'var(--gold-border)',
              }}
            >
              {themeOptions.map((opt) => {
                const Icon = opt.icon;
                const active = themePref === opt.key;
                const systemHint =
                  opt.key === 'system'
                    ? ` (${resolvedTheme === 'dark' ? (lang === 'vi' ? 'Tối' : lang === 'zh' ? '深' : 'Dark') : lang === 'vi' ? 'Sáng' : lang === 'zh' ? '浅' : 'Light'})`
                    : '';
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setThemePref(opt.key)}
                    title={`${themeLabels[opt.key]}${systemHint}`}
                    className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                      active
                        ? 'bg-gold-gradient font-semibold shadow-sm'
                        : 'dcc-text-secondary hover:opacity-90'
                    }`}
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="hidden sm:inline">{themeLabels[opt.key]}</span>
                  </button>
                );
              })}
            </div>

            {/* Dedicated Trilingual Selector Bar (VI / EN / ZH) */}
            <div className="flex items-center gap-1.5">
              <Globe className="hidden sm:inline h-3.5 w-3.5 dcc-text-gold" />
              <div
                role="group"
                aria-label="Language Selector"
                className="inline-flex items-center rounded-full p-0.5 border"
                style={{
                  backgroundColor: 'var(--bg-pill-group)',
                  borderColor: 'var(--gold-border)',
                }}
              >
                {LANG_OPTIONS.map((item) => {
                  const active = lang === item.code;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setLang(item.code)}
                      className={`cursor-pointer flex items-center gap-1 rounded-full px-2.5 sm:px-3 py-1 text-[11px] font-medium transition-all duration-200 ${
                        active
                          ? 'bg-gold-gradient font-semibold shadow-sm'
                          : 'dcc-text-secondary hover:opacity-90'
                      }`}
                    >
                      <span className="font-mono-finance text-[10px] opacity-85">{item.short}</span>
                      <span>{item.native}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="focus:outline-none">
          <BrandLogo subtitle={t.brandSub} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7 text-[13.5px] font-medium dcc-text-secondary">
          <a href="#pipeline" className="hover:opacity-75 transition-opacity">
            {t.nav.pipeline}
          </a>
          <a href="#advisory" className="hover:opacity-75 transition-opacity">
            {t.nav.advisory}
          </a>
          <a href="#process" className="hover:opacity-75 transition-opacity">
            {t.nav.process}
          </a>
          <a href="#ecosystem" className="hover:opacity-75 transition-opacity">
            {t.nav.ecosystem}
          </a>
          <a href="#tombstones" className="hover:opacity-75 transition-opacity">
            {t.nav.tombstones}
          </a>
          <a href="#contact" className="hover:opacity-75 transition-opacity">
            {t.nav.contact}
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenDeployModal}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg dcc-badge-gold px-3.5 py-2 text-xs font-medium hover:opacity-90 transition-all"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>{t.nav.deployProduct}</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gold-gradient px-4 py-2 text-xs font-semibold shadow-[0_4px_20px_rgba(201,164,97,0.25)] transition-all"
          >
            <Lock className="h-3.5 w-3.5" />
            <span>{t.nav.investorPortal}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden rounded-lg border dcc-divider p-2 dcc-text-primary"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="xl:hidden border-t dcc-divider px-4 py-5 space-y-4"
          style={{ backgroundColor: 'var(--bg-surface)' }}
        >
          <div className="flex flex-col space-y-3 text-sm dcc-text-primary">
            <a href="#pipeline" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.pipeline}
            </a>
            <a href="#advisory" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.advisory}
            </a>
            <a href="#process" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.process}
            </a>
            <a href="#ecosystem" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.ecosystem}
            </a>
            <a href="#tombstones" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.tombstones}
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="py-1">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t dcc-divider">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenDeployModal();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg dcc-badge-gold px-4 py-2.5 text-xs font-medium"
            >
              <PlusCircle className="h-4 w-4" />
              <span>{t.nav.deployProduct}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gold-gradient px-4 py-2.5 text-xs font-semibold"
            >
              <Lock className="h-4 w-4" />
              <span>{t.nav.investorPortal}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
