import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { companyValues, companyPerks } from '../../data/jobs';
import { Check } from 'lucide-react';

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50/60 border-b border-stone-200" id="values">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Values"
            title="How we work"
            description="A calm work environment with direct communication and high standards."
            className="mb-10 sm:mb-12"
          />
        </ScrollReveal>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {companyValues.map((val, i) => (
            <ScrollReveal
              key={val.title}
              delay={i * 60}
              className="flex"
            >
              <div className="w-full b2b-card b2b-card-interactive rounded-2xl p-5 bg-white border border-stone-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-1.5">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{val.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Perks Strip */}
        <ScrollReveal delay={120} className="border-t border-stone-200 pt-12">
          <h3 className="text-base font-semibold text-slate-900 text-center mb-6">
            Benefits & perks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyPerks.map((perk) => (
              <div key={perk.title} className="p-4 rounded-xl border border-stone-200 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <h5 className="text-xs font-semibold text-slate-900">{perk.title}</h5>
                </div>
                <p className="text-xs text-slate-500 leading-normal pl-5">{perk.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
