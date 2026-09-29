import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  // Software product button with 8px radius
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-4 py-2 gap-2 h-9',
    lg: 'text-sm px-5 py-2.5 gap-2.5 h-10 font-medium',
  };

  const variantStyles = {
    // Avorio Sky Blue & Clean Slate Palette
    primary: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 border border-sky-500 shadow-xs hover:shadow-md hover:shadow-sky-500/20',
    secondary: 'bg-white text-slate-800 hover:bg-slate-50 hover:text-sky-700 border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-sm',
    dark: 'bg-slate-900 text-white hover:bg-slate-800 hover:text-sky-300 border border-slate-800 shadow-xs',
    outline: 'bg-transparent text-slate-700 hover:text-sky-700 border border-slate-300 hover:border-sky-300 shadow-xs',
    accent: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 border border-sky-500 shadow-xs hover:shadow-md hover:shadow-sky-500/20',
    subtle: 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200/80 shadow-2xs',
    ghost: 'bg-transparent text-slate-700 hover:text-sky-700 hover:bg-slate-100/70 border border-transparent',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 border border-rose-600 shadow-xs',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />
      )}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
