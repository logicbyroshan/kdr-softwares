import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'emerald' | 'amber' | 'slate' | 'roadmap' | 'brand';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 text-blue-800 border-blue-200/80',
    brand: 'bg-blue-50 text-[#0062E3] border-[#0062E3]/30',
    purple: 'bg-blue-50 text-[#0A2558] border-blue-200',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    slate: 'bg-slate-100 text-slate-800 border-slate-200',
    roadmap: 'bg-blue-50/90 text-blue-800 border-blue-300 border-dashed',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1 tracking-normal',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {variant === 'roadmap' && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5 animate-pulse" aria-hidden="true" />
      )}
      {children}
    </span>
  );
};
