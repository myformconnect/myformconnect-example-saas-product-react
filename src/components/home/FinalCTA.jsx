import React from 'react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { Download, ArrowRight, Check } from 'lucide-react';

export default function FinalCTA() {
  const handleDownload = () => {
    alert('Thank you for trying Avorio! This is a demo product for simple desktop productivity.');
  };

  return (
    <section className="py-20 bg-transparent" id="download">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-14 text-center border border-slate-800 shadow-xl">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Get Started
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Less clicking. More doing.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mx-auto">
                Download Avorio for Windows or macOS. Set up your everyday shortcuts and routines in less than a minute.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Button
                  onClick={handleDownload}
                  variant="primary"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Download Avorio
                </Button>
                <Button
                  to="/features"
                  variant="dark"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Explore Features
                </Button>
              </div>

              <div className="pt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  <span>Works on Windows & Mac</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  <span>Free forever plan available</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  <span>Simple 1-minute setup</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
