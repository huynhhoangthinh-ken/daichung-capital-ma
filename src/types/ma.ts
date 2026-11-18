export type Language = 'vi' | 'en' | 'zh';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

export type SectorKey =
  | 'all'
  | 'real_estate'
  | 'industrial'
  | 'hospitality'
  | 'manufacturing'
  | 'healthcare'
  | 'energy';

export type DealStructureKey =
  | 'all'
  | 'equity_acquisition'
  | 'asset_transfer'
  | 'jv_strategic'
  | 'growth_capital';

export type DealStageKey =
  | 'all'
  | 'open_nda'
  | 'in_vdr'
  | 'accepting_loi'
  | 'closing';

export interface LocalizedText {
  vi: string;
  en: string;
  zh: string;
}

export interface LocalizedList {
  vi: string[];
  en: string[];
  zh: string[];
}

export interface MAMandate {
  id: string;
  code: string;
  codename: LocalizedText;
  title: LocalizedText;
  sector: Exclude<SectorKey, 'all'>;
  structure: Exclude<DealStructureKey, 'all'>;
  stage: Exclude<DealStageKey, 'all'>;
  location: LocalizedText;
  ticketSizeUSD: string;
  equityOffered: string;
  targetIRR: string;
  ebitdaOrScale: LocalizedText;
  valuationMultiple: string;
  verifiedLegal: boolean;
  featured?: boolean;
  visualTheme: 'riverfront_tower' | 'industrial_port' | 'coastal_resort' | 'precision_tech' | 'medical_hub' | 'clean_energy';
  summary: LocalizedText;
  highlights: LocalizedList;
  legalChecklist: LocalizedList;
  vdrDocuments: LocalizedList;
  idealBuyerProfile: LocalizedText;
}

export interface ClosedTombstone {
  code: string;
  year: string;
  sector: LocalizedText;
  dealType: LocalizedText;
  valueUSD: string;
  corridor: string;
  description: LocalizedText;
}
