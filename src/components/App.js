import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom';

import './App.scss';

import NavBar from './NavBar';
import Home from './Home';
import useApplicationData from 'hooks/useApplicationData';

export default function App() {

  const { state } = useApplicationData();

  return (
    <Router>
      <main className="layout">
        <NavBar />
        <Switch>
          <Route path="/">
            <Home data={state} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
