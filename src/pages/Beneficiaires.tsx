import { useState, useEffect, useCallback } from 'react';
import contactsData from '../contact.json';
import { Link } from "react-router-dom";
import { X, Search, Phone } from "lucide-react";

interface Contact {
  name: string;
  phone: string;
  avatarUrl: string;
}

export default function Beneficiaires() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setContacts(contactsData.contacts);
  }, []);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  // Close popup with Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isPopupOpen) {
      setIsPopupOpen(false);
    }
  }, [isPopupOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Bénéficiaires</h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className="border-2 border-red-600 w-auto h-10 rounded-lg text-gray-600 px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer transition-colors duration-200 flex items-center gap-2"
            onClick={() => setIsPopupOpen(true)}
          >
            <Search size={18} />
            Contact du bénéficiaire
          </button>
          <Link to="/compteinterne">
            <button className="border-2 border-green-400 w-auto h-10 rounded-lg text-gray-600 px-4 py-2 hover:bg-green-400 hover:text-white cursor-pointer transition-colors duration-200 flex items-center gap-2">
              <Phone size={18} />
              Compte interne
            </button>
          </Link>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPopupOpen(false);
          }}
        >
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-96 max-h-[80vh] overflow-hidden flex flex-col animate-scaleIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Rechercher un contact</h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher par nom ou numéro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2 overflow-y-auto flex-1 max-h-60">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 hover:bg-red-50 cursor-pointer rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-600 font-medium">{contact.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-red-600 transition-colors">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="text-gray-400" size={24} />
                  </div>
                  <p className="text-gray-500">Aucun contact trouvé</p>
                  <p className="text-sm text-gray-400">Essayez avec un autre nom ou numéro</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
