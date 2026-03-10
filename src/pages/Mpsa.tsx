import { useState } from "react";
// import { CreditCard, Smartphone, TrendingUp, Zap } from "lucide-react";
import {Link} from "react-router-dom";
import Beneficiaires from "./Beneficiaires";


export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black mb-2">MPSA</h1>
        <p className="text-gray-600">Faites vos transactions en toute sécurité et fiabilité.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Solde du compte */}
        <div className=" bg-red-600 hover:bg-green-600 text-red-600 cursor-pointer duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow" onClick={openPopup}>
          <div className="flex items-center ">
            <img src="/mobile mpsa.png" alt="" className="w-20 h-20  ml-12 mt-4"/>
          </div>
          <p className="font-semibold text-white  ml-1 mt-7">Transférer de l'argent</p>
        </div>

        {/* Données mobiles */}

        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/network.png" alt="" className="w-20 h-20   ml-12 mt-4"/>
            </Link>
          </div>
          <p className="font-semibold text-white   ml-8 mt-7">Internet Mobile</p>
        </div>

        {/* Appels */}
        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/tel blanc.png" alt="" className="w-20 h-20   ml-12 mt-4"/>
            </Link>
          </div>
          <p className="font-semibold text-white   ml-5 mt-7">Appel Tout Réseau</p>
        </div>

        {/* Actions rapides */}
        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/carte_transactions-removebg-preview.png" alt="" className="w-25 h-28   ml-10 "/>
            </Link>
          </div>
          <p className="font-semibold text-white   ml-6 mt-2">Mes transactions</p>
        </div>

      </div>

    {/* Welcome Section */}
      <div className="mb-8 mt-6">
        <h1 className="text-2xl font-bold text-black mb-2">Mes préferences</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className=" bg-red-600 hover:bg-green-600 text-red-600 cursor-pointer duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow" onClick={openPopup}>
          <div className="flex items-center ">
            <img src="/mobile mpsa.png" alt="" className="w-20 h-20  ml-12 mt-4"/>
          </div>
          <p className="font-semibold text-white ml-2 mt-7">Transférer de l'argent</p>
        </div>

        {/* Données mobiles */}

        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/network.png" alt="" className="w-20 h-20   ml-14 mt-4"/>
            </Link>
          </div>
          <p className="font-semibold text-white  mt-2 ml-10 mt-7">Internet Mobile</p>
        </div>

        {/* Appels */}
        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/tel blanc.png" alt="" className="w-20 h-20   ml-14 mt-4"/>
            </Link>
          </div>
          <p className="font-semibold text-white  mt-2 ml-7 mt-7">Appel Tout Réseau</p>
        </div>

        {/* Actions rapides */}
        <div className=" bg-red-600 hover:bg-green-600 duration rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center ">
            <Link to="/paiement">
              <img src="/carte_transactions-removebg-preview.png" alt="" className="w-25 h-28   ml-12 "/>
            </Link>
          </div>
          <p className="font-semibold text-white  mt-2 ml-8 mt-5">Mes transactions</p>
        </div>

      </div>




      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white border-2 border-red-600 rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Transférer de l'argent</h2>
            <p className="text-gray-600 mb-4">Cliquer pour entrer aux  informations du bénéficiaire.</p>
            {/* Add beneficiary information here */}
            <Beneficiaires />
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
