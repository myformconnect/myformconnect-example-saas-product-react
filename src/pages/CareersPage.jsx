import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import ValuesSection from '../components/careers/ValuesSection';
import JobListings from '../components/careers/JobListings';
import FinalCTA from '../components/home/FinalCTA';

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <ValuesSection />
      <JobListings />
      <FinalCTA />
    </div>
  );
}
