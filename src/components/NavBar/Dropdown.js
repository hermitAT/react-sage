import React from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.scss';


export default function Dropdown(props) {
  return (
  <div className="dropdown">
    <button className="dropbtn">Browse by...</button>
      <div className="dropdown-content">
        <Link to='/'>Flavour</Link>
        <Link to='/'>Ingredients</Link>
        <Link to='/'>Strength</Link>
        <Link to='/'>Rating</Link>
      </div>
  </div>
  )
};