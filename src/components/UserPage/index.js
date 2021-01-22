import { render } from "@testing-library/react";
import React from "react";
import "./UserPage.scss";
const { timeAgo } = require("helpers/timeAgo")

export default function User(props) {

  const { name, user_avatar, created_at, recipes_id, favorites_id } = props;

   return (
     <div id="user-page">
       <div id="title-page" class="text-container">
         <h2>Welcome back, {name}</h2>
       </div>
       <div class="row-group">
         <div id="image-description">
           <img src={user_avatar} />
           <article class='text-container'>
             joined CocktailSage : {timeAgo(created_at)}  <br/>
             recipes created : {recipes_id.length} <br/>
             recipe favorite : {favorites_id.length}  <br/>
           </article>
         </div>
         <div id="recipe-favorite">
           <h3 class="text-container">My recipe</h3>
           <h3 class="text-container">My favorite recipe</h3>
         </div>
       </div>
     </div>
  );
  }