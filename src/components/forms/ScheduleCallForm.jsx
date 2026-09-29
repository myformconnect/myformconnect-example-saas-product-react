import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, CheckCircle2, User, Mail, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

// MyFormCapture (MFC / myformconnect) form endpoint:
const MFC_ENDPOINT =
  import.meta.env.MFC_CONTACT_FORM_URL ||
  import.meta.env.MFC_FORM_URL ||
  import.meta.env.VITE_MFC_CONTACT_FORM_URL ||
  'https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e';

export default function ScheduleCallForm({ className = '' }) {
  // Booking steps: 1 = Pick Date, 2 = Pick Time, 3 = Fill Details, 4 = Confirmation
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(24);
  const selectedMonth = 'October 2026';
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  const [attendee, setAttendee] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Orevio Desktop Walkthrough & Setup',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
    '01:30 PM', '02:15 PM', '03:00 PM', '04:00 PM'
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!attendee.name.trim()) errs.name = 'Name is required';
    if (!attendee.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attendee.email)) {
      errs.email = 'Valid email is required';
    }
    if (!attendee.company.trim()) errs.company = 'Company is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const body = new FormData(form);
      body.set('scheduledDate', `${selectedMonth} ${selectedDate}`);
      body.set('scheduledTime', selectedTime);
      body.set('topic', attendee.topic);

      const res = await fetch(MFC_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      });

      if (!res.ok) throw new Error('Booking submission failed');

      setStep(4);
    } catch {
      alert('Unable to confirm schedule at this time. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`b2b-card p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-sm ${className}`}>
      {/* Step Indicator Header */}
      {step < 4 && (
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">
              {step === 1 ? '1. Select a Date' : step === 2 ? '2. Select a Time' : '3. Your Information'}
            </span>
            <span className="text-slate-400">• 15-min call</span>
          </div>

          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}
        </div>
      )}

      {/* Step 1: Calendar Grid */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-sky-600" />
              <span>{selectedMonth}</span>
            </h4>
            <span className="text-[11px] text-slate-400">Timezone: Local</span>
          </div>

          <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
              <span key={d} className="font-medium text-slate-400 py-1">
                {d}
              </span>
            ))}

            {/* Days with friendly sky blue selection */}
            {daysInMonth.map((day) => {
              const isSelected = selectedDate === day;
              const isWeekend = day % 7 === 6 || day % 7 === 0;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isWeekend}
                  onClick={() => setSelectedDate(day)}
                  className={`h-9 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500 text-white font-semibold shadow-xs'
                      : isWeekend
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={() => setStep(2)}
              icon={ArrowRight}
              iconPosition="right"
            >
              Continue to Times
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Time Slots */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Available times on {selectedMonth} {selectedDate}</span>
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50 border-sky-500 text-sky-800 font-semibold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-slate-50'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Selected: <strong className="text-slate-900">{selectedTime}</strong>
            </span>
            <Button
              variant="primary"
              size="md"
              onClick={() => setStep(3)}
              icon={ArrowRight}
              iconPosition="right"
            >
              Confirm Time
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Information Form */}
      {step === 3 && (
        <form onSubmit={handleDetailsSubmit} className="space-y-4 text-xs">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">
                {selectedMonth} {selectedDate} at {selectedTime}
              </p>
              <p className="text-[11px] text-slate-500">15-minute product walkthrough</p>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sky-600 hover:underline text-[11px] font-medium cursor-pointer"
            >
              Change
            </button>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="schedule-name" className="block font-semibold text-slate-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="schedule-name"
                type="text"
                name="name"
                value={attendee.name}
                onChange={(e) => setAttendee({ ...attendee, name: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="schedule-email" className="block font-semibold text-slate-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="schedule-email"
                type="email"
                name="email"
                value={attendee.email}
                onChange={(e) => setAttendee({ ...attendee, email: e.target.value })}
                placeholder="jane@company.com"
                className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="schedule-company" className="block font-semibold text-slate-700 mb-1">
              Company or Studio <span className="text-red-500">*</span>
            </label>
            <input
              id="schedule-company"
              type="text"
              name="company"
              value={attendee.company}
              onChange={(e) => setAttendee({ ...attendee, company: e.target.value })}
              placeholder="e.g. Acme Studio"
              className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 ${
                errors.company ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
              }`}
            />
            {errors.company && <p className="mt-1 text-[11px] text-red-600">{errors.company}</p>}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              className="w-full justify-center"
            >
              Confirm Meeting
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
      )}

      {/* Step 4: Success Confirmation */}
      {step === 4 && (
        <div className="py-6 text-center space-y-4 animate-in fade-in duration-200">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">You are scheduled!</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
              We have booked your walkthrough for <strong>{selectedMonth} {selectedDate} at {selectedTime}</strong>. A calendar invite has been dispatched to {attendee.email}.
            </p>
          </div>
          <div className="pt-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setStep(1);
                setAttendee({ name: '', email: '', company: '', topic: 'Orevio Desktop Walkthrough & Setup' });
              }}
            >
              Book Another Meeting
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
