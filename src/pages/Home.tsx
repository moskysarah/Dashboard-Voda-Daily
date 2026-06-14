import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  // Données fictives pour l'utilisateur Vodacom Daily
  const [userName] = useState("Jean-Marc")
  
  // Raccourcis d'actions rapides
  const quickActions = [
    { title: "Acheter Forfait", icon: "🚀", link: "/marketplace", desc: "Internet, Appels & SMS" },
    { title: "Recharger / Envoyer", icon: "💸", link: "/paiement", desc: "Via M-Pesa sécurisé" },
    { title: "Gérer mes Bénéficiaires", icon: "👥", link: "/beneficiaires", desc: "Proches et numéros favoris" },
    { title: "Mon Compte Interne", icon: "🏢", link: "/compteinterne", desc: "Paramètres de l'entreprise" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 mt-30">
      
      {/* 1. MESSAGE DE BIENVENUE PREMIUM */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Bonjour, <span className="text-red-600">{userName}</span> 
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Ravi de vous revoir sur votre espace <span className="font-bold text-red-500">Vodacom Daily</span>. Voici l'état de vos consommations aujourd'hui.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl shadow-sm text-center md:text-right w-full md:w-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statut du Réseau</p>
          <p className="text-sm font-bold text-emerald-600 flex items-center justify-center md:justify-end gap-1.5 mt-0.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Connecté en 4G/5G
          </p>
        </div>
      </div>

      {/* 2. VUE D'ENSEMBLE DES SOLDES & SUIVI DE CONSOMMATION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Carte Solde Principal M-Pesa */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between min-h-[160px] transition-all hover:shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Solde M-Pesa</p>
              <h3 className="text-3xl font-black text-slate-800 mt-2">45,50 $</h3>
            </div>
            <span className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 text-xl font-bold">M</span>
          </div>
          <Link to="/paiement" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 mt-4 group">
            Recharger le compte <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Carte Data Internet (Avec barre de progression) */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between min-h-[160px] transition-all hover:shadow-xl">
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internet Daily</p>
              <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">Restant</span>
            </div>
            <h3 className="text-3xl font-black text-slate-800">12,4 GB</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">sur un total de 15 GB</p>
          </div>
          {/* Barre de progression de consommation */}
          <div className="mt-4">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-red-600 h-full rounded-full" style={{ width: "82%" }}></div>
            </div>
          </div>
        </div>

        {/* Carte Minutes Appels */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between min-h-[160px] transition-all hover:shadow-xl">
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Minutes Appels</p>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">Actif</span>
            </div>
            <h3 className="text-3xl font-black text-slate-800">120 Min</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Vers tous les réseaux</p>
          </div>
          <p className="text-[11px] font-semibold text-slate-400 mt-4">Expire le : Demain à 23h59</p>
        </div>

      </div>

      {/* 3. SECTION ACTIONS RAPIDES */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-800 pl-2">Actions rapides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 transform hover:translate-y-[-2px]"
            >
              <div className="text-2xl p-2 bg-slate-50 rounded-xl border border-slate-100/60">
                {action.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{action.title}</h4>
                <p className="text-xs text-slate-400 font-medium mt-1 leading-snug">{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. MESSAGE ALERTE INFO/PROMO DAILY */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center gap-5 justify-between">
        <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
          <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-xl shadow-inner">
            🎁
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Bonus M-Pesa du Week-end !</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Recevez 100% de bonus internet supplémentaire pour chaque forfait acheté le samedi et dimanche via M-Pesa.</p>
          </div>
        </div>
        <Link 
          to="/marketplace" 
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md shadow-red-600/10 transition-colors whitespace-nowrap"
        >
          En profiter maintenant
        </Link>
      </div>

    </div>
  )
}