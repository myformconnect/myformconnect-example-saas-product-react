import React from 'react';
import { CheckCircle2, Mail, Calendar, Music, ExternalLink, Copy } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function DeepDiveFeature() {
  return (
    <section className="py-20 bg-white border-b border-slate-200 space-y-20">
      <div className="container-custom space-y-20">
        {/* Module 1: Simple Routines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal direction="up" className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              Simple Routines
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
              Group common tasks and open them with one click.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Skip the repetitive routine of manually opening four different apps and folders every morning. Orevio groups your everyday actions together so you can start working right away.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open your favorite apps, folders, and web links together</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Create separate routines for work, study, or creative sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simple setup without complex settings</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120} className="lg:col-span-7">
            <div className="b2b-card p-6 bg-slate-50/70 border border-slate-200 shadow-xs space-y-3 rounded-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-semibold text-slate-800">Routine: &quot;Morning Setup&quot;</span>
                <span className="font-medium text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded text-[11px]">3 actions</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 font-bold flex items-center justify-center text-[11px]">1</span>
                    <Mail className="w-4 h-4 text-slate-600" />
                    <span className="font-medium text-slate-800">Open Work Email</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Chrome</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 font-bold flex items-center justify-center text-[11px]">2</span>
                    <Calendar className="w-4 h-4 text-slate-600" />
                    <span className="font-medium text-slate-800">Open Daily Schedule</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Calendar</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 font-bold flex items-center justify-center text-[11px]">3</span>
                    <Music className="w-4 h-4 text-slate-600" />
                    <span className="font-medium text-slate-800">Start Focus Playlist</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Spotify</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Module 2: Clipboard History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal direction="right" delay={120} className="lg:col-span-7 order-2 lg:order-1">
            <div className="b2b-card p-6 bg-slate-50/70 border border-slate-200 shadow-xs space-y-3 rounded-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-semibold text-slate-800">Recent Copied Items</span>
                <span className="text-slate-400 text-[11px]">Saved automatically</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <ExternalLink className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-slate-800 font-medium truncate">https://meet.google.com/abc-xyz-123</span>
                  </div>
                  <button type="button" className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors">
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <Copy className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-slate-800 font-medium truncate">742 Evergreen Terrace, Springfield</span>
                  </div>
                  <button type="button" className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors">
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <Copy className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-slate-800 font-medium truncate">Review slides with the marketing team</span>
                  </div>
                  <button type="button" className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              Clipboard History
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
              Never lose something you copied earlier.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Accidentally copied over an important link or address? Orevio keeps a handy list of things you copied recently so you can paste them again without searching.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Search through recent links, text, and notes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quickly paste previous items with one click</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clear your history anytime with a single tap</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
