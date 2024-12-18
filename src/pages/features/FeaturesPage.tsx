import React from 'react';
import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { FeaturesHero } from '../../components/features/FeaturesHero';
import { FeatureShowcase } from '../../components/features/FeatureShowcase';
import { PricingPreview } from '../../components/pricing/PricingPreview';
import { ContactCTA } from '../../components/ContactCTA';

export function FeaturesPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <FeaturesHero />
      </BackgroundPattern>
      <FeatureShowcase />
      <PricingPreview />
      <ContactCTA />
    </>
  );
}