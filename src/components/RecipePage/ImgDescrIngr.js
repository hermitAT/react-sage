import React from "react";

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

export default function ImgDescrIngr(props) {
  const { name, image_url, summary, ingredients } = props
  return (
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
  )
}