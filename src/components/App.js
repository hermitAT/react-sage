import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';

import useUserData from 'hooks/useUserData';

import Create from './Create';
import NavBar from './NavBar';
import Home from './Home';
import Edit from './Edit';
import UserPage from './UserPage';
import RecipePage from './RecipePage';
import SearchPage from './SearchPage';
import IngredientPage from './IngredientPage';
import BrowsePage from './BrowsePage';

import './App.scss';

export default function App() {

const { user } = useUserData();

  return (
    
    <Router>
      <main className="layout">
        <NavBar user={user} />
        <Switch>
          <Route path="/ingredients/:id">
            <IngredientPage user={user} />
          </Route>
          <Route path="/recipes/edit">
            <Edit user={user} />
          </Route>
          <Route path="/recipes/:id">
            <RecipePage user={user} />
          </Route>
          <Route path="/users/:id">
            <UserPage user={user} />
          </Route>
          <Route path="/create">
            <Create user={user} />
          </Route>
          <Route path="/search">
            <SearchPage user={user} />
          </Route>
          <Route path="/browse/:cat/:val">
            <BrowsePage user={user} />
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
