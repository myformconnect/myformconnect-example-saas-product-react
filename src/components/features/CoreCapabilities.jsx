import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { coreCapabilities } from '../../data/features';
import { Cpu, BarChart2, Users2, Network, FileSpreadsheet, Lock } from 'lucide-react';

const icons = [Cpu, BarChart2, Users2, Network, FileSpreadsheet, Lock];

export default function CoreCapabilities() {
  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Core Engine"
            title="Six foundational capabilities for modern teams."
            description="A balanced architecture combining simple configuration with enterprise-grade controls."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap, i) => {
            const Icon = icons[i] || Cpu;
            return (
              <ScrollReveal
                key={cap.title}
                delay={i * 70}
                className="flex"
              >
                <div
                  className="w-full b2b-card b2b-card-interactive rounded-2xl p-6 sm:p-7 bg-white flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center border border-stone-200/60 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                        <Icon className="w-5 h-5 text-stone-700 group-hover:text-orange-600 transition-transform group-hover:-translate-y-0.5" />
                      </div>
                      <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span>Latency: &lt;20ms</span>
                    <span>SLA: 99.99%</span>
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
