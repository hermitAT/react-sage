import React from "react";

import "./index.scss";

export default function IngredientList(props) {
  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        {props.ingredients && (
          props.ingredients.filter(i => i.category_id === props.category).map(item => (
            <>
              <input key={item.id} id={item.name} name="ingredient" type="radio" value={item.name} />
              <label for={item.name}>{item.name}</label>
            </>
          )))}
      </div>
    </div>
  )
}