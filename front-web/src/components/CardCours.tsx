import React from "react";

export type Cours = {
  id: number;
  titre: string;
  salle: string;
  professeur: string;
  horaire: string;
  type: string;
};

type CardCoursProps = {
  titre: string;
  cours: Cours | null;
};

const CardCours: React.FC<CardCoursProps> = ({ titre, cours }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{titre}</h2>
      {cours ? (
        <>
          <h3 className="text-md font-semibold">{cours.titre}</h3>
          <p className="text-sm text-gray-700">Salle : {cours.salle}</p>
          <p className="text-sm text-gray-700">Professeur : {cours.professeur}</p>
          <p className="text-sm text-gray-500 italic">Horaire : {cours.horaire}</p>
        </>
      ) : (
        <p className="text-gray-400 italic">Aucun cours</p>
      )}
    </div>
  );
};

export default CardCours;
