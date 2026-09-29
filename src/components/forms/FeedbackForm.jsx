import React, { useState, useRef } from 'react';
import { Star, Upload, FileText, X, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_CONTACT_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_CONTACT_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function FeedbackForm({ onSuccess, onCancel, className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'General Feedback',
    rating: '5',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');
  const fileInputRef = useRef(null);

  const feedbackTypes = [
    'General Feedback',
    'Bug',
    'Feature Request',
    'Something Is Confusing',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.message.trim()) {
      errs.message = 'Please share your thoughts or suggestions with us';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email if provided';
    }
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
      body.set('rating', formData.rating);
      body.set('feedbackType', formData.feedbackType);
      if (file) {
        body.set('screenshot', file);
      }

      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      });

      if (!res.ok) throw new Error('Feedback submission failed');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        feedbackType: 'General Feedback',
        rating: '5',
        message: '',
      });
      setFile(null);
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setServerError('Unable to send feedback at this time. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-base font-semibold text-slate-900">Thank you for your feedback!</h4>
        <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
          We read every note. Your suggestions help us make Orevio simpler and friendlier for everyone.
        </p>
        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setStatus('idle')}
            icon={RefreshCw}
            iconPosition="left"
          >
            Send More Feedback
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

      {/* Star Rating */}
      <div>
        <label className="block font-semibold text-slate-700 mb-1.5">
          How is your experience with Orevio?
        </label>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: String(star) })}
              className="p-1 rounded hover:scale-110 transition-transform focus:outline-none cursor-pointer"
              aria-label={`Rate ${star} star`}
            >
              <Star
                className={`w-6 h-6 transition-colors ${
                  star <= Number(formData.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-300'
                }`}
              />
            </button>
          ))}
          <span className="text-[11px] text-slate-500 ml-2 font-medium">
            {formData.rating === '5' ? 'Excellent' : formData.rating === '4' ? 'Good' : formData.rating === '3' ? 'Okay' : formData.rating === '2' ? 'Needs Work' : 'Confusing'}
          </span>
        </div>
      </div>

      {/* Category: What is this about? */}
      <div>
        <label htmlFor="feedbackType" className="block font-semibold text-slate-700 mb-1.5">
          What is this about?
        </label>
        <select
          id="feedbackType"
          name="feedbackType"
          value={formData.feedbackType}
          onChange={(e) => setFormData({ ...formData, feedbackType: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
        >
          {feedbackTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Name (Optional) */}
        <div>
          <label htmlFor="fb-name" className="block font-semibold text-slate-700 mb-1">
            Name (Optional)
          </label>
          <input
            id="fb-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Email (Optional) */}
        <div>
          <label htmlFor="fb-email" className="block font-semibold text-slate-700 mb-1">
            Email (Optional)
          </label>
          <input
            id="fb-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            placeholder="Only if you'd like a reply"
            className={`w-full px-3.5 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="fb-message" className="block font-semibold text-slate-700 mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="fb-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: null });
          }}
          placeholder="What do you like, or what could be simpler and better?"
          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
      </div>

      {/* Optional Attachment */}
      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Screenshot or Image (Optional)
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`p-3 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
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
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <Upload className="w-4 h-4 text-slate-400" />
              <span className="font-medium">Attach an image or screenshot (optional)</span>
            </div>
          )}
        </div>
        {errors.file && <p className="mt-1 text-[11px] text-red-600">{errors.file}</p>}
      </div>

      <div className="pt-2 flex items-center justify-end gap-2">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={status === 'submitting'}
          className={onCancel ? '' : 'w-full justify-center'}
        >
          Send Feedback
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
