import React from "react";


const TemporaryHelperForFlavourIDS = function(flavour_id) {
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
  for (const flavour of flavours) {
    if (flavour.id === flavour_id) return flavour.name
  }
}

const getInstruction = function(str) {
  //return str.replace(/\[\]/g,'');
  return str.slice(1, -1).replace(/"/g, '').split(', ');
}

const strengthWordize = function(strength) {
  const map = {
    "Weak": [0, 100],
    "Mild": [100, 200],
    "Medium": [200, 350],
    "Strong": [350, 500],
    "Very strong!": [500, 1000]
  };

  for (const type in map) {
    if (strength === 0) return "Non-alcohol";
    if ((strength > map[type][0]) && (strength <= map[type][1])) return type;
  }
  return 'Out of range!'
}

const likeness = function(strength) {
  const map = [
  ['Water', 0],
  ['Diluted beer', 10],
  ['Light beer', 45],
  ['Wine', 175],
  ['Vodka', 400],
  ['Pure alcohol', 1000]
  ];

  for (let i = 1; i < map.length; i++) {
    if (strength === 0) return 'Water';
    if ((strength > map[i-1][1]) && (strength <= map[i][1])) {
      const position = (strength - map[i-1][1]) / (map[i][1] - map[i-1][1])
      if (position < 0.5) return map[i-1][0];
      return map[i][0];
    }
  }

  //

}


export default function StatsInstruction(props) {

  const { flavour_id, result_strength, instruction } = props;

  return (
    <div id="instruct-strength-flavour" className="row-group">
      <div id="strength-flavour">
        <div id="flavor-result-str">
          <mark id="flavour" className="text-container"><strong>Flavour:</strong> {TemporaryHelperForFlavourIDS(flavour_id)}</mark>
          <mark id="result-strength" className="text-container"><strong>Result Strength: </strong>{result_strength / 10}%</mark>
        </div>
        <div id="common-drink" className="text-container">
          <p><strong>Strength level: </strong>{strengthWordize(result_strength)}</p>
          <p><strong>It is like: </strong>{likeness(result_strength)}</p>
        </div>
      </div>
      <div id="instruction" className="text-container">
        <h3>How can I make it?</h3>
        <ol>{getInstruction(instruction).map(line => {
          return (<li><p>{line}</p></li>)
        })}
        </ol>
      </div>
    </div>
  )
}