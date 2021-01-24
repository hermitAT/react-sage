import React from "react";
import { Link } from 'react-router-dom';

import logo from "./logo.svg";
import Button from "components/Button";
import Dropdown from "./Dropdown";
import User from "./User";

import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <h1 className="navbar__title">
          CocktailSage
        </h1>
        <Link to='/'>
          <img className="navbar__logo" src={logo} alt="Logo" />
        </Link>
        <Link to='/create'>
          <Button className="navbar-button">Create</Button>
        </Link>
        <Link to='/search'>
          <Button className="navbar-button">Search...</Button>
        </Link>
        <Dropdown />
      </div>
      <div className="navbar__login">
        {props.user && (
          <User user={props.user} />
        )}
      </div>
    </nav>
  );
};