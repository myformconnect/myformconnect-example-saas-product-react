import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { ArrowDown } from 'lucide-react';
import Button from '../common/Button';

export default function CareersHero() {
  const scrollToJobs = () => {
    const el = document.getElementById('open-positions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <ScrollReveal className="container-custom text-center max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-3 block">
          Join the team
        </span>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Build simple, reliable software with us.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto mb-8 font-normal">
          We are a remote-first team focused on building calm, high-quality tools that help teams work better.
        </p>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={scrollToJobs}
            icon={ArrowDown}
            iconPosition="right"
          >
            View Open Roles
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
