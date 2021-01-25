import React, { useState } from "react";
import axios from 'axios';
import RecipeCard from "components/RecipeCard";

import "./RecipeList.scss";

export default function RecipeList(props) {
    const [currentPage, setCurrentPage] = useState(props.pages.current_page || "");

    const getRecipes = function(arr) {
        axios.get('/api/recipes/fetch', { 'headers': { 'ids': arr } })
          .then(all => {
          setCurrentPage(prev => all.data.recipes)
        })
        .catch(e => console.error(e));
      }
    
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

    
    //const recipes = currentPage //|| props.pages.current_page
    const recipe_list = currentPage.map(recipe => {
        return (
            <li className="recipe__list-item">
                <RecipeCard user={props.user} recipe={recipe} flavours={flavours} />
            </li>
        );
    });
    return (
      <section>
        <ul className="recipe__list">
          {recipe_list}
        </ul>
        {props.pages['2'] && (<mark className="pagination__buttons">
          {Object.keys(props.pages).map(key => 
            (key !== "current_page") && 
            (<button className="pagination__buttons-single" key={Number(key)} onClick={() => getRecipes(props.pages[key])}>
              {key}
            </button>))}
        </mark>)}
        </section>
    );
}