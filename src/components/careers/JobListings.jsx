import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import Modal from '../common/Modal';
import CareerApplicationForm from '../forms/CareerApplicationForm';
import { jobListings } from '../../data/jobs';
import { MapPin, Briefcase, ArrowRight, Check } from 'lucide-react';

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className="py-20 bg-white" id="open-positions">
      <div className="container-custom max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Opportunities"
            title="Current open positions"
            description="We are constantly seeking dedicated craftspeople to solve challenging distributed systems problems."
          />
        </ScrollReveal>

        <div className="space-y-4">
          {jobListings.map((job, i) => (
            <ScrollReveal
              key={job.id}
              delay={i * 70}
            >
              <div
                className="b2b-card b2b-card-interactive rounded-2xl p-6 sm:p-7 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                      {job.title}
                    </h4>
                    <span className="text-[11px] font-mono text-orange-800 bg-orange-50 border border-orange-200/70 px-2.5 py-0.5 rounded-full">
                      {job.department}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.type}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 font-normal">
                    {job.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {job.requirements.slice(0, 2).map((req) => (
                      <span
                        key={req}
                        className="inline-flex items-center gap-1 text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{req}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleApply(job)}
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full md:w-auto"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal with CareerApplicationForm */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          title={`Apply for ${selectedJob?.title || 'Open Role'}`}
          subtitle={`${selectedJob?.department || 'Engineering'} • ${selectedJob?.location || 'Remote'}`}
          maxWidth="max-w-xl"
        >
          <CareerApplicationForm
            defaultPosition={selectedJob?.title}
            onCancel={handleClose}
          />
        </Modal>
      </div>
    </section>
  );
}
