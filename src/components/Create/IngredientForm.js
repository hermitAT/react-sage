import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";

import "./index.scss";
import IngredientList from "./IngredientList";

export default function IngredientForm(props) {
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    return axios.get("/api")
      .then(all => {
        setIngredients(prev => all.data.ingredient_list);
      })
      .catch(e => console.error(e));
  }, [props])

  const validate = function () {
    if (ingredient === "") {
      setError("You must select an ingredient!");
      return;
    } else if (amount === "") {
      setError("You must input an amount!");
      return;
    }
    const id = ingredients.find(i => i.name === ingredient).id;

    setError("");
    props.onConfirm(id, ingredient, amount);
  };

  return (
    <main>
      <div class="recipe__form--radio">
        <div
          class="recipe__form--radio-container"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
      {category === "" && <div></div>}
      {category && (
        <IngredientList
          category={Number(category)}
          ingredients={ingredients}
          ingredient={ingredient}
          setIngredient={(e) => setIngredient(e.target.value)}
        />
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
        <Button onClick={props.onCancel}>
          <FontAwesomeIcon icon="backward" size="lg" /> Cancel
        </Button>
        <section>{error}</section>
        <Button onClick={() => validate()}>
          <FontAwesomeIcon icon="check-circle" size="lg" /> Confirm
        </Button>
      </div>
    </main>
  );
}
