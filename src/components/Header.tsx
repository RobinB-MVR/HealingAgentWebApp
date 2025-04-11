import React from 'react';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    onLogout();
    history.push('/');
  };

  return (
    <header className="bg-[#b52274] text-white shadow py-2">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechTrove</h1>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </div>
        {/* Adjusted the navigation bar to position Home on the left, Technology List in the center, and Add New Technology on the right */}
        <nav className="mt-4">
          <ul className="flex justify-between">
            <li><Link to="/" className="text-white hover:text-blue-500">Home</Link></li>
            <li><Link to="/technology-list" className="text-white hover:text-blue-500">Technology List</Link></li>
            <li><Link to="/add-technology" className="text-white hover:text-blue-500">Add New Technology</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;