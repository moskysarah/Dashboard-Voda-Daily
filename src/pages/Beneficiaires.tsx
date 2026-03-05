import { useState, useEffect } from 'react';
import contactsData from '../contact.json';
import {Link} from "react-router-dom";

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
    // Load contacts from imported JSON
    setContacts(contactsData.contacts);
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className="rounded-xl transition flex items-center">
      <div className="flex flex gap-4">
        <button
          className="border-1 border-red-600 w-48 h-10 rounded-lg  text-gray-500 py-2 px-2 hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        >
          Contact du bénéficiaire
        </button>
          <Link to="/compteinterne">
            <button className="border-1 border-green-400 w-45 h-10 rounded-lg  text-gray-500 py-2 px-2 hover:bg-green-400 hover:text-white cursor-pointer">
              Compte interne
            </button>
          </Link>
      </div>
     

      {isPopupOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg border-1 border-t border-gray-400  p-6 w-96 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Rechercher un contact</h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom ou numéro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="space-y-2">
              {filteredContacts.map((contact, index) => (
                <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                  <img
                    src={contact.avatarUrl}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
