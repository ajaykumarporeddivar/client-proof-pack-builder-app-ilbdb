import { NextResponse } from 'next';
import { campaigns } from '@/lib/data';

export async function GET() {
  const response = await fetch('https://example.com/api/exports');
  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}

export async function POST() {
  const { campaignId } = await jsonBody();

  const campaign = campaigns.find((campaign) => campaign.id === campaignId);

  if (!campaign) {
    return new Response('Campaign not found', { status: 404 });
  }

  // Add export logic
  console.log(campaign);

  return new Response('Exported successfully', { status: 200 });
}

function jsonBody() {
  const body = new Uint8Array(globalThis.request.body);
  return JSON.parse(new TextDecoder('utf-8').decode(body));
}