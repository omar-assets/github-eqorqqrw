import { FAQ } from '../types';

export const billingFaqs: FAQ[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and wire transfers for enterprise accounts. All payments are processed securely through our PCI-compliant payment system.",
    links: [
      {
        text: "View accepted payment methods",
        url: "/docs/payments"
      }
    ]
  },
  {
    question: "How does the billing cycle work?",
    answer: "Your billing cycle begins on the day you subscribe. For monthly plans, you'll be billed every 30 days. Annual plans are billed once per year with a 20% discount. You can view your next billing date in your account settings.",
    links: [
      {
        text: "Manage billing settings",
        url: "/account/billing"
      }
    ]
  },
  {
    question: "How do I update my payment information?",
    answer: "You can update your payment method anytime through your account settings. Navigate to Billing > Payment Methods to add, remove, or update your payment information. Changes take effect immediately.",
    links: [
      {
        text: "Update payment details",
        url: "/account/payment-methods"
      }
    ]
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee for annual subscriptions. Monthly subscriptions can be canceled anytime, and you'll maintain access until the end of your current billing period. No partial refunds are provided for unused time.",
    links: [
      {
        text: "Read full refund policy",
        url: "/legal/refunds"
      }
    ]
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time through your account settings. Go to Billing > Subscriptions and click 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
    links: [
      {
        text: "Cancel subscription",
        url: "/account/cancel"
      }
    ]
  },
  {
    question: "How do I access my invoices and receipts?",
    answer: "All invoices and receipts are available in your account dashboard under Billing > Invoices. You can download them as PDF files or have them emailed to you. We maintain records for the past 24 months.",
    links: [
      {
        text: "View billing history",
        url: "/account/invoices"
      }
    ]
  },
  {
    question: "Do you offer custom billing for enterprise clients?",
    answer: "Yes, we offer flexible billing options for enterprise clients, including custom payment terms, volume discounts, and consolidated billing for multiple accounts. Contact our enterprise sales team to discuss your needs.",
    links: [
      {
        text: "Contact enterprise sales",
        url: "/enterprise/contact"
      }
    ]
  },
  {
    question: "What happens if a payment fails?",
    answer: "If a payment fails, we'll automatically retry the charge and notify you via email. You'll have a 7-day grace period to update your payment information. During this time, your account access will remain active.",
    links: [
      {
        text: "Learn about payment recovery",
        url: "/docs/payment-recovery"
      }
    ]
  }
];