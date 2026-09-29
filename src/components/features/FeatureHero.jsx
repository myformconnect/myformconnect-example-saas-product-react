import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

export default function FeatureHero() {
  const handleDownload = () => {
    alert('Thank you for trying Avorio! This is a demo product for simple desktop productivity.');
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <ScrollReveal className="container-custom text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Desktop Features</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
          Everything you need, within reach.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Avorio puts your favorite apps, folders, files, and everyday routines in one friendly place so you can get things done without the clutter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={handleDownload} variant="primary" size="lg" icon={Download} iconPosition="left">
            Download Avorio
          </Button>
          <Button to="/pricing" variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
            View Pricing Plans
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
