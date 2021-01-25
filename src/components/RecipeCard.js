import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useVisualMode from "hooks/useVisualMode";
import { formatStrength, formatFlavour, formatRating } from 'helpers/recipeFormatters';
import IngredientList from "./IngredientsList";
import Button from "components/Button";

import './RecipeCard.scss';
import 'components/Create/index.scss';

export default function RecipeCard(props) {
  const [rating, setRating] = useState(props.recipe.rating || "");
  const [favorites, setFavorites] = useState(props.recipe.users_favourited.length || "")
  const [newRating, setNewRating] = useState("");

  const history = useHistory();

  const NORMAL = "NORMAL";
  const RATING = "RATING";
  const { mode, transition } = useVisualMode(NORMAL);

  const { recipe, ingredients, comments } = props.recipe;

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

  const handleClick = function(id) {
    history.push(`/recipes/${id}`);
  };

  const sendRating = function(user, recipe_id, newRating) {
    return axios.post(`/api/recipes/${recipe_id}/ratings`, { user_id: user, value: newRating })
      .then(all => {
        console.log(all.data.avg_rating);
        setRating(prev => all.data.avg_rating);
        transition(NORMAL);
      })
      .catch(e => console.error(e));
  }

  const sendFavourite = function(user, recipe_id) {
    return axios.post(`/api/recipes/${recipe_id}/favorites`, { user_id: user})
      .then(all => {
        console.log(all.data.num_of_favs);
        setFavorites(prev => all.data.num_of_favs);
      })
      .catch(e => console.error(e));
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
        <div className='recipe__card--details' onClick={() => sendFavourite(props.user.user.id, recipe.id)}>
          <FontAwesomeIcon icon='bookmark' size='lg' />
          <p>{favorites}</p>
        </div>
        <div className='recipe__card--details' onClick={() => transition(RATING)}>
          <FontAwesomeIcon icon={star(rating)} size='lg' />
          <p>{formatRating(rating)}</p>
        </div>
        <div className='recipe__card--details' onClick={() => handleClick(recipe.id)}>
          <FontAwesomeIcon icon='comments' size='lg' />
          <p>{comments.length}</p>
        </div>
        </div>
        )}
        {mode === RATING && (
          <div className="rating">
          <div class="recipe__form--radio rating__radio">
          <div
            class="recipe__form--radio-container"
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
              onClick={() => sendRating(props.user.id, recipe.id, newRating)}
              className="rating__submit"
            >Submit
            </Button>
        </div>
        )}
    </div>
  )
}