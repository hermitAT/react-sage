import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Confirm(props) {
  return (
    <main>
      <button type="button" onClick={props.back}>
        <FontAwesomeIcon icon="backward" size="lg" /> Cancel
      </button>
      <h4>Confirm?</h4>
    </main>
  );
};