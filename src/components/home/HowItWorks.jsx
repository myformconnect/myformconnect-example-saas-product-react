import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { howItWorksSteps } from '../../data/features';
import { ArrowRight, PlusCircle, Layers, CheckCircle } from 'lucide-react';

const stepIcons = [PlusCircle, Layers, CheckCircle];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-transparent border-b border-slate-200/80" id="how-it-works">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="How It Works"
            title="Up and running in three simple steps."
            description="No complex setup. Just add what you use and start saving time."
          />
        </ScrollReveal>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {howItWorksSteps.map((item, index) => {
            const Icon = stepIcons[index] || CheckCircle;
            return (
              <ScrollReveal key={item.step} direction="up" delay={index * 90}>
                <div className="b2b-card b2b-card-interactive p-6 sm:p-7 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-180 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                          {item.step}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
                          <Icon className="w-4 h-4 text-sky-600" />
                        </div>
                      </div>
                      {index < howItWorksSteps.length - 1 && (
                        <span className="hidden md:inline-block text-slate-300">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-xs text-slate-400">
                    <span>Step {index + 1} of 3</span>
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
