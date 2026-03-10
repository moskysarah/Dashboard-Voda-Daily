import { CreditCard, Smartphone, TrendingUp, Zap, Activity, Wifi, Phone } from "lucide-react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimatedProgress(50);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-600">Gérez vos services Vodacom en toute simplicité.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Solde du compte */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl border-t-2 border-l-2 border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Link to="/paiement" className="flex items-center">
              <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">Solde du compte</h3>
            </Link>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">150.00 €</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Activity size={14} className="text-green-500" />
            Dernière mise à jour: Aujourd'hui
          </p>
        </div>

        {/* Données mobiles */}
        <div className="bg-white rounded-xl border-t-2 border-l-2 border-green-600 shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Smartphone className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Données mobiles</h3>
          </div>
          <p className="text-3xl font-bold text-green-600 mb-1">2.5 GB</p>
          <p className="text-sm text-gray-500 mb-3">Restant sur 5 GB</p>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out animate-progress"
              style={{ width: `${animatedProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-green-600 mt-1 font-medium">50% utilisé</p>
        </div>

        {/* Appels */}
        <div className="bg-white rounded-xl border-t-2 border-l-2 border-purple-600 shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Phone className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Appels</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600 mb-1">120 min</p>
          <p className="text-sm text-gray-500 mb-3">Ce mois-ci</p>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '40%' }}
            ></div>
          </div>
          <p className="text-xs text-purple-600 mt-1 font-medium">40% utilisé</p>
        </div>

        {/* SMS */}
        <div className="bg-white rounded-xl border-t-2 border-l-2 border-orange-500 shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Wifi className="w-8 h-8 text-orange-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">SMS</h3>
          </div>
          <p className="text-3xl font-bold text-orange-500 mb-1">85 SMS</p>
          <p className="text-sm text-gray-500 mb-3">Restant sur 100 SMS</p>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '15%' }}
            ></div>
          </div>
          <p className="text-xs text-orange-500 mt-1 font-medium">15% utilisé</p>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <Zap className="w-8 h-8 text-red-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">Actions rapides</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
            <CreditCard size={18} />
            Recharger
          </button>
          <Link to="/marketplace" className="block">
            <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium">
              Voir offres
            </button>
          </Link>
          <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
            <Smartphone size={18} />
            Mon forfait
          </button>
        </div>
      </div>

      {/* Additional Section - Dernières activités */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Dernières activités
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-green-50 px-3 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse-soft"></div>
              <span className="text-gray-700 font-medium">Recharge de 20€ effectuée</span>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Il y a 2h</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-blue-50 px-3 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Forfait 5GB activé</span>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Hier</span>
          </div>
          <div className="flex items-center justify-between py-3 hover:bg-purple-50 px-3 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Paiement facture</span>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">3 jours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
