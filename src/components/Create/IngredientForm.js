import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function IngredientForm(props) {
  return (
    <main>
    <div class="recipe__form--radio">
      <h4>Select Category:</h4>
      <div class="recipe__form--radio-container">
        <input id="Spirits" name="category" type="radio" value="1" />
        <label for="Spirits">Spirits</label>
        <input id="Liqueurs" name="category" type="radio" value="2" />
        <label for="Liqueurs">Liqueurs</label>
        <input id="Mixers" name="category" type="radio" value="3" />
        <label for="Mixers">Mixers</label>
        <input id="Grocery" name="category" type="radio" value="4" />
        <label for="Grocery">Grocery</label>
      </div>
    </div>
    <div class="recipe__form--header">
    <button type="button" onClick={props.back}>
      <FontAwesomeIcon icon="backward" size="lg" /> Cancel
    </button>
    <button type="button" onClick={props.confirm}>
      <FontAwesomeIcon icon="check-circle" size="lg" /> Confirm
    </button>
    </div>
    </main>
  );
}
