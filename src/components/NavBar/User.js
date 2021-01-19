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
      <section className="user__card--links">
        <FontAwesomeIcon className="user__card--icon" icon="thumbs-up" size="lg" />
        <FontAwesomeIcon className="user__card--icon" icon="bookmark" size="lg" />
        <FontAwesomeIcon className="user__card--icon" icon="user" size="lg" />
        <FontAwesomeIcon className="user__card--icon" icon="sign-out-alt" size="lg" onClick={props.onLogout} />
      </section>
    </main>
  );
}