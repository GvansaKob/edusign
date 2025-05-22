import { coursData } from "../data/coursData";

export const getCoursSelonHeure = () => {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  const matin = coursData.find((c) => c.type === "matin") ?? null;
  const aprem = coursData.find((c) => c.type === "apresmidi") ?? null;

  const matinStart = 9 * 60 + 30;
  const matinEnd = 12 * 60 + 30;
  const apremStart = 13 * 60 + 30;
  const apremEnd = 17 * 60;

  if (totalMinutes >= matinStart && totalMinutes < matinEnd) {
    return {
      actuel: matin,
      suivant: aprem,
    };
  } else if (totalMinutes >= apremStart && totalMinutes < apremEnd) {
    return {
      actuel: aprem,
      suivant: null,
    };
  } else {
    return {
      actuel: null,
      suivant: matin,
    };
  }
};
