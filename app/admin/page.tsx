import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'
import { getAdminOverviewMetrics } from './actions'
import AdminPageClient from './page-client'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  const data = await getAdminOverviewMetrics()
  return <AdminPageClient initialData={data} sessionEmail={session.email} />
}
