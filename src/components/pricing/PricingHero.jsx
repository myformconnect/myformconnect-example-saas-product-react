import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

export default function PricingHero({ isAnnual, onToggle }) {
  return (
    <section className="pt-16 pb-12 bg-white text-center">
      <ScrollReveal className="container-custom max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-3 block">
          Transparent Pricing
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
          Simple pricing that scales with your team.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8">
          Every plan starts with a 14-day full feature trial. No credit card required. Upgrade, downgrade, or cancel anytime.
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium">
          <button
            type="button"
            onClick={() => onToggle(false)}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              !isAnnual
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly billing
          </button>
          <button
            type="button"
            onClick={() => onToggle(true)}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual billing</span>
            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-semibold">
              Save 20%
            </span>
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
