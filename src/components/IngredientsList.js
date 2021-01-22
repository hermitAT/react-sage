import React from "react";
import { formatIngredients, formatAmount } from "helpers/recipeFormatters";

import "./RecipeCard.scss";

export default function IngredientsList(props) {

  const ingredient_list = formatIngredients(props.ingredients).map((i) => {
    return (
      <li>
        <div className='amount'>{formatAmount(i.amount)}</div>
        <div className='ingredient'>{i.name}</div>
      </li>
    )
  });

  return (
    <div>
      {ingredient_list}
    </div>
  )
}