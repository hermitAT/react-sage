import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatAmount } from "helpers/recipeFormatters";

import Button from "components/Button";

import "./index.scss";

export default function Show(props) {

  return (
    <div>
      <ul className="recipe__form--ingredients">
        {props.ingredients && props.ingredients.map((i) => (
        <li key={i.id} className="recipe__form--ingredients-single">
          <div className='amount'>{formatAmount(i.amount)}</div>
          <div className='ingredient'>{i.name}</div>
          <Button>Remove</Button>
        </li>
      ))}
      </ul>
      <div className="recipe__form--footer">
      <Button onClick={props.onAdd}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </Button>
      <Button onClick={props.onReset}>
        <FontAwesomeIcon icon="trash-alt" size="lg" /> Reset Ingredients
      </Button>
      </div>
    </div>
  )
}