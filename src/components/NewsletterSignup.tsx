import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { logger } from '@/utils/logger';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    try {
      setStatus('loading');
      setErrorMessage('');

      // Add to Firestore leads collection
      await addDoc(collection(db, 'leads'), {
        email,
        source: 'newsletter',
        createdAt: new Date(),
        status: 'active'
      });

      setStatus('success');
      setEmail('');
      logger.info('Newsletter signup successful:', { email });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      logger.error('Newsletter signup error:', error);
      setStatus('error');
      setErrorMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-primary/5 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-semibold text-gray-900">
          Subscribe to Our Newsletter
        </h3>
      </div>

      <p className="text-gray-600 mb-6">
        Stay updated with the latest investment opportunities and market insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-lg 
                       focus:ring-2 focus:ring-primary/50 focus:border-primary"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary 
                       hover:text-primary-medium disabled:opacity-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {status === 'error' && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
          {status === 'success' && (
            <p className="mt-2 text-sm text-green-600">
              Thank you for subscribing!
            </p>
          )}
        </div>

        <p className="text-sm text-gray-500">
          By subscribing, you agree to our{' '}
          <a href="/privacy-policy" className="text-primary hover:text-primary-medium">
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="/terms" className="text-primary hover:text-primary-medium">
            Terms of Service
          </a>
        </p>
      </form>
    </div>
  );
}