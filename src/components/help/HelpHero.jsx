import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { Search, HelpCircle } from 'lucide-react';

export default function HelpHero({ searchQuery, onSearchChange }) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 text-center">
      <ScrollReveal className="container-custom max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 mb-5">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Help & Support</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          How can we help?
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed font-normal">
          Find answers to common questions about setting up apps, files, shortcuts, and routines.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for help..."
            className="w-full pl-11 pr-14 py-3 text-sm bg-white text-slate-900 border border-slate-300 rounded-lg shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
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
