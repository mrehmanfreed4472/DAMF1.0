import type { Metadata } from 'next'
import Login from '@/components/Login'

export const metadata: Metadata = {
  title: 'Login | The DAM LLC',
  description: 'Login to The DAM LLC account to manage orders and preferences.',
  alternates: { canonical: '/login' },
}

export default function LoginPage() {
  return <Login />
}
