import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { clientLogos } from '../../data/testimonials';

export default function TrustSection() {
  return (
    <section className="py-12 border-b border-stone-200/70 bg-stone-50/40">
      <div className="container-custom text-center">
        <ScrollReveal direction="up" delay={50}>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-7">
            Trusted by teams building what's next
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-75">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-widest text-stone-600 hover:text-stone-900 transition-colors"
              >
                <span className="text-orange-500 text-base">{logo.symbol}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
