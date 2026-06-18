export type ProofPackStatus = 'queued' | 'in_review' | 'approved' | 'rejected' | 'archived';
export type ProofPackPriority = 'low' | 'medium' | 'high' | 'critical';
export type MetricType = 'Impressions' | 'Clicks' | 'Conversions' | 'ROI' | 'Engagement' | 'Cost' | 'Revenue';

export interface Client {
  id: string;
  name: string;
  accountManager: string;
  industry: string;
  contractValue: number;
  lastReview: Date;
}

export interface Campaign {
  id: string;
  clientId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  budget: number;
}

export interface ProofItem {
  id: string;
  campaignId: string;
  metricType: MetricType;
  value: number;
  unit: string;
  date: Date;
  sourceUrl?: string;
  notes?: string;
  screenshotUrl?: string;
}

export interface ProofPack {
  id: string;
  clientId: string;
  campaignId: string;
  title: string;
  status: ProofPackStatus;
  priority: ProofPackPriority;
  dueDate: Date;
  proofItems: ProofItem[];
  createdAt: Date;
  updatedAt: Date;
  summaryNotes?: string;
  reviewFeedback?: string;
}

export interface ActivityLog {
  id: string;
  proofPackId: string;
  timestamp: Date;
  action: string;
  actor: string;
  details?: string;
}

export interface MetricCardData {
  title: string;
  value: string;
  change: number; // percentage change
  trend: number[]; // data points for sparkline
  status: 'positive' | 'negative' | 'neutral';
}