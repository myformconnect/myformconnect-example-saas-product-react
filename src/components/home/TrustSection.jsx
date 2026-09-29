import React from 'react';
import { GraduationCap, Briefcase, Sparkles, Laptop } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function TrustSection() {
  const audiences = [
    { label: 'Students', desc: 'Notes, textbooks & research tools in one tap', icon: GraduationCap },
    { label: 'Professionals', desc: 'Workspaces, spreadsheets & team links ready to go', icon: Briefcase },
    { label: 'Creators', desc: 'Design files, assets & quick access to projects', icon: Sparkles },
    { label: 'Freelancers', desc: 'Client folders, invoices & everyday apps sorted', icon: Laptop },
  ];

  return (
    <section className="py-14 border-b border-slate-200/80 bg-slate-50/60">
      <div className="container-custom text-center max-w-4xl">
        <ScrollReveal direction="up" delay={50}>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Built for everyday computer users
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
            Whether you&apos;re studying, working, creating, or managing your day.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Avorio keeps the things you use most within easy reach so you spend less time searching and more time doing.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left space-y-1.5 hover:border-sky-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-sky-600" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900">{item.label}</h3>
                  <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
