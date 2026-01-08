import Beneficiaires from "../pages/Beneficiaires"

export default function CompteInter(){
    return(
      <div className="min-h-screen p-6">
        <div className="bg-white border-2 border-red-600 rounded-lg p-6 max-w-md w-full mx-4">
          <h2 className="text-xl font-bold mb-4">Transférer de l'argent</h2>
          <p className="text-gray-600 mb-4">Cliquer pour entrer aux informations du bénéficiaire.</p>
          {/* Add beneficiary information here */}
          <Beneficiaires />
        </div>
      </div>
    );
}
