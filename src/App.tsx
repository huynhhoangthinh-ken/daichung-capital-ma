import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CLOSED_TOMBSTONES, INITIAL_MA_MANDATES } from './data/deals';
import { TRANSLATIONS } from './i18n/translations';
import { Language, MAMandate, ResolvedTheme, ThemePreference } from './types/ma';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DealPipelineSection } from './components/DealPipelineSection';
import { AdvisoryAndProcessSection } from './components/AdvisoryAndProcessSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { DealDetailModal } from './components/DealDetailModal';
import { DeployMandateModal } from './components/DeployMandateModal';

const STORAGE_LANG_KEY = 'dcc_lang_pref';
const STORAGE_THEME_KEY = 'dcc_theme_pref';
const STORAGE_CUSTOM_DEALS_KEY = 'dcc_custom_mandates_v1';

function getSystemTheme(): ResolvedTheme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
}

export const App: React.FC = () => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'vi' || saved === 'en' || saved === 'zh') return saved;
    return 'vi';
  });

  const [themePref, setThemePrefState] = useState<ThemePreference>(() => {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    if (saved === 'system' || saved === 'light' || saved === 'dark') return saved;
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());

  // Listen in real time to OS / Browser Dark-Light appearance changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme: ResolvedTheme = themePref === 'system' ? systemTheme : themePref;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setThemePref = (pref: ThemePreference) => {
    setThemePrefState(pref);
    localStorage.setItem(STORAGE_THEME_KEY, pref);
  };

  const [mandates, setMandates] = useState<MAMandate[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CUSTOM_DEALS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as MAMandate[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...INITIAL_MA_MANDATES];
        }
      }
    } catch {
      // fallback to initial mandates
    }
    return INITIAL_MA_MANDATES;
  });

  const [selectedDeal, setSelectedDeal] = useState<MAMandate | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'overview' | 'vdr' | 'ndaLoi'>('overview');
  const [deployOpen, setDeployOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const setLang = (next: Language) => {
    setLangState(next);
    localStorage.setItem(STORAGE_LANG_KEY, next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang];

  const handleSelectDeal = (deal: MAMandate, tab: 'overview' | 'vdr' | 'ndaLoi' = 'overview') => {
    setModalInitialTab(tab);
    setSelectedDeal(deal);
  };

  const handleDeployNewMandate = (newDeal: MAMandate) => {
    setMandates((prev) => {
      const updated = [newDeal, ...prev];
      const customOnly = updated.filter((d) => d.id.startsWith('dcc-custom-'));
      localStorage.setItem(STORAGE_CUSTOM_DEALS_KEY, JSON.stringify(customOnly));
      return updated;
    });
    setToastMsg(t.deployModal.publishedToast);
    setTimeout(() => setToastMsg(null), 4500);
  };

  return (
    <div className="min-h-screen dcc-page flex flex-col">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl dcc-badge-emerald px-5 py-3.5 text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <Header
        lang={lang}
        setLang={setLang}
        themePref={themePref}
        resolvedTheme={resolvedTheme}
        setThemePref={setThemePref}
        t={t}
        onOpenDeployModal={() => setDeployOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          lang={lang}
          t={t}
          featuredDeals={mandates}
          onSelectDeal={(deal) => handleSelectDeal(deal, 'overview')}
        />

        <DealPipelineSection
          lang={lang}
          resolvedTheme={resolvedTheme}
          t={t}
          mandates={mandates}
          onSelectMandate={handleSelectDeal}
          onOpenDeployModal={() => setDeployOpen(true)}
        />

        <AdvisoryAndProcessSection
          lang={lang}
          t={t}
          tombstones={CLOSED_TOMBSTONES}
        />

        <ContactAndFooter
          lang={lang}
          setLang={setLang}
          themePref={themePref}
          setThemePref={setThemePref}
          t={t}
        />
      </main>

      <DealDetailModal
        deal={selectedDeal}
        initialTab={modalInitialTab}
        lang={lang}
        t={t}
        onClose={() => setSelectedDeal(null)}
      />

      <DeployMandateModal
        open={deployOpen}
        lang={lang}
        t={t}
        onClose={() => setDeployOpen(false)}
        onDeploy={handleDeployNewMandate}
      />
    </div>
  );
};

export default App;
