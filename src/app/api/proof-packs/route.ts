import { NextResponse } from 'next';
import { proofPacks } from '@/lib/data';

export async function GET() {
  return NextResponse.json(proofPacks, { status: 200 });
}

export async function POST() {
  const { clientId, campaignId } = await jsonBody();

  const proofPack = {
    id: proofPacks.length + 1,
    clientId,
    campaignId,
    status: 'draft',
  };

  proofPacks.push(proofPack);

  return NextResponse.json(proofPack, { status: 201 });
}

function jsonBody() {
  const body = new Uint8Array(globalThis.request.body);
  return JSON.parse(new TextDecoder('utf-8').decode(body));
}