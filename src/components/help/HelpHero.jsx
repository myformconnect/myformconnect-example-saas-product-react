import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { Search, LifeBuoy } from 'lucide-react';

export default function HelpHero({ searchQuery, onSearchChange }) {
  return (
    <section className="py-16 sm:py-20 bg-stone-50/70 border-b border-stone-200 text-center">
      <ScrollReveal className="container-custom max-w-2xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-semibold text-orange-800 mb-5">
          <LifeBuoy className="w-3.5 h-3.5 text-orange-600" />
          <span>Documentation & Knowledge Base</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          How can we help?
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Search technical guides, API documentation, billing answers, and operational tutorials.
        </p>

        {/* Prominent Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search guides (e.g. webhooks, SAML SSO, billing, rate limits)..."
            className="w-full pl-11 pr-14 py-3.5 text-sm bg-white text-slate-900 border border-stone-300 rounded-full shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-700 font-medium cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
