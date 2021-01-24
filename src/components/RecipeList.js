import React from "react";
import RecipeCard from "components/RecipeCard"

export default function RecipeList(props) {

    
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


    const recipe_list = props.recipes.map(recipe => {
        return (
            <li className="recipe__list-item">
                <RecipeCard recipe={recipe} flavours={flavours} />
            </li>
        );
    });

    return (
        <ul className="recipe__list">
          {recipe_list}
        </ul>
    );
}