import React from 'react';
import { MAMandate, ResolvedTheme } from '../types/ma';

interface MandateVisualProps {
  theme: MAMandate['visualTheme'];
  code: string;
  resolvedTheme: ResolvedTheme;
}

export const MandateVisual: React.FC<MandateVisualProps> = ({ theme, code, resolvedTheme }) => {
  const isLight = resolvedTheme === 'light';

  const darkMap: Record<
    MAMandate['visualTheme'],
    { bg: string; glow: string; stroke: string; gold: string; label: string }
  > = {
    riverfront_tower: {
      bg: 'from-[#0F1B2E] via-[#0B1320] to-[#080C14]',
      glow: 'rgba(201, 164, 97, 0.28)',
      stroke: '#DFC084',
      gold: '#C9A461',
      label: 'GRADE-A CBD SKYLINE · SPV ASSET',
    },
    industrial_port: {
      bg: 'from-[#0D2129] via-[#0B1622] to-[#070B12]',
      glow: 'rgba(56, 189, 248, 0.22)',
      stroke: '#7DD3FC',
      gold: '#C9A461',
      label: 'DEEP-SEA PORT & LOGISTICS CORRIDOR',
    },
    precision_tech: {
      bg: 'from-[#161B2E] via-[#0E1322] to-[#070A12]',
      glow: 'rgba(167, 139, 250, 0.22)',
      stroke: '#C4B5FD',
      gold: '#C9A461',
      label: 'ISO CLEANROOM & CNC MANUFACTURING',
    },
    coastal_resort: {
      bg: 'from-[#0E2428] via-[#0B1822] to-[#070B12]',
      glow: 'rgba(45, 212, 191, 0.22)',
      stroke: '#5EEAD4',
      gold: '#C9A461',
      label: 'PRIVATE COASTLINE · 5-STAR RESORT',
    },
    medical_hub: {
      bg: 'from-[#0F2421] via-[#0B171D] to-[#070B12]',
      glow: 'rgba(52, 211, 153, 0.22)',
      stroke: '#6EE7B7',
      gold: '#C9A461',
      label: 'TERTIARY HOSPITAL & DIAGNOSTICS',
    },
    clean_energy: {
      bg: 'from-[#1D2013] via-[#10171F] to-[#070A10]',
      glow: 'rgba(230, 201, 143, 0.26)',
      stroke: '#FDE68A',
      gold: '#C9A461',
      label: '140 MWp COD RENEWABLE PORTFOLIO',
    },
  };

  const lightMap: Record<
    MAMandate['visualTheme'],
    { bg: string; glow: string; stroke: string; gold: string; label: string }
  > = {
    riverfront_tower: {
      bg: 'from-[#EFECE2] via-[#F7F5EE] to-[#E8E2D4]',
      glow: 'rgba(158, 118, 46, 0.18)',
      stroke: '#334155',
      gold: '#8B6520',
      label: 'GRADE-A CBD SKYLINE · SPV ASSET',
    },
    industrial_port: {
      bg: 'from-[#E9EFF2] via-[#F5F7F8] to-[#E3EAEF]',
      glow: 'rgba(14, 116, 144, 0.14)',
      stroke: '#0F4C5C',
      gold: '#8B6520',
      label: 'DEEP-SEA PORT & LOGISTICS CORRIDOR',
    },
    precision_tech: {
      bg: 'from-[#ECEEF4] via-[#F6F6FA] to-[#E5E7F0]',
      glow: 'rgba(79, 70, 229, 0.12)',
      stroke: '#3730A3',
      gold: '#8B6520',
      label: 'ISO CLEANROOM & CNC MANUFACTURING',
    },
    coastal_resort: {
      bg: 'from-[#E8F1F0] via-[#F4F8F7] to-[#E1ECEA]',
      glow: 'rgba(15, 118, 110, 0.14)',
      stroke: '#115E59',
      gold: '#8B6520',
      label: 'PRIVATE COASTLINE · 5-STAR RESORT',
    },
    medical_hub: {
      bg: 'from-[#E8F2EE] via-[#F4F9F6] to-[#E1EDE7]',
      glow: 'rgba(4, 120, 87, 0.14)',
      stroke: '#065F46',
      gold: '#8B6520',
      label: 'TERTIARY HOSPITAL & DIAGNOSTICS',
    },
    clean_energy: {
      bg: 'from-[#F1EEE2] via-[#F8F6EE] to-[#EAE5D3]',
      glow: 'rgba(158, 118, 46, 0.18)',
      stroke: '#475569',
      gold: '#8B6520',
      label: '140 MWp COD RENEWABLE PORTFOLIO',
    },
  };

  const cfg = (isLight ? lightMap : darkMap)[theme] || (isLight ? lightMap.riverfront_tower : darkMap.riverfront_tower);

  return (
    <div
      className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${cfg.bg} border-b dcc-divider`}
    >
      {/* Architectural Blueprint Micro-Grid */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `linear-gradient(to right, ${
            isLight ? 'rgba(139,101,32,0.11)' : 'rgba(201,164,97,0.12)'
          } 1px, transparent 1px), linear-gradient(to bottom, ${
            isLight ? 'rgba(139,101,32,0.11)' : 'rgba(201,164,97,0.12)'
          } 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Glow */}
      <div
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-2xl"
        style={{ background: cfg.glow }}
      />

      {/* Bespoke Architectural Vector Silhouette */}
      <svg
        viewBox="0 0 400 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full opacity-90 transition-transform duration-700 group-hover:scale-105"
      >
        {theme === 'riverfront_tower' && (
          <>
            <path d="M0 152H400" stroke={cfg.gold} strokeOpacity="0.4" strokeWidth="1" />
            <path
              d="M220 26L266 42V152H220V26Z"
              stroke={cfg.stroke}
              strokeOpacity="0.75"
              strokeWidth="1.4"
              fill="rgba(201,164,97,0.09)"
            />
            <path
              d="M276 54L318 66V152H276V54Z"
              stroke={cfg.gold}
              strokeOpacity="0.65"
              strokeWidth="1.2"
              fill="rgba(201,164,97,0.05)"
            />
            <path
              d="M174 72H212V152H174V72Z"
              stroke={cfg.stroke}
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            <line x1="235" y1="42" x2="235" y2="146" stroke={cfg.gold} strokeOpacity="0.35" />
            <line x1="250" y1="46" x2="250" y2="146" stroke={cfg.gold} strokeOpacity="0.35" />
            <path
              d="M20 162C95 156 175 168 265 160C325 155 365 162 400 159"
              stroke={cfg.gold}
              strokeOpacity="0.45"
              strokeDasharray="4 4"
            />
          </>
        )}

        {theme === 'industrial_port' && (
          <>
            <path d="M0 148H400" stroke={cfg.stroke} strokeOpacity="0.35" />
            <rect
              x="150"
              y="88"
              width="92"
              height="60"
              stroke={cfg.stroke}
              strokeOpacity="0.7"
              strokeWidth="1.3"
              fill="rgba(56,189,248,0.07)"
            />
            <rect
              x="252"
              y="76"
              width="108"
              height="72"
              stroke={cfg.gold}
              strokeOpacity="0.7"
              strokeWidth="1.3"
              fill="rgba(201,164,97,0.08)"
            />
            <path d="M150 88L196 68L242 88" stroke={cfg.stroke} strokeOpacity="0.7" strokeWidth="1.2" />
            <path d="M252 76L306 54L360 76" stroke={cfg.gold} strokeOpacity="0.7" strokeWidth="1.2" />
            <path d="M68 148V52L122 76H68" stroke={cfg.gold} strokeOpacity="0.6" strokeWidth="1.3" />
          </>
        )}

        {theme === 'precision_tech' && (
          <>
            <circle
              cx="290"
              cy="88"
              r="52"
              stroke={cfg.stroke}
              strokeOpacity="0.45"
              strokeWidth="1.2"
              strokeDasharray="5 4"
            />
            <circle
              cx="290"
              cy="88"
              r="32"
              stroke={cfg.gold}
              strokeOpacity="0.75"
              strokeWidth="1.4"
              fill="rgba(201,164,97,0.08)"
            />
            <circle cx="290" cy="88" r="8" fill={cfg.gold} fillOpacity="0.85" />
            <path d="M120 128L185 88H258" stroke={cfg.stroke} strokeOpacity="0.6" strokeWidth="1.3" />
            <path d="M145 56L195 88" stroke={cfg.gold} strokeOpacity="0.55" strokeWidth="1.2" />
          </>
        )}

        {theme === 'coastal_resort' && (
          <>
            <path
              d="M0 138C88 126 168 148 262 134C322 125 362 132 400 128"
              stroke={cfg.stroke}
              strokeOpacity="0.65"
              strokeWidth="1.4"
            />
            <path
              d="M0 152C98 142 182 160 280 147C338 140 372 146 400 142"
              stroke={cfg.gold}
              strokeOpacity="0.5"
              strokeWidth="1.1"
            />
            <path
              d="M188 130V82L236 62L284 82V130"
              stroke={cfg.gold}
              strokeOpacity="0.8"
              strokeWidth="1.4"
              fill="rgba(201,164,97,0.08)"
            />
            <path
              d="M292 128V96L330 80L368 96V128"
              stroke={cfg.stroke}
              strokeOpacity="0.6"
              strokeWidth="1.2"
            />
          </>
        )}

        {theme === 'medical_hub' && (
          <>
            <rect
              x="195"
              y="42"
              width="135"
              height="106"
              rx="4"
              stroke={cfg.stroke}
              strokeOpacity="0.65"
              strokeWidth="1.3"
              fill="rgba(52,211,153,0.06)"
            />
            <path
              d="M262 62V86M250 74H274"
              stroke={cfg.gold}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M70 116H132L146 92L162 132L178 104L190 116H230"
              stroke={cfg.stroke}
              strokeOpacity="0.7"
              strokeWidth="1.4"
            />
          </>
        )}

        {theme === 'clean_energy' && (
          <>
            <path
              d="M148 146L178 96H278L248 146H148Z"
              stroke={cfg.gold}
              strokeOpacity="0.8"
              strokeWidth="1.4"
              fill="rgba(201,164,97,0.1)"
            />
            <line x1="163" y1="121" x2="263" y2="121" stroke={cfg.gold} strokeOpacity="0.5" />
            <line x1="212" y1="96" x2="182" y2="146" stroke={cfg.gold} strokeOpacity="0.5" />
            <line x1="246" y1="96" x2="216" y2="146" stroke={cfg.gold} strokeOpacity="0.5" />
            <path d="M322 146V64" stroke={cfg.stroke} strokeOpacity="0.75" strokeWidth="1.6" />
            <path
              d="M322 64L296 44M322 64L352 48M322 64L320 96"
              stroke={cfg.stroke}
              strokeOpacity="0.75"
              strokeWidth="1.4"
            />
          </>
        )}
      </svg>

      {/* Bottom Telemetry Strip */}
      <div
        className={`absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[10px] font-mono-finance tracking-wider ${
          isLight ? 'text-[#334155]' : 'text-[#CBD5E1]/85'
        }`}
      >
        <span className="truncate pr-2 font-medium">{cfg.label}</span>
        <span className="shrink-0 font-semibold dcc-text-gold">{code}</span>
      </div>
    </div>
  );
};
