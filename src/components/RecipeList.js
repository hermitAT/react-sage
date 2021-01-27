import React, { useState, useEffect } from "react";
import axios from 'axios';
import RecipeCard from "components/RecipeCard";

import "./RecipeList.scss";

export default function RecipeList(props) {
  const [currentPage, setCurrentPage] = useState("");

  const getRecipes = function (arr) {
    return axios.get('/api/recipes/fetch', { 'headers': { 'ids': arr } })
      .then(all => {
        setCurrentPage(prev => all.data.recipes)
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    setCurrentPage(prev => props.pages.current_page);
  }, [props])

  const flavours = [
    {
      "id": 1,
      "name": "Sweet"
    },
    {
      "id": 2,
      "name": "Sour"
    },
    {
      "id": 3,
      "name": "Salty"
    },
    {
      "id": 4,
      "name": "Spicy"
    },
    {
      "id": 5,
      "name": "Bitter"
    }
  ];


  //const recipeList = function(current_page, state, setState) {
  //
  //  setState(prev => current_page);
  //  
  //  state.map(recipe => {
  //    return (
  //        <li className="recipe__list-item">
  //            <RecipeCard user={props.user} recipe={recipe} flavours={flavours} />
  //        </li>
  //    );
  //});}
  const pagesNum = Object.keys(props.pages).length - 1;
  const adjustMargin = `32px ${32 - (pagesNum - 11) * 4.3}px`
  const buttonStyle = { margin: ( pagesNum > 11) ? adjustMargin : `32px` }

  return (
    <section id="recipe_list">
      <ul className="recipe__list">
        {currentPage && currentPage.map(recipe => (
          <li className="recipe__list-item">
            <RecipeCard user={props.user} recipe={recipe} flavours={flavours} />
          </li>
        ))}
      </ul>
      {props.pages['2'] && (<mark className="pagination__buttons">
        {Object.keys(props.pages).map(key =>
          (key !== "current_page") &&
          (<button style={buttonStyle} className="pagination__buttons-single" key={Number(key)} onClick={() => getRecipes(props.pages[key])}>
            {key}
          </button>))}
      </mark>)}
    </section>
  );
}