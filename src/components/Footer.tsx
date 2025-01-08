export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-red-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">À Propos</h3>
            <p className="text-gray-400">
              Le Mouvement Anarchiste Révolutionnaire lutte pour une société plus juste et égalitaire.
            </p>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="/actions" className="text-gray-400 hover:text-white">Actions</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">Rejoignez-nous</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour rester informé·e·s
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-900/30 text-center text-gray-400">
          <p>© 2025 Mouvement Anarchiste Révolutionnaire. Tous droits libérés.</p>
        </div>
      </div>
    </footer>
  )
}
