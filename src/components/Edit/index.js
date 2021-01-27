import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import reducer, {
  EDIT_TEXT_FIELD,
  ADD_INGREDIENT,
  RESET_INGREDIENTS,
  SET_STATIC_DATA
} from "reducers/edit";

import Button from "components/Button";
import Show from "./Show";
import Empty from "./Empty";
import IngredientForm from "./IngredientForm";
import useVisualMode from "hooks/useVisualMode";

import "./index.scss";

export default function Edit(props) {

  let location = useLocation();

  const { parent_id, recipe, ingredients } = location.state;

  const recipe_name = parent_id ? recipe.name + " reMix" : `${recipe.name}`

  const [state, dispatch] = useReducer(reducer, {
    ingredient_list: "",
    name: (recipe_name || ""),
    image_url: (`${recipe.image_url}` || ""),
    parent_id: (parent_id || ""),
    flavour_id: (`${recipe.flavour_id}` || ""),
    summary: (`${recipe.summary}` || ""),
    instruction: (`${recipe.instruction}` || ""),
    ingredients_new: (ingredients || "")
  });

  const { ingredient_list, name, image_url, flavour_id, summary, instruction, ingredients_new } = state;

  useEffect(() => {
    return axios.get("/api")
      .then(all => {
        dispatch({ type: SET_STATIC_DATA, data: all.data});
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
      ...recipe_fields
    };

    return axios.post("/api/recipes", { recipe, ingredients })
      .then(all => {
        return all.data;
      })
      .catch(e => console.error(e));
  };

  const recipeEdited = (recipe_fields, ingredients) => {

    const recipe = {
      ...recipe_fields
    };

    return axios.put(`/api/recipes/${location.state.recipe.id}`, { recipe, ingredients })
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

  const { mode, transition, back } = useVisualMode(SHOW);

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

    recipeForked(recipe, ingredients_new)
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
          <h2>reMixed from {recipe.name}!</h2>
          <Button type="button" onClick={() => saveFork()}>
            <FontAwesomeIcon icon="save" size="lg" /> SAVE
          </Button>
        </>
        )}
        {!parent_id && (
          <>
          <h2>Edit your recipe!</h2>
          <Button type="button" onClick={() => saveEdit()}>
            <FontAwesomeIcon icon="save" size="lg" /> SAVE EDIT
          </Button>
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

        {flavour_id && (
        <div class="recipe__form--radio">
          <h4>Select Flavour:</h4>
          <div
            class="recipe__form--radio-container"
            value={flavour_id}
            onChange={onChangeValue}
          >
            <input checked={"1" === flavour_id} id="sweet" name="flavour_id" type="radio" value="1" />
            <label for="sweet">Sweet</label>
            <input checked={"2" === flavour_id} id="sour" name="flavour_id" type="radio" value="2" />
            <label for="sour">Sour</label>
            <input checked={"3" === flavour_id} id="salty" name="flavour_id" type="radio" value="3" />
            <label for="salty">Salty</label>
            <input checked={"4" === flavour_id} id="spicy" name="flavour_id" type="radio" value="4" />
            <label for="spicy">Spicy</label>
            <input checked={"5" === flavour_id} id="bitter" name="flavour_id" type="radio" value="5" />
            <label for="bitter">Bitter</label>
          </div>
        </div>
        )}

        <h4>Ingredients:</h4>
        {mode === SHOW && (
          <Show
            ingredients={ingredients_new}
            onAdd={() => transition(ADD)}
            onReset={() => reset()}
          />
        )}
        {mode === EMPTY && <Empty onAdd={() => transition(ADD)} />}
        {mode === ADD && (
          <IngredientForm ingredient_list={ingredient_list} onCancel={() => back()} onConfirm={newIngredient} />
        )}
      </form>
    </main>
  );
}
