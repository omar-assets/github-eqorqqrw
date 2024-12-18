import { Target, Compass, Shield, Users } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of security and regulatory compliance to protect our investors.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: "Our clients' success drives every decision we make and every feature we develop."
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge investment solutions.'
  },
  {
    icon: Compass,
    title: 'Integrity',
    description: 'We operate with complete transparency and unwavering ethical standards.'
  }
];

const missionVisionContent = {
  mission: {
    title: 'Mission',
    content: 'To democratize institutional-grade investments through innovative technology, making premium assets accessible while maintaining professional standards and optimal returns.'
  },
  vision: {
    title: 'Vision',
    content: 'To become the global standard for fractional investment management, enabling sophisticated investors worldwide to build institutional-quality portfolios.'
  }
};

export function MissionVision() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Object.entries(missionVisionContent).map(([key, { title, content }]) => (
                <div key={key} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 200}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}