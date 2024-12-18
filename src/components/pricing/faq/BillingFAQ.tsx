import React, { useState } from 'react';
import { CreditCard, HelpCircle, ArrowRight, Mail } from 'lucide-react';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { FAQAccordion } from './FAQAccordion';
import { billingFaqs } from './data/billingFaqs';

export function BillingFAQ() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Billing Support</span>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Billing Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about billing, payments, and subscriptions.
            </p>
          </div>

          <FAQAccordion items={billingFaqs} />

          <div className="mt-12 bg-white rounded-xl p-8 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can't find the answer you're looking for? Our dedicated support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Contact Support
                  </a>
                  <a
                    href="/docs/billing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}