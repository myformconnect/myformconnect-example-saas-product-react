import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function EnterpriseBanner() {
  return (
    <section className="py-16 bg-white border-t border-stone-200">
      <div className="container-custom">
        <ScrollReveal className="bg-stone-50 border border-stone-200 p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600">
              <ShieldCheck className="w-4 h-4" />
              <span>Need custom volume or on-prem deployment?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Talk to our enterprise solutions architects.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We provide tailored security assessments, custom DPAs, dedicated Slack channels, and high-throughput infrastructure guarantees.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
