import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Sidebar from "./components/sidebar"
import Header from "./components/header"
import FloatingBackground from "./components/floatingBackground"

// Pages
import LandingPage from "./pages/LandingPage" // Nouvelle page d'accueil publique
import Home from "./pages/Home" // Votre dashboard actuel
import MarketPlace from "./pages/MarketPlace"
import MonCompte from "./pages/MonCompte"
import Paiement from "./pages/Paiement"
import MPSA from "./pages/Mpsa"
import Beneficiaires from "./pages/Beneficiaires"
import CompteInterne from "./components/compteInterne"

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. PAGE D'ACCUEIL PUBLIQUE (Sans Sidebar ni Header global) */}
        <Route path="/" element={<LandingPage />} />

        {/* 2. ROUTES DU DASHBOARD (Avec Sidebar, Header et Fond) */}
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  )
}

// Composant Interne pour structurer le Dashboard
function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      {/* 🔥 Fond animé flottant uniquement dans le dashboard */}
      <FloatingBackground />

      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} />

      {/* Wrapper principal */}
      <div className="min-h-screen flex relative bg-transparent">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Contenu principal */}
        <main className="relative z-10 w-full p-6 pt-20 md:pt-6 md:ml-70">
          <Routes>
            <Route path="/dashboard" element={<LandingPage />} /> {
           <Route path="/accueil" element={<Home />} />                                                      /* Changé /accueil par /dashboard pour plus de clarté */}
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/compte" element={<MonCompte />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="/mpsa" element={<MPSA />} />
            <Route path="/beneficiaires" element={<Beneficiaires />} />
            <Route path="/compteinterne" element={<CompteInterne />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App