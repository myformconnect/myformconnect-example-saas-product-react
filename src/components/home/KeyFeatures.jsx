import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { 
  GitFork, 
  BarChart3, 
  Users, 
  Blocks, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';
import { keyFeatures } from '../../data/features';

const iconMap = {
  GitFork,
  BarChart3,
  Users,
  Blocks,
  ShieldCheck,
  SlidersHorizontal
};

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200/80">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Key Features"
            title="Built for speed, engineered for scale."
            description="Everything your team needs to turn incoming customer requests into action."
          />
        </ScrollReveal>

        {/* Structured Grid with Subtle Borders and Hover Elevations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keyFeatures.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || GitFork;
            return (
              <ScrollReveal key={feat.id} direction="up" delay={idx * 70}>
                <div className="group b2b-card b2b-card-interactive p-6 sm:p-7 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-50 text-stone-700 flex items-center justify-center border border-stone-200/80 group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-600 transition-all duration-200">
                        <Icon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                      <span className="text-[11px] font-mono text-stone-500 bg-stone-100 group-hover:bg-orange-50 group-hover:text-orange-700 px-2.5 py-0.5 rounded-full transition-colors">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-stone-900 mb-2">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {feat.description}
                    </p>
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
