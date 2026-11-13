import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  mode?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'left',
  mode = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = mode === 'dark';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3.5 border bg-blue-50 text-blue-800 border-blue-200/80 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0062E3]" aria-hidden="true" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight leading-[1.2] text-balance ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed text-balance ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
