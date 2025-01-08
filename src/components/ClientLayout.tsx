'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { AuthProvider } from './Providers'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <Navbar />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </AuthProvider>
  )
}
