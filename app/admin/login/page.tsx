import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'
import { loginAdmin } from '../actions'

export const dynamic = 'force-dynamic'

export default async function AdminLoginPage() {
  const session = await getAdminSession()
  if (session) redirect('/admin')

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <form action={loginAdmin} className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Signal Console</p><h1 className="mt-2 text-2xl font-bold">Admin sign in</h1><p className="mt-1 text-sm text-slate-500">Use your administrator credentials to continue.</p></div>
        <label className="flex flex-col gap-2 text-sm font-semibold">Email<input name="email" type="email" required className="h-10 rounded-md border border-slate-200 px-3 font-normal" /></label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Password<input name="password" type="password" required minLength={8} className="h-10 rounded-md border border-slate-200 px-3 font-normal" /></label>
        <button className="h-10 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700" type="submit">Sign in</button>
      </form>
    </main>
  )
}
