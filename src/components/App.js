import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';

import './App.scss';

import NavBar from './NavBar';
import Button from './Button';


export default function App() {
  const [user, setUser] = useState({
    name: '@hermitAT',
    avatar: "https://icon-library.com/images/avatars-icon/avatars-icon-16.jpg"
  });

  const onLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <main className="layout">
        <NavBar user={user} onLogout={onLogout} /> 
        <Button>confirm</Button>       
        <Switch>
          <Route path="/">
          </Route>
        </Switch>
      </main>
    </Router>


  );
}
