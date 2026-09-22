import React from 'react';
import { ArrowRight, Check, Zap, Bell, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-stone-50/50 border-b border-stone-200/80 overflow-hidden">
      <div className="container-custom space-y-24">
        {/* Showcase 1: Simple Workflow Automation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text: translateY(15px) */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Automation
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight leading-snug mt-1">
                Set up team workflows in minutes.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal mt-2">
                Connect your triggers and let Vantage handle the rest. No complex coding required.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-stone-600 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Automatic retries when external apps are busy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Instant alerts sent straight to your team channels</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button to="/features" variant="secondary" size="sm" icon={ArrowRight} iconPosition="right">
                  Learn more
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual: translateX(20px) -> 0 */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150}>
              <div className="b2b-card b2b-card-interactive p-6 bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
                  <span className="font-semibold text-stone-800">Workflow: Lead Routing & Alert</span>
                  <span className="text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-orange-200/80">Running</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-orange-600 shrink-0" />
                      <div>
                        <p className="font-medium text-stone-800">1. Form Submitted</p>
                        <p className="text-[11px] text-stone-500">Customer request received</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">Instant</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-medium text-stone-800">2. Sync to CRM</p>
                        <p className="text-[11px] text-stone-500">Record updated automatically</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">0.3s</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <Bell className="w-4 h-4 text-orange-600 shrink-0" />
                      <div>
                        <p className="font-medium text-stone-800">3. Notify Slack Team</p>
                        <p className="text-[11px] text-stone-500">Direct message to #team-inbox</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">Delivered</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Showcase 2: Clear Metrics & Visibility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual: translateX(-20px) -> 0 */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ScrollReveal direction="right" delay={150}>
              <div className="b2b-card b2b-card-interactive p-6 bg-white border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
                  <span className="font-semibold text-stone-800">Weekly Execution Health</span>
                  <span className="text-stone-400">Last 7 days</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-stone-700">
                      <span className="font-medium">Successful runs</span>
                      <span className="font-mono text-orange-600 font-semibold">99.98%</span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-[99.9%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-stone-700">
                      <span className="font-medium">Average turnaround</span>
                      <span className="font-mono text-stone-800 font-semibold">42 ms</span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-2">
                      <div className="bg-stone-800 h-2 rounded-full w-[85%]" />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 flex items-center justify-between border border-stone-100">
                  <span>Total requests processed: <strong>148,290</strong></span>
                  <span className="text-emerald-700 font-medium font-mono">Healthy</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text: translateY(15px) */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Visibility
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight leading-snug mt-1">
                Clear visibility across every run.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-normal mt-2">
                Always know when tasks run, how fast they finish, and get immediately notified if anything needs attention.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-stone-600 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Simple status logs with clear step timestamps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>One-click retry for any paused task</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button to="/features" variant="secondary" size="sm" icon={ArrowRight} iconPosition="right">
                  Explore features
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
