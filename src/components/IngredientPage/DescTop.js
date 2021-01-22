import React from "react";
import "./DescTop.scss"

export default function DescTop(props) {
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
        {props.top5.map(recipe => (
          <mark>
            <a>{recipe.name}</a>
            <p>{recipe.rating}</p>
          </mark>
        ))}
      </div>
      )}
    </div>
    </div>
  );
}