import { useState } from "react"

export default function MarketPlace() {
  // Liste des catégories disponibles
  const categories = ["Tous", "Internet", "Appels", "SMS", "Mixte & M-Pesa"]
  const [activeCategory, setActiveCategory] = useState("Tous")

  // Liste des offres Vodacom Daily (Exemples réalistes en $)
  const offers = [
    {
      id: 1,
      title: "Maxi Daily Heavy",
      category: "Internet",
      volume: "2 GB",
      validity: "24 Heures",
      price: "1.00",
      popular: true,
      description: "Idéal pour le streaming vidéo et les réseaux sociaux toute la journée.",
    },
    {
      id: 2,
      title: "Daily Suka",
      category: "Internet",
      volume: "500 MB",
      validity: "24 Heures",
      price: "0.50",
      popular: false,
      description: "Pour rester connecté sur WhatsApp et checker vos e-mails.",
    },
    {
      id: 3,
      title: "Likofi Tokoss",
      category: "Appels",
      volume: "60 Minutes",
      validity: "24 Heures",
      price: "1.00",
      popular: false,
      description: "Appels illimités vers les numéros Vodacom et 10 min vers les autres réseaux.",
    },
    {
      id: 4,
      title: "SMS Unlimited Daily",
      category: "SMS",
      volume: "SMS Illimités",
      validity: "24 Heures",
      price: "0.20",
      popular: false,
      description: "Envoyez autant de SMS que vous voulez vers tous les réseaux locaux.",
    },
    {
      id: 5,
      title: "Mega Pack M-Pesa",
      category: "Mixte & M-Pesa",
      volume: "1.5 GB + 30 Min",
      validity: "48 Heures",
      price: "1.50",
      popular: true,
      description: "Bonus exclusif en achetant directement via votre compte M-Pesa.",
    },
    {
      id: 6,
      title: "Daily Night Pack",
      category: "Internet",
      volume: "5 GB (Minuit - 5h)",
      validity: "1 Nuit",
      price: "0.80",
      popular: false,
      description: "Le forfait parfait pour vos téléchargements nocturnes.",
    },
  ]

  // Filtrer les offres selon la catégorie sélectionnée
  const filteredOffers = activeCategory === "Tous" 
    ? offers 
    : offers.filter(offer => offer.category === activeCategory)

  // Fonction fictive d'achat
  const handleBuy = (offerTitle, price) => {
    const confirmBuy = window.confirm(`Voulez-vous acheter le forfait "${offerTitle}" pour ${price} $ ?`)
    if (confirmBuy) {
      alert(`Félicitations ! Votre forfait "${offerTitle}" a été activé avec succès via M-Pesa.`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 mt-30">
      
      {/* EN-TÊTE DE LA MARKETPLACE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">
            Vodacom <span className="text-red-600">Daily</span> Market
          </h1>
          <p className="text-slate-500 font-medium mt-1">
            Achetez vos forfaits Internet, Appels et SMS instantanément au meilleur prix.
          </p>
        </div>
        <div className="bg-red-50 text-red-600 font-bold px-4 py-2 rounded-2xl border border-red-100 text-sm shadow-sm">
          Achat via M-Pesa activé ⚡
        </div>
      </div>

      {/* SYSTÈME DE FILTRES (BOUTONS) */}
      <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto whitespace-nowrap scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
              activeCategory === category
                ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRILLE DES OFFRES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <div 
            key={offer.id} 
            className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between shadow-md hover:shadow-xl hover:translate-y-[-4px] duration-300 ${
              offer.popular ? "border-red-400 ring-2 ring-red-500/5" : "border-slate-100"
            }`}
          >
            <div>
              {/* Badge Popularité / Catégorie */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {offer.category}
                </span>
                {offer.popular && (
                  <span className="text-[11px] font-extrabold text-white bg-gradient-to-r from-red-600 to-amber-500 px-2.5 py-1 rounded-md uppercase tracking-wide shadow-sm">
                    Populaire
                  </span>
                )}
              </div>

              {/* Titre & Validité */}
              <h3 className="text-xl font-bold text-slate-800">{offer.title}</h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Validité : {offer.validity}</p>

              {/* Volume / Avantage principal */}
              <div className="my-4 bg-slate-50 rounded-2xl p-4 text-center border border-slate-100/60">
                <p className="text-3xl font-black text-slate-800 tracking-tight">{offer.volume}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                {offer.description}
              </p>
            </div>

            {/* Zone Prix & Bouton d'achat */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Prix</p>
                <p className="text-2xl font-black text-slate-800">{offer.price} <span className="text-sm font-bold text-slate-500">$</span></p>
              </div>
              
              <button
                onClick={() => handleBuy(offer.title, offer.price)}
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md shadow-red-600/10 transition-all transform active:scale-95"
              >
                Activer l'offre
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* SI AUCUNE OFFRE NE CORRESPOND */}
      {filteredOffers.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center shadow-md border border-slate-100">
          <p className="text-slate-400 font-medium text-lg">Aucun forfait disponible dans cette catégorie pour le moment.</p>
        </div>
      )}

    </div>
  )
}