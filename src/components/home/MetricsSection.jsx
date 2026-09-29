import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { productMetrics } from '../../data/testimonials';

export default function MetricsSection() {
  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {productMetrics.map((item) => (
              <div
                key={item.value}
                className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5 hover:border-sky-300 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-sky-600">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
