import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import CoreCapabilities from '../components/features/CoreCapabilities';
import DeepDiveFeature from '../components/features/DeepDiveFeature';
import PrivateByDesign from '../components/features/PrivateByDesign';
import FinalCTA from '../components/home/FinalCTA';

export default function FeaturesPage() {
  return (
    <div>
      <FeatureHero />
      <CoreCapabilities />
      <DeepDiveFeature />
      <PrivateByDesign />
      <FinalCTA />
    </div>
  );
}
