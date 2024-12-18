import React from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ContactSupport() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                Our support team is available to assist you with any questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-xl bg-primary/5">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg">
                  Send Email
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="text-center p-6 rounded-xl bg-primary/5">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Available Monday-Friday, 9am-6pm EST</p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg">
                  Start Chat
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}