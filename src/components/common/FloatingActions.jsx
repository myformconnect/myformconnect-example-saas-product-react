import React, { useState } from 'react';
import { HelpCircle, Calendar, X, Sparkles } from 'lucide-react';
import DemoQuickForm from '../forms/DemoQuickForm';
import FeedbackForm from '../forms/FeedbackForm';
import HelpPanel from './HelpPanel';

export default function FloatingActions() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isHelpPanelOpen, setIsHelpPanelOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <>
      {/* 1. Bottom-Left: Subtle Neutral Floating Button for Help */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40">
        <button
          type="button"
          onClick={() => {
            setIsHelpPanelOpen(!isHelpPanelOpen);
            setIsDemoModalOpen(false);
            setIsFeedbackModalOpen(false);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-white text-slate-700 hover:text-sky-700 border border-slate-300 hover:border-sky-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
          aria-label="Open Help and FAQs"
        >
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Help</span>
        </button>
      </div>

      {/* 2. Bottom-Right: Sky Blue Floating Button for Demo */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => {
            setIsDemoModalOpen(true);
            setIsHelpPanelOpen(false);
            setIsFeedbackModalOpen(false);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-sky-500 text-white hover:bg-sky-600 border border-sky-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
          aria-label="Book a Product Demo"
        >
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span>Book a Demo</span>
        </button>
      </div>

      {/* Compact Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-2xs transition-opacity"
            onClick={() => setIsDemoModalOpen(false)}
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 sm:p-6 text-left align-middle shadow-xl border border-slate-200 transition-all animate-in fade-in zoom-in-95 duration-150">
              {/* Header */}
              <div className="flex items-start justify-between pb-3.5 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Book a Orevio Demo
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Connect with our team for a fast, simple walkthrough.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(false)}
                  className="rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close demo modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Minimal Demo Form */}
              <div className="mt-3.5">
                <DemoQuickForm
                  onSuccess={() => {
                    setTimeout(() => setIsDemoModalOpen(false), 2200);
                  }}
                  onNavigateSchedule={() => setIsDemoModalOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Slide-out Help Drawer */}
      <HelpPanel
        isOpen={isHelpPanelOpen}
        onClose={() => setIsHelpPanelOpen(false)}
        onOpenFeedback={() => {
          setIsHelpPanelOpen(false);
          setIsFeedbackModalOpen(true);
        }}
      />

      {/* Feedback Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-2xs transition-opacity"
            onClick={() => setIsFeedbackModalOpen(false)}
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-5 sm:p-6 text-left align-middle shadow-xl border border-slate-200 transition-all animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <h3 className="text-base font-semibold text-slate-900">Tell us what you think</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFeedbackModalOpen(false)}
                  className="rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close feedback modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <FeedbackForm
                onSuccess={() => {
                  setTimeout(() => setIsFeedbackModalOpen(false), 2400);
                }}
                onCancel={() => setIsFeedbackModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
