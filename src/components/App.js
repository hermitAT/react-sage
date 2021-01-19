import { useState } from 'react';

import './App.scss';

import NavBar from './NavBar';

export default function App() {
  const [user, setUser] = useState({
    name: '@hermitAT',
    avatar: "https://image.flaticon.com/icons/png/512/188/188987.png"
  });

  return (
    <main className="layout">
      <NavBar user={user} />
    </main>
  );
}
