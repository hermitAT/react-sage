import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./index.scss";

export default function Empty(props) {

  
  return (
    <main>
        <div>
          <h4>...</h4>
          <h4>Oh, looks like you don't have any ingredients!</h4>
          <h4>Hit that button below to get started!</h4>
        </div>
      <button type="button" onClick={props.onAdd}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </button>
    </main>
  );
};