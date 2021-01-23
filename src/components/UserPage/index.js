import React from "react";
import "./UserPage.scss";
import Button from "components/Button"
import UserRecipeList from "./UserRecipeList"
const { timeAgo } = require("helpers/timeAgo")

export default function User(props) {

// const { name, user_avatar, created_at, recipes_id, favorites_id } = props;

  return (

    <div id="user-page">
      {props.user && props.userRecipe && (
      <>
      <div id="title-page" >
        <h2 class="text-container">Welcome back, {props.user.user.name}!</h2>
      </div>
      <div class="row-group">
        <div id="image-description">
          <img src={props.user.user.user_avatar} />
          <article class='text-container'>
            <p>joined CocktailSage {timeAgo(props.user.user.created_at)}</p>
            <p>created {props.user.recipes_id.length} recipe{props.user.recipes_id.length > 1 ? 's' : ''}</p>
            <p>{props.user.favorites_id.length} recipe{props.user.favorites_id.length > 1 ? 's are' : ' is'} favorite</p>
          </article>
        </div>
        <div id="recipe-favorite">
          <Button
            confirm
            onClick={console.log('MY')}>
            My recipes
          </Button>
          <Button
            confirm
            onClick={console.log('MY')}>
            Favorite recipes
          </Button>
        </div>
        <div>
        {/* <ul>
      {props.recipes.map((recipe,index) => (
       <UserRecipeList
          key={index}
          rating={recipe.rating} 
        />))}
      </ul>      */}
        </div>
      </div>
      </>
      )}
    </div>
      
  );
}