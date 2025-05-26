import React, { useState, useEffect } from "react";
import ioClient from "socket.io-client";
import QRCodeDisplay from "./QRCodeDisplay";

interface Attendee {
  id: number;
  nom: string;
  prenom: string;
  statut: string; 
  signature?: string;
}

const socket = ioClient("http://localhost:3000");

export default function AttendanceDashboard() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [sessionId] = useState<string>("SESSION123");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    socket.emit("joinSession", sessionId);

    socket.on("newAttendee", (attendee: Attendee) => {
      setAttendees((prev) => {
        if (prev.find((a) => a.id === attendee.id)) return prev;
        return [...prev, attendee];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black-700">Liste des étudiants présents</h2>
        <button
          onClick={() => setShowQR((prev) => !prev)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
        >
          {showQR ? "Masquer le QR code" : "Afficher le QR code"}
        </button>
      </div>

      {showQR && <QRCodeDisplay sessionId={sessionId} />}

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-indigo-100 text-black-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Prénom</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Statut</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Signature</th>
            </tr>
          </thead>
          <tbody>
            {attendees.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Aucun étudiant présent
                </td>
              </tr>
            ) : (
              attendees.map((attendee) => (
                <tr
                  key={attendee.id}
                  className="hover:bg-indigo-50 transition border-t border-gray-100"
                >
                  <td className="px-6 py-3">{attendee.nom}</td>
                  <td className="px-6 py-3">{attendee.prenom}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        attendee.statut === "Présent"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {attendee.statut}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    {attendee.signature ? (
                      <img
                        src={attendee.signature}
                        alt="Signature"
                        className="h-10 object-contain"
                      />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
