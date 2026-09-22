import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

export default function PricingPreview() {
  return (
    <section className="py-20 bg-transparent border-b border-stone-200/80">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing that scales with your team."
            description="Start with our 14-day free trial. Upgrade, downgrade, or cancel anytime."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.id} direction="up" delay={idx * 90}>
              <div
                className={`b2b-card b2b-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 h-full ${
                  plan.popular
                    ? 'border-2 border-orange-500 shadow-sm relative bg-white'
                    : 'border border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-orange-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-stone-900">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-stone-500 min-h-[36px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    {typeof plan.yearlyPrice === 'number' ? (
                      <>
                        <span className="text-3xl sm:text-4xl font-bold text-stone-900 font-mono">
                          ${plan.yearlyPrice}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">/ user / mo</span>
                      </>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-bold text-stone-900 font-mono">
                        Custom
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-stone-600">
                    {plan.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    to="/contact"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={150}>
          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:gap-2 transition-all"
            >
              <span>View full feature comparison & enterprise details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
