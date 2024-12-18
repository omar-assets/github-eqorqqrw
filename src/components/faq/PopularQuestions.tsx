import React from 'react';
import { FAQAccordion } from './FAQAccordion';
import { popularQuestions } from './data/popularQuestions';
import { ScrollReveal } from '../ui/ScrollReveal';

export function PopularQuestions() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Popular Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to our most frequently asked questions
            </p>
          </div>
          <FAQAccordion items={popularQuestions} />
        </ScrollReveal>
      </div>
    </section>
  );
}