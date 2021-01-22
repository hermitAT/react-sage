import React from "react";
import "./UserPage.scss";
import Button from "components/Button"
const { timeAgo } = require("helpers/timeAgo")

export default function User(props) {

  const { name, user_avatar, created_at, recipes_id, favorites_id } = props;

  return (
    <div id="user-page">
      <div id="title-page" >
        <h2 class="text-container">Welcome back, {name}!</h2>
      </div>
      <div class="row-group">
        <div id="image-description">
          <img src={user_avatar} />
          <article class='text-container'>
            <p>joined CocktailSage {timeAgo(created_at)}</p>
            <p>created {recipes_id.length} recipe{recipes_id.length > 1 ? 's' : ''}</p>
            <p>{favorites_id.length} recipes are favorite</p>
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
      </div>
    </div>
  );
}