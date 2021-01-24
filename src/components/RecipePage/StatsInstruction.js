import React from "react";

const { getInstruction, strengthWordize, likeness, TemporaryHelperForFlavourIDS } = require('helpers/recipeHelpers')


export default function StatsInstruction(props) {

  const { flavour_id, result_strength, instruction } = props;
  
  const instructionSet = instruction.split(". ")

  return (
    <div id="instruct-strength-flavour" className="row-group">
      <div id="strength-flavour">
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container"><strong>Flavour:</strong> {TemporaryHelperForFlavourIDS(flavour_id)}</mark>
          <mark id="result-strength" className="text-container"><strong>Result Strength: </strong>{result_strength / 10}%</mark>
        </div>
        <div id="common-drink" className="text-container">
          <p><strong>Strength level: </strong>{strengthWordize(result_strength)}</p>
          <p><strong>It's like drinking </strong>{likeness(result_strength)}!</p>
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
        /*{getInstruction(instruction).map(line => {
          return (<li><p>{line}</p></li>)
        })}*/