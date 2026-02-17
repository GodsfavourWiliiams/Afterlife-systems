import { NextResponse } from 'next/server';
import { getSystemStatus } from '@/lib/system-status';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const payload = getSystemStatus();

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  });
}
