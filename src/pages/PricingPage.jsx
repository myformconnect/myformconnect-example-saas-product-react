import React, { useState } from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div>
      <PricingHero isAnnual={isAnnual} onToggle={setIsAnnual} />
      <PricingCards isAnnual={isAnnual} />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
