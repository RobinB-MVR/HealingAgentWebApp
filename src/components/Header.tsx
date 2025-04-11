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
        <h1 className="text-2xl font-bold">TechTrove</h1>
        <nav className="mt-4 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-500">Contact</Link></li>
          </ul>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;