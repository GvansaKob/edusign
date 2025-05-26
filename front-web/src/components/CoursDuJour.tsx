import { coursData } from "../data/coursData";

export const getCoursSelonHeure = () => {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  const matinStart = 9 * 60 + 30;    
  const matinEnd = 12 * 60 + 30;     
  const apremStart = 13 * 60 + 30;   
  const apremEnd = 17 * 60;         

  const matin = coursData.find((c) => c.type === "matin") || null;
  const aprem = coursData.find((c) => c.type === "apresmidi") || null;

  if (totalMinutes >= matinStart && totalMinutes < matinEnd) {
    return {
      actuel: matin,
      suivant: aprem,
    };
  }

  if (totalMinutes >= apremStart && totalMinutes < apremEnd) {
    return {
      actuel: aprem,
      suivant: null,
    };
  }

  return {
    actuel: null,
    suivant: matin,
  };
};
