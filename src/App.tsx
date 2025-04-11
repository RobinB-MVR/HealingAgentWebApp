import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './components/Login';

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
            <Route path="/about">
              {isAuthenticated ? <About /> : <Redirect to="/" />}
            </Route>
            <Route path="/contact">
              {isAuthenticated ? <Contact /> : <Redirect to="/" />}
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