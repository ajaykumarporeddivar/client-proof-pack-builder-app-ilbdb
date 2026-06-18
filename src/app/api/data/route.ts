import { campaigns, clients, proofItems, STATS } from '@/lib/data';
import type { NextRequest } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(req: NextRequest): Promise<Response> {
  const { searchParams } = req.nextUrl;
  const entity = searchParams.get('entity');

  let data: any[] | Record<string, any> = [];
  let total = 0;

  switch (entity) {
    case 'campaigns':
      data = campaigns;
      total = campaigns.length;
      break;
    case 'clients':
      data = clients;
      total = clients.length;
      break;
    case 'proofItems':
      data = proofItems;
      total = proofItems.length;
      break;
    case 'stats':
      data = STATS;
      total = 1; // Stats is a single object
      break;
    default:
      data = {
        clients: clients,
        campaigns: campaigns,
        proofItems: proofItems,
        stats: STATS,
      };
      total = clients.length + campaigns.length + proofItems.length;
  }

  return new Response(JSON.stringify({ ok: true, data, total }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function POST(req: NextRequest): Promise<Response> {
  let body: any;
  try {
    body = await req.json();
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, message: 'Invalid JSON body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}