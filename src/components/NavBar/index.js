import React from "react";

import useVisualMode from "hooks/useVisualMode";

import logo from "./logo.svg";
import Dropdown from "./Dropdown";
import User from "./User";
import NoUser from "./NoUser";

import "./index.scss";

export default function NavBar(props) {

  const LOGGED_IN = "LOGGED_IN";
  const NO_USER = "NO_USER";

  const { mode, transition } = useVisualMode(
    props.user? LOGGED_IN : NO_USER
  );

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <h1 className="navbar__title">
          CocktailSage
        </h1>
        <Dropdown />
        <button className="dropbtn">Search...</button>
        <button className="dropbtn">Create</button>
      </div>
      <div className="navbar__login">
        {mode === LOGGED_IN && (
          <User />
        )}
        {mode === NO_USER && (
          <NoUser />
        )}
        
      </div>
    </nav>
  );
};