import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  dot = false,
  dotColor = 'bg-sky-600',
}) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full',
    md: 'text-xs px-3 py-1 rounded-full font-medium',
  };

  const variantStyles = {
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    sky: 'bg-sky-50 text-sky-800 border border-sky-200/70',
    blue: 'bg-sky-50 text-sky-800 border border-sky-200/70',
    accent: 'bg-sky-50 text-sky-800 border border-sky-200/70',
    indigo: 'bg-sky-50 text-sky-800 border border-sky-200/70', // backwards compatibility alias
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    navy: 'bg-slate-900 text-white border border-slate-900',
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
