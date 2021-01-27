import React from "react";
import { formatIngredients, formatAmount } from "helpers/recipeFormatters";

import "./RecipeCard.scss";

export default function IngredientsList(props) {

  const listStyle = `${(props.ingredients.length > 3) ? 'more-than-three' : ''}`

  const ingredient_list = formatIngredients(props.ingredients).map((i) => {
    return (
      <li className={listStyle}>
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