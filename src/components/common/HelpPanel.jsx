import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, MessageSquare, ChevronDown, ChevronRight, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Button from './Button';

export default function HelpPanel({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const panelRef = useRef(null);
  const navigate = useNavigate();

  const quickFaqs = [
    {
      q: 'How fast can our team connect workflows?',
      a: 'Most teams set up their first integration in under 15 minutes using our pre-built connectors.'
    },
    {
      q: 'Can I test features before purchasing?',
      a: 'Yes, all accounts start with a full 14-day trial with all features enabled. No credit card required.'
    },
    {
      q: 'Where do I find my API tokens and webhook URLs?',
      a: 'Navigate to Workspace Settings → API Credentials. Only administrators can generate new keys.'
    },
    {
      q: 'What is your uptime guarantee?',
      a: 'We maintain a 99.99% monthly SLA across our distributed US and EU regions.'
    }
  ];

  // Filter FAQs by search query if typed
  const filteredFaqs = searchQuery.trim()
    ? quickFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : quickFaqs;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContactSupport = () => {
    onClose();
    navigate('/help');
    setTimeout(() => {
      const el = document.getElementById('support-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
        className="fixed inset-0 bg-stone-900/25 backdrop-blur-2xs transition-opacity pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Help Popover / Card */}
      <div
        ref={panelRef}
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-150 z-10"
      >
        {/* Header */}
        <div className="px-4 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <h3 className="text-sm font-semibold text-stone-900">Help & Quick Answers</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            aria-label="Close help panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Search Bar */}
          <form onSubmit={handleFullSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 text-stone-900 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
            />
          </form>

          {/* Quick FAQ List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                Frequently Asked
              </span>
              <Link
                to="/help"
                onClick={onClose}
                className="text-[11px] font-medium text-orange-600 hover:underline flex items-center gap-0.5"
              >
                <span>View all</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-1.5 text-xs">
              {filteredFaqs.map((faq, i) => {
                const isExpanded = openFaq === i;
                return (
                  <div key={faq.q} className="rounded border border-stone-200/80 bg-stone-50/50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isExpanded ? null : i)}
                      className="w-full px-3 py-2 text-left font-medium text-stone-800 hover:text-orange-600 flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{faq.q}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform ${
                          isExpanded ? 'rotate-180 text-orange-600' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-3 pb-2.5 pt-1 text-[11px] text-stone-600 border-t border-stone-200/60 leading-relaxed bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="p-3 text-center text-xs text-stone-500 bg-stone-50 rounded">
                  No quick answers found. Try the full Help Center below.
                </div>
              )}
            </div>
          </div>

          {/* Contact Support Action Card */}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-stone-900">Need personal assistance?</p>
              <p className="text-[11px] text-stone-500">Our engineering team typically replies within 2h.</p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleContactSupport}
              icon={MessageSquare}
              className="shrink-0 text-xs"
            >
              Contact Support
            </Button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="bg-stone-50 px-4 py-2.5 border-t border-stone-200 text-center">
          <Link
            to="/help"
            onClick={onClose}
            className="text-xs font-medium text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
          >
            <span>Visit Full Documentation & Guides</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
