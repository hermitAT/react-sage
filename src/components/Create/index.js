import React from "react";

import "./index.scss";

export default function Create(props) {
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
            />
          </div>
          <div className="recipe__form--header_inputs">
            <h4>Image URL:</h4>
            <input
              className="recipe__form--text"
              type="text"
              name="image_url"
              placeholder="http://..."
            />
          </div>
        </div>

        <h4>Summary:</h4>
        <textarea
          className="recipe__form--paragraph"
          name="summary"
          placeholder="Write something..."
        ></textarea>

        <div className="selectors">
          <div class="recipe__form--radio">
            <h4>Select Flavour:</h4>
            <div class="recipe__form--radio-container">
              <input id="sweet" name="flavour" type="radio" value="1" />
              <label for="sweet">Sweet</label>
              <input id="sour" name="flavour" type="radio" value="2" />
              <label for="sour">Sour</label>
              <input id="salty" name="flavour" type="radio" value="3" />
              <label for="salty">Salty</label>
              <input id="spicy" name="flavour" type="radio" value="4" />
              <label for="spicy">Spicy</label>
              <input id="bitter" name="flavour" type="radio" value="5" />
              <label for="bitter">Bitter</label>
            </div>
          </div>
          <button type="submit">+ Add Ingredients ...</button>
        </div>

        <h4>Instructions...</h4>
        <textarea
          className="recipe__form--paragraph"
          name="instruction"
          placeholder="Write something..."
        ></textarea>
        <button type="submit">+ Add Another Step ...</button>
      </form>
    </main>
  );
};
