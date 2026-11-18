import React from 'react';

interface BrandLogoProps {
  subtitle?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ subtitle, compact = false }) => {
  return (
    <div className="flex items-center gap-3.5 group select-none">
      {/* Bespoke Architectural Crest Monogram */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1A2335] to-[#0B0F18] border border-[#C9A461]/55 shadow-[0_4px_18px_rgba(201,164,97,0.18)] transition-transform duration-300 group-hover:scale-[1.03]">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M8 31V9H17.5C23.8 9 28 13.2 28 20C28 26.8 23.8 31 17.5 31H8Z"
            stroke="url(#dccGold)"
            strokeWidth="2.1"
          />
          <path
            d="M14 26V14H18.2C21.6 14 23.8 16.4 23.8 20C23.8 23.6 21.6 26 18.2 26H14Z"
            stroke="#E6C98F"
            strokeWidth="1.3"
            strokeOpacity="0.85"
          />
          <path
            d="M24 9L32 9L32 31L24 31"
            stroke="url(#dccGold)"
            strokeWidth="1.8"
            strokeOpacity="0.9"
          />
          <circle cx="32" cy="20" r="2" fill="#E6C98F" />
          <defs>
            <linearGradient id="dccGold" x1="8" y1="9" x2="32" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F2DCB1" />
              <stop offset="0.5" stopColor="#C9A461" />
              <stop offset="1" stopColor="#946F2F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif-luxury text-xl sm:text-[22px] font-semibold tracking-[0.04em] dcc-text-primary leading-none">
            DaiChung<span className="text-gold-gradient font-bold">Capital</span>
          </span>
        </div>
        {!compact && subtitle && (
          <span className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.2em] dcc-text-muted leading-none">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
