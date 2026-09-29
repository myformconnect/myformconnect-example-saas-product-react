import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  Search, 
  Folder, 
  FolderDown, 
  Globe, 
  Mail, 
  Calendar, 
  Music, 
  FileText, 
  Image, 
  FileSpreadsheet, 
  Zap, 
  Clock, 
  Laptop,
  Check
} from 'lucide-react';
import Button from '../common/Button';

export default function HeroDashboardPreview() {
  const [mounted, setMounted] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [activeTab, setActiveTab] = useState('quick');

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickAccessItems = [
    { name: 'Documents', icon: Folder, color: 'text-sky-600 bg-sky-50' },
    { name: 'Downloads', icon: FolderDown, color: 'text-amber-600 bg-amber-50' },
    { name: 'Chrome', icon: Globe, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Email', icon: Mail, color: 'text-sky-600 bg-sky-50' },
    { name: 'Calendar', icon: Calendar, color: 'text-rose-600 bg-rose-50' },
    { name: 'Music', icon: Music, color: 'text-violet-600 bg-violet-50' },
  ];

  const recentItems = [
    { name: 'Project proposal.pdf', type: 'PDF Document', icon: FileText, time: '10m ago' },
    { name: 'Holiday photos', type: 'Image folder', icon: Image, time: '1h ago' },
    { name: 'Budget.xlsx', type: 'Spreadsheet', icon: FileSpreadsheet, time: 'Yesterday' },
  ];

  const routines = [
    { title: 'Morning setup', desc: 'Opens Email, Calendar, and To-Do list', time: '1 click' },
    { title: 'Work mode', desc: 'Opens current project and mute alerts', time: '1 click' },
    { title: 'End of day', desc: 'Saves active notes and cleans downloads', time: '1 click' },
  ];

  return (
    <section className="bg-transparent pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 border-b border-slate-200/80 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Everyday Productivity Copy */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>DESKTOP PRODUCTIVITY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Your everyday desktop, made simpler.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
              Find files, open apps, save useful shortcuts, and handle everyday tasks from one simple workspace.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                onClick={handleDownload}
                variant="primary"
                size="lg"
                icon={Download}
                iconPosition="left"
              >
                Download Avorio
              </Button>
              <Button
                onClick={handleSeeHowItWorks}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                See how it works
              </Button>
            </div>

            {/* Supporting Text & Platform Note */}
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-2 font-medium text-slate-700">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Simple to set up. Easy to use.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Laptop className="w-3.5 h-3.5" />
                <span>Available for Windows 10/11 & macOS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fictional Avorio Desktop Window Preview */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-700 transform ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Window Frame */}
              <div 
                className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12)' }}
              >
                {/* Clean Window Titlebar */}
                <div className="bg-slate-50/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between select-none">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400/30 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400/30 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400/30 inline-block" />
                    <span className="text-xs font-semibold text-slate-800 ml-2">Avorio</span>
                  </div>

                  {/* Window Hint */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-[11px] font-medium text-slate-500">Press</span>
                    <span className="text-[10px] font-mono bg-white border border-slate-200 text-slate-700 px-1.5 py-0.5 rounded shadow-2xs">⌥ Space</span>
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-5 sm:p-6 space-y-5 bg-white">
                  {/* Friendly Greeting Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center gap-1.5">
                        <span>Good morning</span>
                        <span>👋</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        What would you like to do?
                      </p>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
                      <button
                        type="button"
                        onClick={() => setActiveTab('quick')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          activeTab === 'quick' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Home
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('routines')}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          activeTab === 'routines' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Routines
                      </button>
                    </div>
                  </div>

                  {/* Friendly Clean Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      placeholder="Search files and apps..."
                      className="w-full pl-9 pr-12 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all font-sans"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                      ↵
                    </span>
                  </div>

                  {/* Section 1: QUICK ACCESS */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      <span>QUICK ACCESS</span>
                      <span className="text-[10px] text-sky-600 font-normal cursor-pointer hover:underline">Customize</span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {quickAccessItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.name}
                            className="p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60 hover:bg-sky-50/40 hover:border-sky-200 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer group"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color} transition-transform group-hover:-translate-y-0.5`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium text-slate-800 text-center truncate w-full">
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 2: RECENT & MY ROUTINES (Split View) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* Recent Items */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        <span>RECENT</span>
                        <Clock className="w-3 h-3 text-slate-400" />
                      </div>

                      <div className="space-y-1.5">
                        {recentItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.name}
                              className="p-2 rounded-lg border border-slate-200/70 bg-white hover:bg-slate-50 flex items-center justify-between gap-2 text-xs transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <div className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                  <Icon className="w-3.5 h-3.5 text-slate-600" />
                                </div>
                                <span className="font-medium text-slate-800 truncate">{item.name}</span>
                              </div>
                              <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* My Routines */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        <span>MY ROUTINES</span>
                        <Zap className="w-3 h-3 text-sky-600" />
                      </div>

                      <div className="space-y-1.5">
                        {routines.map((routine) => (
                          <div
                            key={routine.title}
                            className="p-2 rounded-lg border border-slate-200/70 bg-white hover:bg-sky-50/30 hover:border-sky-200 flex items-center justify-between gap-2 text-xs transition-colors cursor-pointer group"
                          >
                            <div className="truncate">
                              <p className="font-medium text-slate-800 group-hover:text-sky-700 truncate">{routine.title}</p>
                              <p className="text-[10px] text-slate-400 truncate">{routine.desc}</p>
                            </div>
                            <span className="text-[10px] font-medium text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full shrink-0">
                              {routine.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom Hint */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 select-none">
                    <span>Avorio is ready</span>
                    <span>Click any item to open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
