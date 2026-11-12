import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  withArrow = false,
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 min-h-[36px] gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] gap-2",
    lg: "text-base px-6 py-3.5 min-h-[48px] gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#0062E3] hover:bg-[#0050CA] text-white shadow-sm hover:shadow-md hover:shadow-blue-600/25 focus-visible:ring-[#0062E3] active:scale-[0.99]",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 focus-visible:ring-slate-400 active:scale-[0.99]",
    outline: "border border-slate-300 hover:border-slate-400 bg-white/60 hover:bg-white text-slate-800 focus-visible:ring-[#0062E3] active:scale-[0.99]",
    ghost: "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 focus-visible:ring-[#0062E3]",
    dark: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md focus-visible:ring-slate-700 active:scale-[0.99]",
    white: "bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200/90 focus-visible:ring-[#0062E3] active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" aria-hidden="true" />}
      <span>{children}</span>
      {withArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      disabled={disabled || isLoading} 
      className={combinedClasses} 
      {...props}
    >
      {content}
    </button>
  );
};
