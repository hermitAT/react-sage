import React from "react";
import useCreateForm from "hooks/useCreateForm";

import "./index.scss";

export default function Create(props) {

  const { state, onChangeValue } = useCreateForm();
  const { name, image_url, flavour_id, summary, instruction, ingredients } = state;

  return (
    <main className="recipe__form">
      <div className="recipe__form--header">
        <h2>Create your recipe!</h2>
        <button type="submit">+ Add Ingredients ...</button>
      </div>
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

        <div class="recipe__form--radio">
          <h4>Select Flavour:</h4>
          <div class="recipe__form--radio-container" value={flavour_id} onChange={onChangeValue}>
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

        <h4>Summary:</h4>
        <textarea
          className="recipe__form--paragraph"
          name="summary"
          placeholder="Write something..."
          value={summary}
          onChange={onChangeValue}
        ></textarea>
      
        <div class="recipe__form--radio">
          <h4>Instructions... how many steps are required?</h4>
          <div class="recipe__form--radio-container">
            <input id="one" name="steps" type="radio" value="1" />
            <label for="one">One</label>
            <input id="two" name="steps" type="radio" value="2" />
            <label for="two">Two</label>
            <input id="three" name="steps" type="radio" value="3" />
            <label for="three">Three</label>
            <input id="four" name="steps" type="radio" value="4" />
            <label for="four">Four</label>
            <input id="five" name="steps" type="radio" value="5" />
            <label for="five">Five</label>
          </div>
        </div>
        <textarea
          className="recipe__form--paragraph"
          name="instruction"
          placeholder="Write something..."
        ></textarea>
      </form>
    </main>
  );
}
