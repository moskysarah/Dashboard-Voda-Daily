import { useState } from "react";

export default function MonCompte() {
  // Informations de l'utilisateur Vodacom Daily
  const [user, setUser] = useState({
    nom: "Sarah-Monic",
    postnom: "Ngoya",
    telephone: "+243 89 22 39 178",
    email: "sarahmosky@gmail.com",
    soldeMpesa: "45,50",
    forfaitData: "12.4 GB",
    forfaitAppels: "120 Min",
    statut: "Premium Daily"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 mt-30 h-100">
      
      {/* 1. EN-TÊTE DU PROFIL (CARTE BLANCHE + SHADOW ULTRA PROPRE) */}
      <div className="bg-white  rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-100">
        <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          {/* Avatar Rouge Vodacom */}
          <div className="w-20 h-20 bg-gradient-to-tr from-red-600 to-red-500 text-white font-bold text-3xl rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30">
            {user.nom[0]}{user.postnom[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 justify-center md:justify-start">
              {user.nom} {user.postnom}
              <span className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full font-semibold">
                {user.statut}
              </span>
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1">{user.telephone}</p>
          </div>
        </div>
        
        <button
          onClick={() => {
            if (isEditing) setFormData({ ...user });
            setIsEditing(!isEditing);
          }}
          className={`px-5 py-3 rounded-xl font-bold text-sm transition-all transform active:scale-95 ${
            isEditing 
              ? "bg-slate-100 hover:bg-slate-200 text-slate-700" 
              : "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20"
          }`}
        >
          {isEditing ? "Annuler" : "Modifier le profil"}
        </button>
      </div>

      {/* 2. LES CARTES DE SOLDES (BLANCHES AVEC SHADOW LÉGÈRE) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Solde M-Pesa */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Solde M-Pesa</p>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <p className="text-3xl font-extrabold text-slate-800 mt-3">{user.soldeMpesa} $</p>
        </div>

        {/* Forfait Internet */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internet Daily</p>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          </div>
          <p className="text-3xl font-extrabold text-red-600 mt-3">{user.forfaitData}</p>
        </div>

        {/* Forfait Appels */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Minutes Appels</p>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <p className="text-3xl font-extrabold text-blue-600 mt-3">{user.forfaitAppels}</p>
        </div>
      </div>

      {/* 3. FORMULAIRE D'INFORMATIONS (BLANC + SHADOW GRAND FORMAT) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">
          Informations personnelles
        </h3>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Prénom */}
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Prénom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 disabled:opacity-60 disabled:bg-slate-50 disabled:text-slate-500 transition-all"
                required
              />
            </div>

            {/* Nom / Postnom */}
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Nom de famille</label>
              <input
                type="text"
                name="postnom"
                value={formData.postnom}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 disabled:opacity-60 disabled:bg-slate-50 disabled:text-slate-500 transition-all"
                required
              />
            </div>

            {/* Numéro Vodacom (Bloqué par défaut) */}
            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2">Numéro de téléphone</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                disabled
                className="w-full px-4 py-3 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-400 font-medium cursor-not-allowed"
              />
              <span className="text-[11px] text-slate-400 mt-1.5 block font-medium">Lié à votre carte SIM Vodacom.</span>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">Adresse Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 disabled:opacity-60 disabled:bg-slate-50 disabled:text-slate-500 transition-all"
                required
              />
            </div>

          </div>

          {/* Bouton de sauvegarde */}
          {isEditing && (
            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all"
              >
                Enregistrer les modifications
              </button>
            </div>
          )}
        </form>
      </div>

      {/* 4. ZONE DE SÉCURITÉ M-PESA */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">
          Sécurité du compte M-Pesa
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-2xl gap-4 border border-slate-100">
          <div>
            <p className="text-sm font-bold text-slate-800">Code PIN M-Pesa</p>
            <p className="text-xs text-slate-500 mt-1">Modifiez votre code secret à 4 chiffres pour sécuriser vos transactions Daily.</p>
          </div>
          <button 
            onClick={() => alert("Demande de changement envoyée...")}
            className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors self-end sm:self-center"
          >
            Changer le PIN
          </button>
        </div>
      </div>

    </div>
  );
}