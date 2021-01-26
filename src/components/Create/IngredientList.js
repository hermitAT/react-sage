import React, { useEffect, useState } from "react";

import "./index.scss";

export default function IngredientList(props) {
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    setIngredients(prev => props.ingredient_list)
  }, [props])

  
//  const ingredients = props.ingredient_list.filter(i => i.category_id === props.category).map(item => (
//      <>
//        <input key={item.id} id={item.name} name="ingredient" type="radio" value={item.name} />
//        <label for={item.name}>{item.name}</label>
//      </>
//    )
//  })

  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        {ingredients && (
          ingredients.filter(i => i.category_id === props.category).map(item => (
            <>
              <input key={item.id} id={item.name} name="ingredient" type="radio" value={item.name} />
              <label for={item.name}>{item.name}</label>
            </>
          )))}
      </div>
    </div>
  )
}