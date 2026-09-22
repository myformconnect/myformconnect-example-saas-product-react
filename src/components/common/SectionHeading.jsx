import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  maxWidth = 'max-w-2xl',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${maxWidth} mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
