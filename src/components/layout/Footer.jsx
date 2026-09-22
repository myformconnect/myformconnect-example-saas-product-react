import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import NewsletterForm from '../forms/NewsletterForm';
import { footerLinks } from '../../data/navigation';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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

  return (
    <footer className="bg-[#fafaf9] border-t border-stone-200 text-stone-600 mt-auto">
      <div className="container-custom py-14">
        {/* Top bar: Brand + Compact Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-200">
          <div className="lg:col-span-6 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                <Layers className="w-4 h-4 text-orange-400" />
              </div>
              <span className="font-semibold text-base tracking-tight text-stone-900">
                Vantage
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-stone-500 max-w-sm leading-relaxed">
              Software that keeps your team moving. Collect requests, automate workflows, and stay focused.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="max-w-md lg:ml-auto w-full">
              <p className="text-xs font-semibold text-stone-900 mb-2">
                Get product updates.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* 4 Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3.5">
              Product
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-stone-500 hover:text-stone-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3.5">
              Resources
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-stone-500 hover:text-stone-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3.5">
              Company
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-stone-500 hover:text-stone-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3.5">
              Legal
            </h5>
            <ul className="space-y-2 text-xs">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-stone-500 hover:text-stone-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Vantage Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-4 text-stone-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-stone-700 transition-colors">
              <LinkedinIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-stone-700 transition-colors">
              <XTwitterIcon />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-stone-700 transition-colors">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
