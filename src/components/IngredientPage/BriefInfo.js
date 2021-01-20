import React from "react";
import classnames from "classnames";
import "./BriefInfo.scss"

export default function BriefInfo(props) {
   return (
    <section>
      <h2>What can it bring to your cocktail?</h2>
      <p><strong>Strength:</strong> {props.strength / 10}%</p>
      <p><strong>Flavour:</strong> {props.flavour}</p>
      <p><strong>Category:</strong> {props.category}</p>
    </section>
    );
}