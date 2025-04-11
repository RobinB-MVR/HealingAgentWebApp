import React, { useState } from 'react';
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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/home">
              {isAuthenticated ? <Home /> : <Redirect to="/" />}
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