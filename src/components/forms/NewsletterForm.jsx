import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function NewsletterForm({ className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // Tracks subscription status: 'idle', 'loading', 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Make sure the user entered a valid email before sending
    if (!email.trim()) {
      setErrorMessage('Please enter your work email.');
      setStatus('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(e.currentTarget),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to subscribe at this time. Please try again.');
    }
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      {status === 'success' ? (
        <div className="flex items-center gap-2.5 p-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>You have been subscribed to product updates. Thank you!</span>
          <button
            onClick={() => setStatus('idle')}
            className="ml-auto text-xs text-emerald-700 underline font-medium hover:text-emerald-900"
          >
            Reset
          </button>
        </div>
      ) : (
        <form
          action={MFC_ENDPOINT}
          method="POST"
          data-mfc="true"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-2"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Work Email Address
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={status === 'loading'}
                placeholder="name@company.com"
                className={`w-full pl-9 pr-3.5 py-2 text-sm bg-white text-slate-900 border rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors ${
                  status === 'error' ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
                }`}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === 'loading'}
              isLoading={status === 'loading'}
              className="shrink-0"
            >
              Subscribe
            </Button>
          </div>

          {status === 'error' && errorMessage && (
            <p className="flex items-center gap-1.5 text-xs text-rose-600 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          )}

          <p className="text-xs text-slate-400">
            Product updates, operational insights, and release notes. Unsubscribe anytime.
          </p>

          <div className="pt-1 flex items-center gap-1 text-[11px] text-slate-400 select-none">
            <span>Powered by</span>
            <span className="font-semibold text-sky-500">MFC</span>
          </div>
        </form>
      )}
    </div>
  );
}
