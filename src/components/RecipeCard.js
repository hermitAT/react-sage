import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatStrength, formatFlavour, formatRating } from 'helpers/recipeFormatters';
import IngredientList from "./IngredientsList";

import './RecipeCard.scss';

export default function RecipeCard(props) {

  const { recipe, ingredients, users_favourited, rating, comments } = props.recipe;

  const background = {
    backgroundImage: `url(${recipe.image_url})`
  };

  const star = function(rating) {
    let result = '';

    if (rating === '5.0') {
      result = 'star';
    } else {
      result = 'star-half-alt';
    }
    return result;
  };


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
          <IngredientList ingredients={ingredients} />
        </ul>
        <div className='recipe__card--summary'>
            <div>{recipe.summary}.</div>
        </div>
      </article>
      <div className='recipe__card--badges'>
        <div className='recipe__card--details'>
          <FontAwesomeIcon icon='bookmark' size='lg' />
          <p>{users_favourited.length}</p>
        </div>
        <div className='recipe__card--details'>
          <FontAwesomeIcon icon={star(rating)} size='lg' />
          <p>{formatRating(rating)}</p>
        </div>
        <div className='recipe__card--details'>
          <FontAwesomeIcon icon='comments' size='lg' />
          <p>{comments.length}</p>
        </div>
      </div>
    </div>
  )
}