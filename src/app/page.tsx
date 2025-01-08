import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            Mouvement Anarchiste<br />Révolutionnaire
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Pour l'émancipation collective et l'action directe.<br />
            Ensemble, construisons un monde plus juste et égalitaire.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/actions"
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Rejoindre le Mouvement
            </Link>
            <Link
              href="/blog"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 border border-red-900/30 hover:border-red-500 transform hover:scale-105"
            >
              Lire le Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Actions Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            Actions Récentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Les actions seront chargées dynamiquement depuis la base de données */}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            Derniers Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Les articles seront chargés dynamiquement depuis la base de données */}
          </div>
        </div>
      </section>
    </div>
  )
}
