import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SpiritsList from "./SpiritsList";
import LiqueursList from "./LiqueursList";
import MixersList from "./MixersList";
import GroceryList from "./GroceryList";

import "./index.scss";

export default function IngredientForm(props) {
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");


  return (
    <main>
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={category} onChange={e => setCategory(e.target.value)}>
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
      {category === "" && (
        <div></div>
      )}
      {category === "1" && (
        <SpiritsList ingredient={ingredient} setIngredient={e => setIngredient(e.target.value)}/>
      )}
      {category === "2" && (
        <LiqueursList ingredient={ingredient} setIngredient={e => setIngredient(e.target.value)} />
      )}
      {category === "3" && (
        <MixersList ingredient={ingredient} setIngredient={e => setIngredient(e.target.value)} />
      )}
      {category === "4" && (
        <GroceryList ingredient={ingredient} setIngredient={e => setIngredient(e.target.value)} />
      )}
    <div class="recipe__form--footer">
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
