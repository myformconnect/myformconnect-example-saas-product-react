import React, { useState } from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import ComparisonTable from '../components/pricing/ComparisonTable';
import FAQSection from '../components/home/FAQSection';
import EnterpriseBanner from '../components/pricing/EnterpriseBanner';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div>
      <PricingHero isAnnual={isAnnual} onToggle={setIsAnnual} />
      <PricingCards isAnnual={isAnnual} />
      <ComparisonTable />
      <FAQSection />
      <EnterpriseBanner />
    </div>
  );
}
