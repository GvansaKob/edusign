import React from 'react';
import QRCodeDisplay from './QRCodeDisplay';

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  statut: 'Présent' | 'Absent';
  signature?: string;
}

interface PresenceTableProps {
  etudiants: Etudiant[];
  showQR: boolean;
  handleAfficherQRCode: () => void;
  sessionId: string;
}

const PresenceTable: React.FC<PresenceTableProps> = ({ etudiants, showQR, handleAfficherQRCode, sessionId }) => {
  return (
    <div className="w-2/3 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Liste des étudiants présents</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAfficherQRCode}
        >
          {showQR ? "Masquer le QR code" : "Afficher le QR code"}
        </button>
      </div>

      {showQR && <QRCodeDisplay sessionId={sessionId} />}

      <table className="w-full mt-6 table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nom</th>
            <th className="border border-gray-300 px-4 py-2">Prénom</th>
            <th className="border border-gray-300 px-4 py-2">Statut</th>
            <th className="border border-gray-300 px-4 py-2">Signature</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">
                Aucun étudiant présent
              </td>
            </tr>
          ) : (
            etudiants.map((e) => (
              <tr key={e.id}>
                <td className="border border-gray-300 px-4 py-2">{e.nom}</td>
                <td className="border border-gray-300 px-4 py-2">{e.prenom}</td>
                <td className="border border-gray-300 px-4 py-2">{e.statut}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {e.signature ? (
                    <img src={e.signature} alt="Signature" className="h-8" />
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PresenceTable;
