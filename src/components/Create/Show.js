import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatAmount } from "helpers/recipeFormatters";

import "./index.scss";


export default function Show(props) {

  const ingredient_list = props.ingredients.map((i) => {
      return (
        <li>
          <div className='amount'>{formatAmount(i.amount)}</div>
          <div className='ingredient'>{i.name}</div>
        </li>
      )
  });

  return (
    <div>
      <ul className="recipe__form--ingredients">
        {ingredient_list}
      </ul>
      <button type="button" onClick={props.onAdd}>
        <FontAwesomeIcon icon="plus" size="lg" /> Add Ingredient
      </button>
    </div>
  )
}