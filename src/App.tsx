import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Sidebar from "./components/sidebar"
import Header from "./components/header"
import FloatingBackground from "./components/floatingBackground" // renommé pour plus de clarté

// Pages
import Home from "./pages/Home"
import MarketPlace from "./pages/MarketPlace"
import MonCompte from "./pages/MonCompte"
import Paiement from "./pages/Paiement"
import MPSA from "./pages/Mpsa"
import Beneficiaires from "./pages/Beneficiaires"
import CompteInterne from "./components/compteInterne"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <Router>
      {/* 🔥 Fond animé flottant derrière tout */}
      <FloatingBackground />

      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} />

      {/* Wrapper principal */}
      <div className="min-h-screen flex relative bg-transparent">

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Contenu principal */}
        <main className="relative z-10 w-full p-6 pt-26 md:ml-100">
          <Routes>
            <Route path="/accueil" element={<Home />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/moncompte" element={<MonCompte />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="/mpsa" element={<MPSA />} />
            <Route path="/beneficiaires" element={<Beneficiaires />} />
            <Route path="/compteinterne" element={<CompteInterne />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App
