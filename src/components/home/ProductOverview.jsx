import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { Zap, Sliders, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductOverview() {
  const capabilities = [
    {
      icon: Zap,
      title: 'Automated Triggers',
      desc: 'Start tasks automatically from webhooks, schedules, or customer form events.'
    },
    {
      icon: Sliders,
      title: 'Custom Logic',
      desc: 'Route and filter incoming payloads based on simple rules you define.'
    },
    {
      icon: BarChart3,
      title: 'Live Tracking',
      desc: 'View execution speed, status, and health in real-time dashboards.'
    },
    {
      icon: ShieldCheck,
      title: 'Built-in Security',
      desc: 'Manage roles, permission boundaries, and audit logs with enterprise confidence.'
    }
  ];

  return (
    <section className="py-20 bg-transparent border-b border-stone-200/80" id="product">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Overview"
            title="Everything your team needs in one place."
            description="Collect, manage, and act on every customer request from a single platform."
          />
        </ScrollReveal>

        {/* 4 Capabilities Grid with Staggered Scroll & Card Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} direction="up" delay={i * 80}>
                <div className="group b2b-card b2b-card-interactive p-6 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 border border-orange-100 group-hover:bg-orange-100/70 group-hover:-translate-y-0.5 transition-all duration-200">
                      <Icon className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-stone-900 mb-1.5">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:gap-2 transition-all"
            >
              <span>See all features and integrations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
