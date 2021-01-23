import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./User.scss";

export default function User(props) {
  return (
    <main className="user__card">
      <section className="user__card--info">
        <Link to="/user"><img className="user__card--avatar" src={props.user.user.user_avatar} alt="User Avatar"/></Link>
        <span className="user__card--name text--semi-bold">{props.user.user.name}</span>
      </section>
      <FontAwesomeIcon className="user__card--icon" icon="sign-out-alt" size="2x" />
    </main>
  );
}