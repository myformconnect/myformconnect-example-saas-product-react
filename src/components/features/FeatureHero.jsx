import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { ArrowRight, Layers } from 'lucide-react';

export default function FeatureHero() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <ScrollReveal className="container-custom text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-semibold text-orange-800 mb-6">
          <Layers className="w-3.5 h-3.5 text-orange-600" />
          <span>Product Architecture & Specs</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
          Orchestrate workflows with deterministic execution.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Vantage combines an event-driven automation kernel, low-latency queues, and end-to-end auditability into a single cohesive platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
            Request Architecture Review
          </Button>
          <Button to="/pricing" variant="secondary" size="lg">
            Compare Feature Plans
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
