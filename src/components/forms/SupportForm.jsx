import React, { useState, useRef } from 'react';
import { Upload, FileText, X, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function SupportForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Technical Issue',
    subject: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // Tracks ticket submission status: 'idle', 'submitting', 'success', or 'error'
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef(null);

  const categories = [
    'Account',
    'Billing',
    'Technical Issue',
    'Feature Request',
    'Integration',
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
    if (!formData.message.trim()) errs.message = 'Please provide details of your issue';
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

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
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
      const payload = new FormData(form);
      if (file) {
        payload.set('file', file);
      }

      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: payload,
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setServerError('Something went wrong. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      category: 'Technical Issue',
      subject: '',
      message: '',
    });
    setFile(null);
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
        <h3 className="text-xl font-semibold text-slate-900">Support Ticket Created</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your support request has been received. We'll get back to you shortly. A ticket reference has been logged and sent to <span className="font-semibold text-slate-900">{formData.email}</span>.
        </p>
        <div className="pt-2">
          <Button variant="secondary" size="sm" onClick={resetForm} icon={RefreshCw}>
            Submit another ticket
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`b2b-card p-6 sm:p-8 w-full max-w-xl mx-auto ${className}`} id="support-form">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900">Contact Support Team</h3>
        <p className="text-sm text-slate-500 mt-1">
          Have an inquiry, technical question, or billing request? Open a ticket below.
        </p>
      </div>

      {status === 'error' && serverError && (
        <div className="mb-5 p-3.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Ticket creation failed</p>
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
          <div>
            <label htmlFor="support-name" className="block text-xs font-medium text-slate-700 mb-1.5">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="support-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jordan Lee"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="support-email" className="block text-xs font-medium text-slate-700 mb-1.5">
              Account / Contact Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="support-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jordan@company.com"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="support-category" className="block text-xs font-medium text-slate-700 mb-1.5">
              Issue Category <span className="text-rose-500">*</span>
            </label>
            <select
              id="support-category"
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="support-subject" className="block text-xs font-medium text-slate-700 mb-1.5">
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="support-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Brief summary of request"
              className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
              }`}
            />
            {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="support-message" className="block text-xs font-medium text-slate-700 mb-1.5">
            Detailed Description <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="support-message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please include workflow IDs, relevant payload headers, or steps to reproduce..."
            className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
              errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            }`}
          />
          {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
        </div>

        {/* File Attachment Drag & Drop UI */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5">
            Attachment <span className="text-slate-400 font-normal">(Log file, screenshot, or schema, up to 10MB)</span>
          </label>

          {file ? (
            <div className="flex items-center justify-between p-3 rounded-md bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-5 h-5 text-orange-600 shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-medium text-slate-800 truncate">{file.name}</p>
                  <p className="text-[11px] text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                title="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border border-dashed rounded-md p-5 text-center cursor-pointer transition-colors ${
                isDragging ? 'border-orange-600 bg-orange-50/40' : 'border-slate-300 hover:border-slate-400 bg-slate-50/30'
              }`}
            >
              <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-medium text-slate-700">
                Drag and drop files here, or <span className="text-orange-600 underline">browse files</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, PDF, TXT, or JSON up to 10MB</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".png,.jpg,.jpeg,.pdf,.txt,.json,.log"
              />
            </div>
          )}
          {errors.file && <p className="text-xs text-rose-600 mt-1">{errors.file}</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'submitting'}
          isLoading={status === 'submitting'}
        >
          Submit Support Ticket
        </Button>

        <div className="pt-2 flex items-center justify-center gap-1 text-[11px] text-slate-400 select-none">
          <span>Powered by</span>
          <span className="font-semibold text-sky-500">MFC</span>
        </div>
      </form>
    </div>
  );
}
