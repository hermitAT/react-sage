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
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const validate = function() {
    if (ingredient === "") {
      setError("You must select an ingredient!");
      return;
    } else if (amount === "") {
      setError("You must confirm an amount of that ingredient!");
      return;
    }
    setError("");
    props.onConfirm(ingredient, amount);
  }

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
      {ingredient && (
        <div className="recipe__form--amount">
          <h4>Amount in Ounces (oz):</h4>
          <textarea
            className="recipe__form--amount-text"
            type="text"
            name="amount"
            placeholder="ex. 0.75, 2.0, 2.5"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
      )}
    <div class="recipe__form--footer">
    <button type="button" onClick={props.onCancel}>
      <FontAwesomeIcon icon="backward" size="lg" /> Cancel
    </button>
    <button type="button" onClick={() => validate()}>
      <FontAwesomeIcon icon="check-circle" size="lg" /> Confirm
    </button>
    </div>
    <section>{error}</section>
    </main>
  );
}
