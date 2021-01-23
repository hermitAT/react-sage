import React, { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, { SET_RECIPE_DATA } from "reducers/recipe";
import { useParams } from "react-router-dom";

import useVisualMode from "hooks/useVisualMode";
import Edit from "components/Edit";

import NameAndControls from "./NameAndConrols";
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
  });

  let { id } = useParams();

  useEffect(() => {
    return axios.get(`/api/recipes/${id}`)
      .then(all => {
        const recipe = all.data.recipe;
        dispatch({ type: SET_RECIPE_DATA, recipe });
      })
      .catch((e) => console.error(e));
  }, [id]);

  const EDIT = "EDIT";
  const FORK = "FORK";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(SHOW);

  const { recipe, rating, ingredients, comments, users_favourited } = state;

  return (
    <div id="recipe-page">
      {recipe && mode === SHOW && (
        <div>
          <NameAndControls name={recipe.name} onEdit={() => transition(EDIT)} onFork={() => transition(FORK)} />

          <ImgDescrIngr
            name={recipe.name}
            image_url={recipe.image_url}
            summary={recipe.summary}
            ingredients={ingredients}
          />

          <StatsInstruction
            flavour_id={recipe.flavour_id}
            result_strength={recipe.result_strength}
            instruction={recipe.instruction}
          />

          {comments[0] && <CommentsFeed comments={comments} />}
        </div>
      )}
      {mode === EDIT && (
        <Edit recipe={recipe} ingredients={ingredients} />
      )}
      {mode === FORK && (
        <Edit recipe={recipe} ingredients={ingredients} parent_id={recipe.id} />
      )}
    </div>
  );
}
