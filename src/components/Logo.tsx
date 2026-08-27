import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div id="haircut-brand-logo" className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Hair Silhouette & Scissors Crest */}
      <div
        className={`relative flex items-center justify-center rounded-xl p-1.5 transition-transform duration-300 ${iconSizes[size]} ${
          isLight
            ? 'bg-[#D4AF6A] text-[#5A1833] shadow-md shadow-black/20'
            : 'bg-[#5A1833] text-[#D4AF6A] shadow-md shadow-[#5A1833]/20'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stylized Men's Modern Pompadour / Hair Silhouette */}
          <path
            d="M10 24C10 16 16 9 25 8C33 7 38 12 39 17C40 21 38 23 35 24C32 25 31 23 27 21C23 19 18 20 16 23C14.5 25.25 15.5 27 12 28C10.5 27 10 25.5 10 24Z"
            fill="currentColor"
          />
          {/* Subtle side fade flow */}
          <path
            d="M12 29C14 28 17 28 19 30C20 31.5 23 32 26 31C29 30 32 30.5 34 32"
            stroke={isLight ? '#5A1833' : '#D4AF6A'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Luxury Scissors Intersection Accent */}
          <circle cx="21" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="27" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M22.5 36L28 26M25.5 36L20 26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Identity */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-serif-luxury font-bold leading-none tracking-wider ${textSizes[size]} ${
              isLight ? 'text-white' : 'text-[#5A1833]'
            }`}
          >
            Hair
          </span>
          <span
            className={`font-serif-luxury font-bold leading-none tracking-wider ${textSizes[size]} ${
              isLight ? 'text-[#D4AF6A]' : 'text-[#D4AF6A]'
            }`}
          >
            Cut
          </span>
        </div>
        <span
          className={`text-[9px] font-semibold tracking-[0.25em] uppercase mt-0.5 ${
            isLight ? 'text-[#D4AF6A]/90' : 'text-[#242124]/70'
          }`}
        >
          Unisex Salon • Est. 2011
        </span>
      </div>
    </div>
  );
};
