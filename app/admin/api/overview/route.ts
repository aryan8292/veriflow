import { NextResponse } from 'next/server'
import { getAdminOverviewMetrics } from '../../actions'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await getAdminOverviewMetrics()
    return NextResponse.json(data)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to load admin data'
    return NextResponse.json({ error: message }, { status: message === 'Unauthorized' ? 401 : 500 })
  }
}
