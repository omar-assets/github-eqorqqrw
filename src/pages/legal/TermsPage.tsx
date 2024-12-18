import React from 'react';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { APP_CONFIG } from '@/utils/constants';

function TermsPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </BackgroundPattern>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-green">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using {APP_CONFIG.APP_NAME}, you agree to be bound by these Terms of Service. Please read these terms carefully before using our platform.
          </p>

          <h2>Service Description</h2>
          <p>
            {APP_CONFIG.APP_NAME} provides a secure platform for fractional investment in institutional-grade assets. Our services include:
          </p>
          <ul>
            <li>Asset fractionalization and management</li>
            <li>Investment portfolio optimization</li>
            <li>Professional advisory services</li>
          </ul>

          <h2>Eligibility</h2>
          <p>To use our services, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Meet accreditation requirements where applicable</li>
            <li>Provide accurate and complete information</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>Investment Risks</h2>
          <p>
            All investments carry risk, and past performance does not guarantee future results. You should carefully consider your investment objectives and risk tolerance before investing.
          </p>

          <h2>User Responsibilities</h2>
          <ul>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Promptly notify us of any unauthorized access</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Provide accurate and updated information</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for investment losses or market fluctuations. Our liability is limited to the extent permitted by law.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at{' '}
            <a href={`mailto:${APP_CONFIG.SUPPORT_EMAIL}`}>{APP_CONFIG.SUPPORT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export default TermsPage;