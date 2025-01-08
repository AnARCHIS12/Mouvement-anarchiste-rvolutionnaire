export default function Actions() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
          Actions Directes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Les actions seront chargées dynamiquement depuis la base de données */}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            Proposer une Action
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Vous avez une idée d'action ? Partagez-la avec le mouvement !
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Soumettre une Action
          </button>
        </div>
      </div>
    </div>
  )
}
