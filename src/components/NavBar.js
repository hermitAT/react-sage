import React from "react";

import "./NavBar.scss";

import logo from "./logo.svg";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <h1 className="navbar__title">
          CocktailSage
        </h1>
      </div>
    </nav>
  );
};