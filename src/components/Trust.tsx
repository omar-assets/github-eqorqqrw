import React from 'react';
import { Shield, Award, Building2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export function Trust() {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#2E7D3208_1px,transparent_1px),linear-gradient(-45deg,#2E7D3208_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 text-gray-800">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">SEC Regulated</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Licensed Investment Firm</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}