import React from "react";
import ReactDOM from 'react-dom';

import RecipeList from "components/RecipeList";
import Button from "components/Button";
import { timeAgo } from "helpers/timeAgo";
import useUserRecipes from "hooks/useUserRecipes";
import useUserData from "hooks/useUserData";

import "./UserPage.scss";

export default function User(props) {
  
  const { user } = useUserData();
  const { state, getMyRecipes, getMyFavorites } = useUserRecipes();
 
  return (
    <>
    {state.user && user &&  (
      <div className="user__page">
        <div className="user__page-top">
          <img className="user__page-avatar" src={state.user.user.user_avatar} alt="user avatar" />
          <div class="user__page-controls">
            {user.user.id === state.user.user.id && (
              <div className="user__page-title">
                <h2 className="user__page-h2">Welcome back, {state.user.user.name}!</h2>
              </div>
            )}
            {user.user.id !== state.user.user.id && (
              <div className="user__page-title">
                <h2 className="user__page-h2">Welcome to {state.user.user.name}'s page!</h2>
              </div>
            )}
            <div className="user__page--content">
            <article className='user__page-details'>
              <p>Joined CocktailSage {timeAgo(state.user.created_at)}.</p>
              <p>Created {state.user.recipes_id.length} recipe{state.user.recipes_id.length > 1 ? 's' : ''}!</p>
              <p>{state.user.favorites_id.length} favourite recipe{state.user.favorites_id.length > 1 ? 's' : ''}!</p>
            </article>
            <div className="user__page-buttons">
              <Button className="user__page-button" onClick={() => getMyRecipes()}>
                My Recipes
              </Button>
              <Button className="user__page-button" onClick={() => getMyFavorites()}>
                My Favorite Recipes
              </Button>
              </div>
            </div>  
          </div>
        </div>
        {state.pages && (
          <RecipeList pages={state.pages} user={user.user} />
        )}
      </div>
    )}
    </>       
  );
}