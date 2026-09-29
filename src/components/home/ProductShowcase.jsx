import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Search, 
  Folder, 
  FileText, 
  Star, 
  Zap, 
  Globe, 
  Mail, 
  Calendar, 
  Music,
  Plus
} from 'lucide-react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-transparent border-b border-slate-200/80" id="showcase">
      <div className="container-custom space-y-20">
        {/* Concept 1: Find - Search for an app or file */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                1. Find
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mt-1">
                Search for an app or file in seconds.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
                No more clicking through multiple folders or looking across different windows. Type a few letters and Orevio brings the right item right to you.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Search across your files, documents, and apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Opens instantly with a simple keyboard shortcut</span>
                </li>
              </ul>

              <div className="pt-3">
                <Button to="/features" variant="secondary" size="sm" icon={ArrowRight} iconPosition="right">
                  See how search works
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={120}>
              <div className="b2b-card p-5 bg-white border border-slate-200 shadow-md rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-slate-600 font-semibold ml-2">Quick Search</span>
                  </div>
                  <span className="text-xs text-slate-400">⌥ Space</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold text-slate-900">project prop</span>
                    <span className="w-1.5 h-4 bg-sky-500 animate-pulse inline-block" />
                  </div>
                  <span className="text-[10px] text-slate-400">2 results</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white text-sky-600 flex items-center justify-center border border-sky-100 shadow-2xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Project proposal.pdf</p>
                        <p className="text-[11px] text-slate-500">Documents / Work / Proposals</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-sky-700 bg-white border border-sky-200 px-2 py-0.5 rounded">
                      Press ↵ to Open
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between hover:bg-slate-50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                        <Folder className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Projects Folder</p>
                        <p className="text-[11px] text-slate-400">Documents / Projects</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">Folder</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Concept 2: Organize - Save favorite items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ScrollReveal direction="right" delay={120}>
              <div className="b2b-card p-5 bg-white border border-slate-200 shadow-md rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>My Pinned Favorites</span>
                  </div>
                  <span className="text-[11px] text-slate-400">4 items saved</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 text-center space-y-1.5 hover:bg-sky-50/50 hover:border-sky-200 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <Globe className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-medium text-slate-800">Browser</p>
                    <span className="text-[10px] text-slate-400 block">Favorite app</span>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 text-center space-y-1.5 hover:bg-sky-50/50 hover:border-sky-200 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                      <Folder className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-medium text-slate-800">Work Folder</p>
                    <span className="text-[10px] text-slate-400 block">Key files</span>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 text-center space-y-1.5 hover:bg-sky-50/50 hover:border-sky-200 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-medium text-slate-800">Calendar</p>
                    <span className="text-[10px] text-slate-400 block">Schedule</span>
                  </div>

                  <div className="p-3 rounded-lg border border-dashed border-slate-300 text-center space-y-1.5 flex flex-col items-center justify-center hover:border-sky-400 transition-colors cursor-pointer">
                    <Plus className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium">Add new</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                2. Organize
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mt-1">
                Keep favorite items in one tidy place.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
                Pin your most important files, folders, and web links. You can arrange them however you like and keep your desktop screen clean and uncluttered.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Pin documents, web links, folders, and apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Organize by work, study, or personal spaces</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Concept 3: Routine - Start everyday actions together */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                3. Routine
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mt-1">
                Start a group of actions with one click.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
                Instead of manually clicking to open four different things every morning, save them as a routine. Click once, and Orevio opens everything for you.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Group everyday apps, websites, and folders together</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Create routines for morning setup, focus time, or wind-down</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={120}>
              <div className="b2b-card p-5 bg-white border border-slate-200 shadow-md rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <Zap className="w-4 h-4 text-sky-600" />
                    <span>Routine: &quot;Morning Setup&quot;</span>
                  </div>
                  <span className="text-[11px] font-medium text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                    1 click
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-sky-100 text-sky-700 font-semibold flex items-center justify-center text-xs">1</div>
                      <Mail className="w-4 h-4 text-slate-600" />
                      <span className="font-medium text-slate-800">Open Email Inbox</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ready</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-sky-100 text-sky-700 font-semibold flex items-center justify-center text-xs">2</div>
                      <Calendar className="w-4 h-4 text-slate-600" />
                      <span className="font-medium text-slate-800">Open Daily Calendar</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ready</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-sky-100 text-sky-700 font-semibold flex items-center justify-center text-xs">3</div>
                      <Music className="w-4 h-4 text-slate-600" />
                      <span className="font-medium text-slate-800">Play Focus Music</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ready</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Run Routine</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
