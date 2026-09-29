import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_CONTACT_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_CONTACT_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function DemoRequestForm({ onSuccess, className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSize: '',
    interests: 'Product Demo',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid corporate email';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.teamSize) errs.teamSize = 'Please select your organization size';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
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

    setStatus('submitting');

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

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        teamSize: '',
        interests: 'Product Demo',
        message: '',
      });
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setServerError('Unable to submit demo request right now. Please try again or reach out to team@orevioapp.example.');
    }
  };

  if (status === 'success') {
    return (
      <div className="b2b-card p-8 text-center bg-white border border-slate-200 rounded-xl space-y-4 shadow-sm animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Demo request received</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for your interest! A member of our team will be in touch shortly to schedule your personalized walkthrough.
        </p>
        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setStatus('idle')}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`b2b-card p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-sm space-y-5 ${className}`}>
      {serverError && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="workEmail"
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.workEmail ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.workEmail && <p className="mt-1 text-[11px] text-red-600">{errors.workEmail}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Studio"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.companyName && <p className="mt-1 text-[11px] text-red-600">{errors.companyName}</p>}
        </div>

        {/* Team Size */}
        <div>
          <label htmlFor="teamSize" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Team Size <span className="text-red-500">*</span>
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.teamSize ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          >
            <option value="">Select size...</option>
            <option value="1-5">1 - 5 people</option>
            <option value="6-25">6 - 25 people</option>
            <option value="26-100">26 - 100 people</option>
            <option value="101+">101+ people</option>
          </select>
          {errors.teamSize && <p className="mt-1 text-[11px] text-red-600">{errors.teamSize}</p>}
        </div>
      </div>

      {/* Primary Interest */}
      <div>
        <label htmlFor="interests" className="block text-xs font-semibold text-slate-700 mb-1.5">
          What would you like to see?
        </label>
        <select
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
        >
          <option value="Product Demo">Everyday Desktop Walkthrough</option>
          <option value="Team Setup">Team Spaces & Sharing</option>
          <option value="Routines">Custom Routines Setup</option>
          <option value="Pricing Inquiry">Pricing & Subscription Questions</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Notes or Questions (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you would like to explore during the walkthrough..."
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={status === 'submitting'}
          className="w-full justify-center"
        >
          Request Product Demo
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
