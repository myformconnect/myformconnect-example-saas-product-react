import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { featureGroups } from '../../data/features';
import { Search, Star, Zap, Folder, Clipboard, LayoutGrid, Check } from 'lucide-react';

const icons = [Search, Star, Zap, Folder, Clipboard, LayoutGrid];

export default function CoreCapabilities() {
  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Core Features"
            title="Everything designed to save you clicks."
            description="Explore the features that help you navigate your day with less searching and less hassle."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureGroups.map((group, i) => {
            const Icon = icons[i] || Star;
            return (
              <ScrollReveal
                key={group.title}
                delay={i * 60}
                className="flex"
              >
                <div
                  className="w-full b2b-card b2b-card-interactive rounded-xl p-6 sm:p-7 bg-white flex flex-col justify-between group hover:border-sky-300 transition-all duration-180"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 transition-colors">
                        <Icon className="w-5 h-5 text-sky-600 transition-transform group-hover:-translate-y-0.5" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 group-hover:bg-sky-50 group-hover:text-sky-700 px-2.5 py-0.5 rounded-full transition-colors">
                        {group.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {group.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                      {group.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      {group.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
