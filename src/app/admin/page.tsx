'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/Auth'

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    } catch (error) {
      console.error('Error checking auth:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-red-500">Chargement...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Auth />
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
          Panneau d'administration
        </h1>
        <div className="bg-black rounded-lg p-6 border border-red-900/30">
          <h2 className="text-xl font-semibold mb-4">Bienvenue dans l'interface d'administration</h2>
          <p className="text-gray-300">Vous êtes connecté avec succès.</p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded hover:from-red-500 hover:to-red-400"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  )
}
