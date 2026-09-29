import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, MessageSquare, ChevronDown, ChevronRight, HelpCircle, Sparkles } from 'lucide-react';

export default function HelpPanel({ isOpen, onClose, onOpenFeedback }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const panelRef = useRef(null);
  const navigate = useNavigate();

  const quickFaqs = [
    {
      q: 'How do I add an app or file?',
      a: 'Drag any application or document into Orevio or click "+ Add" in your workspace to pin it for quick access.'
    },
    {
      q: 'How do I find something quickly?',
      a: 'Press Option+Space (macOS) or Alt+Space (Windows) to open search, then start typing the name of any app, file, or shortcut.'
    },
    {
      q: 'How do I create a routine?',
      a: 'Click "New Routine", choose the apps or files you want to group together, and save it so you can open them all with one click.'
    },
    {
      q: 'How do I view something I copied earlier?',
      a: 'Open Orevio and check the Clipboard section to find and paste recent copied items, links, or notes.'
    }
  ];

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredFaqs = searchQuery
    ? quickFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : quickFaqs;

  if (!isOpen) return null;

  const handleContactSupport = () => {
    onClose();
    navigate('/help');
    setTimeout(() => {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleFullSearch = (e) => {
    e.preventDefault();
    onClose();
    navigate('/help');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-start p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/25 backdrop-blur-2xs transition-opacity pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Help Popover */}
      <div
        ref={panelRef}
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-150 z-10"
      >
        {/* Header */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <h3 className="text-sm font-semibold text-slate-900">Help & Quick Answers</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close help panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Quick Action Options: Search Help, Contact Support, Send Feedback */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={handleContactSupport}
              className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-sky-50/50 hover:border-sky-300 text-slate-700 flex items-center gap-2 text-left transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900 text-xs">Contact Support</span>
                <span className="text-[10px] text-slate-500">Ask a question</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenFeedback) onOpenFeedback();
              }}
              className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-sky-50/50 hover:border-sky-300 text-slate-700 flex items-center gap-2 text-left transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900 text-xs">Send Feedback</span>
                <span className="text-[10px] text-slate-500">Tell us your thoughts</span>
              </div>
            </button>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleFullSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
            />
          </form>

          {/* Quick FAQ List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Common Questions
              </span>
              <Link
                to="/help"
                onClick={onClose}
                className="text-[11px] font-medium text-sky-600 hover:underline flex items-center gap-0.5"
              >
                <span>View all</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-1.5 text-xs">
              {filteredFaqs.map((faq, i) => {
                const isExpanded = openFaq === i;
                return (
                  <div key={faq.q} className="rounded-lg border border-slate-200 bg-slate-50/60 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isExpanded ? null : i)}
                      className="w-full px-3 py-2 text-left font-medium text-slate-800 hover:text-sky-600 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <span className="truncate">{faq.q}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${
                          isExpanded ? 'rotate-180 text-sky-600' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-3 pb-2.5 pt-1 text-[11px] text-slate-600 border-t border-slate-100 bg-white leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
