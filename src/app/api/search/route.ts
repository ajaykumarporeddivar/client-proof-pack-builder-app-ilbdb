import { campaigns, clients, proofItems } from '@/lib/data';
import type { NextRequest } from 'next/server';

interface SearchResult {
  id: string | number;
  name: string;
  type: string;
  source: string;
}

export async function GET(req: NextRequest): Promise<Response> {
  const { searchParams } = req.nextUrl;
  const q = searchParams.get('q')?.toLowerCase() || '';
  const type = searchParams.get('type')?.toLowerCase();
  const MAX_RESULTS = 20;

  let allResults: SearchResult[] = [];

  if (!type || type === 'client') {
    clients.forEach(client => {
      if (client.name.toLowerCase().includes(q)) {
        allResults.push({ id: client.id, name: client.name, type: 'client', source: 'clients' });
      }
    });
  }

  if (!type || type === 'campaign') {
    campaigns.forEach(campaign => {
      if (campaign.name.toLowerCase().includes(q)) {
        allResults.push({ id: campaign.id, name: campaign.name, type: 'campaign', source: 'campaigns' });
      }
    });
  }

  if (!type || type === 'proofitem') {
    proofItems.forEach(item => {
      if (item.campaignName.toLowerCase().includes(q) || item.clientName.toLowerCase().includes(q)) {
        allResults.push({ id: item.id, name: `${item.campaignName} for ${item.clientName}`, type: 'proofItem', source: 'proofItems' });
      }
    });
  }

  // If query is empty, return first 5 items
  if (!q) {
    const defaultResults: SearchResult[] = [];
    defaultResults.push(...clients.slice(0, 2).map(c => ({ id: c.id, name: c.name, type: 'client', source: 'clients' })));
    defaultResults.push(...campaigns.slice(0, 2).map(c => ({ id: c.id, name: c.name, type: 'campaign', source: 'campaigns' })));
    defaultResults.push(...proofItems.slice(0, 1).map(i => ({ id: i.id, name: `${i.campaignName} for ${i.clientName}`, type: 'proofItem', source: 'proofItems' })));
    
    return Response.json({
      ok: true,
      data: { results: defaultResults.slice(0, 5), total: defaultResults.slice(0, 5).length, query: q },
    });
  }

  const uniqueResults = Array.from(new Map(allResults.map(item => [`${item.type}-${item.id}`, item])).values());
  const finalResults = uniqueResults.slice(0, MAX_RESULTS);

  return Response.json({
    ok: true,
    data: { results: finalResults, total: finalResults.length, query: q },
  });
}