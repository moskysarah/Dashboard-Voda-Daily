import { Link, useLocation } from "react-router-dom"
import Profil from "../components/profil"
import { Home, ShoppingCart, UserCircle, Wallet, Smartphone, X, LogOut } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()

  const menuItems = [
    { icon: <Home size={22} className="text-white" />, label: "Accueil", path: "/accueil" },
    { icon: <Smartphone size={22} className="text-white" />, label: "MPSA", path: "/mpsa" },
    { icon: <UserCircle size={22} className="text-white" />, label: "Mon compte", path: "/compte" },
    { icon: <ShoppingCart size={22} className="text-white" />, label: "Marketplace", path: "/marketplace" },
    { icon: <Wallet size={22} className="text-white" />, label: "Paiement", path: "/paiement" },

  ]

  const handleLogout = () => {
    // Logique de déconnexion - à implémenter selon vos besoins
    console.log("Déconnexion...");
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`w-70 bg-[#E60505] p-4 flex flex-col fixed w-70 md:fixed    border-r border-[#EFFFFF]  top-16 md:top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex`}>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden self-end p-2 text-white hover:bg-[#B80000] rounded-lg mb-4 transition-colors"
        >
          <X size={24} />
        </button>

        <Link to="/profilDetails" onClick={onClose} className="hover:opacity-90 transition-opacity">
          <Profil />
        </Link>

        {/* Main menu items */}
        <div className="flex flex-col gap-1 mt-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#B80000] text-white shadow-lg'
                    : 'text-white/90 hover:bg-[#E63948] hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-white/90'}>{item.icon}</span>
                <span className={`font-medium ${isActive ? 'text-white' : 'text-white'}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Spacer to push logout to bottom */}
        <div className="flex-grow"></div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 mt-4 rounded-xl text-white/90 hover:bg-[#B80000] hover:text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <LogOut size={22} className="text-white" />
          <span className="font-medium text-white">Déconnexion</span>
        </button>

      </aside>
    </>
  )
}
