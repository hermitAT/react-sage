import React from "react";

import "./index.scss";

export default function GroceryList(props) {
  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        <input id="Milk" name="ingredient" type="radio" value="Milk" />
        <label for="Milk">Milk</label>
        <input id="Chocolate Sauce" name="ingredient" type="radio" value="Chocolate sauce" />
        <label for="Chocolate Sauce">Chocolate Sauce</label>
        <input id="Olives" name="ingredient" type="radio" value="Olives" />
        <label for="Olives">Olives</label>
        <input id="Grenadine" name="ingredient" type="radio" value="Grenadine" />
        <label for="Grenadine">Grenadine</label>
        <input id="Egg Whites" name="ingredient" type="radio" value="Egg whites" />
        <label for="Egg Whites">Egg Whites</label>
        <input id="Clamato Juice" name="ingredient" type="radio" value="Clamato juice" />
        <label for="Clamato Juice">Clamato Juice</label>
        <input id="Tomato Juice" name="ingredient" type="radio" value="Tomato juice" />
        <label for="Tomato Juice">Tomato Juice</label>
        <input id="Whipped Cream" name="ingredient" type="radio" value="Whipped cream" />
        <label for="Whipped Cream">Whipped Cream</label>
        <input id="Hot sauce" name="ingredient" type="radio" value="Hot sauce" />
        <label for="Hot sauce">Hot sauce</label>
        <input id="Worchestershire" name="ingredient" type="radio" value="Worchestershire sauce" />
        <label for="Worchestershire">Worchestershire</label>
        <input id="Bitters" name="ingredient" type="radio" value="Bitters" />
        <label for="Bitters">Bitters</label>
      </div>
    </div>
  )
}