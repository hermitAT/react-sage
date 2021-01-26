import React from "react";
import { Link } from "react-router-dom";
const { getNamesAndAmounts } = require('helpers/recipeHelpers');

export default function ImgDescrIngr(props) {
  const { name, image_url, summary, ingredients, parent, parent_id } = props
  const URL = `/recipes/${parent_id}`;

  return (
    <div id="img-desc-ingred" className="row-group">
      <img id="img" src={image_url} alt={name}></img>
      <div id="description-ingredients">
        {parent_id && (
        <div id="description" className="text-container m1rem-tb">
          <h3>ReMixed from <Link to={URL}>{parent}</Link></h3>
        </div>
        )}
        <div id="description" className="text-container m1rem-tb">
          <h3>Describe it to me . . .</h3>
          <p>{summary}</p>
        </div>
        <div id="ingredients" className="text-container m1rem-tb" >
          <h3>So, what's in it?</h3>
          <ul>{getNamesAndAmounts(ingredients).map((ingredient, index) => {
            return (
              <li key={index} className="recipe__ingredient__line">
                <a href={`/ingredients/${ingredient.id}`}>{ingredient.name}</a>
                <span>{ingredient.amount}oz</span>
              </li>)
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}