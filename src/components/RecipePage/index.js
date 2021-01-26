import React, { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, { SET_RECIPE_DATA } from "reducers/recipe";
import { useParams, useHistory } from "react-router-dom";

import { formatIngredients } from "helpers/recipeFormatters";
import NameAndControls from "./NameAndControls";
import ImgDescrIngr from "./ImgDescrIngr";
import StatsInstruction from "./StatsInstruction";
import CommentsFeed from "./CommentsFeed";

import "./RecipePage.scss";

export default function RecipePage(props) {
  const [state, dispatch] = useReducer(reducer, {
    recipe: "",
    rating: "",
    ingredients: "",
    comments: "",
    users_favourited: "",
    parent: "",
  });

  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    return axios
      .get(`/api/recipes/${id}`)
      .then((all) => {
        const recipe = all.data.recipe;
        dispatch({ type: SET_RECIPE_DATA, recipe });
      })
      .catch((e) => console.error(e));
  }, [id]);

  
  const { recipe, rating, ingredients, comments, users_favourited, parent } = state;
  
  const updateComments = function(comment) {
    const newComments = [comment, ...comments]
    const newState = { 
      ...state, comments: newComments 
    }
    console.log(newState)
    dispatch({ type: SET_RECIPE_DATA, recipe: [newState] });
  }

  return (
    <div id="recipe-page">
      {recipe && (
      <div>
        <NameAndControls
          name={recipe.name}
          onEdit={() => history.push("/recipes/edit", { recipe, ingredients: formatIngredients(ingredients) })}
          onFork={() => history.push("/recipes/edit", { recipe, ingredients: formatIngredients(ingredients), parent_id: recipe.id })}
        />

        <ImgDescrIngr
          name={recipe.name}
          image_url={recipe.image_url}
          summary={recipe.summary}
          ingredients={ingredients}
          parent={parent}
          parent_id={recipe.parent_id}
        />

        <StatsInstruction
          flavour_id={recipe.flavour_id}
          result_strength={recipe.result_strength}
          instruction={recipe.instruction}
          rating={rating}
          favorites={users_favourited.length}
        />
        {comments[0] && <CommentsFeed
          comments={comments}
          user={props.user}
          recipe_id={id}
          updateComments={updateComments}
        />}
      </div>
      )}
    </div>
  );
}
