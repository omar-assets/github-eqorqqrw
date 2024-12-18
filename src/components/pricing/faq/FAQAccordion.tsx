import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from './types';

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className="text-lg font-semibold text-gray-900">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          <div
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-6 pt-0">
              <p className="text-gray-600">{item.answer}</p>
              {item.links && (
                <div className="mt-4 space-y-2">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="block text-primary hover:text-primary-medium transition-colors"
                    >
                      {link.text} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}