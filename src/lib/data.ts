import {
  ProofPack,
  Client,
  Campaign,
  ProofItem,
  ProofPackStatus,
  ProofPackPriority,
  MetricType,
  ActivityLog,
  MetricCardData,
} from './types';

const generateId = (): string => Math.random().toString(36).substring(2, 15);

// Sample Clients
export const clients: Client[] = [
  { id: generateId(), name: 'Synergy Solutions', accountManager: 'Alice Smith', industry: 'Tech', contractValue: 120000, lastReview: new Date('2023-10-15') },
  { id: generateId(), name: 'Global Innovations', accountManager: 'Bob Johnson', industry: 'Finance', contractValue: 85000, lastReview: new Date('2024-01-20') },
  { id: generateId(), name: 'Evergreen Marketing', accountManager: 'Charlie Brown', industry: 'Retail', contractValue: 50000, lastReview: new Date('2023-12-01') },
  { id: generateId(), name: 'Pinnacle Ventures', accountManager: 'Dana White', industry: 'Real Estate', contractValue: 95000, lastReview: new Date('2024-02-10') },
  { id: generateId(), name: 'Quantum Analytics', accountManager: 'Alice Smith', industry: 'Data Science', contractValue: 150000, lastReview: new Date('2023-11-22') },
  { id: generateId(), name: 'Bright Horizon Media', accountManager: 'Bob Johnson', industry: 'Media', contractValue: 60000, lastReview: new Date('2024-03-05') },
  { id: generateId(), name: 'Apex Logistics', accountManager: 'Charlie Brown', industry: 'Logistics', contractValue: 70000, lastReview: new Date('2023-09-10') },
  { id: generateId(), name: 'Fusion Dynamics', accountManager: 'Dana White', industry: 'Manufacturing', contractValue: 110000, lastReview: new Date('2024-01-01') },
  { id: generateId(), name: 'Veridian Health', accountManager: 'Alice Smith', industry: 'Healthcare', contractValue: 90000, lastReview: new Date('2023-12-18') },
  { id: generateId(), name: 'Terra Nova Group', accountManager: 'Bob Johnson', industry: 'Energy', contractValue: 130000, lastReview: new Date('2024-02-28') },
];

// Sample Campaigns
export const campaigns: Campaign[] = [
  { id: generateId(), clientId: clients[0].id, name: 'Q4 2023 Brand Awareness', startDate: new Date('2023-10-01'), endDate: new Date('2023-12-31'), budget: 25000 },
  { id: generateId(), clientId: clients[0].id, name: 'Q1 2024 Lead Generation', startDate: new Date('2024-01-01'), endDate: new Date('2024-03-31'), budget: 35000 },
  { id: generateId(), clientId: clients[1].id, name: 'Financial Product Launch', startDate: new Date('2023-11-15'), endDate: new Date('2024-02-15'), budget: 50000 },
  { id: generateId(), clientId: clients[2].id, name: 'Holiday Sales Drive', startDate: new Date('2023-11-01'), endDate: new Date('2023-12-31'), budget: 20000 },
  { id: generateId(), clientId: clients[3].id, name: 'New Property Listings', startDate: new Date('2024-01-01'), endDate: new Date('2024-06-30'), budget: 40000 },
  { id: generateId(), clientId: clients[4].id, name: 'Data Platform Migration', startDate: new Date('2023-09-01'), endDate: new Date('2024-01-31'), budget: 60000 },
  { id: generateId(), clientId: clients[5].id, name: 'Spring Collection Promo', startDate: new Date('2024-03-01'), endDate: new Date('2024-05-31'), budget: 30000 },
  { id: generateId(), clientId: clients[6].id, name: 'Logistics Efficiency Campaign', startDate: new Date('2023-08-01'), endDate: new Date('2023-10-31'), budget: 28000 },
  { id: generateId(), clientId: clients[7].id, name: 'Manufacturing Automation Showcase', startDate: new Date('2024-01-15'), endDate: new Date('2024-04-15'), budget: 45000 },
  { id: generateId(), clientId: clients[8].id, name: 'Patient Engagement Initiative', startDate: new Date('2023-10-01'), endDate: new Date('2024-01-31'), budget: 32000 },
];

// Helper to generate proof items for a pack
const generateProofItems = (campaignId: string, count: number): ProofItem[] => {
  const items: ProofItem[] = [];
  const metricTypes: MetricType[] = ['Impressions', 'Clicks', 'Conversions', 'ROI', 'Engagement', 'Cost', 'Revenue'];
  const units: { [key in MetricType]: string } = {
    Impressions: 'views',
    Clicks: 'clicks',
    Conversions: 'conversions',
    ROI: '%',
    Engagement: 'actions',
    Cost: '$',
    Revenue: '$',
  };

  for (let i = 0; i < count; i++) {
    const metricType = metricTypes[Math.floor(Math.random() * metricTypes.length)];
    const value = Math.floor(Math.random() * 10000) + 100;
    items.push({
      id: generateId(),
      campaignId,
      metricType,
      value: metricType === 'ROI' ? parseFloat((value / 100).toFixed(2)) : value,
      unit: units[metricType],
      date: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000), // Last 90 days
      sourceUrl: `https://example.com/report/${generateId()}`,
      notes: `Performance metric for ${metricType} generated on ${new Date().toLocaleDateString()}.`,
    });
  }
  return items;
};

// Sample Proof Packs
export const proofPacks: ProofPack[] = [
  {
    id: generateId(), clientId: clients[0].id, campaignId: campaigns[0].id, title: 'Q4 2023 Brand Awareness Summary',
    status: 'approved', priority: 'high', dueDate: new Date('2024-01-10'),
    proofItems: generateProofItems(campaigns[0].id, 5), createdAt: new Date('2023-12-20'), updatedAt: new Date('2024-01-05'),
    summaryNotes: 'Comprehensive review of Q4 brand visibility, exceeding target impressions by 15%.',
  },
  {
    id: generateId(), clientId: clients[0].id, campaignId: campaigns[1].id, title: 'Q1 2024 Lead Gen Progress',
    status: 'in_review', priority: 'critical', dueDate: new Date('2024-03-25'),
    proofItems: generateProofItems(campaigns[1].id, 4), createdAt: new Date('2024-03-01'), updatedAt: new Date('2024-03-15'),
    summaryNotes: 'Initial review for Q1 leads, some campaigns show strong CPA, others need optimization.',
  },
  {
    id: generateId(), clientId: clients[1].id, campaignId: campaigns[2].id, title: 'Financial Product Launch ROI',
    status: 'queued', priority: 'high', dueDate: new Date('2024-02-20'),
    proofItems: generateProofItems(campaigns[2].id, 6), createdAt: new Date('2024-02-01'), updatedAt: new Date('2024-02-01'),
    summaryNotes: 'Gathering data for post-launch ROI analysis. Focus on conversion rates.',
  },
  {
    id: generateId(), clientId: clients[2].id, campaignId: campaigns[3].id, title: 'Holiday Sales Performance Report',
    status: 'rejected', priority: 'medium', dueDate: new Date('2024-01-15'),
    proofItems: generateProofItems(campaigns[3].id, 3), createdAt: new Date('2024-01-05'), updatedAt: new Date('2024-01-12'),
    summaryNotes: 'Report rejected due to missing data for email campaign conversions. Needs revision.',
    reviewFeedback: 'Missing conversions data for email segment. Please re-run report with complete data.',
  },
  {
    id: generateId(), clientId: clients[3].id, campaignId: campaigns[4].id, title: 'New Listings Campaign Audit',
    status: 'approved', priority: 'low', dueDate: new Date('2024-07-10'),
    proofItems: generateProofItems(campaigns[4].id, 7), createdAt: new Date('2024-06-01'), updatedAt: new Date('2024-06-20'),
    summaryNotes: 'Audit of new property listings campaign. Positive ROI on digital ads.',
  },
  {
    id: generateId(), clientId: clients[4].id, campaignId: campaigns[5].id, title: 'Data Platform Migration Impact',
    status: 'archived', priority: 'medium', dueDate: new Date('2024-02-10'),
    proofItems: generateProofItems(campaigns[5].id, 5), createdAt: new Date('2024-01-20'), updatedAt: new Date('2024-02-05'),
    summaryNotes: 'Archived report: Migration successfully completed with minimal data loss.',
  },
  {
    id: generateId(), clientId: clients[5].id, campaignId: campaigns[6].id, title: 'Spring Collection ROI',
    status: 'queued', priority: 'high', dueDate: new Date('2024-06-15'),
    proofItems: generateProofItems(campaigns[6].id, 4), createdAt: new Date('2024-05-20'), updatedAt: new Date('2024-05-20'),
    summaryNotes: 'Preparing for end-of-campaign ROI assessment. Need social media engagement data.',
  },
  {
    id: generateId(), clientId: clients[6].id, campaignId: campaigns[7].id, title: 'Logistics Efficiency Review',
    status: 'approved', priority: 'medium', dueDate: new Date('2023-11-15'),
    proofItems: generateProofItems(campaigns[7].id, 6), createdAt: new Date('2023-10-25'), updatedAt: new Date('2023-11-10'),
    summaryNotes: 'Successfully optimized logistics routing, reducing delivery times by 8%.',
  },
  {
    id: generateId(), clientId: clients[7].id, campaignId: campaigns[8].id, title: 'Automation Showcase Analysis',
    status: 'in_review', priority: 'critical', dueDate: new Date('2024-04-20'),
    proofItems: generateProofItems(campaigns[8].id, 5), createdAt: new Date('2024-04-01'), updatedAt: new Date('2024-04-10'),
    summaryNotes: 'Initial review of manufacturing showcase outcomes. Strong engagement metrics.',
  },
  {
    id: generateId(), clientId: clients[8].id, campaignId: campaigns[9].id, title: 'Patient Engagement Report',
    status: 'queued', priority: 'high', dueDate: new Date('2024-02-28'),
    proofItems: generateProofItems(campaigns[9].id, 3), createdAt: new Date('2024-02-10'), updatedAt: new Date('2024-02-10'),
    summaryNotes: 'Beginning data collection for patient feedback and engagement scores.',
  },
  {
    id: generateId(), clientId: clients[0].id, campaignId: campaigns[0].id, title: 'Q4 Follow-up Insights',
    status: 'queued', priority: 'medium', dueDate: new Date('2024-03-01'),
    proofItems: generateProofItems(campaigns[0].id, 2), createdAt: new Date('2024-02-15'), updatedAt: new Date('2024-02-15'),
    summaryNotes: 'Follow-up analysis on social media reach. Initial data shows stable growth.',
  },
];

export const activity: ActivityLog[] = [
  { id: generateId(), proofPackId: proofPacks[0].id, timestamp: new Date('2024-01-05T10:00:00Z'), action: 'Status Changed', actor: 'Alice Smith', details: 'Status changed from In Review to Approved.' },
  { id: generateId(), proofPackId: proofPacks[1].id, timestamp: new Date('2024-03-15T11:30:00Z'), action: 'Proof Item Added', actor: 'Bob Johnson', details: 'Added 2 new proof items for social media engagement.' },
  { id: generateId(), proofPackId: proofPacks[2].id, timestamp: new Date('2024-02-01T14:00:00Z'), action: 'Proof Pack Created', actor: 'Charlie Brown', details: 'New proof pack created for Financial Product Launch.' },
  { id: generateId(), proofPackId: proofPacks[3].id, timestamp: new Date('2024-01-12T09:15:00Z'), action: 'Proof Pack Rejected', actor: 'Dana White', details: 'Proof pack rejected: missing conversion data.' },
  { id: generateId(), proofPackId: proofPacks[0].id, timestamp: new Date('2023-12-28T16:45:00Z'), action: 'Summary Notes Updated', actor: 'Alice Smith', details: 'Updated summary notes with client feedback.' },
  { id: generateId(), proofPackId: proofPacks[4].id, timestamp: new Date('2024-06-20T13:00:00Z'), action: 'Status Changed', actor: 'Bob Johnson', details: 'Status changed from In Review to Approved.' },
  { id: generateId(), proofPackId: proofPacks[5].id, timestamp: new Date('2024-02-05T10:00:00Z'), action: 'Proof Pack Archived', actor: 'Charlie Brown', details: 'Proof pack archived after client sign-off.' },
  { id: generateId(), proofPackId: proofPacks[6].id, timestamp: new Date('2024-05-20T11:00:00Z'), action: 'Proof Pack Created', actor: 'Dana White', details: 'New proof pack created for Spring Collection ROI.' },
];

export const metrics: MetricCardData[] = [
  {
    title: 'Total Proof Packs',
    value: proofPacks.length.toString(),
    change: 12,
    trend: [120, 135, 128, 140, 155, 160, 168],
    status: 'positive',
  },
  {
    title: 'Approved This Month',
    value: proofPacks.filter(p => p.status === 'approved' && p.updatedAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length.toString(),
    change: 8,
    trend: [30, 28, 32, 35, 33, 38, 40],
    status: 'positive',
  },
  {
    title: 'Critical Due Soon',
    value: proofPacks.filter(p => p.priority === 'critical' && p.dueDate > new Date() && p.dueDate < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).length.toString(),
    change: -5,
    trend: [10, 8, 12, 11, 9, 7, 8],
    status: 'negative',
  },
  {
    title: 'Awaiting Review',
    value: proofPacks.filter(p => p.status === 'in_review').length.toString(),
    change: 3,
    trend: [15, 18, 17, 20, 19, 22, 21],
    status: 'neutral',
  },
];

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]
