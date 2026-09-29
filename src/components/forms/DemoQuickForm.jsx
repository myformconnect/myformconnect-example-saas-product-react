import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_KEEP_INFORMED_FORM_URL ||
  import.meta.env.MFC_CONTACT_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_KEEP_INFORMED_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function DemoQuickForm({ onSuccess, onNavigateSchedule: _onNavigateSchedule, className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.company.trim()) errs.company = 'Company is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const u = { ...prev };
        delete u[name];
        return u;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const form = e.currentTarget;
      const body = new FormData(form);

      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      });

      if (!res.ok) throw new Error('Network response was not ok');

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setServerError('Unable to send request. Please try again or email team@avorioapp.example.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-6 px-4 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-base font-semibold text-slate-900">Demo request sent</h4>
        <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
          Thanks for reaching out! Our team will get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 text-xs ${className}`}>
      {serverError && (
        <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="quick-name" className="block font-medium text-slate-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="quick-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Morgan"
          className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
            errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="quick-email" className="block font-medium text-slate-700 mb-1">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="quick-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="alex@company.com"
          className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
            errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
          }`}
        />
        {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="quick-company" className="block font-medium text-slate-700 mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          id="quick-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Studio, company, or team name"
          className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
            errors.company ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
          }`}
        />
        {errors.company && <p className="mt-1 text-[11px] text-red-600">{errors.company}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="quick-message" className="block font-medium text-slate-700 mb-1">
          How can we help? (Optional)
        </label>
        <textarea
          id="quick-message"
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you'd like to see..."
          className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={status === 'loading'}
          className="w-full justify-center"
        >
          Submit Request
        </Button>
      </div>

      <div className="pt-2 text-center">
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
      </div>
    </form>
  );
}
