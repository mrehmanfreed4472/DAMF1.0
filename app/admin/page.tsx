import type { Metadata } from 'next'
import { AdminLayout } from '@/components/AdminLayout'
import AdminDashboard from '@/components/admin/Dashboard'

export const metadata: Metadata = {
  title: 'Admin | The DAM LLC',
  robots: { index: false, follow: false },
  alternates: { canonical: '/admin' },
}

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  )
}
