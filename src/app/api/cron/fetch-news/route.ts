export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextResponse } from 'next/server';
import { syncNews } from '../../../../../scripts/sync-news.mjs';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await syncNews();
    return NextResponse.json({
      success: true,
      message: 'News synced successfully',
      added: result.added,
      total: result.total,
    });
  } catch (error: any) {
    console.error('Error in cron news sync:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Unknown Server Error',
      },
      { status: 500 }
    );
  }
}
