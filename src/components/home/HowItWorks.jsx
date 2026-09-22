import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { howItWorksSteps } from '../../data/features';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-transparent border-b border-stone-200/80">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Implementation"
            title="Up and running in three simple steps."
            description="Designed to integrate into your existing setup without weeks of vendor onboarding."
          />
        </ScrollReveal>

        {/* Horizontal Desktop / Vertical Mobile with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {howItWorksSteps.map((item, index) => (
            <ScrollReveal key={item.step} direction="up" delay={index * 100}>
              <div className="b2b-card b2b-card-interactive p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-lg font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-xl border border-orange-100">
                      {item.step}
                    </span>
                    {index < howItWorksSteps.length - 1 && (
                      <span className="hidden md:inline-block text-stone-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-[11px] font-mono text-stone-400">
                  <span>Step 0{index + 1} • ~5m setup</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
