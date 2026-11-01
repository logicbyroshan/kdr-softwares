import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'emerald' | 'amber' | 'slate' | 'roadmap';
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
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    purple: 'bg-purple-50 text-purple-700 border-purple-200/60',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    amber: 'bg-amber-50 text-amber-700 border-amber-200/60',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    roadmap: 'bg-indigo-50 text-indigo-700 border-indigo-200 border-dashed',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-normal',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {variant === 'roadmap' && (
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-1.5 animate-pulse" />
      )}
      {children}
    </span>
  );
};
