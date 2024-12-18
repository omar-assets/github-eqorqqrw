import React from 'react';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { APP_CONFIG } from '@/utils/constants';

function PrivacyPolicyPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
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
          <h2>Introduction</h2>
          <p>
            At {APP_CONFIG.APP_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our investment platform.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information</li>
            <li>Financial information and investment preferences</li>
            <li>Identity verification documents</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Process your transactions and manage your account</li>
            <li>Provide and improve our services</li>
            <li>Communicate with you about your investments</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Regulatory authorities and law enforcement</li>
            <li>Other parties with your consent</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. This includes encryption, secure servers, and regular security audits.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href={`mailto:${APP_CONFIG.SUPPORT_EMAIL}`}>{APP_CONFIG.SUPPORT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicyPage;