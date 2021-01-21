import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';

import './App.scss';

import useUserData from 'hooks/useUserData';
import IngredientPage from './IngredientPage';
import Create from './Create';
import NavBar from './NavBar';
import Home from './Home';

export default function App() {

  const { user } = useUserData();

  return (
    <Router>
      <main className="layout">
        <NavBar user={user} />
        <Switch>
          <Route path="/ingredient/">
            <IngredientPage>
              Hello there!
            </IngredientPage>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
