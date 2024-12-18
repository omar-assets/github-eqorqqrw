import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from './types';

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 whitespace-pre-wrap">{faq.answer}</p>
                {faq.details && (
                  <ul className="mt-4 space-y-2">
                    {faq.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-medium flex-shrink-0 mt-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}