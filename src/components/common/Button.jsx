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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-180 ease-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-4 py-2 gap-2 h-9',
    lg: 'text-sm px-5 py-2.5 gap-2.5 h-10 font-medium',
  };

  const variantStyles = {
    // Warm Orange Accent & Off-White SaaS Palette
    primary: 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 border border-orange-600 shadow-xs hover:shadow-md hover:shadow-orange-600/20',
    secondary: 'bg-white text-stone-800 hover:bg-orange-50/40 hover:text-orange-700 border border-stone-200 hover:border-orange-300 shadow-xs hover:shadow-sm',
    dark: 'bg-stone-800 text-white hover:bg-stone-700 hover:text-orange-400 active:bg-stone-750 border border-stone-700 hover:border-stone-600 shadow-xs',
    outline: 'bg-transparent text-stone-700 hover:text-orange-700 border border-stone-300 hover:border-orange-300 shadow-xs',
    accent: 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 border border-orange-600 shadow-xs hover:shadow-md hover:shadow-orange-600/20',
    subtle: 'bg-orange-50 text-orange-800 hover:bg-orange-100 border border-orange-200/80 shadow-2xs',
    ghost: 'bg-transparent text-stone-700 hover:text-orange-700 hover:bg-orange-50/50 border border-transparent',
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
