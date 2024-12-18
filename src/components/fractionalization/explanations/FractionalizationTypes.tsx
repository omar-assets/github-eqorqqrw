import React from 'react';
import { Building2, Code, Palette, Briefcase } from 'lucide-react';
import { BackgroundPattern } from '../../ui/BackgroundPattern';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { TraditionalExplanation } from './TraditionalExplanation';
import { DigitalExplanation } from './DigitalExplanation';
import { RealEstateExplanation } from './RealEstateExplanation';
import { ArtExplanation } from './ArtExplanation';
import { BusinessExplanation } from './BusinessExplanation';

const explanationTypes = [
  {
    id: 'traditional',
    icon: Building2,
    title: 'Traditional Fractionalization',
    component: TraditionalExplanation
  },
  {
    id: 'digital',
    icon: Code,
    title: 'Digital Asset Fractionalization',
    component: DigitalExplanation
  },
  {
    id: 'real-estate',
    icon: Building2,
    title: 'Real Estate Fractionalization',
    component: RealEstateExplanation
  },
  {
    id: 'art',
    icon: Palette,
    title: 'Art & Collectibles',
    component: ArtExplanation
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Equity',
    component: BusinessExplanation
  }
];

export function FractionalizationTypes() {
  const [activeType, setActiveType] = React.useState(explanationTypes[0].id);

  return (
    <BackgroundPattern variant="tertiary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-primary/20 rounded-2xl p-8 bg-white/50 backdrop-blur-sm">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Understanding Asset Fractionalization
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore different approaches to asset fractionalization and how they create new investment opportunities.
              </p>
            </div>
          </ScrollReveal>

          {/* Type Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {explanationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeType === type.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                <type.icon className="h-5 w-5" />
                <span className="font-medium">{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Explanation */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {explanationTypes.map((type) => (
              activeType === type.id && <type.component key={type.id} />
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
}