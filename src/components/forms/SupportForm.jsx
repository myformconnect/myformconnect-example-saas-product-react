import React, { useState, useRef } from 'react';
import { Upload, FileText, X, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_CONTACT_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_CONTACT_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function SupportForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Getting Started',
    subject: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef(null);

  const categories = [
    'Getting Started',
    'Bug Report',
    'Adding an App or File',
    'Routines & Shortcuts',
    'Billing',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim()) errs.message = 'Please provide details of your question';
    return errs;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File size exceeds 10MB limit' }));
        return;
      }
      setFile(selected);
      setErrors((prev) => {
        const u = { ...prev };
        delete u.file;
        return u;
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      if (dropped.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File size exceeds 10MB limit' }));
        return;
      }
      setFile(dropped);
      setErrors((prev) => {
        const u = { ...prev };
        delete u.file;
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

    setStatus('submitting');

    try {
      const form = e.currentTarget;
      const body = new FormData(form);
      if (file) {
        body.set('attachment', file);
      }

      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        category: 'Getting Started',
        subject: '',
        message: '',
      });
      setFile(null);
    } catch {
      setStatus('error');
      setServerError('Unable to submit your request at this time. Please try again or email team@avorioapp.example.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Message sent successfully</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thanks for reaching out! A member of our support team will reply to your email within 1 business day.
        </p>
        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setStatus('idle')}
            icon={RefreshCw}
            iconPosition="left"
          >
            Submit Another Question
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 text-xs ${className}`}>
      {serverError && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="support-name" className="block font-semibold text-slate-700 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="support-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: null });
            }}
            placeholder="Jane Doe"
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="support-email" className="block font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="support-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            placeholder="jane@example.com"
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Category */}
        <div>
          <label htmlFor="support-category" className="block font-semibold text-slate-700 mb-1.5">
            Topic or Category <span className="text-red-500">*</span>
          </label>
          <select
            id="support-category"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="support-subject" className="block font-semibold text-slate-700 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="support-subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: null });
            }}
            placeholder="e.g. Question about setting up a morning routine"
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.subject && <p className="mt-1 text-[11px] text-red-600">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="support-message" className="block font-semibold text-slate-700 mb-1.5">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="support-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: null });
          }}
          placeholder="Please describe your question or what you are trying to do..."
          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
      </div>

      {/* Optional Attachment */}
      <div>
        <label className="block font-semibold text-slate-700 mb-1.5">
          Screenshot or File (Optional)
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`p-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
            isDragging
              ? 'border-sky-500 bg-sky-50/40'
              : 'border-slate-200 hover:border-sky-300 bg-slate-50/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            name="file"
            onChange={handleFileChange}
            className="hidden"
          />
          {file ? (
            <div className="flex items-center justify-center gap-2 text-slate-800">
              <FileText className="w-4 h-4 text-sky-600" />
              <span className="font-medium truncate max-w-xs">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
                className="p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <Upload className="w-5 h-5 text-slate-400 mx-auto" />
              <p className="text-slate-600 font-medium">Click to upload or drag screenshot</p>
              <p className="text-[10px] text-slate-400">PNG, JPG, PDF up to 10MB</p>
            </div>
          )}
        </div>
        {errors.file && <p className="mt-1 text-[11px] text-red-600">{errors.file}</p>}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={status === 'submitting'}
          className="w-full justify-center"
        >
          Send Message
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
