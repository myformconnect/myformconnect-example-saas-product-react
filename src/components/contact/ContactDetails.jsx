import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { ShieldCheck, Zap, Users, Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactDetails() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Direct architecture evaluation',
      desc: 'Meet with senior staff engineers to map your custom webhook topology and data retention needs.'
    },
    {
      icon: Zap,
      title: 'Enterprise POC deployment',
      desc: 'Test high-volume queues, custom connectors, and API rate limits in a dedicated sandbox environment.'
    },
    {
      icon: Users,
      title: 'Security review acceleration',
      desc: 'Immediate access to our SOC 2 Type II compliance reports, penetration tests, and standard enterprise DPAs.'
    },
    {
      icon: Clock,
      title: 'Rapid onboarding SLA',
      desc: 'Dedicated customer solutions engineering support during trial migration and workspace launch.'
    }
  ];

  return (
    <ScrollReveal className="space-y-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-2 block">
          Enterprise Solutions
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          Let’s discuss your team’s workflow requirements.
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Whether you are evaluating automated pipelines for a team of 10 or orchestrating mission-critical event streams across an enterprise, our technical team is ready to assist.
        </p>
      </div>

      {/* Sales Benefits */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          What to expect during your demo
        </h4>
        <div className="space-y-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 border border-orange-100">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                    {b.title}
                  </h5>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Contact Info */}
      <div className="pt-6 border-t border-stone-200 text-xs text-slate-600 space-y-2.5">
        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Enterprise Sales: <a href="mailto:sales@vantage-platform.example" className="text-orange-600 hover:underline">sales@vantage-platform.example</a></span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-slate-400 shrink-0" />
          <span>General Inquiries: +1 (800) 555-0198 (Mon–Fri 8am–6pm EST)</span>
        </div>
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Headquarters: 548 Market Street, Suite 3200, San Francisco, CA 94104</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
