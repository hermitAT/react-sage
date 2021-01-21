import React from 'react';
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
import Home from './Home';

export default function App() {

  return (
    <Router>
      <main className="layout">
        <NavBar />
        <Switch>
          <Route path="/ingredient/">
            <IngredientPage>
              Hello there!
            </IngredientPage>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
