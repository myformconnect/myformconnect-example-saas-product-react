import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  Layers, 
  LayoutDashboard, 
  Workflow, 
  Settings, 
  CheckCircle2, 
  Clock, 
  Inbox
} from 'lucide-react';
import Button from '../common/Button';

export default function HeroDashboardPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Start the smooth fade-and-lift entrance animation as soon as the page loads
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const quickStats = [
    { label: 'Active Requests', value: '24', change: '+14%', icon: Inbox },
    { label: 'Tasks Completed', value: '14,280', change: '99.9%', icon: CheckCircle2 },
    { label: 'Hours Saved', value: '186 hrs', change: 'This month', icon: Clock },
  ];

  const recentWorkflows = [
    { name: 'Customer Lead Ingestion', app: 'Website Form → CRM', status: 'Active', time: '2m ago' },
    { name: 'Priority Support Escalation', app: 'Help Desk → Slack', status: 'Active', time: '12m ago' },
    { name: 'Candidate Application Sync', app: 'Careers → Inbox', status: 'Scheduled', time: 'In 1h' },
  ];

  return (
    <section className="bg-transparent pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-22 border-b border-stone-200/80 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct Product-Focused Hero Copy */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-semibold text-orange-700 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>Built for modern teams</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.14]">
              Turn every customer request into action.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-lg font-normal">
              Capture leads, support requests, applications, and more from one simple workflow.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
              >
                Book a Demo
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>Set up in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Clean SaaS Dashboard Preview */}
          <div className="lg:col-span-7">
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms ease',
                boxShadow: '0 20px 50px -10px rgba(24, 24, 27, 0.09), 0 8px 16px -6px rgba(24, 24, 27, 0.04)',
              }}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white hover:-translate-y-1 transition-all duration-200"
            >
              {/* Clean App Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-stone-50/80 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                    <Layers className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <span className="font-semibold text-xs text-stone-800">Acme Workspace</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-800 text-[11px] font-medium border border-orange-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Live pipeline active
                  </span>
                </div>
              </div>

              {/* App Body */}
              <div className="flex">
                {/* Left Mini Sidebar */}
                <div className="w-36 shrink-0 border-r border-stone-100 p-3 bg-stone-50/40 hidden sm:block">
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white text-stone-900 font-medium shadow-2xs border border-stone-200">
                      <LayoutDashboard className="w-3.5 h-3.5 text-orange-600" />
                      <span>Overview</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-stone-600 hover:text-stone-900">
                      <Workflow className="w-3.5 h-3.5 text-stone-400" />
                      <span>Workflows</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-stone-600 hover:text-stone-900">
                      <Settings className="w-3.5 h-3.5 text-stone-400" />
                      <span>Settings</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 sm:p-5 space-y-4">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {quickStats.map((st) => (
                      <div key={st.label} className="p-3 rounded-xl bg-stone-50/70 border border-stone-200/80">
                        <div className="text-[11px] text-stone-500 truncate">{st.label}</div>
                        <div className="text-base sm:text-lg font-semibold text-stone-900 mt-0.5">{st.value}</div>
                        <div className="text-[10px] text-orange-600 font-medium mt-0.5">{st.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Clean Simple Table */}
                  <div className="rounded-xl border border-stone-200 overflow-hidden">
                    <div className="bg-stone-50/70 px-3 py-2 border-b border-stone-200 flex items-center justify-between text-xs font-semibold text-stone-700">
                      <span>Recent Activity</span>
                      <span className="text-[11px] text-stone-400 font-normal">Real-time</span>
                    </div>
                    <div className="divide-y divide-stone-100 text-xs">
                      {recentWorkflows.map((item) => (
                        <div key={item.name} className="px-3 py-2.5 flex items-center justify-between hover:bg-stone-50/60 transition-colors">
                          <div>
                            <p className="font-medium text-stone-800">{item.name}</p>
                            <p className="text-[11px] text-stone-400">{item.app}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${
                              item.status === 'Active'
                                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                                : 'bg-stone-100 text-stone-600 border border-stone-200'
                            }`}>
                              {item.status}
                            </span>
                            <p className="text-[10px] text-stone-400 mt-0.5">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
