import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2, User, Building2, Mail, Check, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { MFC_ENDPOINT } from '../../config/mfc';

export default function ScheduleCallForm({ className = '' }) {
  // Booking steps: 1 = Pick Date, 2 = Pick Time, 3 = Fill Details, 4 = Confirmation
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(24); // Pre-selected meeting day
  const [selectedMonth, setSelectedMonth] = useState('October 2026');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  const [attendee, setAttendee] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Technical Architecture & Platform Overview',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available meeting times throughout the workday
  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
    '01:30 PM', '02:15 PM', '03:00 PM', '04:00 PM'
  ];

  // Days in the calendar month (1 through 31)
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

      if (!res.ok) throw new Error('Submission failed');
      setStep(4);
    } catch {
      setErrors({ form: 'Unable to schedule call at this time. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`b2b-card overflow-hidden w-full max-w-xl mx-auto ${className}`}>
      {/* Progress header */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <CalendarIcon className="w-4 h-4 text-orange-600" />
          <span>30-min Solutions Call</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 font-mono">
          <span className={step >= 1 ? 'text-orange-600 font-bold' : ''}>1. Date</span>
          <span>→</span>
          <span className={step >= 2 ? 'text-orange-600 font-bold' : ''}>2. Time</span>
          <span>→</span>
          <span className={step >= 3 ? 'text-orange-600 font-bold' : ''}>3. Details</span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Step 1: Choose Date */}
        {step === 1 && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-semibold text-slate-900">Select Date</h4>
                <p className="text-xs text-slate-500">Pick a convenient day for your 30-minute session</p>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-2.5 py-1 text-xs font-medium text-slate-700">
                <span>{selectedMonth}</span>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-xs mb-6">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                <div key={day} className="font-semibold text-slate-400 py-1">
                  {day}
                </div>
              ))}
              {/* Offset days for realistic grid */}
              <div className="text-slate-300 py-2">29</div>
              <div className="text-slate-300 py-2">30</div>
              {daysInMonth.map((day) => {
                const isSelected = selectedDate === day;
                const isWeekend = (day + 2) % 7 === 5 || (day + 2) % 7 === 6;
                const isPast = day < 20;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast || isWeekend}
                    onClick={() => setSelectedDate(day)}
                    className={`py-2 rounded-full font-medium transition-colors ${
                      isSelected
                        ? 'bg-orange-600 text-white shadow-xs'
                        : isPast || isWeekend
                        ? 'text-slate-300 cursor-not-allowed bg-slate-50/50'
                        : 'text-slate-800 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Selected: <strong className="text-slate-800">{selectedMonth} {selectedDate}, 2026</strong>
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setStep(2)}
                icon={ArrowRight}
                iconPosition="right"
              >
                Choose Time
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Time */}
        {step === 2 && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-semibold text-slate-900">Select Time Slot</h4>
                <p className="text-xs text-slate-500">
                  {selectedMonth} {selectedDate}, 2026 • 30 mins
                </p>
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-600 hover:text-slate-900 underline flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back to Date
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2.5 px-3 text-xs font-medium rounded-full border text-center transition-all ${
                    selectedTime === slot
                      ? 'border-orange-600 bg-orange-50 text-orange-700 ring-1 ring-orange-600 font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Time: <strong className="text-slate-800">{selectedTime}</strong> (UTC+05:30)
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setStep(3)}
                icon={ArrowRight}
                iconPosition="right"
              >
                Enter Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Attendee Details */}
        {step === 3 && (
          <form
            action={MFC_ENDPOINT}
            method="POST"
            data-mfc="true"
            onSubmit={handleDetailsSubmit}
            noValidate
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-semibold text-slate-900">Attendee Information</h4>
                <p className="text-xs text-slate-500">
                  Meeting on {selectedMonth} {selectedDate} at {selectedTime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-slate-600 hover:text-slate-900 underline flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            {errors.form && (
              <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                {errors.form}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={attendee.name}
                onChange={(e) => setAttendee({ ...attendee, name: e.target.value })}
                placeholder="Sarah Connor"
                className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                  errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Corporate Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={attendee.email}
                onChange={(e) => setAttendee({ ...attendee, email: e.target.value })}
                placeholder="sarah@cyberdyne.io"
                className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={attendee.company}
                onChange={(e) => setAttendee({ ...attendee, company: e.target.value })}
                placeholder="Cyberdyne Systems"
                className={`w-full px-3 py-2 text-sm bg-white text-slate-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 ${
                  errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.company && <p className="text-xs text-rose-600 mt-1">{errors.company}</p>}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full mt-2"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Confirm Call Reservation
            </Button>
          </form>
        )}

        {/* Step 4: Realistic Confirmation Screen */}
        {step === 4 && (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">You're all set.</h3>
              <p className="text-sm text-slate-600 mt-1">
                Your call has been scheduled with our Solutions Engineering team.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-xs space-y-2.5 max-w-sm mx-auto">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 font-medium text-slate-900">
                <span>Call Details</span>
                <span className="text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded text-[11px]">Confirmed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                <span>{selectedMonth} {selectedDate}, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{selectedTime} (30 mins)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <User className="w-4 h-4 text-slate-400" />
                <span>{attendee.name} ({attendee.company})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{attendee.email}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              A calendar invite with Google Meet / Zoom conference coordinates has been dispatched to your inbox.
            </p>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setStep(1);
                  setAttendee({ name: '', email: '', company: '', topic: '' });
                }}
              >
                Schedule Another Call
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1 text-[11px] text-slate-400 select-none">
          <span>Powered by</span>
          <span className="font-semibold text-sky-500">MFC</span>
        </div>
      </div>
    </div>
  );
}
