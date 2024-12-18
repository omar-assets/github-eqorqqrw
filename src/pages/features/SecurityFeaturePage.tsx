import React from 'react';
import { Shield, Lock, FileCheck, Server } from 'lucide-react';
import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { FeatureDemo } from '../../components/features/demos/FeatureDemo';
import { FeatureDetails } from '../../components/features/details/FeatureDetails';
import { FeatureFAQ } from '../../components/features/faq/FeatureFAQ';
import { CustomerStory } from '../../components/features/stories/CustomerStory';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Bank-Level Encryption',
    description: 'End-to-end encryption using AES-256 standards protects all sensitive data and transactions.'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'Full compliance with SEC regulations and international security standards.'
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Multi-layer security architecture with real-time threat monitoring and prevention.'
  }
];

const securityFAQs = [
  {
    question: 'How is my investment data protected?',
    answer: 'We employ bank-grade encryption, secure infrastructure, and regular security audits to protect your data.'
  },
  {
    question: 'What security certifications do you have?',
    answer: 'Our platform is ISO 27001 certified and complies with SEC regulations for investment platforms.'
  }
];

export function SecurityFeaturePage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Enterprise Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bank-Grade Security for Your
              <span className="text-primary"> Investments</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our comprehensive security infrastructure protects your investments with the same level
              of security used by leading financial institutions.
            </p>
          </div>
        </div>
      </BackgroundPattern>

      <FeatureDemo
        title="Security Infrastructure"
        description="Experience our multi-layered security approach"
        features={securityFeatures}
      />

      <FeatureDetails
        title="Advanced Security Features"
        description="Comprehensive protection for your investments"
        features={securityFeatures}
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
      />

      <CustomerStory
        quote="The platform's security features give us complete confidence in managing our institutional investments."
        author={{
          name: "Sarah Chen",
          role: "Chief Security Officer",
          company: "Global Investments Ltd",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
        }}
      />

      <FeatureFAQ
        title="Security FAQ"
        description="Common questions about our security features"
        faqs={securityFAQs}
      />
    </>
  );
}