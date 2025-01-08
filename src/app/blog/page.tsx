export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
          Blog
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Les articles seront chargés dynamiquement depuis la base de données */}
        </div>
      </div>
    </div>
  )
}
