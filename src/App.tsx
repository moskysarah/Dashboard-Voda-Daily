
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./components/sidebar"
import Header from "./components/header"

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Router>
       <Header onToggleSidebar={toggleSidebar} />
      <div className="min-h-screen bg-[#FFFF] dark:bg-gray-900 flex">

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Contenu */}
        <main className="p-6 pt-26 md:ml-100 ">
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
