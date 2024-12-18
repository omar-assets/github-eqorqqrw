import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = {
  email: {
    icon: Mail,
    label: 'Email',
    value: 'info@brixasset.com',
    href: 'mailto:info@brixasset.com'
  },
  phone: {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555-0123',
    href: 'tel:+12125550123'
  },
  address: {
    icon: MapPin,
    label: 'Office',
    value: ['1250 Broadway', 'Suite 3700', 'New York, NY 10001'],
    href: 'https://maps.google.com/?q=1250+Broadway+New+York+NY+10001'
  }
};

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-4">
        {Object.entries(contactDetails).map(([key, item]) => (
          <div key={key} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.label}</div>
              {Array.isArray(item.value) ? (
                <address className="not-italic text-gray-600">
                  {item.value.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < item.value.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </address>
              ) : (
                <a 
                  href={item.href}
                  className="text-primary hover:text-primary-medium transition-colors"
                >
                  {item.value}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}