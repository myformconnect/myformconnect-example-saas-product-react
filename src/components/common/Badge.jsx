import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  dot = false,
  dotColor = 'bg-orange-600',
}) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full',
    md: 'text-xs px-3 py-1 rounded-full font-medium',
  };

  const variantStyles = {
    neutral: 'bg-stone-100 text-stone-700 border border-stone-200',
    orange: 'bg-orange-50 text-orange-800 border border-orange-200/70',
    blue: 'bg-orange-50 text-orange-800 border border-orange-200/70',
    accent: 'bg-orange-50 text-orange-800 border border-orange-200/70',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    navy: 'bg-stone-900 text-white border border-stone-900',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium tracking-tight ${sizeStyles[size] || sizeStyles.sm} ${
        variantStyles[variant] || variantStyles.neutral
      } ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
      {children}
    </span>
  );
}
