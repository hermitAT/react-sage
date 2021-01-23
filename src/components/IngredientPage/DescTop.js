import React from "react";
import { Link } from "react-router-dom";

import "./DescTop.scss";

export default function DescTop(props) {

  const recipe_list = props.top5.map(recipe => {
    const URL = `/recipes/${recipe.id}`;

    return (
      <mark>
        <Link to={URL}>{recipe.name}</Link>
        <p>{recipe.rating}</p>
      </mark>
    )
  })

  return (
    <div id="desc-top" class="row-group">
      <div id="description" class="text-container">
        <h2>What it is at all?</h2>
        <p>{props.description}</p>
      </div>
      <div id="top5">
      <section>
        <h4 className="text-container">Top-5 recipes with {props.name}</h4>
        <button >See more...</button>
      </section>
      {props.top5 && (
      <div id="top5-list" className="text-container">
        {recipe_list}
      </div>
      )}
    </div>
    </div>
  );
}