import React, { useState, useRef } from 'react';
import { Upload, FileText, X, CheckCircle2, AlertCircle, RefreshCw, Briefcase } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_CAREERS_FORM_URL ||
  import.meta.env.VITE_MFC_CAREERS_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function CareerApplicationForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Desktop Software Engineer (Electron / Rust / C++)',
    experience: '3-5 years',
    portfolioUrl: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef(null);

  const positions = [
    'Desktop Software Engineer (Electron / Rust / C++)',
    'macOS Systems Engineer (Swift / Objective-C)',
    'Windows Desktop Developer (C# / .NET / WinUI)',
    'Product Designer (Desktop UI / UX)',
    'Full Stack Web Engineer (React / Node.js)',
    'Desktop Performance & Security Specialist',
    'Technical Support & Customer Experience',
    'General Application / Other Talents'
  ];

  const experienceLevels = [
    '1-2 years',
    '3-5 years',
    '5+ years',
    'Senior / Lead'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.position) errs.position = 'Please select a position';
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
        body.set('resume', file);
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
        phone: '',
        position: 'Desktop Software Engineer (Electron / Rust / C++)',
        experience: '3-5 years',
        portfolioUrl: '',
        message: '',
      });
      setFile(null);
    } catch {
      setStatus('error');
      setServerError('Unable to submit your application at this time. Please try again or email careers@orevioapp.example.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Application Submitted!</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you for your interest in joining Orevio. Our talent team reviews every submission and will get in touch if there is a strong match.
        </p>
        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setStatus('idle')}
            icon={RefreshCw}
            iconPosition="left"
          >
            Submit Another Application
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

      {/* Role Selection Dropdown */}
      <div>
        <label htmlFor="career-position" className="block font-semibold text-slate-700 mb-1.5">
          Role You Are Applying For <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="career-position"
            name="position"
            value={formData.position}
            onChange={(e) => {
              setFormData({ ...formData, position: e.target.value });
              if (errors.position) setErrors({ ...errors, position: null });
            }}
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.position ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          >
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>
        {errors.position && <p className="mt-1 text-[11px] text-red-600">{errors.position}</p>}
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-name" className="block font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="career-name"
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

        <div>
          <label htmlFor="career-email" className="block font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="career-email"
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

      {/* Experience & Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-experience" className="block font-semibold text-slate-700 mb-1.5">
            Years of Experience
          </label>
          <select
            id="career-experience"
            name="experience"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
          >
            {experienceLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="career-portfolio" className="block font-semibold text-slate-700 mb-1.5">
            Portfolio, GitHub, or LinkedIn
          </label>
          <input
            id="career-portfolio"
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
            placeholder="https://github.com/..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Note / Intro */}
      <div>
        <label htmlFor="career-message" className="block font-semibold text-slate-700 mb-1.5">
          Tell Us About Yourself & Projects You Love
        </label>
        <textarea
          id="career-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="A quick note about your background, favorite tools, or what excites you about Orevio..."
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
        />
      </div>

      {/* Resume File Upload Dropzone */}
      <div>
        <label className="block font-semibold text-slate-700 mb-1.5">
          Resume or CV (Optional)
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
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
            name="resume"
            accept=".pdf,.doc,.docx"
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
              <p className="text-slate-600 font-medium">Click to upload or drag resume file</p>
              <p className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 10MB</p>
            </div>
          )}
        </div>
        {errors.file && <p className="mt-1 text-[11px] text-red-600">{errors.file}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={status === 'submitting'}
          className="w-full justify-center"
          icon={Briefcase}
          iconPosition="left"
        >
          Submit Application
        </Button>
      </div>

      {/* Powered by MFC Footer */}
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
