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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md hover:shadow-blue-500/20 focus:ring-blue-500 active:scale-[0.99]",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-900 focus:ring-slate-400 active:scale-[0.99]",
    outline: "border border-slate-300 hover:border-slate-400 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-slate-400 active:scale-[0.99]",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 focus:ring-slate-300",
    dark: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow focus:ring-slate-700 active:scale-[0.99]",
    white: "bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200/80 focus:ring-slate-300 active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      <span>{children}</span>
      {withArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
          className={`group ${combinedClasses}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      disabled={disabled || isLoading} 
      className={`group ${combinedClasses}`} 
      {...props}
    >
      {content}
    </button>
  );
};

