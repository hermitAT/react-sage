import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import RecipeList from "components/RecipeList";
import Button from "components/Button";
import { timeAgo } from "helpers/timeAgo";

import "./UserPage.scss";

export default function User(props) {
  const [user, setUser] = useState("");
  const [pages, setPages] = useState("");

  let { id } = useParams();

  useEffect(() => {
    Promise.all([
    axios.get(`/api/users/${id}`),
    axios.get(`/api/recipes/search?user_id=${id}`)
    ])
      .then((all) => {
        setUser(prev => all[0].data);
        setPages(prev => all[1].data.result.relevance);
        })
        .catch((e) => console.error(e));
    }, [id]);
 
  return (
    <>
    {user &&  (
      <div className="user__page">
        <div className="user__page-top">
          <img className="user__page-avatar" src={user.user.user_avatar} alt="user avatar" />
          <div class="user__page-controls">
            <div className="user__page-title">
              <h2 className="user__page-h2">Welcome back, {user.user.name}!</h2>
            </div>
            <div className="user__page-buttons">
              <Button className="user__page-button" onClick={console.log("hi")}>
                My Recipes
              </Button>
              <Button className="user__page-button" onClick={console.log("hi")}>
                My Favorite Recipes
              </Button>   
            </div>
          </div>
        </div>
        <div className="user__page-footer">
        <article className='user__page-details'>
          <p>Joined CocktailSage {timeAgo(user.user.created_at)}.</p>
          <p>Created {user.recipes_id.length} recipe{user.recipes_id.length > 1 ? 's' : ''}!</p>
          <p>{user.favorites_id.length} favourite recipe{user.favorites_id.length > 1 ? 's' : ''}!</p>
        </article>
        </div>
        {pages && (
          <RecipeList pages={pages} />
        )}
      </div>
    )}
    </>       
  );
}