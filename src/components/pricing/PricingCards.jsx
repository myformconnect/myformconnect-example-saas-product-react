import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

export default function PricingCards({ isAnnual }) {
  return (
    <section className="pb-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, i) => {
            const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
            const isHighlighted = plan.popular;

            return (
              <ScrollReveal
                key={plan.id}
                delay={i * 90}
                className="flex"
              >
                <div
                  className={`w-full rounded-2xl p-7 flex flex-col justify-between b2b-card b2b-card-interactive ${
                    isHighlighted
                      ? 'bg-white border-2 border-orange-500 shadow-md relative'
                      : 'bg-white border border-stone-200'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-orange-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                    </div>

                    <p className="text-xs text-slate-500 mb-6 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-6 flex items-baseline gap-1">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-4xl font-bold text-slate-900 font-mono">
                            ${price}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/ user / month</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-slate-900 font-mono">
                          Custom
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono mb-6">
                      {typeof price === 'number'
                        ? isAnnual
                          ? 'Billed annually ($' + (price * 12) + '/yr)'
                          : 'Billed monthly, cancel anytime'
                        : 'Annual contract tailored to your workload'}
                    </div>

                    <div className="pt-4 border-t border-slate-100 mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 block mb-3">
                        Included in {plan.name}:
                      </span>
                      <ul className="space-y-3 text-xs text-slate-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Button
                      to="/contact"
                      variant={isHighlighted ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full justify-center"
                    >
                      {plan.ctaText}
                    </Button>
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
