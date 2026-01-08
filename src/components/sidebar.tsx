// import { useState } from "react"

import { Link,} from "react-router-dom"
import Profil from "../components/profil"
import { Home, ShoppingCart, UserCircle, Wallet, Smartphone, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
 
  const menuItems = [
    { icon: <Home size={22} className="text-[#FFFFF]" />, label: "Accueil", path: "/accueil" },
    { icon: <Smartphone size={22} className="text-[#FFFF]" />, label: "MPSA", path: "/mpsa" },
    { icon: <UserCircle size={22} className="text-[#FFFF]" />, label: "Mon compte", path: "/compte" },
    { icon: <ShoppingCart size={22} className="text-[#FFFF]" />, label: "Marketplace", path: "/marketplace" },
    { icon: <Wallet size={22} className="text-[#FFFF]" />, label: "Paiement", path: "/paiement" },

  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white  bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`w-70 bg-[#E60505] dark:bg-white border-l-none p-4 flex flex-col fixed w-70 md:fixed top-16 md:top-18 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex`}>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden self-end p-2 text-white hover:bg-[#B80000]  rounded mb-4"
        >
          <X size={24} />
        </button>

        <Link to="/profilDetails" onClick={onClose}>
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
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E63948] text-white'
                    : 'text-[#FFFF] dark:text-gray-300 hover:bg-[#E63948] dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span className={`font-medium ${isActive ? 'text-white' : ''}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>


      </aside>
    </>
  )
}
