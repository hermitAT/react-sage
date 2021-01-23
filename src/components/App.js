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
import RecipePage from './RecipePage';

export default function App() {

  const { user } = useUserData();

  return (
    <Router>
      <main className="layout">
        <NavBar user={user} />
        <Switch>
          <Route path="/ingredients/:id">
            <IngredientPage />
          </Route>
          <Route path="/recipes/:id">
            <RecipePage user={user} />
          </Route>
          <Route path="/create">
            <Create user={user} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
