import React from 'react';
import { Laptop, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Laptop,
    title: 'Keeps things right on your computer',
    description: 'Your shortcuts, pinned files, and custom routines are stored directly on your computer so they are always fast and accessible.'
  },
  {
    icon: Sparkles,
    title: 'Clean and distraction-free',
    description: 'No unnecessary popups, no clutter, and no complex menus. Orevio stays quietly in the background until you need it.'
  },
  {
    icon: Sliders,
    title: 'Customized for your routine',
    description: 'Pin the apps you use, organize spaces for study or work, and build simple routines that fit how you like to work.'
  },
  {
    icon: CheckCircle2,
    title: 'Lightweight & easy to use',
    description: 'Built to run smoothly without slowing down your computer, giving you instant access to your tools with a single tap.'
  }
];

export default function PrivateByDesign() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
            Everyday Design
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            Your everyday tools, without the clutter.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Orevio is designed to be a simple, friendly helper on your desktop. Keep the tools you use most within easy reach without turning everyday tasks into complicated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 hover:border-sky-300 transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4">
                  <Icon className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
