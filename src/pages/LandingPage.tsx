import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#e7000b] text-white flex flex-col items-center justify-center p-6 text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold mb-4  text-white">
          Bienvenue sur Notre Plateforme
        </h1>
        <p className="text-lg text-white max-w-md mx-auto">
          Gérez vos paiements, accédez au marketplace et suivez vos comptes en toute simplicité.
        </p>
      </header>

      <main>
        <Link 
          to="/dashboard" 
          className="px-8 py-4 bg-white text-[#e7000b]  hover:bg-[#e7000b]  hover:text-white hover:border-1 border-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 inline-block"
        >
          Accéder au Dashboard
        </Link>
      </main>

    </div>
  )
}