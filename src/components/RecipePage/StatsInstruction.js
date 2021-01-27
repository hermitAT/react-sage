import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatStrengthLink } from "helpers/recipeFormatters";
import { strengthWordize, likeness, TemporaryHelperForFlavourIDS } from 'helpers/recipeHelpers';


export default function StatsInstruction(props) {

  const { flavour_id, result_strength, instruction, rating, users_rated, favorites } = props;
  
  const instructionSet = instruction.split(". ");
  const strength_link = formatStrengthLink(result_strength);

  return (
    <div id="instruct-strength-flavour" className="row-group">
      <div id="strength-flavour">
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container"><strong>Rating: {!isNaN(parseFloat(rating).toFixed(2)) ? parseFloat(rating).toFixed(2) : 'Not rated!'} <FontAwesomeIcon icon="star-half-alt" size="sm"/> ({users_rated})</strong></mark> 
          <mark id="result-strength" className="text-container"><strong>Favorited {favorites} times!</strong></mark>
        </div>
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container">
            <Link to={`/browse/flavour/${flavour_id}`}><strong>Flavour: </strong>{TemporaryHelperForFlavourIDS(flavour_id)}</Link>
          </mark>
          <mark id="result-strength" className="text-container">
            <strong>Strength: {result_strength / 10}% </strong>
          </mark>
        </div>
        <div id="common-drink" className="text-container">
          <p><strong>Strength level: <Link to={`/browse/strength/${strength_link}`}>{strengthWordize(result_strength)}</Link></strong></p>
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
