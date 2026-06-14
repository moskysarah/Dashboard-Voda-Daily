import { useState } from "react"

export default function MPSA() {
  // Liste des services M-Pesa disponibles
  const mpesaServices = [
    { id: 1, title: "Paiement Facture", icon: "🧾", desc: "Regideso, Snel, Canal+, EasyTV...", color: "bg-blue-50 text-blue-600" },
    { id: 2, title: "Paiement Marchand", icon: "🏪", desc: "Payez vos achats en magasin via code Till", color: "bg-red-50 text-red-600" },
    { id: 3, title: "Retrait d'argent", icon: "🏧", desc: "Générez un code de retrait chez un agent", color: "bg-amber-50 text-amber-600" },
    { id: 4, title: "Banque vers M-Pesa", icon: "🏦", desc: "Liez et transférez depuis votre compte bancaire", color: "bg-purple-50 text-purple-600" },
  ]

  // États pour le simulateur de frais M-Pesa
  const [simAmount, setSimAmount] = useState("")
  const [fraisRetrait, setFraisRetrait] = useState(0)
  const [fraisEnvoi, setFraisEnvoi] = useState(0)

  // Simulation basique des frais (Exemple indicatif)
  const handleSimulation = (value) => {
    setSimAmount(value)
    const amount = parseFloat(value)
    if (!isNaN(amount) && amount > 0) {
      // Calcul fictif à titre d'exemple (ex: 2% pour retrait, 1% pour envoi)
      setFraisRetrait((amount * 0.02).toFixed(2))
      setFraisEnvoi((amount * 0.01).toFixed(2))
    } else {
      setFraisRetrait(0)
      setFraisEnvoi(0)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 mt-30">
      
      {/* 1. EN-TÊTE PREMIUM M-PESA */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-red-600/30">
            M
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Services <span className="text-red-600">M-Pesa</span> Évolués
            </h1>
            <p className="text-slate-500 font-medium mt-0.5">
              Votre portefeuille mobile Vodacom tout-en-un pour vos transactions quotidiennes.
            </p>
          </div>
        </div>
        <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
          Compte Sécurisé 🔒
        </div>
      </div>

      {/* 2. GRILLE DES SERVICES PROPOSÉS (CARTES BLANCHES + SHADOW) */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-800 pl-2">Que voulez-vous faire aujourd'hui ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mpesaServices.map((service) => (
            <button
              key={service.id}
              onClick={() => alert(`Ouverture du service : ${service.title}`)}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col text-left justify-between group transform hover:translate-y-[-4px]"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-base group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1.5 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <span className="text-xs font-bold text-red-500 mt-4 inline-block group-hover:translate-x-1 transition-transform">
                Accéder →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. SIMULATEUR DE FRAIS & SÉCURITÉ (DEUX COLONNES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Colonne Gauche : Simulateur de Frais */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Simulateur de Tarifs M-Pesa</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Calculez instantanément vos frais d'envoi et de retrait.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Montant à évaluer ($)</label>
              <input
                type="number"
                placeholder="Ex: 50"
                value={simAmount}
                onChange={(e) => handleSimulation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold focus:outline-none focus:border-red-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frais de retrait</p>
                <p className="text-xl font-extrabold text-slate-800 mt-1">{fraisRetrait} $</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frais d'envoi</p>
                <p className="text-xl font-extrabold text-slate-800 mt-1">{fraisEnvoi} $</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Rappels de Sécurité & Clé d'activation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800">Conseils de Sécurité Obligatoires</h3>
            <ul className="space-y-3 text-xs text-slate-500 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 text-sm">⚠️</span>
                <span>Ne partagez **jamais** votre code PIN M-Pesa à 4 chiffres, même avec un agent Vodacom.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 text-sm">⚠️</span>
                <span>Vérifiez toujours le nom du destinataire qui s'affiche à l'écran avant de valider votre paiement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 text-sm">✓</span>
                <span>En cas de transaction erronée, contactez immédiatement le service client au **1111**.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100/60 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-800">Besoin d'un relevé officiel ?</p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">Générez un PDF de vos 30 derniers jours.</p>
            </div>
            <button 
              onClick={() => alert("Génération du relevé M-Pesa...")}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
            >
              Exporter
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}