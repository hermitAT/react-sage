import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';

import './App.scss';
import IngredientPage from './IngredientPage';
import Button from './IngredientPage';

import NavBar from './NavBar';

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
        <Switch>
          <Route path="/">
          </Route>
          <Route path="/ingredient/">
            <IngredientPage>
              Hello there!
            </IngredientPage>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
