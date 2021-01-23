import React from "react";
const { getNamesAndAmounts } = require('helpers/recipeHelpers');

export default function ImgDescrIngr(props) {
  const { name, image_url, summary, ingredients } = props
  return (
    <div id="img-desc-ingred" className="row-group">
      <img id="img" src={image_url} alt={name}></img>
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
  )
}