import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

export default function PricingCards({ isAnnual }) {
  return (
    <section className="pb-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => {
            const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
            const isHighlighted = plan.popular;

            let pricePeriodText = plan.billingPeriod;
            if (plan.id === 'free') {
              pricePeriodText = 'free forever';
            } else if (plan.id === 'pro') {
              pricePeriodText = '/ month';
            } else if (plan.id === 'team') {
              pricePeriodText = '/ user / month';
            }

            let billingSubtext = 'Free download, no card required';
            if (plan.id === 'pro') {
              billingSubtext = isAnnual
                ? 'Billed annually ($72/yr)'
                : 'Billed monthly, cancel anytime';
            } else if (plan.id === 'team') {
              billingSubtext = isAnnual
                ? 'Billed annually ($144/user/yr)'
                : 'Billed monthly for teams';
            }

            return (
              <ScrollReveal
                key={plan.id}
                delay={i * 80}
                className="flex"
              >
                <div
                  className={`w-full rounded-xl p-7 flex flex-col justify-between b2b-card b2b-card-interactive ${
                    isHighlighted
                      ? 'bg-white border-2 border-sky-500 shadow-md relative'
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-sky-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 min-h-[40px] mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-2 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {pricePeriodText}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 mb-6">
                      {billingSubtext}
                    </p>

                    <div className="pt-6 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-900 mb-3">
                        What&apos;s included:
                      </p>
                      <ul className="space-y-2.5 text-xs text-slate-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    {plan.id === 'free' ? (
                      <Button
                        to="/#download"
                        variant="secondary"
                        size="md"
                        className="w-full justify-center"
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
                        to="/#download"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
