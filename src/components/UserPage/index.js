import React from "react";
import "./UserPage.scss";
import Button from "components/Button";
import  { timeAgo } from "helpers/timeAgo";
import useUserData from "hooks/useUserData";
import RecipeList from "components/RecipeList";

export default function User(props) {

const { getUserRecipe, recipes } = useUserData();
 
  return (
    <>
    {props.user &&  (
      <div className="user__page">
        <div className="user__page-top">
          <img className="user__page-avatar" src={props.user.user.user_avatar} alt="user avatar" />
          <div class="user__page-controls">
            <div className="user__page-title">
              <h2 className="user__page-h2">Welcome back, {props.user.user.name}!</h2>
            </div>
            <div className="user__page-buttons">
              <Button
                confirm
                onClick={() => getUserRecipe(props.user.recipes_id)}>
                My Recipes
              </Button>
              <Button
                confirm
                onClick={() => getUserRecipe(props.user.favorites_id)}>
                My Favorite Recipes
              </Button>   
            </div>
          </div>
        </div>
        <div className="user__page-footer">
        <article className='user__page-details'>
          <p>Joined CocktailSage {timeAgo(props.user.user.created_at)}.</p>
          <p>Created {props.user.recipes_id.length} recipe{props.user.recipes_id.length > 1 ? 's' : ''}!</p>
          <p>{props.user.favorites_id.length} favourite recipe{props.user.favorites_id.length > 1 ? 's' : ''}!</p>
        </article>
        { recipes && (
          <RecipeList recipes={recipes} />
        )}
        </div>
      </div>
    )}
    </>       
  );
}