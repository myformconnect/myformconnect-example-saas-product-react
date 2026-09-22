import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function DeepDiveFeature() {
  return (
    <section className="py-20 bg-white border-b border-stone-200 space-y-20">
      <div className="container-custom space-y-20">
        {/* Module 1: Reliable Workflows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal direction="up" className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Workflows
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
              Automate routine operations with confidence.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Create reliable automation chains between your tools. If an external service is temporarily down, Vantage automatically pauses and retries.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automatic retries with custom delay intervals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Filter incoming data before running actions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full step-by-step history for every execution</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120} className="lg:col-span-7">
            <div className="b2b-card p-6 bg-stone-50/70 border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <span className="font-semibold text-slate-800">Pipeline: Lead Sync & Notification</span>
                <span className="text-emerald-700 font-medium">Healthy</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-[11px]">1</span>
                    <span className="font-medium text-slate-800">Trigger: Form Submitted</span>
                  </div>
                  <span className="text-slate-400">Website Lead Form</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-[11px]">2</span>
                    <span className="font-medium text-slate-800">Action: Update CRM Record</span>
                  </div>
                  <span className="text-slate-400">Salesforce / HubSpot</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-[11px]">3</span>
                    <span className="font-medium text-slate-800">Notify: Send Team Alert</span>
                  </div>
                  <span className="text-slate-400">Slack #sales</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Module 2: Team Permissions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal direction="right" delay={120} className="lg:col-span-7 order-2 lg:order-1">
            <div className="b2b-card p-6 bg-stone-50/70 border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <span className="font-semibold text-slate-800">Team Role Management</span>
                <span className="text-slate-500 font-mono">3 roles configured</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">Admin</span>
                    <p className="text-slate-500 text-[11px]">Manage team, billing, and all workflows</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-slate-700 text-[11px]">Full access</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">Editor</span>
                    <p className="text-slate-500 text-[11px]">Create and edit workflows</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 text-[11px] font-medium">Edit</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800">Viewer</span>
                    <p className="text-slate-500 text-[11px]">Inspect logs and dashboard reports</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-slate-600 text-[11px]">Read only</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Access Control
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
              Simple team permissions and roles.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Keep your workspaces organized. Assign clear roles to teammates so everyone has exactly the access they need.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Preset roles: Admin, Editor, and Viewer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single sign-on (SSO) support for company accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audit trail of who changed what</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
