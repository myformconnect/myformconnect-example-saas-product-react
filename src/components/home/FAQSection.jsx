import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { ChevronDown } from 'lucide-react';
import { generalFaqs } from '../../data/helpData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200/80">
      <div className="container-custom max-w-3xl">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Clear answers to common questions about setup, billing, and security."
          />
        </ScrollReveal>

        <div className="space-y-3">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={faq.question} direction="up" delay={idx * 50}>
                <div
                  className={`rounded-2xl border bg-white overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-orange-300 shadow-xs' : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-medium text-stone-900 text-sm sm:text-base hover:text-orange-600 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-250 ease-out ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  <div
                    className="grid transition-all duration-250 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </div>
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
