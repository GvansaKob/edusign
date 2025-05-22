import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-purple-700">MonLogo</div>

        
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">
            Emploi du temps
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">
            Cours
          </a>
        </nav>

        
        <a
          href="#"
          className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
