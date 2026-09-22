export const mockMetrics = [
  { label: 'Active Workflows', value: '38', change: '+12%', positive: true },
  { label: 'Total Executions', value: '148,290', change: '+28.4%', positive: true },
  { label: 'Avg Latency', value: '24.1 ms', change: '-4.2ms', positive: true },
  { label: 'Success Rate', value: '99.98%', change: '+0.04%', positive: true },
];

export const mockPipelines = [
  {
    id: 'pipe-101',
    name: 'Customer Provisioning & Stripe Sync',
    trigger: 'Webhook (app.signup)',
    status: 'Running',
    lastRun: '12s ago',
    duration: '230ms',
    team: 'Growth Eng'
  },
  {
    id: 'pipe-102',
    name: 'Snowflake ETL Ingestion Stream',
    trigger: 'Cron (hourly:00)',
    status: 'Success',
    lastRun: '4m ago',
    duration: '1.4s',
    team: 'Data Platform'
  },
  {
    id: 'pipe-103',
    name: 'Jira & GitHub Branch Reconciler',
    trigger: 'Event (pr.opened)',
    status: 'Success',
    lastRun: '9m ago',
    duration: '420ms',
    team: 'Core Eng'
  },
  {
    id: 'pipe-104',
    name: 'Security Audit Log Dispatcher',
    trigger: 'Kafka stream',
    status: 'Success',
    lastRun: '15m ago',
    duration: '180ms',
    team: 'SecOps'
  }
];

export const mockActivities = [
  { user: 'E. Rostova', action: 'deployed pipeline', target: 'Stripe Reconcile v2.4', time: '3m ago', badge: 'Production' },
  { user: 'M. Vance', action: 'rotated API key', target: 'Slack Production Webhook', time: '18m ago', badge: 'Security' },
  { user: 'Automated Bot', action: 'executed sync', target: '2,400 records to Snowflake', time: '32m ago', badge: 'ETL' },
];
