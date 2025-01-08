'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const pathname = usePathname()
  const { session } = useAuth()

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-red-600 transition-transform transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Logo MAR"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 group-hover:to-red-300 transition-colors">
                MAR
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === '/blog'
                    ? 'bg-red-900/80 text-white shadow-lg shadow-red-900/20'
                    : 'text-gray-300 hover:bg-red-900/50 hover:text-white hover:shadow-lg hover:shadow-red-900/10'
                }`}
              >
                Blog
              </Link>
              <Link
                href="/actions"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === '/actions'
                    ? 'bg-red-900/80 text-white shadow-lg shadow-red-900/20'
                    : 'text-gray-300 hover:bg-red-900/50 hover:text-white hover:shadow-lg hover:shadow-red-900/10'
                }`}
              >
                Actions
              </Link>
              <Link
                href="/admin"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === '/admin'
                    ? 'bg-red-900/80 text-white shadow-lg shadow-red-900/20'
                    : 'text-gray-300 hover:bg-red-900/50 hover:text-white hover:shadow-lg hover:shadow-red-900/10'
                }`}
              >
                Admin
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900/50 focus:outline-none">
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/blog"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/blog'
                ? 'bg-red-900 text-white'
                : 'text-gray-300 hover:bg-red-900/50 hover:text-white'
            }`}
          >
            Blog
          </Link>
          <Link
            href="/actions"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/actions'
                ? 'bg-red-900 text-white'
                : 'text-gray-300 hover:bg-red-900/50 hover:text-white'
            }`}
          >
            Actions
          </Link>
          <Link
            href="/admin"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/admin'
                ? 'bg-red-900 text-white'
                : 'text-gray-300 hover:bg-red-900/50 hover:text-white'
            }`}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}
