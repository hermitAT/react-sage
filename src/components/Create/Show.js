import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IngredientList from "../IngredientsList";

import "./index.scss";

export default function Show(props) {

  return (
    <main>
      {props.ingredients && (
        <IngredientList ingredients={props.ingredients} />
      )}
      {!props.ingredients && (
        <div>
          <h4>...</h4>
          <h4>Oh, looks like you don't have any ingredients!</h4>
          <h4>Hit that button below to get started!</h4>
        </div>
      )}
      <button type="button" onClick={props.add}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </button>
    </main>
  );
};