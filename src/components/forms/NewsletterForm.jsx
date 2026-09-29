import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_NEWSLETTER_FORM_URL ||
  import.meta.env.MFC_KEEP_INFORMED_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_NEWSLETTER_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function NewsletterForm({ className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email.');
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
        <div className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>You&apos;re subscribed! Thanks for joining our updates.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address"
                className="w-full pl-9 pr-3.5 py-2 text-xs bg-white text-slate-900 border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              isLoading={status === 'loading'}
              className="shrink-0"
            >
              Subscribe
            </Button>
          </div>

          {status === 'error' && (
            <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          )}

          <p className="text-[11px] text-slate-500">
            Powered by{' '}
            <a
              href="https://myformcapture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#325AE9] font-medium hover:underline"
            >
              MFC
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
