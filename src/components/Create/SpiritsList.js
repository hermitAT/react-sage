import React from "react";

import "./index.scss";

export default function SpiritsList(props) {
  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        <input id="Brandy" name="ingredient" type="radio" value="Brandy" />
        <label for="Brandy">Brandy</label>
        <input id="Gin" name="ingredient" type="radio" value="Gin" />
        <label for="Gin">Gin</label>
        <input id="Light Rum" name="ingredient" type="radio" value="Light Rum" />
        <label for="Light Rum">Light Rum</label>
        <input id="Gold Rum" name="ingredient" type="radio" value="Gold Rum" />
        <label for="Gold Rum">Gold Rum</label>
        <input id="Spiced Rum" name="ingredient" type="radio" value="Spiced Rum" />
        <label for="Spiced Rum">Spiced Rum</label>
        <input id="Flavoured Rum" name="ingredient" type="radio" value="Flavoured Rum" />
        <label for="Flavoured Rum">Flavoured Rum</label>
        <input id="Tequila" name="ingredient" type="radio" value="Tequila" />
        <label for="Tequila">Tequila</label>
        <input id="Vodka" name="ingredient" type="radio" value="Vodka" />
        <label for="Vodka">Vodka</label>
        <input id="Whiskey" name="ingredient" type="radio" value="Whiskey" />
        <label for="Whiskey">Whiskey</label>
        <input id="Scotch" name="ingredient" type="radio" value="Scotch" />
        <label for="Scotch">Scotch</label>
        <input id="Bourbon" name="ingredient" type="radio" value="Bourbon" />
        <label for="Bourbon">Bourbon</label>
        <input id="Rye" name="ingredient" type="radio" value="Rye" />
        <label for="Rye">Rye</label>
      </div>
    </div>
  )
}