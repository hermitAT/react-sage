import React from "react";
import classnames from "classnames";
import "./RecipePage.scss";
import { func } from "prop-types";

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
    image_url,
    result_strength,
    flavour_id
  } = recipe

  const TemporaryHelperForFlavourIDS = function(flavour_id) {
    const flavours = [
      {
          "id": 1,
          "name": "Sweet"
      },
      {
          "id": 2,
          "name": "Sour"
      },
      {
          "id": 3,
          "name": "Salty"
      },
      {
          "id": 4,
          "name": "Spicy"
      },
      {
          "id": 5,
          "name": "Bitter"
      }
    ];
    for (const flavour of flavours) {
      if (flavour.id === flavour_id) return flavour.name
    }
  }

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

  const getInstruction = function(str) {
    //return str.replace(/\[\]/g,'');
    return str.slice(1, -1).replace(/"/g, '').split(', ');
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
            <mark id="flavour" className="text-container"><strong>Flavour:</strong> {TemporaryHelperForFlavourIDS(flavour_id)}</mark>
            <mark id="result-strength" className="text-container"><strong>Result Strength: </strong>{result_strength / 10}%</mark>
          </div>
          <div id="common-drink" className="text-container">
            <p><strong>Strength level: </strong>Mild</p>
            <p><strong>It is like: </strong>Red Wine</p>
          </div>
        </div>
        <div id="instruction" className="text-container">
            <h3>How can I make it?</h3>
            <ol>{getInstruction(instruction).map(line => {
              return (<li><p>{line}</p></li>)
            })}
            </ol>
        </div>
      </div>

    </div>
  );
}