import { PricingData } from '../types';

export const pricingData: PricingData = {
  plans: [
    {
      name: 'Standard',
      price: {
        monthly: 99,
        annual: 79
      }
    },
    {
      name: 'Professional',
      price: {
        monthly: 199,
        annual: 159
      },
      recommended: true
    },
    {
      name: 'Enterprise',
      price: {
        monthly: 499,
        annual: 399
      }
    }
  ],
  categories: [
    {
      name: 'Core Features',
      features: [
        {
          name: 'Fractional Investments',
          tooltip: 'Access to premium assets through fractional ownership',
          values: {
            Standard: true,
            Professional: true,
            Enterprise: true
          }
        },
        {
          name: 'Minimum Investment',
          tooltip: 'Minimum amount required per investment',
          values: {
            Standard: '$1,000',
            Professional: '$500',
            Enterprise: '$100'
          }
        },
        {
          name: 'Investment Opportunities',
          tooltip: 'Number of available investment opportunities',
          values: {
            Standard: '10/month',
            Professional: '25/month',
            Enterprise: 'Unlimited'
          }
        }
      ]
    },
    {
      name: 'Portfolio Management',
      features: [
        {
          name: 'Portfolio Analytics',
          values: {
            Standard: 'Basic',
            Professional: 'Advanced',
            Enterprise: 'Custom'
          }
        },
        {
          name: 'Automated Rebalancing',
          tooltip: 'Automatic portfolio rebalancing to maintain target allocations',
          values: {
            Standard: false,
            Professional: true,
            Enterprise: true
          }
        },
        {
          name: 'Custom Strategies',
          tooltip: 'Create and implement custom investment strategies',
          values: {
            Standard: false,
            Professional: '3 strategies',
            Enterprise: 'Unlimited'
          }
        }
      ]
    },
    {
      name: 'Support & Services',
      features: [
        {
          name: 'Customer Support',
          values: {
            Standard: 'Email',
            Professional: '24/7 Priority',
            Enterprise: 'Dedicated Manager'
          }
        },
        {
          name: 'Market Research',
          values: {
            Standard: 'Monthly',
            Professional: 'Weekly',
            Enterprise: 'Real-time'
          }
        },
        {
          name: 'Training Sessions',
          tooltip: 'One-on-one platform training sessions',
          values: {
            Standard: '1/month',
            Professional: '4/month',
            Enterprise: 'Unlimited'
          }
        }
      ]
    },
    {
      name: 'Security & Compliance',
      features: [
        {
          name: 'Two-Factor Authentication',
          values: {
            Standard: true,
            Professional: true,
            Enterprise: true
          }
        },
        {
          name: 'API Access',
          tooltip: 'Access to our REST API for custom integrations',
          values: {
            Standard: 'Basic',
            Professional: 'Enhanced',
            Enterprise: 'Full Access'
          }
        },
        {
          name: 'Audit Logs',
          tooltip: 'Detailed logs of all account activities',
          values: {
            Standard: '30 days',
            Professional: '90 days',
            Enterprise: '1 year'
          }
        }
      ]
    }
  ]
};