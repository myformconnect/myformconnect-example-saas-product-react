export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    badge: null,
    popular: false,
    description: 'Everything you need to keep your everyday desktop organized.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    billingPeriod: 'forever free',
    ctaText: 'Download Free',
    ctaVariant: 'secondary',
    features: [
      'Favorite apps and files',
      'Basic search',
      'Simple shortcuts',
      'Basic clipboard history',
      '1 active workspace',
      'Simple to set up'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    popular: true,
    description: 'For anyone who wants unlimited routines, shortcuts, and multiple spaces.',
    monthlyPrice: 8,
    yearlyPrice: 6,
    billingPeriod: 'per month',
    ctaText: 'Get Pro',
    ctaVariant: 'primary',
    features: [
      'Unlimited shortcuts',
      'Unlimited routines',
      'Multiple workspaces',
      'Advanced search',
      'Extended clipboard history',
      'Friendly priority help'
    ]
  },
  {
    id: 'team',
    name: 'Team',
    badge: 'For Teams',
    popular: false,
    description: 'Simple shared workspaces and routines for small teams and studios.',
    monthlyPrice: 15,
    yearlyPrice: 12,
    billingPeriod: 'per user / month',
    ctaText: 'Talk to Us',
    ctaVariant: 'secondary',
    features: [
      'Shared spaces',
      'Shared routines',
      'Team management',
      'Centralized settings',
      'Easy team onboarding',
      'Dedicated support'
    ]
  }
];

export const pricingFaqs = [
  {
    q: 'What is Orevio?',
    a: 'Orevio is a simple desktop helper that brings your favorite apps, files, shortcuts, and everyday routines into one friendly place.'
  },
  {
    q: 'Which computers can run Orevio?',
    a: 'Orevio runs smoothly on both Windows 10/11 and macOS computers.'
  },
  {
    q: 'Is there a free version?',
    a: 'Yes! The Free plan gives you core search, favorite apps and files, simple shortcuts, and basic clipboard history with no credit card required.'
  },
  {
    q: 'Can I create my own routines?',
    a: 'Yes. You can easily group apps and files together so you can start your morning or work day with one click.'
  },
  {
    q: 'Can I cancel my Pro subscription at any time?',
    a: 'Yes, you can cancel or switch plans at any time from your account settings with no hidden fees.'
  }
];
