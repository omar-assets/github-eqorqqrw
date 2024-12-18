import React from 'react';
import { Building2, Award, TrendingUp, Users } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const milestones = [
  {
    year: 2018,
    title: 'Company Founded',
    description: 'Established with a vision to democratize institutional-grade investments'
  },
  {
    year: 2019,
    title: 'Platform Launch',
    description: 'Released our innovative fractionalization technology'
  },
  {
    year: 2020,
    title: 'Rapid Growth',
    description: 'Reached $1B in assets under management'
  },
  {
    year: 2021,
    title: 'Global Expansion',
    description: 'Extended operations to 25+ global markets'
  },
  {
    year: 2022,
    title: 'Industry Recognition',
    description: 'Named "Most Innovative Investment Platform"'
  }
];

export function OurStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Our Journey</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Investment Management Through Innovation
              </h2>

              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2018, Wealth Asset Management Group emerged from a vision to democratize 
                  institutional-grade investments. Our team of industry veterans recognized the need 
                  for innovative solutions that could make premium assets accessible to a broader 
                  range of qualified investors.
                </p>
                <p>
                  Through cutting-edge technology and unwavering commitment to security and compliance, 
                  we've built a platform that enables fractional ownership of high-value assets while 
                  maintaining professional standards and optimal returns.
                </p>
                <p>
                  Today, we serve over 15,000 investors worldwide, managing $2.5B+ in assets across 
                  multiple asset classes. Our success is built on the trust of our clients and our 
                  dedication to innovation in investment management.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 200}>
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}