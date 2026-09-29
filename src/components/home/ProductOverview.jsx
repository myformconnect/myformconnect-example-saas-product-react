import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { Search, FolderOpen, Star, Zap } from 'lucide-react';

export default function ProductOverview() {
  const pillars = [
    {
      icon: Search,
      title: 'Find Anything',
      desc: 'Quickly find files, apps, and documents from one simple search box.'
    },
    {
      icon: FolderOpen,
      title: 'Open Fast',
      desc: 'Launch favorite applications and folders without clicking through menus.'
    },
    {
      icon: Star,
      title: 'Keep Favorites',
      desc: 'Save the shortcuts, web links, and items you reach for every single day.'
    },
    {
      icon: Zap,
      title: 'Simple Routines',
      desc: 'Group common tasks together and start your morning setup with one click.'
    }
  ];

  return (
    <section className="py-20 bg-transparent border-b border-slate-200/80" id="product">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="A Simple Helper"
            title="Everything you use, right where you need it."
            description="Avorio gives you one simple place to find your apps, files, shortcuts, and everyday routines."
          />
        </ScrollReveal>

        {/* 4 Friendly Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} direction="up" delay={i * 70}>
                <div className="group b2b-card b2b-card-interactive p-6 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-180 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-100 group-hover:bg-sky-100 transition-all duration-180">
                      <Icon className="w-5 h-5 text-sky-600 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
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
