import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function DemoRequestForm({ onSuccess, className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSize: '',
    interests: 'Workflow Automation',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // Tracks form progress: 'idle', 'submitting', 'success', or 'error'
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
      if (onSuccess) onSuccess(formData);
    } catch {
      setStatus('error');
      setServerError('We encountered an error processing your request. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      teamSize: '',
      interests: 'Workflow Automation',
      message: '',
    });
    setErrors({});
    setStatus('idle');
    setServerError('');
  };

  if (status === 'success') {
    return (
      <div className="b2b-card p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Demo Request Received</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our technical solutions team will review your requirements for <span className="font-semibold text-slate-900">{formData.companyName}</span> and reach out within 1 business day.
        </p>
        <div className="pt-2">
          <Button variant="secondary" size="sm" onClick={resetForm} icon={RefreshCw}>
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`b2b-card p-6 sm:p-8 w-full max-w-xl mx-auto ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900">Request a Product Demo</h3>
        <p className="text-sm text-slate-500 mt-1">
          Explore tailored workflow configurations with a solution engineer.
        </p>
      </div>

      {status === 'error' && serverError && (
        <div className="mb-5 p-3.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <div>
            <p className="font-medium">Request failed</p>
            <p className="text-xs text-rose-700 mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      <form
        action={MFC_ENDPOINT}
        method="POST"
        data-mfc="true"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="demo-fullName" className="block text-xs font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="demo-fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors ${
                errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
              }`}
            />
            {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
          </div>

          {/* Work Email */}
          <div>
            <label htmlFor="demo-workEmail" className="block text-xs font-medium text-slate-700 mb-1.5">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="demo-workEmail"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors ${
                errors.workEmail ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
              }`}
            />
            {errors.workEmail && <p className="text-xs text-rose-600 mt-1">{errors.workEmail}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Company Name */}
          <div>
            <label htmlFor="demo-companyName" className="block text-xs font-medium text-slate-700 mb-1.5">
              Company Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="demo-companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Acme Corp"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors ${
                errors.companyName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
              }`}
            />
            {errors.companyName && <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>}
          </div>

          {/* Team / Company Size */}
          <div>
            <label htmlFor="demo-teamSize" className="block text-xs font-medium text-slate-700 mb-1.5">
              Team / Company Size <span className="text-rose-500">*</span>
            </label>
            <select
              id="demo-teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors ${
                errors.teamSize ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <option value="">Select size...</option>
              <option value="1-10">1 – 10 employees</option>
              <option value="11-50">11 – 50 employees</option>
              <option value="51-200">51 – 200 employees</option>
              <option value="201-1000">201 – 1,000 employees</option>
              <option value="1000+">1,000+ employees</option>
            </select>
            {errors.teamSize && <p className="text-xs text-rose-600 mt-1">{errors.teamSize}</p>}
          </div>
        </div>

        {/* What would you like to see? */}
        <div>
          <label htmlFor="demo-interests" className="block text-xs font-medium text-slate-700 mb-1.5">
            Primary Area of Interest
          </label>
          <select
            id="demo-interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          >
            <option value="Workflow Automation">Workflow Automation & Triggers</option>
            <option value="Real-time Analytics">Real-time Analytics & SLA Monitoring</option>
            <option value="Enterprise Integrations">Enterprise Integrations & Webhooks</option>
            <option value="Security & Compliance">Security, RBAC & SOC 2 Compliance</option>
            <option value="All Capabilities">Comprehensive Platform Tour</option>
          </select>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="demo-message" className="block text-xs font-medium text-slate-700 mb-1.5">
            Additional Notes or Requirements <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your current toolchain or team goals..."
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'submitting'}
          isLoading={status === 'submitting'}
        >
          Request a Demo
        </Button>

        <p className="text-xs text-center text-slate-400">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>

        <div className="pt-2 flex items-center justify-center gap-1 text-[11px] text-slate-400 select-none">
          <span>Powered by</span>
          <span className="font-semibold text-sky-500">MFC</span>
        </div>
      </form>
    </div>
  );
}
