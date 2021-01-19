import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';

import NavBar from './NavBar';

export default function App() {
  const [user, setUser] = useState({
    name: '@hermitAT',
    avatar: "https://image.flaticon.com/icons/png/512/188/188987.png"
  });

  const onLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <main className="layout">
        <NavBar user={user} onLogout={onLogout} />
      </main>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}
