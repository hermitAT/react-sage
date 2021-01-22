import React from "react";

import "./index.scss";

export default function MixersList(props) {
  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        <input id="Cola" name="ingredient" type="radio" value="Cola" />
        <label for="Cola">Cola</label>
        <input id="Soda Water" name="ingredient" type="radio" value="Soda water" />
        <label for="Soda Water">Soda Water</label>
        <input id="Tonic Water" name="ingredient" type="radio" value="Tonic water" />
        <label for="Tonic Water">Tonic Water</label>
        <input id="Ginger Ale" name="ingredient" type="radio" value="Ginger Ale" />
        <label for="Ginger Ale">Ginger Ale</label>
        <input id="Lemon Juice" name="ingredient" type="radio" value="Lemon juice" />
        <label for="Lemon Juice">Lemon Juice</label>
        <input id="Lime Juice" name="ingredient" type="radio" value="Lime juice" />
        <label for="Lime Juice">Lime Juice</label>
        <input id="Cranberry Juice" name="ingredient" type="radio" value="Cranberry juice" />
        <label for="Cranberry Juice">Cranberry Juice</label>
        <input id="Orange Juice" name="ingredient" type="radio" value="Orange juice" />
        <label for="Orange Juice">Orange Juice</label>
        <input id="Pineapple Juice" name="ingredient" type="radio" value="Pineapple juice" />
        <label for="Pineapple Juice">Pineapple Juice</label>
        <input id="Lemonade" name="ingredient" type="radio" value="Lemonade" />
        <label for="Lemonade">Lemonade</label>
        <input id="Sprite/7UP" name="ingredient" type="radio" value="Sprite/7UP" />
        <label for="Sprite/7UP">Sprite/7UP</label>
        <input id="Ginger Beer" name="ingredient" type="radio" value="Ginger beer" />
        <label for="Ginger Beer">Ginger Beer</label>
        <input id="Grapfruit Juice" name="ingredient" type="radio" value="Grapfruit juice" />
        <label for="Grapfruit Juice">Grapfruit Juice</label>
      </div>
    </div>
  )
}