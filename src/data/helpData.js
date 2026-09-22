export const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn foundational setup, workspace invitation, and your first automated pipeline.',
    icon: 'Rocket',
    articles: [
      { id: 'gs-1', title: 'Account creation and team invitation', reads: '3 min read' },
      { id: 'gs-2', title: 'Workspace hierarchy and environment setup', reads: '5 min read' },
      { id: 'gs-3', title: 'Building and publishing your first project pipeline', reads: '6 min read' },
      { id: 'gs-4', title: 'Inviting collaborators and configuring initial roles', reads: '4 min read' },
    ]
  },
  {
    id: 'product-workflows',
    title: 'Product & Workflows',
    description: 'In-depth guides on trigger configuration, logic branches, and reporting dashboards.',
    icon: 'Cpu',
    articles: [
      { id: 'pw-1', title: 'Understanding event-driven triggers and payload filters', reads: '7 min read' },
      { id: 'pw-2', title: 'Managing asynchronous queues and backpressure limits', reads: '5 min read' },
      { id: 'pw-3', title: 'Exporting analytics and operational SLA reports', reads: '4 min read' },
      { id: 'pw-4', title: 'Version control and rollback procedures for workflows', reads: '6 min read' },
    ]
  },
  {
    id: 'account-billing',
    title: 'Account & Billing',
    description: 'Subscription management, plan upgrades, VAT invoices, and seat allocations.',
    icon: 'CreditCard',
    articles: [
      { id: 'ab-1', title: 'Changing plans and updating payment methods', reads: '2 min read' },
      { id: 'ab-2', title: 'Understanding workflow run quotas and overages', reads: '3 min read' },
      { id: 'ab-3', title: 'Downloading automated invoices and receipts', reads: '2 min read' },
      { id: 'ab-4', title: 'Cancellation terms and prorated refunds', reads: '3 min read' },
    ]
  },
  {
    id: 'integrations-api',
    title: 'Integrations & API',
    description: 'Connecting standard third-party tools, generating API tokens, and webhook secrets.',
    icon: 'Cable',
    articles: [
      { id: 'ia-1', title: 'Setting up webhook signatures and HMAC-SHA256 verification', reads: '8 min read' },
      { id: 'ia-2', title: 'Slack bot notifications and interactive alert buttons', reads: '4 min read' },
      { id: 'ia-3', title: 'GitHub Actions trigger integration guide', reads: '5 min read' },
      { id: 'ia-4', title: 'Snowflake streaming warehouse connector config', reads: '9 min read' },
    ]
  },
  {
    id: 'security-governance',
    title: 'Security & Governance',
    description: 'Single sign-on, multi-factor authentication, audit logs, and compliance standards.',
    icon: 'Shield',
    articles: [
      { id: 'sg-1', title: 'Configuring SAML 2.0 Single Sign-On (Okta, Azure AD)', reads: '6 min read' },
      { id: 'sg-2', title: 'Audit log streaming to Datadog and AWS CloudWatch', reads: '7 min read' },
      { id: 'sg-3', title: 'Role-Based Access Control (RBAC) matrix definitions', reads: '5 min read' },
      { id: 'sg-4', title: 'SOC 2 Type II and GDPR data processing agreements', reads: '3 min read' },
    ]
  },
  {
    id: 'faqs',
    title: 'Frequently Asked Questions',
    description: 'Quick direct answers to everyday questions about latency, limits, and uptime.',
    icon: 'HelpCircle',
    articles: [
      { id: 'fq-1', title: 'What is the standard SLA for webhook delivery?', reads: '2 min read' },
      { id: 'fq-2', title: 'How does Vantage handle network timeouts and retries?', reads: '4 min read' },
      { id: 'fq-3', title: 'Can we self-host or run on our private VPC?', reads: '3 min read' },
      { id: 'fq-4', title: 'How are sensitive credentials encrypted at rest?', reads: '4 min read' },
    ]
  }
];

export const generalFaqs = [
  {
    question: 'How fast can our team get started with Vantage?',
    answer: 'Most engineering and operations teams connect their first workflow within 15 minutes. Our pre-built integrations and zero-code trigger builder make setup straightforward.'
  },
  {
    question: 'How does Vantage handle pricing when adding team members?',
    answer: 'Billing is automatically adjusted on a prorated basis whenever you invite new colleagues or remove existing members from your workspace.'
  },
  {
    question: 'Are all API endpoints rate-limited?',
    answer: 'Starter plans include 120 requests/minute, Professional plans include 1,200 requests/minute, and Enterprise tiers have tailored high-throughput endpoints without artificial throttling.'
  },
  {
    question: 'Where is our operational data hosted?',
    answer: 'Our infrastructure is hosted in AWS US-East (N. Virginia) and AWS EU-Central (Frankfurt). Enterprise customers can select dedicated regional residency.'
  },
  {
    question: 'What level of technical support do you provide?',
    answer: 'All plans include email documentation support. Professional customers enjoy priority responses under 4 hours, and Enterprise accounts receive a dedicated Customer Success Manager.'
  },
  {
    question: 'Can I export all our historical audit logs?',
    answer: 'Yes. You can export complete activity logs in CSV or JSON at any time, or configure automated continuous streaming directly into S3, Snowflake, or Datadog.'
  }
];
