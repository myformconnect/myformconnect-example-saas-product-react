import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { Check, ArrowRight, Download } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

export default function PricingPreview() {
  const handleCtaClick = (planId) => {
    if (planId === 'free') {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50/60 border-b border-slate-200/80" id="pricing-preview">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Simple Pricing"
            title="Free for everyday shortcuts. Pro for unlimited routines."
            description="Download Avorio for free today. Upgrade when you need unlimited routines and multiple spaces."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.id} direction="up" delay={idx * 80}>
              <div
                className={`b2b-card b2b-card-interactive rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-180 h-full ${
                  plan.popular
                    ? 'border-2 border-sky-500 shadow-sm relative bg-white'
                    : 'border border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-sky-500 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-slate-500 min-h-[36px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                      ${plan.monthlyPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {plan.id === 'free' ? 'forever' : plan.id === 'team' ? '/ user / mo' : '/ month'}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 mb-8 pt-4 border-t border-slate-100">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {plan.id === 'free' ? (
                    <Button
                      onClick={() => handleCtaClick('free')}
                      variant="secondary"
                      size="md"
                      className="w-full justify-center"
                      icon={Download}
                    >
                      {plan.ctaText}
                    </Button>
                  ) : plan.id === 'team' ? (
                    <Button
                      to="/contact"
                      variant="secondary"
                      size="md"
                      className="w-full justify-center"
                    >
                      {plan.ctaText}
                    </Button>
                  ) : (
                    <Button
                      to="/pricing"
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                    >
                      {plan.ctaText}
                    </Button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/pricing"
            className="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1.5"
          >
            <span>Compare all plan features</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
