import React from "react";
import classnames from "classnames";
import "./RecipePage.scss";

export default function RecipePage(props) {

  const {
    recipe,
    rating,
    ingredients,
    comments,
    users_favourited,
  } = props

  const {
    name,
    summary,
    instruction,
    image_url
  } = recipe

  const getNamesAndAmounts = function(ingredients) {
    let ing_names_amounts = [];
    for (const ingredient of ingredients) {
      for (const id in ingredient) {
        ing_names_amounts.push({ 
          name: Object.keys(ingredient[id])[0],
          amount: Object.values(ingredient[id])[0]
        })
      }
    }
    return ing_names_amounts;
  }




  return (
    <div id="recipe-page">

      <div id="name-edit-remix" className="row-group">
        <h1 class="text-container">{name}</h1>
        <div id="edit-remix">
          <button id="edit" class="text-container">Edit</button>
          <button id="remix" class="text-container">Remix</button>
        </div>
      </div>

      <div id="img-desc-ingred" className="row-group">
        <img src={image_url} alt={name}></img>
        <div id="description-ingredients">
          <div id="description" className="text-container m1rem-tb">
            <h3>What is it like?</h3>
            <p>{summary}</p>
          </div>
          <div id="ingredients" className="text-container m1rem-tb" >
            <h3>What is inside?</h3>
            <ul>{getNamesAndAmounts(ingredients).map((ingredient, index) => {
              return (
                <li key={index}>
                  <span>{ingredient.name}</span>
                  <span>{ingredient.amount}oz</span>
                </li>)
            })}
            </ul>
          </div>
        </div>
      </div>

      <div id="instruct-strength-flavour" className="row-group">
        <div id="strength-flavour">
          <div id="flavor-result-str">
            <mark id="flavour" className="text-container">Flavour: Sweet</mark>
            <mark id="result-strength" className="text-container">Result Strength: 18.5%</mark>
          </div>
          <div id="common-drink" className="text-container">
            <p>Strength level:</p>
            <p>It is like ...</p>
          </div>
        </div>
        <div id="instruction" className="text-container">
            <h3>How can I make it?</h3>
        </div>
      </div>

    </div>
  );
}