import React from "react";

import logo from "./logo.svg";
import User from "./User";

import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <h1 className="navbar__title">
          CocktailSage
        </h1>
      </div>
      <div className="navbar__login">
        <User user={props.user} />
      </div>
    </nav>
  );
};