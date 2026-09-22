import React from 'react';
import HeroDashboardPreview from '../components/home/HeroDashboardPreview';
import TrustSection from '../components/home/TrustSection';
import ProductOverview from '../components/home/ProductOverview';
import KeyFeatures from '../components/home/KeyFeatures';
import HowItWorks from '../components/home/HowItWorks';
import ProductShowcase from '../components/home/ProductShowcase';
import MetricsSection from '../components/home/MetricsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingPreview from '../components/home/PricingPreview';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <div>
      <HeroDashboardPreview />
      <TrustSection />
      <ProductOverview />
      <KeyFeatures />
      <HowItWorks />
      <ProductShowcase />
      <MetricsSection />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
