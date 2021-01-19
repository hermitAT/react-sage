import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./User.scss";

export default function User(props) {
  return (
    <main className="user__card">
      <section className="user__card--info">
        <span className="user__card--name text--semi-bold">{props.user.name}</span>
        <img className="user__card--avatar" src={props.user.avatar} alt="User Avatar"/>
      </section>
      <section className="user__card--icon">
        <FontAwesomeIcon icon="thumbs-up" size="lg" />
        <FontAwesomeIcon icon="bookmark" size="lg" />
        <FontAwesomeIcon icon="user" size="lg" />
        <FontAwesomeIcon icon="sign-out-alt" size="lg" onClick={props.onLogout} />
      </section>
    </main>
  );
}