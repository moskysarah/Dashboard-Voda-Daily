import { useState } from "react"

export default function Paiement() {
  // Onglets pour basculer entre Recharge et Transfert
  const [activeTab, setActiveTab] = useState("recharge")

  // États pour les formulaires
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  // Historique fictif des transactions récentes
  const transactions = [
    { id: "TX-9081", type: "Dépôt M-Pesa", date: "14 Juin 2026", montant: "+20.00 $", statut: "Succès", color: "text-emerald-600" },
    { id: "TX-8942", type: "Achat Forfait Internet", date: "12 Juin 2026", montant: "-1.00 $", statut: "Succès", color: "text-slate-800" },
    { id: "TX-8811", type: "Transfert Envoyé", date: "10 Juin 2026", montant: "-5.50 $", statut: "Succès", color: "text-slate-800" },
    { id: "TX-8703", type: "Recharge Flash", date: "05 Juin 2026", montant: "+10.00 $", statut: "Échoué", color: "text-red-600" },
  ]

  const handleTransactionSubmit = (e) => {
    e.preventDefault()
    if (!amount || (activeTab === "transfert" && !phoneNumber)) {
      alert("Veuillez remplir tous les champs requis.")
      return
    }

    if (activeTab === "recharge") {
      alert(`Demande de rechargement de ${amount} $ initiée. Veuillez saisir votre code PIN M-Pesa sur votre téléphone pour valider.`)
    } else {
      alert(`Transfert de ${amount} $ vers le numéro ${phoneNumber} envoyé avec succès !`)
    }
    
    // Réinitialisation
    setAmount("")
    setPhoneNumber("")
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 mt-30">
      
      {/* 1. EN-TÊTE DE LA PAGE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">
            E-Service <span className="text-red-600">Paiement</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Rechargez votre compte Daily ou envoyez de l'argent en toute sécurité via M-Pesa.
          </p>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs font-bold text-slate-400 uppercase">Votre Solde Actuel</span>
          <span className="text-2xl font-black text-emerald-600">45,50 $</span>
        </div>
      </div>

      {/* 2. ZONE DE FORMULAIRE (CARTE BLANCHE + SHADOW GRAND FORMAT) */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* SÉLECTEUR D'ONGLETS S'INTEGRANT AU DESIGN */}
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          <button
            onClick={() => { setActiveTab("recharge"); setAmount(""); setPhoneNumber(""); }}
            className={`flex-1 py-4 text-center font-bold text-sm transition-all border-b-2 ${
              activeTab === "recharge"
                ? "border-red-600 text-red-600 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            ⚡ Recharger mon Compte
          </button>
          <button
            onClick={() => { setActiveTab("transfert"); setAmount(""); setPhoneNumber(""); }}
            className={`flex-1 py-4 text-center font-bold text-sm transition-all border-b-2 ${
              activeTab === "transfert"
                ? "border-red-600 text-red-600 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            💸 Transférer de l'Argent
          </button>
        </div>

        {/* FORMULAIRE DYNAMIQUE */}
        <form onSubmit={handleTransactionSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Champ Numéro (Visible uniquement si "Transfert") */}
            {activeTab === "transfert" && (
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Numéro Vodacom du bénéficiaire</label>
                <input
                  type="tel"
                  placeholder="Ex: +243 812 345 678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
              </div>
            )}

            {/* Champ Montant */}
            <div className={activeTab === "recharge" ? "md:col-span-2" : ""}>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Montant (en USD $)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
              </div>
            </div>

          </div>

          {/* Bouton d'action */}
          <div className="flex justify-end pt-4 border-t border-slate-50">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 transition-all transform active:scale-95"
            >
              {activeTab === "recharge" ? "Confirmer la Recharge" : "Envoyer les Fonds"}
            </button>
          </div>
        </form>
      </div>

      {/* 3. TABLEAU DES TRANSACTIONS RECENTES (BLANC + SHADOW LÉGÈRE) */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">
          Historique des Transactions Daily
        </h3>
        
        {/* Conteneur pour scroll sur mobile si nécessaire */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">ID Référence</th>
                <th className="py-3 px-4">Type d'opération</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Montant</th>
                <th className="py-3 px-4 text-right">Statut</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-700 divide-y divide-slate-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-mono text-slate-400 text-xs">{tx.id}</td>
                  <td className="py-4 px-4 text-slate-800 font-semibold">{tx.type}</td>
                  <td className="py-4 px-4 text-slate-500">{tx.date}</td>
                  <td className={`py-4 px-4 font-bold ${tx.color}`}>{tx.montant}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      tx.statut === "Succès" 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                        : "bg-red-50 text-red-600 border border-red-100"
                    }`}>
                      {tx.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}