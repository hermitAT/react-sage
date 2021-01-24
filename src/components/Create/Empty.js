import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";

import "./index.scss";

export default function Empty(props) {

  
  return (
    <section>
        <div className="recipe__form--ingredients">
          <h4>...</h4>
          <h4>Oh, looks like you don't have any ingredients!</h4>
        </div>
      <Button onClick={props.onAdd}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </Button>
    </section>
  );
};