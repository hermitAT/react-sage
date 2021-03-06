import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

import Button from "components/Button";
import Show from "./Show";
import Empty from "./Empty";
import IngredientForm from "./IngredientForm";
import useCreateForm from "hooks/useCreateForm";
import useVisualMode from "hooks/useVisualMode";

import "./index.scss";

export default function Create(props) {
  let history = useHistory();

  const {
    state,
    onChangeValue,
    onIngredient,
    resetIngredients,
    createRecipe,
    removeIngredient
  } = useCreateForm();

  const {
    name,
    image_url,
    parent_id,
    flavour_id,
    summary,
    instruction,
    ingredients,
    ingredient_list,
  } = state;

  const SHOW = "SHOW";
  const ADD = "ADD";
  const EMPTY = "EMPTY";

  const { mode, transition, back } = useVisualMode(ingredients ? SHOW : EMPTY);

  const newIngredient = function (id, name, amount) {
    let recipe_ingredient = {
      id,
      name,
      amount
    };

    onIngredient(recipe_ingredient);
    transition(SHOW);
  };

  const reset = function () {
    resetIngredients();
    transition(EMPTY);
  };

  const lastRemove = function(ingredients, id) {
    ingredients.length === 1 ? transition(EMPTY) : transition(SHOW);

    removeIngredient(id)
  };

  const save = function () {
    const recipe = {
      name,
      image_url,
      parent_id,
      flavour_id,
      summary,
      user_id: props.user.id,
      instruction,
    };

    const ingredients_new = ingredients;

    createRecipe(recipe, ingredients_new)
      .then((data) => {
        history.replace(`/recipes/${data.recipe[0].recipe.id}`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <main className="recipe__form">
      <div className="recipe__form--header">
        <h2>Create your recipe!</h2>
        <Button type="button" onClick={() => save()}>
          <FontAwesomeIcon icon="save" size="lg" /> SAVE
        </Button>
      </div>
      <form autoComplete="off">
        <div className="recipe__form--header">
          <div className="recipe__form--header_inputs">
            <h4>Name of Recipe:</h4>
            <textarea
              className="recipe__form--text"
              type="text"
              name="name"
              placeholder="..."
              value={name}
              onChange={onChangeValue}
            />
          </div>
          <div className="recipe__form--header_inputs">
            <h4>Image URL:</h4>
            <textarea
              className="recipe__form--text"
              type="text"
              name="image_url"
              placeholder="http://..."
              value={image_url}
              onChange={onChangeValue}
            />
          </div>
        </div>

        <h4>Summary:</h4>
        <textarea
          className="recipe__form--paragraph"
          name="summary"
          maxlength="140"
          placeholder="Write something..."
          value={summary}
          onChange={onChangeValue}
        ></textarea>

        <h4>Instructions:</h4>
        <textarea
          className="recipe__form--paragraph"
          name="instruction"
          placeholder="Write something..."
          value={instruction}
          onChange={onChangeValue}
        ></textarea>

        <div class="recipe__form--radio">
          <h4>Select Flavour:</h4>
          <div
            class="recipe__form--radio-container"
            value={flavour_id}
            onChange={onChangeValue}
          >
            <input id="sweet" name="flavour_id" type="radio" value="1" />
            <label for="sweet">Sweet</label>
            <input id="sour" name="flavour_id" type="radio" value="2" />
            <label for="sour">Sour</label>
            <input id="salty" name="flavour_id" type="radio" value="3" />
            <label for="salty">Salty</label>
            <input id="spicy" name="flavour_id" type="radio" value="4" />
            <label for="spicy">Spicy</label>
            <input id="bitter" name="flavour_id" type="radio" value="5" />
            <label for="bitter">Bitter</label>
          </div>
        </div>

        <h4>Ingredients:</h4>
        {mode === EMPTY && <Empty onAdd={() => transition(ADD)} />}
        {mode === SHOW && (
          <Show
            ingredients={ingredients}
            onAdd={() => transition(ADD)}
            onReset={() => reset()}
            onRemove={lastRemove}
          />
        )}
        {mode === ADD && (
          <IngredientForm
            onCancel={() => back()}
            onConfirm={newIngredient}
          />
        )}
      </form>
    </main>
  );
}
