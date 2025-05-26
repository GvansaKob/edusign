import React from 'react';
import Header from './components/Header';
import { getCoursSelonHeure } from './components/CoursDuJour';
import CardCours from './components/CardCours';
import AttendanceDashboard from './components/AttendanceDashboard'; // 👈 importe le composant

const App: React.FC = () => {
  const { actuel, suivant } = getCoursSelonHeure();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <aside className="w-[35%] p-4">
          <CardCours titre="Cours Actuel" cours={actuel} />
          <CardCours titre="Cours Suivant" cours={suivant} />
        </aside>

        <main className="w-[65%] p-4">
          <AttendanceDashboard /> {/* 👈 intégration ici */}
        </main>
      </div>
    </div>
  );
};

export default App;
