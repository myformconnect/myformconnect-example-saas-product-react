import React, { useState } from 'react';
import ContactDetails from '../components/contact/ContactDetails';
import DemoRequestForm from '../components/forms/DemoRequestForm';
import ScheduleCallForm from '../components/forms/ScheduleCallForm';
import TrustSection from '../components/home/TrustSection';
import ScrollReveal from '../components/common/ScrollReveal';
import { Calendar, FileText } from 'lucide-react';

export default function ContactPage() {
  // Switch between requesting a demo or booking a live call on the calendar
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <div>
      <div className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Details & Benefits */}
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>

            {/* Right Column: Form or Calendar Switcher */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 w-full max-w-xl lg:ml-auto">
              {/* Tab Switcher */}
              <div className="flex items-center justify-between mb-6 p-1 bg-slate-100 rounded-lg border border-slate-200 max-w-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'demo'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request a Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('calendar')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === 'calendar'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule a Call</span>
                </button>
              </div>

              {/* Sub-header helper link */}
              {activeTab === 'demo' ? (
                <div>
                  <DemoRequestForm />
                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-500">
                      Prefer to pick a specific time slot right now?{' '}
                      <button
                        type="button"
                        onClick={() => setActiveTab('calendar')}
                        className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        Book a meeting on our calendar
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <ScheduleCallForm />
                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-500">
                      Prefer sending an inquiry message first?{' '}
                      <button
                        type="button"
                        onClick={() => setActiveTab('demo')}
                        className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        Fill out the inquiry form
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Trust section */}
      <TrustSection />
    </div>
  );
}
