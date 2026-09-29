import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-transparent border-b border-slate-200/80" id="testimonials">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="User Stories"
            title="Loved by everyday computer users."
            description="See how freelancers, designers, and students simplify their daily routines with Orevio."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.author} direction="up" delay={idx * 80}>
              <div className="b2b-card b2b-card-interactive p-6 sm:p-7 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-180 flex flex-col justify-between h-full">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-semibold text-xs flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {t.role}
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
