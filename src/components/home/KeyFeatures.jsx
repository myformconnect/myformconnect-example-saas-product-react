import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { 
  Folder, 
  Search, 
  Star, 
  Zap, 
  LayoutGrid, 
  Clipboard 
} from 'lucide-react';
import { keyFeatures } from '../../data/features';

const iconMap = {
  Folder,
  Search,
  Star,
  Zap,
  LayoutGrid,
  Clipboard
};

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80" id="features">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Everyday Features"
            title="Six simple ways Orevio makes your day easier."
            description="Designed for normal computer users — clean, friendly, and always one quick shortcut away."
          />
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keyFeatures.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || Star;
            return (
              <ScrollReveal key={feat.id} direction="up" delay={idx * 60}>
                <div className="group b2b-card b2b-card-interactive p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-180 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors">
                        <Icon className="w-5 h-5 transition-transform duration-180" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 group-hover:bg-sky-50 group-hover:text-sky-700 px-2.5 py-0.5 rounded-full transition-colors">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
