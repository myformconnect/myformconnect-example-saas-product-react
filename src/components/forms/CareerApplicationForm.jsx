import React, { useState, useRef } from 'react';
import { Upload, FileText, X, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function CareerApplicationForm({ defaultPosition = '', onCancel, className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: defaultPosition || 'Senior Frontend Engineer',
    linkedin: '',
    portfolio: '',
    coverMessage: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // Tracks application status: 'idle', 'submitting', 'success', or 'error'
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef(null);

  const positions = [
    'Senior Frontend Engineer',
    'Staff Backend Engineer (Distributed Systems)',
    'Lead Product Designer',
    'Enterprise Customer Success Manager',
    'General Engineering Inquiry'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!resumeFile) errs.resume = 'Please attach your resume / CV';
    return errs;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size exceeds 15MB limit' }));
        return;
      }
      setResumeFile(selected);
      setErrors((prev) => {
        const u = { ...prev };
        delete u.resume;
        return u;
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      if (dropped.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size exceeds 15MB limit' }));
        return;
      }
      setResumeFile(dropped);
      setErrors((prev) => {
        const u = { ...prev };
        delete u.resume;
        return u;
      });
    }
  };

  const removeFile = () => {
    setResumeFile(null);
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
      const body = new FormData(form);
      if (resumeFile) {
        body.set('resume', resumeFile);
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
    } catch {
      setStatus('error');
      setServerError('Application submission failed. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Application submitted successfully.</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you for applying to Vantage for <span className="font-semibold text-slate-900">{formData.position}</span>. Our recruiting team reviews each application carefully and will reach out if there's a strong fit.
        </p>
        {onCancel && (
          <div className="pt-2">
            <Button variant="secondary" size="sm" onClick={onCancel}>
              Close Window
            </Button>
          </div>
        )}
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
      className={`space-y-4 ${className}`}
    >
      {status === 'error' && serverError && (
        <div className="p-3.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-xs text-rose-700">{serverError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Jane Doe"
            className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
              errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            }`}
          />
          {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@example.com"
            className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
              errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Position</label>
          <select
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          >
            {positions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">LinkedIn Profile</label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/..."
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Portfolio / GitHub URL</label>
          <input
            type="url"
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            placeholder="https://github.com/..."
            className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Resume File Upload */}
      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Resume / CV <span className="text-rose-500">*</span>
        </label>
        {resumeFile ? (
          <div className="flex items-center justify-between p-3 rounded-md bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText className="w-5 h-5 text-orange-600 shrink-0" />
              <div className="truncate">
                <p className="text-xs font-medium text-slate-800 truncate">{resumeFile.name}</p>
                <p className="text-[11px] text-slate-400">{(resumeFile.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200"
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
            className={`border border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${
              isDragging ? 'border-orange-600 bg-orange-50/40' : 'border-slate-300 hover:border-slate-400 bg-slate-50/30'
            }`}
          >
            <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
            <p className="text-xs font-medium text-slate-700">
              Drag resume here or <span className="text-orange-600 underline">browse</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">PDF or DOCX up to 15MB</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
          </div>
        )}
        {errors.resume && <p className="text-xs text-rose-600 mt-1">{errors.resume}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Cover Note / Brief Introduction <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows="3"
          value={formData.coverMessage}
          onChange={(e) => setFormData({ ...formData, coverMessage: e.target.value })}
          placeholder="What excites you about building high-reliability workflow software with us?"
          className="w-full px-3 py-2 text-sm bg-white text-slate-900 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
        {onCancel && (
          <Button variant="ghost" size="md" onClick={onCancel} type="button">
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'submitting'}
          isLoading={status === 'submitting'}
        >
          Submit Application
        </Button>
      </div>

      <div className="pt-2 flex items-center justify-center gap-1 text-[11px] text-slate-400 select-none">
        <span>Powered by</span>
        <span className="font-semibold text-sky-500">MFC</span>
      </div>
    </form>
  );
}
