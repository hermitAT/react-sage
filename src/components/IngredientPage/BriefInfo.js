import React from "react";
import { formatFlavour, formatCategory } from "helpers/recipeFormatters";

import "./BriefInfo.scss"

export default function BriefInfo(props) {
   return (
    <div id="brief-info" class="text-container">
      <h2>What can it bring to your cocktail?</h2>
      <p><strong>Strength:</strong> {props.strength / 10}%</p>
      <p><strong>Flavour:</strong> {formatFlavour(props.flavour_id, props.flavours)}</p>
      <p><strong>Category:</strong> {formatCategory(props.category_id, props.categories)}</p>
    </div>
    );
}