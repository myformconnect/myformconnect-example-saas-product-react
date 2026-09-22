import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200/80" id="testimonials">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Customer Stories"
            title="Trusted by engineering and operations leads."
            description="See how teams use Vantage to capture requests and automate everyday tasks."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.author} direction="up" delay={idx * 100}>
              <div className="b2b-card b2b-card-interactive p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 flex flex-col justify-between h-full">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white font-mono text-xs flex items-center justify-center font-medium">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900 leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {t.role}, <strong className="font-medium text-stone-700">{t.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
