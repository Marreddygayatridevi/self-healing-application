export type Repository = { id: string; name: string; description: string; language: string; selected: boolean }

export const user = { name: 'Aarav Shah', email: 'aarav@northstar.io', initials: 'AS' }
export const organization = { name: 'Northstar Labs', handle: '@northstar-labs', avatar: 'N' }

export const repositories: Repository[] = [
  { id: 'api', name: 'payments-api', description: 'Core payments service', language: 'TypeScript', selected: true },
  { id: 'web', name: 'customer-web', description: 'Customer-facing web application', language: 'TypeScript', selected: true },
  { id: 'worker', name: 'event-worker', description: 'Asynchronous event processing', language: 'Python', selected: false },
  { id: 'infra', name: 'platform-infra', description: 'Cloud infrastructure and deployment', language: 'HCL', selected: false },
]

export const activities = [
  { time: '09:42', title: 'Workflow failed', detail: 'payments-api · CI / unit-tests', type: 'warning', repositoryId: 'api' },
  { time: '09:40', title: 'Push received', detail: 'customer-web · main', type: 'neutral', repositoryId: 'web' },
  { time: '09:21', title: 'Analysis completed', detail: 'payments-api · 1 finding', type: 'success', repositoryId: 'api' },
  { time: 'Yesterday', title: 'Monitoring enabled', detail: '2 repositories', type: 'neutral', repositoryId: 'all' },
]

export const agents = [
  { name: 'Documentation Analysis', detail: 'Mapped code paths and service contracts', state: 'complete' },
  { name: 'Test Case Generation', detail: 'Generated regression scenarios', state: 'complete' },
  { name: 'Test Execution', detail: '1 of 128 checks failed', state: 'attention' },
  { name: 'Failure Analysis', detail: 'Identified likely root cause', state: 'complete' },
  { name: 'Proposed Fix Review', detail: 'Awaiting your decision', state: 'pending' },
]
