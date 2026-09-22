import React, { useState } from 'react';
import { HelpCircle, Calendar, X } from 'lucide-react';
import DemoQuickForm from '../forms/DemoQuickForm';
import HelpPanel from './HelpPanel';

export default function FloatingActions() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isHelpPanelOpen, setIsHelpPanelOpen] = useState(false);

  return (
    <>
      {/* =================================================================== */}
      {/* 1. Bottom-Left: Subtle Neutral Floating Button for Help             */}
      {/* =================================================================== */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40">
        <button
          type="button"
          onClick={() => {
            setIsHelpPanelOpen(!isHelpPanelOpen);
            setIsDemoModalOpen(false);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-white text-stone-700 hover:text-orange-700 border border-stone-300 hover:border-orange-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-180 cursor-pointer"
          aria-label="Open Help and FAQs"
        >
          <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
          <span>Help</span>
        </button>
      </div>

      {/* =================================================================== */}
      {/* 2. Bottom-Right: Primary Warm Orange Floating Button for Book Demo  */}
      {/* =================================================================== */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => {
            setIsDemoModalOpen(true);
            setIsHelpPanelOpen(false);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-orange-600 text-white hover:bg-orange-700 border border-orange-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-180 cursor-pointer"
          aria-label="Book a Product Demo"
        >
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span>Book a Demo</span>
        </button>
      </div>

      {/* =================================================================== */}
      {/* Compact Demo Modal (Bottom-Right Action Modal)                      */}
      {/* =================================================================== */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Subtle backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/30 backdrop-blur-2xs transition-opacity"
            onClick={() => setIsDemoModalOpen(false)}
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div
              className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 sm:p-6 text-left align-middle shadow-xl border border-stone-200 transition-all animate-in fade-in zoom-in-95 duration-150"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-3.5 border-b border-stone-100">
                <div>
                  <h3 className="text-base font-semibold text-stone-900">
                    Book a Live Demo
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Connect with our team for a quick product walkthrough.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(false)}
                  className="rounded-md p-1 text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
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

      {/* =================================================================== */}
      {/* Compact Help Panel (Bottom-Left Action Panel)                       */}
      {/* =================================================================== */}
      <HelpPanel
        isOpen={isHelpPanelOpen}
        onClose={() => setIsHelpPanelOpen(false)}
      />
    </>
  );
}
