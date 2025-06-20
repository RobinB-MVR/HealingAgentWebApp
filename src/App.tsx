import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import AddTechnology from './pages/AddTechnology';
import TechnologyList from './pages/TechnologyList';
import DetailsPage from './pages/DetailsPage';
import EditTechnology from './pages/EditTechnology';
import Contribute from './components/Contribute';
import NotContribute from './pages/NotContribute';
import Discover from './pages/Discover';
import Create from './pages/Create';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [tabTitle, setTabTitle] = useState(() => {
    return localStorage.getItem('tabTitle') || 'Welcome to TechTrove';
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  const titles = [
    'TechTrove - Innovate Today',
    'Explore New Technologies',
    'Welcome to TechTrove',
    'Future of Innovation',
    'TechTrove - Your Tech Hub'
  ];

  useEffect(() => {
    document.title = tabTitle;
    localStorage.setItem('tabTitle', tabTitle);
  }, [tabTitle]);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('tabTitle');
    setTabTitle('Welcome to TechTrove'); // Reset tab title immediately on logout
  };

  const changeTabTitle = () => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTabTitle(randomTitle);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Home changeTabTitle={changeTabTitle} /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/home">
              {isAuthenticated ? <Home changeTabTitle={changeTabTitle} /> : <Redirect to="/" />}
            </Route>
            <Route path="/technology-list">
              {isAuthenticated ? <TechnologyList /> : <Redirect to="/" />}
            </Route>
            <Route path="/details">
              {isAuthenticated ? <DetailsPage /> : <Redirect to="/" />}
            </Route>
            <Route path="/add-technology">
              {isAuthenticated ? <AddTechnology /> : <Redirect to="/" />}
            </Route>
            <Route path="/edit-technology">
              {isAuthenticated ? <EditTechnology /> : <Redirect to="/" />}
            </Route>
            <Route path="/contribute">
              {isAuthenticated ? <Contribute /> : <Redirect to="/" />}
            </Route>
            <Route path="/not-contribute">
              {isAuthenticated ? <NotContribute /> : <Redirect to="/" />}
            </Route>
            <Route path="/discover">
              {isAuthenticated ? <Discover /> : <Redirect to="/" />}
            </Route>
            <Route path="/create">
              {isAuthenticated ? <Create /> : <Redirect to="/" />}
            </Route>
            <Route>
              {isAuthenticated ? <NotFound /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;