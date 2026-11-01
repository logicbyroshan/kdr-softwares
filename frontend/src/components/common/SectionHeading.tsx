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
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 border bg-blue-50/80 border-blue-200/60 text-blue-700">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
