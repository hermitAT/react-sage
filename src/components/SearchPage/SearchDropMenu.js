import React from 'react';


export default function SearchDropMenu(props) {

  const { onClick, categories, chosenIngredients } = props;

  return (
    <div id="drop-menu" className="search__ingredient__menu" >
      {categories.map((category, index) => (
        <div key={index} className="category-element">
          {category.name}
          <div id="ingredients" className="search__ingredient__menu__section"  >{category.ingredients.map((ingredient, index) =>
            (!Object.keys(chosenIngredients).map(key => Number(key)).includes(ingredient.id)) && (
              <button key={index} className="ingredient-element" onClick={() =>
                onClick(ingredient.id, ingredient.name)}>{ingredient.name}</button>
            ))}</div>
        </div>))}

    </div>
  )
}
