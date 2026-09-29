import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { Sparkles, Users, Clock, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactDetails() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Simple product walkthrough',
      desc: 'See how search, favorite shortcuts, and routines look and work in everyday use.'
    },
    {
      icon: Users,
      title: 'Setting up for teams or studios',
      desc: 'Learn how to share favorite links, folders, and routines with team members.'
    },
    {
      icon: Clock,
      title: 'Quick, friendly 15-minute chat',
      desc: 'No-pressure, focused conversation tailored directly to what your team needs.'
    }
  ];

  return (
    <ScrollReveal className="space-y-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2 block">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          Have a question?
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
          Want to see how Orevio could work for your team? Talk to us.
        </p>
      </div>

      {/* Demo Expectations */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          What we can cover together
        </h3>
        <div className="space-y-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 border border-sky-100">
                  <Icon className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5 font-normal">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Contact Info */}
      <div className="pt-6 border-t border-slate-200 space-y-3">
        <div className="flex items-center gap-2.5 text-xs text-slate-600">
          <Mail className="w-4 h-4 text-sky-600" />
          <span>Email our team directly at <strong className="text-slate-900 font-semibold">team@orevioapp.example</strong></span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-slate-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>We respond to inquiries within 1 business day</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
