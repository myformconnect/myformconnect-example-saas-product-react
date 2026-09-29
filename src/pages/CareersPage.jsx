import React from 'react';
import CareerApplicationForm from '../components/forms/CareerApplicationForm';
import ScrollReveal from '../components/common/ScrollReveal';
import { Sparkles, Laptop, HeartHandshake, Globe, Zap, CheckCircle2 } from 'lucide-react';

export default function CareersPage() {
  const perks = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      desc: 'Work from wherever you are happiest and most productive, with flexible asynchronous hours.',
    },
    {
      icon: Zap,
      title: 'High Craft & Speed',
      desc: 'We care deeply about desktop performance (<15MB RAM, instant response, clean architecture).',
    },
    {
      icon: HeartHandshake,
      title: 'Direct Ownership',
      desc: 'Small, high-trust engineering team where your work directly shapes the daily product.',
    },
    {
      icon: Laptop,
      title: 'Modern Desktop Stack',
      desc: 'Build with Rust, Electron, TypeScript, React, and native OS APIs.',
    },
  ];

  return (
    <div className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200 min-h-[85vh]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Hero, Culture & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up" delay={50} className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-700 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Careers at Orevio</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                We&apos;re always looking for great talent.
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Help us build the cleanest, fastest desktop productivity companion for Windows and macOS. We keep everyday routines fast, distraction-free, and delightfully simple.
              </p>
            </ScrollReveal>

            {/* Culture / Value Cards */}
            <ScrollReveal direction="up" delay={150} className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Why Work With Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {perks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-0.5">{p.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Open Application Prompt */}
            <ScrollReveal direction="up" delay={200} className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 text-xs text-sky-900 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-sky-950">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Don&apos;t see your exact role?</span>
              </div>
              <p className="text-slate-600 leading-relaxed pl-5">
                We frequently create roles for outstanding people. Select <strong>General Application</strong> in the form to start a conversation with our team.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Application Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={100} className="bg-white p-7 sm:p-9 border border-slate-200 shadow-sm rounded-2xl">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Submit Your Application
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Select your position from the dropdown below. No formal cover letter needed—just share what you love working on.
                </p>
              </div>

              <CareerApplicationForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
