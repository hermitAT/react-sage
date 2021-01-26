import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useRatingFav from "hooks/useRatingFav";
import useVisualMode from "hooks/useVisualMode";
import { formatStrength, formatFlavour } from 'helpers/recipeFormatters';
import IngredientList from "./IngredientsList";
import Button from "components/Button";

import './RecipeCard.scss';
import 'components/Create/index.scss';

export default function RecipeCard(props) {
  const [ newRating, setNewRating ] = useState("");

  const { state, sendRating, sendFavorite, sendUnFavorite, updateInitial } = useRatingFav();

  const history = useHistory();

  const NORMAL = "NORMAL";
  const RATING = "RATING";
  const { mode, transition } = useVisualMode(NORMAL);

  const { recipe, ingredients, comments, users_favourited, rating } = props.recipe;
  const [favorited, setFavorited] = useState(users_favourited.includes(props.user && props.user.id) || '')

  useEffect(() => {
    updateInitial(rating, users_favourited.length);
    setFavorited(prev => users_favourited.includes(props.user && props.user.id) || '')
  }, [props]);

  const background = {
    backgroundImage: `url(${recipe.image_url})`
  };

  const handleClick = function(id) {
    history.push(`/recipes/${id}`);
  };

  const createRating = function(user_id, recipe_id, value) {
    sendRating(props.user.id, recipe.id, newRating)
      .then(() => transition(NORMAL))
      .catch(e => console.error(e));
  }

  const handleFavoriteClick = function(user_id, recipe_id) {
    favorited ? sendUnFavorite(user_id, recipe_id) : sendFavorite(user_id, recipe_id);
    setFavorited(prev => !favorited);
  }

  return (
    <div className='recipe__card'>
      <header>
        <div className='recipe__card--header' style={background} onClick={() => handleClick(recipe.id)} ></div>
        <div className='recipe__card--title'><h2 className='recipe__card--title-h2'>{recipe.name}</h2></div>
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
        {mode === NORMAL && (
      <div className='recipe__card--badges'>

        {(<div className='recipe__card--details' onClick={() => handleFavoriteClick(props.user.id, recipe.id)}>
          <FontAwesomeIcon icon={favorited ? 'bookmark': ['far', 'bookmark']} size='lg' />
          <p>{state.favorites}</p>
        </div>)}
        {/*!favorited && (<div className='recipe__card--details' onClick={() => clickFavorite(props.user.id, recipe.id)}>
          <FontAwesomeIcon icon={['far', 'bookmark']} size='lg' />
          <p>{state.favorites}</p>
        </div>)*/}

        <div className='recipe__card--details' onClick={() => transition(RATING)}>
          <FontAwesomeIcon icon="star-half-alt" size='lg' />
          <p>{parseFloat(state.avg_rating).toFixed(2)}</p>
        </div>
        <div className='recipe__card--details' onClick={() => handleClick(recipe.id)}>
          <FontAwesomeIcon icon='comments' size='lg' />
          <p>{comments.length}</p>
        </div>
        </div>
        )}
        {mode === RATING && (
          <div className="rating">
          <div class="recipe__card--radio">
          <div
            class="recipe__card--radio-container"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          >
            <input id="1" name="newRating" type="radio" value="1" />
            <label for="1">1</label>
            <input id="2" name="newRating" type="radio" value="2" />
            <label for="2">2</label>
            <input id="3" name="newRating" type="radio" value="3" />
            <label for="3">3</label>
            <input id="4" name="newRating" type="radio" value="4" />
            <label for="4">4</label>
            <input id="5" name="newRating" type="radio" value="5" />
            <label for="5">5</label>
          </div>
        </div>
            <Button
              onClick={() => createRating(props.user.id, recipe.id, newRating)}
              className="rating__submit"
            >Submit
            </Button>
        </div>
        )}
    </div>
  )
}