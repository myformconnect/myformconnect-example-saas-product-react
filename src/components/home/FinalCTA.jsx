import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 text-center border border-stone-800 shadow-xl">
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Ready to simplify your workflow?
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-md mx-auto">
                Start your 14-day free trial today, or schedule a quick walkthrough with our team.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Get Started
                </Button>
                <Button
                  to="/contact"
                  variant="dark"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a Demo
                </Button>
              </div>

              <div className="pt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>14-day full trial</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>No credit card required</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Set up in 5 minutes</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
