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
        <div className="user__page-title" >
          <h2 className="text-container user__page-h2">Welcome back, {props.user.user.name}!</h2>
        </div>
        <div class="row-group">
          <div className="user__page-aside">
            <img src={props.user.user.user_avatar} />
            <article className='text-container user__page-aside-details'>
              <p>joined CocktailSage {timeAgo(props.user.user.created_at)}</p>
              <p>created {props.user.recipes_id.length} recipe{props.user.recipes_id.length > 1 ? 's' : ''}</p>
              <p>{props.user.favorites_id.length} recipe{props.user.favorites_id.length > 1 ? 's are' : ' is'} favorite</p>
            </article>
          </div>
          <div className="user__page-buttons">
            <Button
              confirm
              onClick={() => getUserRecipe(props.user.recipes_id)}>
              My recipes
            </Button>
            <Button
              confirm
              onClick={() => getUserRecipe(props.user.favorites_id)}>
              Favorite recipes
            </Button>   
          </div>
        </div>
        { recipes && (
          <RecipeList recipes={recipes} />
        )}
      </div>
       )}
    </>       
  );
}