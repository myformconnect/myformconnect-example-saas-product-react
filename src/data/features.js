export const keyFeatures = [
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Trigger asynchronous jobs, sync records across business systems, and eliminate routine operational handoffs.',
    icon: 'GitFork',
    tag: 'Core Engine'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Inspect live queue latency, team throughput metrics, and pipeline efficiency via structured dashboards.',
    icon: 'BarChart3',
    tag: 'Real-time'
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Centralized workspace with inline activity threads, role-based comments, and contextual notifications.',
    icon: 'Users',
    tag: 'Coordination'
  },
  {
    id: 'integrations',
    title: 'Enterprise Integrations',
    description: 'Connect native webhooks and pre-built connectors for Slack, GitHub, Jira, Salesforce, and Snowflake.',
    icon: 'Blocks',
    tag: '50+ Apps'
  },
  {
    id: 'security',
    title: 'Security & Governance',
    description: 'Granular RBAC, audit logging, SSO via SAML/Okta, and SOC 2 Type II compliant data isolation.',
    icon: 'ShieldCheck',
    tag: 'Enterprise'
  },
  {
    id: 'custom-workflows',
    title: 'Custom Logic & Rules',
    description: 'Define branching conditions, multi-stage approval flows, and customized validation checks effortlessly.',
    icon: 'SlidersHorizontal',
    tag: 'Configurable'
  },
];

export const coreCapabilities = [
  {
    title: 'Workflow Automation',
    desc: 'Event-driven triggers, conditional routing, and automated retries with detailed execution traces.',
    badge: 'Automation'
  },
  {
    title: 'Operational Analytics',
    desc: 'Measure turnaround cycles, pipeline bottlenecks, and daily SLA compliance across teams.',
    badge: 'Analytics'
  },
  {
    title: 'Collaborative Workspaces',
    desc: 'Shared inbox, team assignment rules, and unified activity logs to keep stakeholders aligned.',
    badge: 'Collaboration'
  },
  {
    title: 'Native Connectors',
    desc: 'Bi-directional sync with standard CRMs, issue trackers, data warehouses, and custom webhooks.',
    badge: 'Ecosystem'
  },
  {
    title: 'Executive Reporting',
    desc: 'Exportable audit trails, scheduled CSV/PDF summaries, and queryable event streams.',
    badge: 'Reporting'
  },
  {
    title: 'Granular Permissions',
    desc: 'Role-based access controls, environment scoping (Dev/Staging/Prod), and IP allowlists.',
    badge: 'Governance'
  }
];

export const integrationsList = [
  { name: 'Slack', category: 'Communication', desc: 'Real-time pipeline alerts and approval buttons.' },
  { name: 'GitHub', category: 'Engineering', desc: 'Sync pull requests, deployments, and commit hashes.' },
  { name: 'Jira Software', category: 'Project Management', desc: 'Automate sprint tickets and status progression.' },
  { name: 'Salesforce', category: 'CRM', desc: 'Two-way lead status sync and revenue pipeline mapping.' },
  { name: 'Snowflake', category: 'Data Warehouse', desc: 'Continuous event streaming and analytical warehousing.' },
  { name: 'Google Workspace', category: 'Productivity', desc: 'SSO identity sync, Drive exports, and Sheets updates.' },
  { name: 'AWS S3 & EventBridge', category: 'Infrastructure', desc: 'Archive payload events and trigger Lambda workers.' },
  { name: 'HubSpot', category: 'Marketing', desc: 'Customer lifecycle triggers and form submission routing.' },
  { name: 'Linear', category: 'Engineering', desc: 'Bi-directional issue sync and roadmapping.' },
  { name: 'Notion', category: 'Documentation', desc: 'Automated workspace digests and knowledge sync.' },
  { name: 'Datadog', category: 'Observability', desc: 'Error rate thresholds and SLA breach alarms.' },
  { name: 'Custom Webhooks', category: 'Developer API', desc: 'Sign payloads with HMAC-SHA256 and deliver reliably.' }
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Connect your workflow',
    description: 'Link your existing databases, message queues, and SaaS tools using secure API keys or OAuth connectors in minutes.'
  },
  {
    step: '02',
    title: 'Configure your workspace',
    description: 'Set up custom pipeline stages, validation schema, automated routing rules, and team permission tiers.'
  },
  {
    step: '03',
    title: 'Start getting results',
    description: 'Monitor live activity, audit operational health, and eliminate repetitive manual bottlenecks across your organization.'
  }
];
