import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function DemoQuickForm({ onSuccess, onNavigateSchedule, className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // Tracks form progress: 'idle', 'loading', 'success', or 'error'
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid corporate email required';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
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
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setServerError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-6 space-y-3">
        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h4 className="text-base font-semibold text-slate-900">Demo Request Sent</h4>
        <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
          Thanks, <strong className="text-slate-900">{formData.name}</strong>. Our team will review requirements for <strong className="text-slate-900">{formData.company}</strong> and email you shortly.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setFormData({ name: '', email: '', company: '', message: '' });
              setStatus('idle');
            }}
            className="text-xs font-medium text-orange-600 hover:underline"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      action={MFC_ENDPOINT}
      method="POST"
      data-mfc="true"
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-3.5 ${className}`}
    >
      {status === 'error' && serverError && (
        <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="quick-name" className="block text-xs font-medium text-slate-700 mb-1">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="quick-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Alex Morgan"
          className={`w-full px-3 py-1.5 text-xs sm:text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
            errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
          }`}
        />
        {errors.name && <p className="text-[11px] text-rose-600 mt-0.5">{errors.name}</p>}
      </div>

      {/* Work Email */}
      <div>
        <label htmlFor="quick-email" className="block text-xs font-medium text-slate-700 mb-1">
          Work Email <span className="text-rose-500">*</span>
        </label>
        <input
          id="quick-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="alex@company.com"
          className={`w-full px-3 py-1.5 text-xs sm:text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
            errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
          }`}
        />
        {errors.email && <p className="text-[11px] text-rose-600 mt-0.5">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="quick-company" className="block text-xs font-medium text-slate-700 mb-1">
          Company Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="quick-company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className={`w-full px-3 py-1.5 text-xs sm:text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
            errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
          }`}
        />
        {errors.company && <p className="text-[11px] text-rose-600 mt-0.5">{errors.company}</p>}
      </div>

      {/* Message (Optional) */}
      <div>
        <label htmlFor="quick-message" className="block text-xs font-medium text-slate-700 mb-1">
          Message <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="quick-message"
          name="message"
          rows="2"
          value={formData.message}
          onChange={handleChange}
          placeholder="What would you like to see?"
          className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
        />
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full justify-center"
          disabled={status === 'loading'}
          isLoading={status === 'loading'}
        >
          Request Demo
        </Button>
      </div>

      {/* Secondary link to schedule call */}
      <div className="pt-2 text-center border-t border-slate-100">
        <Link
          to="/contact"
          onClick={onNavigateSchedule}
          className="text-xs text-slate-500 hover:text-orange-600 font-medium inline-flex items-center gap-1 transition-colors"
        >
          <span>Prefer to choose a time?</span>
          <span className="text-orange-600 font-semibold underline">Schedule a Call →</span>
        </Link>
      </div>

      <div className="pt-2 flex items-center justify-center gap-1 text-[11px] text-slate-400 select-none">
        <span>Powered by</span>
        <span className="font-semibold text-sky-500">MFC</span>
      </div>
    </form>
  );
}
