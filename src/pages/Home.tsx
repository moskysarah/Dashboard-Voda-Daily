import { CreditCard, Smartphone, TrendingUp, Zap } from "lucide-react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen  p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-600">Gérez vos services Vodacom en toute simplicité.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Solde du compte */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border-t-2 border-l-2 border-blue-600 transition-shadow">
          <div className="flex items-center mb-4">
            <Link to="/paiement">
               <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">Solde du compte</h3>
            </Link>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-2">150.00 €</p>
          <p className="text-sm text-gray-500">Dernière mise à jour: Aujourd'hui</p>
        </div>

        {/* Données mobiles */}
        <div className="bg-white rounded-xl border-t-2 border-l-2 border-green-600 shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Smartphone className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Données mobiles</h3>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-2">2.5 GB</p>
          <p className="text-sm text-gray-500">Restant sur 5 GB</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Appels */}
        <div className="bg-white rounded-xl border-t-2 border-l-2 border-purple-600 shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Appels</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 mb-2">120 min</p>
          <p className="text-sm text-gray-500">Ce mois-ci</p>
        </div>

        {/* Actions rapides */}
        <div className="bg-white rounded-xl  border-t-2 border-l-2 border-red-600 shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Actions rapides</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
              Recharger
            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
              Voir offres
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-8 bg-white rounded-xl border-t-2 border-l-2 border-blue-600 shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Dernières activités</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Recharge de 20€ effectuée</span>
            </div>
            <span className="text-sm text-gray-500">Il y a 2h</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Forfait 5GB activé</span>
            </div>
            <span className="text-sm text-gray-500">Hier</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Paiement facture</span>
            </div>
            <span className="text-sm text-gray-500">3 jours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
