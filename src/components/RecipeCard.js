import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatStrength, formatIngredients, formatAmount, formatFlavour } from 'helpers/recipeFormatters';

import './RecipeCard.scss';

export default function RecipeCard(props) {

  const { recipe, ingredients } = props.recipe;

  /*
  const ingreds = formatIngredients(ingredients);

  const ingredient_list = ingreds.map((i) => {
    return (
      <li>
        <div className='amount'>{formatAmount(i.amount)}</div>
        <div className='ingredient'>{i.name}</div>
      </li>
    )
  })
  */

  const background = {
    backgroundImage: `url(${recipe.image_url})`
  }


  return (
    <div className='recipe__card'>
      <header>
        <div className='recipe__card--header' style={background}></div>
        <div className='recipe__card--title'>{recipe.name}</div>
        <div className='recipe__card--tags'>
          <div class='recipe__card--strength'>{formatStrength(recipe.result_strength)}</div>
          <div class='recipe__card--flavour'>{formatFlavour(recipe.flavour_id, props.flavours)}</div>
        </div>
      </header>
      <article className='recipe__card--list'>
        <ul className='recipe__card--ingredients'>
        </ul>
        <div className='recipe__card--summary'>
            <div>{recipe.summary}</div>
        </div>
      </article>
      <div className='recipe__card--badges'>
        <FontAwesomeIcon icon='bookmark' size='lg' />
        <FontAwesomeIcon icon='star-half-alt' size='lg' />
        <FontAwesomeIcon icon='comments' size='lg'/>
      </div>
    </div>
  )
}