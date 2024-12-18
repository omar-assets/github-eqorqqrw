import React from 'react';
import { Building2, Car, Gem, Shield, Users, Banknote } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';

const assetTypes = [
  {
    icon: Building2,
    title: 'Real Estate Fractionalization',
    description: 'Transform property ownership into digital shares',
    process: [
      {
        icon: Shield,
        title: 'Legal Structure',
        description: 'Properties are held in a regulated Special Purpose Vehicle (SPV) with full legal documentation'
      },
      {
        icon: Users,
        title: 'Ownership Division',
        description: 'Each property is divided into standardized digital shares, typically representing $1,000 per fraction'
      },
      {
        icon: Banknote,
        title: 'Income Distribution',
        description: 'Rental income and appreciation gains are automatically distributed to fraction holders'
      }
    ]
  },
  {
    icon: Car,
    title: 'Vehicle Fractionalization',
    description: 'Divide luxury and classic vehicle ownership',
    process: [
      {
        icon: Shield,
        title: 'Asset Protection',
        description: 'Vehicles are professionally managed and maintained in secure facilities'
      },
      {
        icon: Users,
        title: 'Collective Ownership',
        description: 'Each vehicle is split into fractions with clear usage and maintenance agreements'
      },
      {
        icon: Banknote,
        title: 'Value Realization',
        description: 'Returns generated through appreciation and exclusive rental arrangements'
      }
    ]
  },
  {
    icon: Gem,
    title: 'Fine Jewelry & Collectibles',
    description: 'Share ownership of precious collections',
    process: [
      {
        icon: Shield,
        title: 'Secure Storage',
        description: 'Items are stored in specialized vaults with comprehensive insurance coverage'
      },
      {
        icon: Users,
        title: 'Fractional Rights',
        description: 'Digital certificates represent partial ownership with authenticated provenance'
      },
      {
        icon: Banknote,
        title: 'Market Access',
        description: 'Value appreciation captured through professional trading and auction platforms'
      }
    ]
  }
];

export function AssetTypeExplanation() {
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
                Discover how we transform different types of premium assets into accessible investment opportunities through our secure fractionalization process.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {assetTypes.map((type, index) => (
              <ScrollReveal key={type.title} delay={index * 200}>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {type.process.map((step) => (
                      <div key={step.title} className="space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
}