import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Show(props) {
  return (
    <main>
      <button type="button" onClick={props.add}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </button>
      <h4>placeholder</h4>
    </main>
  );
};