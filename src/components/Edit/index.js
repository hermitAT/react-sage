import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import axios from "axios";
import reducer, {
  EDIT_TEXT_FIELD,
  ADD_INGREDIENT,
  RESET_INGREDIENTS,
  SET_INGREDIENT_LIST
} from "reducers/edit";

import Show from "./Show";
import Empty from "./Empty";
import IngredientForm from "./IngredientForm";
import useVisualMode from "hooks/useVisualMode";

import "./index.scss";

export default function Edit(props) {
  const [state, dispatch] = useReducer(reducer, {
    name: (props.recipe.name || ""),
    image_url: (props.recipe.image_url || ""),
    parent_id: (props.parent_id || ""),
    flavour_id: (String(props.recipe.flavour_id) || ""),
    summary: (props.recipe.summary || ""),
    instruction: (props.recipe.instruction || ""),
    ingredients: (props.ingredients || ""),
    ingredient_list: "",
  });

  useEffect(() => {
    return axios.get("/api")
      .then(all => {
        dispatch({ type: SET_INGREDIENT_LIST, ingredient_list: all.data.ingredient_list});
      })
      .catch(e => console.error(e));
  }, []);


  const onChangeValue = (e) => {
    dispatch({ type: EDIT_TEXT_FIELD, field: e.target.name, value: e.target.value })
  };

  const onIngredient = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT, ingredient: ingredient });
  };

  const resetIngredients = () => {
    dispatch({ type: RESET_INGREDIENTS });
  };

  const recipeForked = (recipe_fields, ingredients) => {

    const recipe = {
      ...recipe_fields,
      instruction: recipe_fields.instruction.split(/[\s.!?]+/).map(i => i.trim())
    };

    return axios.post("/api/recipes", { recipe, ingredients })
      .then(all => {
        return all.data;
      })
      .catch(e => console.error(e));
  };

  const recipeEdited = (recipe_fields, ingredients) => {

    const recipe = {
      ...recipe_fields,
      instruction: recipe_fields.instruction.split(/[\s.!?]+/).map(i => i.trim())
    };

    return axios.put(`/api/recipes/${props.recipe.id}`, { recipe, ingredients })
      .then(all => {
        return all.data;
      })
      .catch(e => console.error(e));
  };

  // ~~~~~~~~~~~~~~~~~~~~~ ^^ state held within component so the form can be populated with props.. ~~~~~~~~~~ //

  let history = useHistory();

  const SHOW = "SHOW";
  const ADD = "ADD";
  const EMPTY = "EMPTY";

  const { mode, transition, back } = useVisualMode(EMPTY);

  const {
    name,
    image_url,
    parent_id,
    flavour_id,
    summary,
    instruction,
    ingredients,
    ingredient_list
  } = state;

  const newIngredient = function (ingredient, amount) {
    let recipe_ingredient = {};

    recipe_ingredient.name = ingredient;
    recipe_ingredient.amount = amount;
  
    onIngredient(recipe_ingredient);
    transition(SHOW);
  };


  const reset = function () {
    resetIngredients();
    transition(EMPTY);
  };

  const saveEdit = function () {
    const recipe = {
      name,
      image_url,
      parent_id,
      flavour_id,
      summary,
      user_id: props.user.id,
      instruction,
    };

    const ingredient_list = ingredients;

    recipeEdited(recipe, ingredient_list)
      .then(data => {
        history.replace(`/recipes/${data.recipe[0].recipe.id}`);
      })
      .catch(e => console.error(e));
  };

  const saveFork = function () {
    const recipe = {
      name,
      image_url,
      parent_id,
      flavour_id,
      summary,
      user_id: props.user.id,
      instruction,
    };

    const ingredient_list = ingredients;

    recipeForked(recipe, ingredient_list)
      .then(data => {
        history.replace(`/recipes/${data.recipe[0].recipe.id}`);
      })
      .catch(e => console.error(e));
  };

  // ~~~~~~~~~~~~~~~~~~~~~ ^^ EDIT functions, could be moved to helper file.. ~~~~~~~~~~ //

  return (
    <main className="recipe__form">
      <div className="recipe__form--header">
        {parent_id && (
        <>
          <h2>reMixed from {props.recipe.name}!</h2>
          <h2>How about giving it a new name...</h2>
          <button type="button" onClick={() => saveFork()}>
            <FontAwesomeIcon icon="save" size="lg" /> reMIX
          </button>
        </>
        )}
        {!parent_id && (
          <>
          <h2>Edit your recipe!</h2>
          <button type="button" onClick={() => saveEdit()}>
            <FontAwesomeIcon icon="save" size="lg" /> SAVE EDIT
          </button>
          </>
        )}
      </div>
      <form autoComplete="off">
        <div className="recipe__form--header">
          <div className="recipe__form--header_inputs">
            <h4>Name of Recipe:</h4>
            <textarea
              className="recipe__form--text"
              type="text"
              name="name"
              maxlength="20"
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
          />
        )}
        {mode === ADD && (
          <IngredientForm ingredient_list={ingredient_list} onCancel={() => back()} onConfirm={newIngredient} />
        )}
      </form>
    </main>
  );
}
