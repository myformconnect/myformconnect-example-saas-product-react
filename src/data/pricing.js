export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    badge: null,
    popular: false,
    description: 'Essential workflow automation and visibility for individuals and small teams.',
    monthlyPrice: 19,
    yearlyPrice: 15,
    billingPeriod: 'per user / month',
    ctaText: 'Start 14-day Trial',
    ctaVariant: 'secondary',
    features: [
      'Up to 5 team members',
      '1,000 automated workflow runs / mo',
      'Standard webhook & API access',
      '30-day activity audit history',
      'Community & email support',
      'Basic metrics & team dashboards'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most Popular',
    popular: true,
    description: 'Designed for scaling teams requiring advanced workflows, integrations, and deep reporting.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    billingPeriod: 'per user / month',
    ctaText: 'Get Started with Pro',
    ctaVariant: 'primary',
    features: [
      'Up to 25 team members',
      '25,000 automated workflow runs / mo',
      'All 50+ native SaaS integrations',
      '1-year audit logs & event traces',
      'Granular role-based access controls (RBAC)',
      'Priority email & Slack support (4h SLA)',
      'Custom webhook retry policies'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Governance',
    popular: false,
    description: 'Dedicated infrastructure, custom SLAs, and enterprise security for larger organizations.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    billingPeriod: 'tailored annual contract',
    ctaText: 'Contact Sales',
    ctaVariant: 'secondary',
    features: [
      'Unlimited team members & seats',
      'Custom volume automated workflow runs',
      'SAML SSO, Okta, and SCIM provisioning',
      'Dedicated VPC or on-prem deployment options',
      '99.99% uptime guarantee with financial SLA',
      'Dedicated customer success manager',
      'Custom security reviews & BAA agreements'
    ]
  }
];

export const comparisonCategories = [
  {
    category: 'Core Platform & Capacity',
    features: [
      { name: 'Team members included', starter: '5 seats', pro: '25 seats', enterprise: 'Unlimited' },
      { name: 'Monthly automated runs', starter: '1,000', pro: '25,000', enterprise: 'Custom volume' },
      { name: 'Audit log retention', starter: '30 days', pro: '1 year', enterprise: 'Unlimited retention' },
      { name: 'Active workflows', starter: '10 workflows', pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Execution history trace', starter: 'Basic', pro: 'Detailed stack traces', enterprise: 'Full payload replay' }
    ]
  },
  {
    category: 'Integrations & Extensibility',
    features: [
      { name: 'Public REST API & SDKs', starter: true, pro: true, enterprise: true },
      { name: 'Incoming & outgoing webhooks', starter: true, pro: true, enterprise: true },
      { name: 'Native integrations (Slack, Jira, GitHub)', starter: 'Standard (5)', pro: 'Full suite (50+)', enterprise: 'Full suite + Custom' },
      { name: 'Custom connector builder', starter: false, pro: true, enterprise: true },
      { name: 'Data warehouse streaming (Snowflake/BigQuery)', starter: false, pro: false, enterprise: true }
    ]
  },
  {
    category: 'Security & Administration',
    features: [
      { name: 'Two-factor authentication (2FA)', starter: true, pro: true, enterprise: true },
      { name: 'Granular Role-Based Access Control', starter: false, pro: true, enterprise: true },
      { name: 'SAML 2.0 / Okta Single Sign-On (SSO)', starter: false, pro: false, enterprise: true },
      { name: 'SCIM automated user provisioning', starter: false, pro: false, enterprise: true },
      { name: 'SOC 2 Type II compliance report', starter: false, pro: true, enterprise: true },
      { name: 'Custom data residency (EU/US/APAC)', starter: false, pro: false, enterprise: true }
    ]
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Support channel', starter: 'Email & Docs', pro: 'Priority Email & Slack', enterprise: 'Dedicated CSM & Phone' },
      { name: 'Response time SLA', starter: '48 hours', pro: '4 hours', enterprise: '< 30 minutes' },
      { name: 'Uptime SLA guarantee', starter: '99.5%', pro: '99.9%', enterprise: '99.99%' },
      { name: 'Onboarding & architecture review', starter: false, pro: false, enterprise: true }
    ]
  }
];

export const pricingFaqs = [
  {
    q: 'Can I switch between monthly and annual billing?',
    a: 'Yes, you can switch your billing frequency at any time from your Account Settings. If you switch to annual billing, any remaining monthly credit will be prorated automatically.'
  },
  {
    q: 'What happens when we exceed our monthly workflow quota?',
    a: 'Workflows will not be abruptly halted. We provide a 10% grace buffer and notify workspace administrators before any overage charges ($0.005 per execution) or rate throttling applies.'
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, all new accounts start with a full-featured 14-day trial of our Professional plan. No credit card is required to begin.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, MasterCard, American Express) via Stripe. Annual contracts for Enterprise plans can also be invoiced via wire transfer or ACH.'
  },
  {
    q: 'Can I cancel or downgrade my subscription?',
    a: 'You can cancel or downgrade your subscription at any time with a single click. Your access will remain active until the end of the current paid billing cycle.'
  }
];
