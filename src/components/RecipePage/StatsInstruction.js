import React from "react";

import { strengthWordize, likeness, TemporaryHelperForFlavourIDS } from 'helpers/recipeHelpers';


export default function StatsInstruction(props) {

  const { flavour_id, result_strength, instruction, rating, favorites } = props;
  
  const instructionSet = instruction.split(". ")

  return (
    <div id="instruct-strength-flavour" className="row-group">
      <div id="strength-flavour">
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container"><strong>Rating: {parseFloat(rating).toFixed(2)}</strong></mark>
          <mark id="result-strength" className="text-container"><strong>Favorited {favorites} times!</strong></mark>
        </div>
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container"><strong>Flavour: {TemporaryHelperForFlavourIDS(flavour_id)}</strong></mark>
          <mark id="result-strength" className="text-container"><strong>Strength: {result_strength / 10}% </strong></mark>
        </div>
        <div id="common-drink" className="text-container">
          <p><strong>Strength level: {strengthWordize(result_strength)}</strong></p>
          <p><strong>It's like drinking {likeness(result_strength)}!</strong></p>
        </div>
      </div>
      <div id="instruction" className="text-container">
        <h3>How can I make it?</h3>
        <ol>
          {instructionSet.map((el, index) => 
            (<li key={index} className="instruction__line">{el}</li>))}
        </ol>
      </div>
    </div>
  )
}
