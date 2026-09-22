import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { integrationsList } from '../../data/features';
import { ArrowUpRight } from 'lucide-react';

export default function IntegrationsGrid() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Engineering', 'CRM', 'Data Warehouse', 'Communication'];

  const filtered = filter === 'All'
    ? integrationsList
    : integrationsList.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200" id="integrations">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Ecosystem"
            title="Connects with your entire operational stack."
            description="Pre-built bi-directional connectors with automatic OAuth authentication and verified schemas."
          />
        </ScrollReveal>

        {/* Category Pills */}
        <ScrollReveal delay={60} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-stone-200 hover:border-stone-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delay={i * 50}
              className="flex"
            >
              <div
                className="w-full b2b-card b2b-card-interactive rounded-2xl p-5 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-sm font-semibold text-slate-900">{item.name}</h4>
                    <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-orange-600 font-medium">
                  <span>View docs & parameters</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
