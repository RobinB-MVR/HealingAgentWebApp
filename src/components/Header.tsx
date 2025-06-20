import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout, isDarkMode, setIsDarkMode }) => {
  const history = useHistory();
  const [randomWords] = useState({
    home: ['Welcome', 'Discover', 'Explore'],
    technologyList: ['Innovate', 'Create', 'Build'],
    addTechnology: ['Add', 'Submit', 'Contribute'],
  });
  const [expandedMenu, setExpandedMenu] = useState<keyof typeof randomWords | null>(null);
  const [menuVersion, setMenuVersion] = useState<'div' | 'select'>('div');
  const [isNavigationBarExpanded, setIsNavigationBarExpanded] = useState(false);

  useEffect(() => {
    // Removed random expansion on refresh
  }, []);

  const handleLogout = () => {
    onLogout();
    history.push('/');
    setIsNavigationBarExpanded(false); // Minimize the navigation bar on logout
    setExpandedMenu(null); // Reset the expanded menu
    setMenuVersion('div'); // Reset dropdown menu to <div> style
  };

  const handleMenuClick = (menu: keyof typeof randomWords, link: string) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
      setIsNavigationBarExpanded(false); // Minimize the navigation bar
    } else {
      setExpandedMenu(menu);
      setIsNavigationBarExpanded(true); // Expand the navigation bar
    }
  };

  const randomContributeLink = () => {
    return Math.random() < 0.5 ? '/contribute' : '/not-contribute';
  };

  const toggleMenuVersion = () => {
    setMenuVersion((prevVersion) => (prevVersion === 'div' ? 'select' : 'div'));
  };

  const toggleNavigationBar = () => {
    setIsNavigationBarExpanded((prev) => !prev);
    if (!isNavigationBarExpanded) {
      setExpandedMenu('home'); // Default to expanding 'Home' when expanding the navigation bar
    } else {
      setExpandedMenu(null); // Collapse all menus when minimizing
    }
  };

  const renderNavigationBar = () => {
    if (!isNavigationBarExpanded) {
      return (
        <ul className="flex justify-between text-base px-4">
          <li className="text-center">
            <button
              className="text-white hover:text-blue-500"
              onClick={() => {
                setExpandedMenu('home');
                setIsNavigationBarExpanded(true); // Ensure the navigation bar expands
              }}
            >
              Home
            </button>
          </li>
          <li className="text-center">
            <button
              className="text-white hover:text-blue-500"
              onClick={() => {
                setExpandedMenu('technologyList');
                setIsNavigationBarExpanded(true); // Ensure the navigation bar expands
              }}
            >
              Technology List
            </button>
          </li>
          <li className="text-center">
            <button
              className="text-white hover:text-blue-500"
              onClick={() => {
                setExpandedMenu('addTechnology');
                setIsNavigationBarExpanded(true); // Ensure the navigation bar expands
              }}
            >
              Add New Technology
            </button>
          </li>
        </ul>
      );
    }

    return (
      <ul className="flex justify-between text-base px-4">
        <li className="text-center">
          <button
            className="text-white hover:text-blue-500"
            onClick={() => handleMenuClick('home', '/')}
          >
            Home
          </button>
          {expandedMenu === 'home' && (
            menuVersion === 'div' ? (
              <div className="mt-1 mb-2">
                {randomWords.home.map((word, index) => (
                  <Link
                    key={index}
                    to={word === 'Discover' ? '/discover' : '/'}
                    className="block text-sm text-gray-300 hover:text-blue-500"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            ) : (
              <select
                className="mt-1 mb-2 block text-sm text-gray-300 bg-gray-800 border border-gray-600 rounded pl-2"
                style={{ position: 'relative', left: '265px' }}
                onChange={(e) => {
                  const selectedWord = e.target.value;
                  if (selectedWord === 'Discover') {
                    history.push('/discover');
                  } else {
                    history.push('/');
                  }
                }}
              >
                {randomWords.home.map((word, index) => (
                  <option key={index} value={word}>
                    {word}
                  </option>
                ))}
              </select>
            )
          )}
        </li>
        <li className="text-center">
          <button
            className="text-white hover:text-blue-500"
            onClick={() => handleMenuClick('technologyList', '/technology-list')}
          >
            Technology List
          </button>
          {expandedMenu === 'technologyList' && (
            menuVersion === 'div' ? (
              <div className="mt-1 mb-2">
                {randomWords.technologyList.map((word, index) => (
                  <Link
                    key={index}
                    to={word === 'Create' ? '/create' : '/technology-list'}
                    className="block text-sm text-gray-300 hover:text-blue-500"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            ) : (
              <select
                className="mt-1 mb-2 block text-sm text-gray-300 bg-gray-800 border border-gray-600 rounded pl-2"
                style={{ position: 'relative', left: '265px' }}
                onChange={(e) => {
                  const selectedWord = e.target.value;
                  if (selectedWord === 'Create') {
                    history.push('/create');
                  } else {
                    history.push('/technology-list');
                  }
                }}
              >
                {randomWords.technologyList.map((word, index) => (
                  <option key={index} value={word}>
                    {word}
                  </option>
                ))}
              </select>
            )
          )}
        </li>
        <li className="text-center">
          <button
            className="text-white hover:text-blue-500"
            onClick={() => handleMenuClick('addTechnology', '/add-technology')}
          >
            Add New Technology
          </button>
          {expandedMenu === 'addTechnology' && (
            menuVersion === 'div' ? (
              <div className="mt-1 mb-2">
                {randomWords.addTechnology.map((word, index) => (
                  <Link
                    key={index}
                    to={word === 'Contribute' ? randomContributeLink() : '/add-technology'}
                    className="block text-sm text-gray-300 hover:text-blue-500"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            ) : (
              <select
                className="mt-1 mb-2 block text-sm text-gray-300 bg-gray-800 border border-gray-600 rounded pl-2"
                style={{ position: 'relative', left: '265px' }}
                onChange={(e) => history.push(e.target.value)}
              >
                {randomWords.addTechnology.map((word, index) => (
                  <option
                    key={index}
                    value={word === 'Contribute' ? randomContributeLink() : '/add-technology'}
                  >
                    {word}
                  </option>
                ))}
              </select>
            )
          )}
        </li>
      </ul>
    );
  };

  return (
    <header className={`bg-[#b52274] text-white shadow py-4 h-56 transition-all duration-300 flex flex-col justify-center w-full`}>
      <div className="px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TechTrove</h1>
        <div className="flex items-center justify-between space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
              <button
                onClick={toggleMenuVersion}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Toggle Dropdown Version
              </button>
              <button
                onClick={toggleNavigationBar}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                {isNavigationBarExpanded ? 'Minimize Navigation Bar' : 'Expand Navigation Bar'}
              </button>
            </>
          ) : null}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            {isDarkMode ? 'Enable Color Mode' : 'Enable Dark Mode'}
          </button>
        </div>
      </div>
      <nav className="mt-4">
        {renderNavigationBar()}
      </nav>
    </header>
  );
};

export default Header;