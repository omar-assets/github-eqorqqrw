import React from 'react';
import { Box, Boxes, Building2, LineChart } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function AboutUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <div className="relative">
                  <Building2 className="h-8 w-8" />
                  <Boxes className="h-5 w-5 absolute -bottom-1 -right-1" />
                </div>
                <span className="text-lg font-medium">Our Story</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Revolutionizing Asset Management Through Innovation
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                BRiX Assets represents excellence in 
                <span className="text-primary font-medium"> Wealth</span> building, 
                achieving <span className="text-primary font-medium">Asset</span> growth, and enabling 
                <span className="text-primary font-medium"> Management</span> through innovative 
                <span className="text-primary font-medium"> solutions</span>.
              </p>

              <div className="space-y-4 text-gray-600">
                <p>
                  Founded by industry veterans, we're transforming how people invest in premium assets by breaking down traditional barriers to entry. Our platform enables fractional ownership of high-value assets, from institutional-grade investments to premium opportunities.
                </p>
                <p>
                  Through advanced technology and robust legal frameworks, we ensure secure, transparent, and regulated ownership structures that protect our investors while maximizing their potential returns.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-primary/10 rounded-xl p-6">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Asset Portfolio</h3>
                  <p className="text-3xl font-bold text-primary">$2.5B+</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                  <LineChart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual Returns</h3>
                  <p className="text-3xl font-bold text-primary">12.5%</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white shadow-lg rounded-xl p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-3xl font-bold text-primary mb-2">25+</p>
                  <p className="text-gray-600">Markets Served</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Trust</h3>
                  <p className="text-3xl font-bold text-primary mb-2">15,000+</p>
                  <p className="text-gray-600">Active Clients</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}