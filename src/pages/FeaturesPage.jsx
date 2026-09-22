import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import CoreCapabilities from '../components/features/CoreCapabilities';
import DeepDiveFeature from '../components/features/DeepDiveFeature';
import IntegrationsGrid from '../components/features/IntegrationsGrid';
import SecuritySection from '../components/features/SecuritySection';
import FinalCTA from '../components/home/FinalCTA';

export default function FeaturesPage() {
  return (
    <div>
      <FeatureHero />
      <CoreCapabilities />
      <DeepDiveFeature />
      <IntegrationsGrid />
      <SecuritySection />
      <FinalCTA />
    </div>
  );
}
