import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, X } from 'lucide-react';
import NewsletterForm from '../forms/NewsletterForm';
import FeedbackForm from '../forms/FeedbackForm';
import { footerLinks } from '../../data/navigation';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XTwitterIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 mt-auto">
      <div className="container-custom py-14">
        {/* Top bar: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                <Compass className="w-4 h-4 text-sky-400" />
              </div>
              <span className="font-semibold text-base tracking-tight text-slate-900">
                Avorio
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Your everyday desktop, made simpler. Apps, files, shortcuts, and routines in one friendly workspace.
            </p>
            <p className="text-[11px] text-slate-400">
              Simple to set up. Easy to use. Built for Windows & Mac.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="max-w-md lg:ml-auto w-full">
              <p className="text-xs font-semibold text-slate-900 mb-2">
                Get occasional Avorio updates.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* 3 Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-10">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Product
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Support
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/help" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsFeedbackOpen(true)}
                  className="text-slate-500 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Send Feedback
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3.5">
              Company
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Avorio. Fictional desktop utility platform.</p>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-700 transition-colors">
              <GithubIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-slate-700 transition-colors">
              <XTwitterIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Footer-triggered Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-2xs transition-opacity"
            onClick={() => setIsFeedbackOpen(false)}
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-5 sm:p-6 text-left align-middle shadow-xl border border-slate-200 transition-all animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="text-base font-semibold text-slate-900">Tell us what you think</h3>
                <button
                  type="button"
                  onClick={() => setIsFeedbackOpen(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close feedback modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <FeedbackForm
                onSuccess={() => {
                  setTimeout(() => setIsFeedbackOpen(false), 2400);
                }}
                onCancel={() => setIsFeedbackOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
