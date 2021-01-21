import React from "react";

import Show from "./Show";
import Confirm from "./Confirm";
import IngredientForm from "./IngredientForm";
import useCreateForm from "hooks/useCreateForm";
import useVisualMode from "hooks/useVisualMode";

import "./index.scss";

export default function Create(props) {
  const SHOW = "SHOW";
  const ADD = "ADD";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(SHOW);

  const { state, onChangeValue } = useCreateForm();
  const {
    name,
    image_url,
    flavour_id,
    summary,
    instruction,
    ingredients,
  } = state;

  return (
    <main className="recipe__form">
      <h2>Create your recipe!</h2>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
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
            <input
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
          placeholder="Write something..."
          value={summary}
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
        {mode === SHOW && (
          <Show add={() => transition(ADD)} />
        )}
        {mode === ADD && (
          <IngredientForm back={back} confirm={() => transition(CONFIRM)} />
        )}
        {mode === CONFIRM && (
          <Confirm back={back} />
        )}
      </form>
    </main>
  );
}
